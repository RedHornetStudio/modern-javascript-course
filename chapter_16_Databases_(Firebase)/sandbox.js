const ul = document.querySelector('ul');
const form = document.querySelector('form');
const btnUnsub = document.querySelector('button');

// delete recipe form the database
const deleteRecipe = id => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    });
};

//change recipe in the list
const changeRecipe = (data, id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id) {
            recipe.children[0].textContent = data.title;
            recipe.children[1].textContent = 'created: ' + formatDate(data.created_at.toDate());

        }
    });
}

// add recipes to the list
const formatDate = date => {
    let dayOfMonth = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    dayOfMonth = dayOfMonth.length === 1 ? '0' + dayOfMonth : dayOfMonth;
    month = month.length === 1 ? '0' + month : month;

    const formatedDate = `${dayOfMonth}.${month}.${year}`;

    return formatedDate;
}

const addRecipeToList = (recipe, id) => {
    const date = recipe.created_at.toDate();
    const formatedDate = formatDate(date);
    const html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>created: ${formatedDate}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    ul.innerHTML += html;
};

const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            addRecipeToList(change.doc.data(), change.doc.id);
        }
        if(change.type === 'modified') {
            changeRecipe(change.doc.data(), change.doc.id);
        }
        if(change.type === 'removed') {
            deleteRecipe(change.doc.id);
        }
    });
});

// add new recipe to the list and database
form.addEventListener('submit', e => {
    e.preventDefault()

    const recipe = {
        author: "me",
        title: e.target.recipe.value,
        // created_at: firebase.firestore.FieldValue.serverTimestamp()
        created_at: firebase.firestore.Timestamp.fromDate(new Date())
    };

    db.collection('recipes').add(recipe).then(docRef => {
        console.log('recipe added:', docRef.id);
    }).catch(err => {
        console.log(err);
    });
});

// deleting recipe from list
ul.addEventListener('click', e => {
    if(e.target.classList.contains('btn-danger')) {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe removed:', e.target.parentElement.getAttribute('data-id'));
        }).catch(err => {
            console.log(err);
        });
    }
});

btnUnsub.addEventListener('click', () => {
    unsub();
});