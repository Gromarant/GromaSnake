"use strict";

import { update as updatingSnake, render as renderingSnake, snakeSpeed, snakeHead, bitItself, setScore, setSpeed, getSpeed, getRecord, getPoints} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './grid.js';

let lastRenderTime = 0;
let challenge = 2;
let level = 1;
export let gameOver = false;
export let playing = true;

const board = document.getElementById( 'board' );
const startHome = document.querySelector('.home-btn');
const restartGame = document.querySelector('.inProcess-restart');
const startGameOver = document.querySelector('.gameOver-btn');
const pauseGame = document.querySelector('.inProcess-pause');
const startPassLevel = document.querySelector('.passLevel-btn');
const passLevelTitle = document.querySelector('.passLevel-title');



const gameLoop = ( currentTime ) => {
    if( playing === true ) {
        levelPassed();
        if( gameOver ) {
            hideFrame('inProcess');
            showFrame('gameOver');
            setScore();
        };
        window.requestAnimationFrame( gameLoop );

        const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
        if( secondsSinceLastRender < 1 / snakeSpeed ) return;
        lastRenderTime = currentTime;
        if( !gameOver ) { update() };
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
    if( eve.target === startPassLevel ) { document.location.reload(true) };
};

startHome.addEventListener( 'click', ( eve ) => onStart( eve ));
restartGame.addEventListener( 'click', ( eve ) => onStart( eve ));  
startGameOver.addEventListener( 'click', ( eve ) => onStart( eve ));
startPassLevel.addEventListener( 'click', ( eve ) => onStart( eve ));


const isDeath = () => {
    const isOutsideTheBoard = outsideBoard( snakeHead() );
    const hasBitItself = bitItself();
    gameOver = isOutsideTheBoard || hasBitItself;
};

const setPassLevelTitle = () => {
    passLevelTitle.innerHTML = `Level ${ level } passed`;
};

const setNewLevel = () => {
    challenge += 2;
    level += 1;
    setSpeed();
    setPassLevelTitle();
    setScore();
};

export const levelPassed = () => {
    if( challenge === getPoints() && !gameOver ) {
        hideFrame('inProcess');
        showFrame('passLevel');
        gamePause();
        console.log( 'pause levelPassed');
        setNewLevel();
    };
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