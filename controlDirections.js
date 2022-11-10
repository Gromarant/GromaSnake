"use strict";

import { snake, update } from './components/snake.js';

const pauseGame =  document.querySelector('.inProcess-pause');
export let direction = { x: 0, y: 0 };
export let lastDirection = { x: 0, y: 0 };

window.addEventListener( 'keydown', eve => {
    switch( eve.key ) {
        case 'ArrowUp': 
        if( lastDirection.y !== 0 && snake.length > 1) break
            direction = { x: 0, y: -1 };
            break
        case 'ArrowDown': 
        if( lastDirection.y !== 0 && snake.length > 1) break
        direction = { x: 0, y: 1 };
            break
        case 'ArrowLeft': 
        if( lastDirection.x !== 0 && snake.length > 1) break
        direction = { x: -1, y: 0 };
            break
        case 'ArrowRight': 
        if( lastDirection.x !== 0 && snake.length > 1) break
        direction = { x: 1, y: 0 };
            break
    };
});

export const getDirection = () => {
    lastDirection = direction;
    return lastDirection;
};

export const pause = ( eve ) => {
    if( eve.target === pauseGame ) {
        direction = { x: 0, y: 0 };
    };
};
pauseGame.addEventListener( 'click', ( eve ) => pause( eve ));