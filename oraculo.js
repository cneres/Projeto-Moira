var audio = new Audio(" audio_5.mp3")

function clickIn() {
    document.getElementById("teste").style.color = "blue";
    audio.play();
}

function ClickLeave() {
    document.getElementById("teste").style.color = "green";
    audio.pause();
}

