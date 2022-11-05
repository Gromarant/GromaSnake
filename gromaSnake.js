"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed } from './components/snake';

let lastRenderTime = 0;
const snakeSpeed = 2;
const board = document.getElementById('board');

const gameLoop = ( currentTime ) => {
    window.requestAnimationFrame( gameLoop );

    const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
    if( secondsSinceLastRender < 1 / snakeSpeed ) return;

    lastRenderTime = currentTime;

    update();
    render();
};

window.requestAnimationFrame( gameLoop );

function updateSnake() {
    updatingSnake();
}

function renderSnake() {
    renderingSnake( board );
}