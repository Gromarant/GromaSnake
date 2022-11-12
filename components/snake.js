"use strict";

import { getDirection } from '../controlDirections.js';
import { gameOver } from '../gromaSnake.js';

export const snakeSpeed = 3;
export const snake = [  { x: 10, y: 11 } ];
let newPart = 0;
const pauseGame =  document.querySelector('.inProcess-pause')
const score = document.querySelector( '#score');
const gameOverScore = document.querySelector( '.gameOver-score');
const record = document.querySelector( '.record');


export const update = () => {
    addOnePart();
    setScore();
    setRecord();
    const direction = getDirection();
    for( let i = snake.length - 2; i >= 0; i-- ) {
        snake[i + 1] = { ...snake[i] };
    };

    snake[0].x += direction.x;
    snake[0].y += direction.y;
};

export const render = ( board ) => {
    snake.forEach( part => {
      const snakeBody = document.createElement('div');
      snakeBody.style.gridRowStart = part.y;
      snakeBody.style.gridColumnStart = part.x;
      snakeBody.classList.add( 'snake' );
      board.appendChild( snakeBody );
    });
};

export const expands = ( amount ) => {
    newPart += amount;
};

export const addOnePart = () => {
    for( let i = 0; i < newPart; i++ ) {
        snake.push( { ...snake[ snake.length - 1 ] });
    };
    newPart = 0;
};

export const onSnake = ( position, { ignoreHead = false } = {} ) => {
    return snake.some( ( part, index ) => {
        if( ignoreHead && index === 0 ) return false;
        return samePosition( part, position );
    });
};

export const snakeHead = () => snake[0];
export const bitItself = () => {
    return onSnake( snake[0], { ignoreHead: true } )
};


export const samePosition = ( position1, position2 ) => {
    return position1.x === position2.x && position1.y === position2.y;
};

export const setScore = () => {
    let points = snake.length - 1;
    score.value = points;
    if( gameOver ) { gameOverScore.value = points };
};

export const getRecord = () => {
    const recordStorage = localStorage.getItem( 'record' );
    return recordStorage;
};

export const setRecord = () => {
    record.value = getRecord();
    if( record.value < score.value ) { record.value = score.value };
    localStorage.setItem( 'record', record.value );
};

export const pause = ( eve ) => {
    if( eve.target === pauseGame ) { 
        let directionPause = { x: 0, y: 0 };
        for( let i = 0; i <= snake.length; i++ ) {
            snake[i] += directionPause;
        };
    };
};
pauseGame.addEventListener( 'click', ( eve ) => pause( eve ));