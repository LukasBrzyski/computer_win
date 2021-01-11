const player = document.getElementById('player');

function explosion () {
    setInterval(() => {
        player.setAttribute('src', `assets/explosion${n}.svg`);
        n++;
        if (n > 9) n = 9;
    }, 200);
}
let n = 1;
setTimeout( explosion, 1000);