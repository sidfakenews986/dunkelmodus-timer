const lightStylesheet = 'light.css';
const darkStylesheet = 'dark.css';
const statusDiv = document.getElementById('status');

let darkModeStartTime = '20:00'; // Standard Dunkelmodus Startzeit
let darkModeEndTime = '06:00'; // Standard Dunkelmodus Endzeit

function checkTimeAndSetTheme() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentTimeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    if (isInDarkMode(currentTimeString)) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function isInDarkMode(currentTimeString) {
    return (currentTimeString >= darkModeStartTime || currentTimeString < darkModeEndTime);
}

function setDarkMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', darkStylesheet);
    statusDiv.innerText = 'Der Dunkelmodus ist aktiv.';
}

function setLightMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', lightStylesheet);
    statusDiv.innerText = 'Der Lichtmodus ist aktiv.';
}

document.getElementById('set-times').onclick = () => {
    darkModeStartTime = document.getElementById('start-time').value;
    darkModeEndTime = document.getElementById('end-time').value;
};

setInterval(checkTimeAndSetTheme, 60000); // Überprüfen jede Minute
checkTimeAndSetTheme();