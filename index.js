let arrow = document.getElementById('arrow');

let degrees = 0;
let intervalID = null;
let isRotating = false;
document.getElementById('start-btn').addEventListener(
    'click', () => {
        if(isRotating)
            return;

        intervalID = window.setInterval(rotate, 100);
        isRotating = true;

        let heading = document.getElementById('heading');
        heading.textContent = `Tasheem's Arrow`;
        heading.style = 'position: red';
    }
)

document.getElementById('stop-btn').addEventListener(
    'click', () => {
        clearInterval(intervalID);
        isRotating = false;
    }
)

function rotate() {
    degrees += 1;
    arrow.style.transform = `rotate(${degrees}deg)`;
}