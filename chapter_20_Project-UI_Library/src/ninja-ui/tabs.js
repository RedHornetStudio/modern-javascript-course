import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e) {
        // remove current active calsses
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // add new active class to clcked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes form content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add new active class to content
        this.container.querySelector(e.target.getAttribute('data-target')).classList.add('active');
    }
}

export { Tabs as default };