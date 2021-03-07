

function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
}

window.addEventListener('load', addDarkmodeWidget);

const options = {
    label: '🌓', // default: ''

}