let turnOn = document.getElementById('On')

function yes() {
    turnOn.play()
}

function no() {
    turnOn.pause()
}

document.addEventListener('mousedown', yes)
document.addEventListener('mouseup', no)
