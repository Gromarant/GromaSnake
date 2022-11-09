"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed, snakeHead, bitItself} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const board = document.getElementById( 'board' );
const startHome = document.querySelector('.home-btn');
const restartGame = document.querySelector('.inProcess-restart');
const startGameOver = document.querySelector('.gameOver-btn');

const onStart = ( eve ) => {

    if( eve.target === startHome ) { 
        document.querySelector('.home').classList.add('hidden');
        document.querySelector('.inProcess').classList.remove('hidden');
    };
    if( eve.target === restartGame ) { window.location = '/' };
    if( eve.target === startGameOver ) {
        window.location = '/';
    };
};

startHome.addEventListener( 'click', ( eve ) => onStart( eve ));
restartGame.addEventListener( 'click', ( eve ) => onStart( eve ));  
startGameOver.addEventListener( 'click', ( eve ) => onStart( eve ));

const gameLoop = ( currentTime ) => {
    if( gameOver ) {
        document.querySelector('.inProcess').classList.add('hidden');
        document.querySelector('.gameOver').classList.remove('hidden');
    };

    window.requestAnimationFrame( gameLoop );

    const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
    if( secondsSinceLastRender < 1 / snakeSpeed ) return;

    lastRenderTime = currentTime;

    update();
    render();
};

const isDeath = () => {
    gameOver = outsideBoard( snakeHead() ) || bitItself();
};

window.requestAnimationFrame( gameLoop );

function update() {
    updatingSnake();
    updatingFood();
    isDeath()
}

function render() {
    board.innerHTML = '';
    renderingSnake( board );
    renderingFood( board );
}