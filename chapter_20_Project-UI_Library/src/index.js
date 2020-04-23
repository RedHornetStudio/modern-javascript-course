import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

// create tooltips for all elements
document.querySelectorAll('.tooltip').forEach(elem => {
    const tooltip = new Tooltip(elem);
    tooltip.init();
});

// create a dropdown for all elemnts
document.querySelectorAll('.dropdown').forEach(elem => {
    const dropdown = new Dropdown(elem);
    dropdown.init();
});

document.querySelectorAll('.tabs').forEach(elem => {
    const tabs = new Tabs(elem);
    tabs.init();
});

const snackbar = new Snackbar();
snackbar.init();
document.querySelector('.snackbar-trigger').addEventListener('click', () => {
    snackbar.show('I am a message :)');
});