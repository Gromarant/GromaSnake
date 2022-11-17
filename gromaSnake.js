"use strict";

import { update as updatingSnake, render as renderingSnake, snakeHead, bitItself, setScore, getSpeed, setSpeed, getSnakeGrow, setNewSpeed } from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './components/grid.js';

let lastRenderTime = 0;
export let gameOver = false;
export let playing = true;


const board = document.getElementById( 'board' );
const startHome = document.querySelector('.home-btn');
const restartGameAsInit = document.querySelector( '.home-RestartGame' );
const restartGame = document.querySelector('.inProcess-restart');
const startGameOver = document.querySelector('.gameOver-btn');
const pauseGame = document.querySelector('.inProcess-pause');

const setChallenge = ( newChallenge ) =>  localStorage.setItem( 'challenge', newChallenge );

const initGame = () => {
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('challenge') )) { setChallenge(20)};
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('record') )) { localStorage.setItem( 'record', 0)};
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('speed') )) { setSpeed(3)};
}
const gameLoop = ( currentTime ) => {
    initGame();
    if( playing === true && !gameOver ) {
        if( getSnakeGrow() === getChallenge() ) {
            levelPassed();
        };
        if( gameOver ) {
            hideFrame('inProcess');
            showFrame('gameOver');
            setScore();
        };
        window.requestAnimationFrame( gameLoop );

        const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
        if( secondsSinceLastRender < 1 / getSpeed() ) return;
        lastRenderTime = currentTime;
        update();
        render();
    };
};

window.requestAnimationFrame( gameLoop );

const showFrame = ( classFrame ) => document.querySelector(`.${classFrame}`).classList.remove('hidden');
const hideFrame = ( classFrame ) => document.querySelector(`.${classFrame}`).classList.add('hidden');

const onStart = ( eve ) => {
    if( eve.target === startHome ) { 
        hideFrame('home');
        showFrame('inProcess');
    };
    if( eve.target === restartGame ) { document.location.reload(true) };
    if( eve.target === startGameOver ) { document.location.reload(true) };
};

startHome.addEventListener( 'click', ( eve ) => onStart( eve ));
restartGame.addEventListener( 'click', ( eve ) => onStart( eve ));  
startGameOver.addEventListener( 'click', ( eve ) => onStart( eve ));

restartGameAsInit.addEventListener( 'click', () => localStorage.clear());

const isDeath = () => {
    const isOutsideTheBoard = outsideBoard( snakeHead() );
    const hasBitItself = bitItself();
    gameOver = isOutsideTheBoard || hasBitItself;
};

const setNewChallenge = () => {
    const currentChallenge = getChallenge();
    const  newChallenge = currentChallenge + 20;
    setChallenge( newChallenge );
};

const getChallenge = () => parseInt(localStorage.getItem( 'challenge' ));

export const levelPassed = () => {
    setNewChallenge();
    setNewSpeed();
};

function update() {
    updatingSnake();
    updatingFood();
    isDeath();
};

function render() {
    board.innerHTML = '';
    renderingSnake( board );
    renderingFood( board );
};

const gamePause = () => playing= !playing;

pauseGame.addEventListener( 'click' , () => {
    gamePause();
    gameLoop();
});

window.addEventListener( 'keydown' ,  ( eve ) => {
    if( eve === 'Space' ) {
        gamePause(); 
        gameLoop();
    };
});