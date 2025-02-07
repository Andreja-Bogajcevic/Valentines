var counter = 0

var nicknames = [
    "Natalija",
    "Beb",
    "Mau",
    "Gospodjica Mau",
    "Sitni Smol",
    "Ljubav moga zivota",
    "Mali smota",
    "Gricko",
    "Mao",
    "BBB",
]

window.onload = function() {
    document.getElementById("my_audio").play();
}

document.getElementById("nickname").addEventListener('click', function(event){
    if (counter < nicknames.length - 1) {
        counter = counter + 1;
    }
    else {
        counter = 0;
    }

    document.getElementById("nickname").textContent= nicknames[counter];

    console.log(nicknames[counter])
});