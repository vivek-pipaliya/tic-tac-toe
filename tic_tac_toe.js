const buttons = document.querySelectorAll(".box")
const reset = document.querySelector(".restart")

let player1 = true;

// Winning pattern
const winning = [
    // row wise
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // column wise
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // diagnols wise
    [0, 4, 8], [2, 4, 6]
];

buttons.forEach(box => {
    box.addEventListener('click', function (event) {
        box.innerText = turn(); // give input as X or O.
        box.style.padding = "20px 25px"; // after given true input it sets padding as per given.
        box.disabled = true; // it will not allow to change or re-enter X or O again.
        checkwinner(); // checks the winner logic.
    });
});

// handle() function for checking the turn of playeer 
function turn() {
    if (player1) {  // checks if the player 1 is true then his turn
        player1 = false; //after complete of player 1 turn it will make it false and next time turn for palyer 2
        return "X"; //print/return X on button.
    } else {
        player1 = true; //after player 1 turns over it will goes for player 2 turn
        return "O"; //prinnt/return O on button
    }
}

function checkwinner() {
    for (let pattern of winning) {
        const pal1 = buttons[pattern[0]].innerText;
        const pal2 = buttons[pattern[1]].innerText;
        const pal3 = buttons[pattern[2]].innerText;
        if (pal1 && pal1 === pal2 && pal2 === pal3 && pal3) {
            document.getElementById("winner").innerHTML = pal1;
            disablebox();
        }
    }
    let draw = true;
    for (let x = 0; x < buttons.length; x++) {
        if (buttons[x].innerText === "") {
            draw = false;
        }
    }
    if (draw) {
        document.getElementById("winner").innerHTML = "Draw";
    }
}
const disablebox = () => {
    for (let box of buttons) {
        box.disabled = true;
    }
}

const enablebox = () => {
    for (let box of buttons) {
        box.disabled = false;
        box.innerText = "";
        document.getElementById("winner").innerHTML = "";
        box.style.padding = "30px 30px";
    }
}

reset.addEventListener('click', () => {
    player1 = true; // make the first turn activate
    enablebox(); // after winner it will enable all buttons
});