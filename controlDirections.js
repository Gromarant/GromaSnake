"use strict";

import { snake } from './components/snake.js';
export let direction = { x: 0, y: 0 };
export let lastDirection = { x: 0, y: 0 };

window.addEventListener( 'keydown', eve => {
    switch( eve.key ) {
        case 'ArrowUp' || 'w': 
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
window.addEventListener( 'keydown', eve => {
    switch( eve.key ) {
        case 'w': 
        if( lastDirection.y !== 0 && snake.length > 1) break
            direction = { x: 0, y: -1 };
            break
        case 's': 
        if( lastDirection.y !== 0 && snake.length > 1) break
        direction = { x: 0, y: 1 };
            break
        case 'a': 
        if( lastDirection.x !== 0 && snake.length > 1) break
        direction = { x: -1, y: 0 };
            break
        case 'd': 
        if( lastDirection.x !== 0 && snake.length > 1) break
        direction = { x: 1, y: 0 };
            break
    };
})

export const getDirection = () => {
    lastDirection = direction;
    return lastDirection;
};
