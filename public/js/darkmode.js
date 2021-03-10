window.addEventListener('load', addDarkmodeWidget);
const options = {
    label: '🌓', // default: ''
}
function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
}