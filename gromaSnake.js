"use strict";

import { update as updatingSnake, render as renderingSnake, snakeHead, bitItself, setScore, getSpeed, setSpeed, setNewSpeed,  getSnakeGrow } from './components/snake.js';
import { update as updatingFood, render as renderingFood } from './components/food.js';
import { outsideBoard } from './components/grid.js';
import { setBoardSize } from "./components/board.js";
const boardContainer = document.querySelector('.inProcess');
const boardContainerRect = () => board.getBoundingClientRect();


let lastRenderTime = 0;
export let gameOver = false;
export let playing = true;
const board = document.getElementById( 'board' );
const startHome = document.querySelector('.start-btn');
const restartGameAsInit = document.querySelector( '.restartGame-btn' );
const reloadGame = document.querySelector('.reload');
const startGameOver = document.querySelector('.gameOver__btn');
const pauseGame = document.querySelector('.pause');
const record = document.querySelector( '#record');

const setChallenge = ( newChallenge ) =>  localStorage.setItem( 'challenge', newChallenge );
const initGame = () => {
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('challenge') )) { setChallenge(20)};
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('record') )) { localStorage.setItem( 'record', 0)};
    if(['null', 'undefined', null, undefined].includes( localStorage.getItem('speed') )) { setSpeed(4)};
}
const gameLoop = ( currentTime ) => {
    initGame();
    if( playing === true && !gameOver ) {
        if( getSnakeGrow() === getChallenge() ) {
            setNewChallenge();
            setNewSpeed();
        };
        window.requestAnimationFrame( gameLoop );
        
        const secondsSinceLastRender = ( currentTime - lastRenderTime ) / 1000;
        if( secondsSinceLastRender < 1 / getSpeed() ) return;
        lastRenderTime = currentTime;
        
        update();
        render();
    };
    if( gameOver ) {
        localStorage.setItem( 'record', record.value );
        hideFrame('inProcess');
        showFrame('gameOver');
        setScore();
    };
};
window.requestAnimationFrame( gameLoop );

const gamePause = () => playing = !playing;

pauseGame.addEventListener( 'click' , ( eve ) => {
    if( eve.target === pauseGame ) { 
        gamePause();
        gameLoop();
    };
});
window.addEventListener( 'keydown' ,  ( eve ) => {
    if( eve.key === ' ' ) {
        gamePause();
        gameLoop();
     };
});

const showFrame = ( classFrame ) => document.querySelector(`.${classFrame}`).classList.remove('hidden');
const hideFrame = ( classFrame ) => document.querySelector(`.${classFrame}`).classList.add('hidden');

const onStart = ( eve ) => {
    if( eve.target === startHome ) { 
        hideFrame('home');
        showFrame('inProcess');
        setBoardSize();
        // const boardContainerSize = boardContainerRect();
        // console.log("boardContainerRect.width ---> ", boardContainerSize.width); 
    }
    else if( eve.target === reloadGame ||  eve.target === startGameOver ) { 
        document.location.reload(true);
    }
};

startHome.addEventListener( 'click', ( eve ) => onStart( eve ));
startHome.addEventListener( 'touchstart', ( eve ) => onStart( eve ), { passive: true });
reloadGame.addEventListener( 'click', ( eve ) => onStart( eve ));  
reloadGame.addEventListener( 'touchstart', ( eve ) => onStart( eve ), { passive: true });  
startGameOver.addEventListener( 'click', ( eve ) => onStart( eve ));
startGameOver.addEventListener( 'touchstart', ( eve ) => onStart( eve ), { passive: true });

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

function update() {
    updatingSnake();
    updatingFood();
    isDeath();
};

function render() {
    board.innerHTML = '';
    renderingSnake( board );
    renderingFood( board );
    isDeath();
};