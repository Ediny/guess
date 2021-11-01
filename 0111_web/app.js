let inputs = document.getElementById('inputs');

let btn = document.getElementById('random');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.addEventListener('click', () => {
    if(inputs.value == getRandomInt(11)) {
        alert('You win!');
    } else {
        alert('Loser!');
    }
})


