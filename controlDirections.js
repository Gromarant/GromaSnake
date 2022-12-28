"use strict";

import { snake } from './components/snake.js';
import { playing } from './gromaSnake.js';
import { controllerDirections } from './components/controller.js';

export let direction = { x: 0, y: 0 };

export const setDirections = ( switched ) => {
    switch( switched ) {
        case 'ArrowUp':
        case 'w': 
        case 'up':
        if( direction.y !== 0 && snake.length > 1 && direction.y === 1) break
            direction = { x: 0, y: -1 };
            break
        case 'ArrowDown': 
        case 's': 
        case 'down':
        if( direction.y !== 0 && snake.length > 1 && direction.y === -1 ) break
            direction = { x: 0, y: 1 };
            break
        case 'ArrowLeft': 
        case 'a': 
        case 'left':
        if( direction.x !== 0 && snake.length > 1 && direction.x === 1 ) break
            direction = { x: -1, y: 0 };
            break
        case 'ArrowRight': 
        case 'd': 
        case 'right':
        if( direction.x !== 0 && snake.length > 1 && direction.x === -1 ) break
            direction = { x: 1, y: 0 };
            break
    };
};

window.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    setDirections( controllerDirections ) 
});

window.addEventListener( 'keydown', ( eve ) => {
    if( playing === false ){ return };
    setDirections( eve.key );
});