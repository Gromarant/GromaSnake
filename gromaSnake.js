"use strict";

import { update as updatingSnake, render as renderingSnake, snakeHead, bitItself, setScore, snakeSpeed, setSpeed, setNewSpeed, getPoints} from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './grid.js';

let lastRenderTime = 0;
let challenge = 1;
export let gameOver = false;
export let playing = true;


const board = document.getElementById( 'board' );
const startHome = document.querySelector('.home-btn');
const restartGame = document.querySelector('.inProcess-restart');
const startGameOver = document.querySelector('.gameOver-btn');
const pauseGame = document.querySelector('.inProcess-pause');
const startPassLevel = document.querySelector('.passLevel-btn');
const passLevelTitle = document.querySelector('.passLevel-title');

const setLevel = ( newLevel ) => localStorage.setItem( 'level', newLevel );
const setChallenge = ( newChallenge ) =>  localStorage.setItem( 'challenge', newChallenge );

const initGame = () => {
    if(['null', 'undefined', null, undefined].includes(localStorage.getItem('challenge'))) { setChallenge(1)};
    if(['null', 'undefined', null, undefined].includes(localStorage.getItem('level'))) { setLevel(1)};
    if(['null', 'undefined', null, undefined].includes(localStorage.getItem('record'))) { localStorage.setItem( 'record', 0)};
    if(['null', 'undefined', null, undefined].includes(localStorage.getItem('speed'))) { setSpeed(3)};
}
const gameLoop = ( currentTime ) => {
    initGame();
    if( playing === true && !gameOver ) {
        if( getPoints() === getChallenge() && !gameOver ) {
        levelPassed();
        };
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

const setPassLevelTitle = () => passLevelTitle.innerHTML = `Level ${ getLevel() } passed`;

const setNewLevel = () => {
    const currentLevel = getLevel();
    const newLevel = currentLevel + 1;
    setLevel( newLevel );
};
const setNewChallenge = () => {
    const currentChallenge = getChallenge();
    const newChallenge = currentChallenge + 1;
    setChallenge( newChallenge );
}

const getLevel = () => parseInt(localStorage.getItem( 'level' ));
const getChallenge = () => parseInt(localStorage.getItem( 'challenge' ));

const levelSettings = () => {
    setPassLevelTitle();
    setNewLevel();
    setNewChallenge();
}
export const levelPassed = () => {
    console.log('levelPassed getPoints', getPoints())
    console.log('levelPassed challenge', challenge)
    hideFrame('inProcess');
    showFrame('passLevel');
    gamePause();
    levelSettings();
    setNewSpeed();
    console.log ('new speed', snakeSpeed)
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