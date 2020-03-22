// dom queries
const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const chatRooms = document.querySelector('.chat-rooms');
const updateMssg = document.querySelector('.update-mssg');

const name = localStorage.getItem('username') ? localStorage.getItem('username') : 'anon';

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', name);

// add new chat
newChat.addEventListener('submit', e => {
    e.preventDefault();
    const message = e.target.message.value.trim();
    e.target.reset();
    chatroom.addChat(message).then(docRef => {
        console.log("Document written with ID: ", docRef.id);
    }).catch(error => {
        console.error("Error adding document: ", error);
    });
});

// change name
newName.addEventListener('submit', e => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    e.target.reset();
    chatroom.updateName(name);
    updateMssg.textContent = `Your name was updated to ${name}`;
    setTimeout(() => {
        updateMssg.textContent = '';
    }, 3000);
});

// change room
chatRooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        const room = e.target.id;
        chatroom.updateRoom(room);
        chatUI.clearChats();
        chatroom.getChats(data => {
            chatUI.render(data);
        });
    }
});

// get chats and render
chatroom.getChats(data => {
    chatUI.render(data);
});