'use strict';



const P0 = document.querySelector('.player--0')
const P1 = document.querySelector('.player--1')
const nameP0 = document.getElementById('name--0');
const nameP1 = document.getElementById('name--1');
const displayScoreP0 = document.getElementById('score--0');
const displayCurrentP0 = document.getElementById('current--0');
const displayScoreP1 = document.getElementById('score--1');
const displayCurrentP1 = document.getElementById('current--1');

const btnNewGame = document.querySelector('.btn--new')
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceImage = document.querySelector('.dice');

let scoreP0 = 0;
let scoreP1 = 0;
let currentP0 = 0;
let currentP1 = 0;
let playing = true;


function mathRandomFunction () {
    let mathRandom = Math.trunc(Math.random() * 6 + 1);
    return mathRandom;
}

//função novo jogo = OK
function newGame () {
    playing = true;
    P0.classList.remove('player--winner');
    P1.classList.remove('player--winner');
    diceImage.classList.add('hidden');
    scoreP0 = 0;
    scoreP1 = 0;
    currentP0 = 0;
    currentP1 = 0;
    displayScoreP0.textContent = scoreP0;
    displayScoreP1.textContent = scoreP1;
    displayCurrentP0.textContent = currentP0;
    displayCurrentP1.textContent = currentP1;
    diceImage.src = 'dice-1.png'
    nameP0.textContent= 'PLAYER 1'
    nameP1.textContent= 'PLAYER 2'
    playerZeroActive();
}

//função players ativos = OK
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

function playerZeroActive() {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

function playerOneActive() {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    
}

function attCurrentP0 (mathRandom) {
    currentP0 += mathRandom;
    console.log(currentP0)
    displayCurrentP0.textContent = currentP0;
}

function attCurrentP1 (mathRandom) {
    currentP1 += mathRandom;
    displayCurrentP1.textContent = currentP1;
}

function CurrentZeroP0 () {
    currentP0 = 0;
    displayCurrentP0.textContent = currentP0;
}

function CurrentZeroP1 () {
    currentP1 = 0;
    displayCurrentP1.textContent = currentP1;
}

//função rodar dado = OK

function rowDice() {
    if(playing) {
        diceImage.classList.remove('hidden');
        let mathRandom = mathRandomFunction();
        console.log(mathRandom);
        switch(mathRandom) {
            case 1:
                diceImage.src = 'dice-1.png';
                if(player0.classList.contains('player--active')) {
                    CurrentZeroP0();
                    playerOneActive();
                }else {
                    CurrentZeroP1();
                    playerZeroActive();
                }
                break;
            case 2:
                diceImage.src = 'dice-2.png';
                if(player0.classList.contains('player--active')) {
                    attCurrentP0(mathRandom);
                }else {
                    attCurrentP1(mathRandom);
                }
                break;
            case 3:
                diceImage.src = 'dice-3.png';
                if(player0.classList.contains('player--active')) {
                    attCurrentP0(mathRandom);
                }else {
                    attCurrentP1(mathRandom);
                }
                break;
            case 4:
                diceImage.src = 'dice-4.png';
                if(player0.classList.contains('player--active')) {
                    attCurrentP0(mathRandom);
                }else {
                    attCurrentP1(mathRandom);
                }
                break;
            case 5:
                diceImage.src = 'dice-5.png';
                if(player0.classList.contains('player--active')) {
                    attCurrentP0(mathRandom);
                }else {
                    attCurrentP1(mathRandom);
                }
                break;
            case 6:
                diceImage.src = 'dice-6.png';
                if(player0.classList.contains('player--active')) {
                    attCurrentP0(mathRandom);
                }else {
                    attCurrentP1(mathRandom);
                }
                break;
        }
    }
    }


//função hold
function hold() {
    if (playing) {
        if(player0.classList.contains('player--active')) {
            scoreP0 += currentP0;
            displayScoreP0.textContent = scoreP0;
            if (scoreP0 >= 100) {
                P0.classList.add('player--winner');
                P0.classList.remove('player--active')
                nameP0.textContent = 'PLAYER 1 WON'
                diceImage.classList.add('hidden')
                playing = false;
                // alert('CONGRATS PLAYER 1')
                // newGame();
            }else {
                CurrentZeroP0();
                playerOneActive();
            }
        }else {
            scoreP1 += currentP1;
            displayScoreP1.textContent = scoreP1;
            if (scoreP1 >= 100) {
                displayScoreP1.textContent = scoreP1;
                P1.classList.add('player--winner');
                P1.classList.remove('player--active')
                nameP1.textContent = 'PLAYER 2 ON'
                diceImage.classList.add('hidden')
                playing = false;
            }else {
                CurrentZeroP1();
                playerZeroActive();
            }
        }
    }
}

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rowDice);
btnHold.addEventListener('click', hold);





