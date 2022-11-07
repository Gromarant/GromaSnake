"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed, snakeHead, bitItself} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const board = document.getElementById( 'board' );

const gameLoop = ( currentTime ) => {
    if( gameOver ) {
        if( confirm( 'GAME OVER. Press ok to restart.')) {
            window.location = '/';
        };
        return;
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