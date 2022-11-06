"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed, snake} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';

let lastRenderTime = 0;
const board = document.getElementById( 'board' );

const gameLoop = ( currentTime ) => {
    window.requestAnimationFrame( gameLoop );

    const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
    if( secondsSinceLastRender < 1 / snakeSpeed ) return;

    lastRenderTime = currentTime;

    update();
    render();
};

window.requestAnimationFrame( gameLoop );

function update() {
    updatingSnake();
    updatingFood();
}

function render() {
    board.innerHTML = '';
    renderingSnake( board );
    renderingFood( board );
}