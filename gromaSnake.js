"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed, snakeHead, bitItself, pause, setScore} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './grid.js';

let lastRenderTime = 0;
export let gameOver = false;
const board = document.getElementById( 'board' );
const startHome = document.querySelector('.home-btn');
const restartGame = document.querySelector('.inProcess-restart');
const startGameOver = document.querySelector('.gameOver-btn');


const gameLoop = ( currentTime ) => {
    if( gameOver ) {
        document.querySelector('.inProcess').classList.add('hidden');
        document.querySelector('.gameOver').classList.remove('hidden');
        setScore();
    };

    window.requestAnimationFrame( gameLoop );

    const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
    if( secondsSinceLastRender < 1 / snakeSpeed ) return;
    lastRenderTime = currentTime;

    if( !gameOver || !pause ) { update() };
    render();
};

window.requestAnimationFrame( gameLoop );

const onStart = ( eve ) => {

    if( eve.target === startHome ) { 
        document.querySelector('.home').classList.add('hidden');
        document.querySelector('.inProcess').classList.remove('hidden');
    };
    if( eve.target === restartGame ) { window.location = '/' };
    if( eve.target === startGameOver ) {
        document.location.reload(true);
    };
};

startHome.addEventListener( 'click', ( eve ) => onStart( eve ));
restartGame.addEventListener( 'click', ( eve ) => onStart( eve ));  
startGameOver.addEventListener( 'click', ( eve ) => onStart( eve ));

const isDeath = () => {
    const isOutsideTheBoard = outsideBoard( snakeHead() );
    const hasBitItself = bitItself();
    gameOver = isOutsideTheBoard || hasBitItself;
};



function update() {
    updatingSnake();
    updatingFood();
    isDeath();
}

function render() {
    board.innerHTML = '';
    renderingSnake( board );
    renderingFood( board );
}