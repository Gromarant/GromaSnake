"use strict";

import { snake } from './components/snake.js';
import { playing } from './gromaSnake.js';
export let direction = { x: 0, y: 0 };


window.addEventListener( 'keydown', eve => {
    if( playing === false ){ return };
    switch( eve.key ) {
        case 'ArrowUp':
        case 'w': 
        if( direction.y !== 0 && snake.length > 1 && direction.y === 1) break
            direction = { x: 0, y: -1 };
            break
        case 'ArrowDown': 
        case 's': 
        if( direction.y !== 0 && snake.length > 1 && direction.y === -1 ) break
            direction = { x: 0, y: 1 };
            break
        case 'ArrowLeft': 
        case 'a': 
        if( direction.x !== 0 && snake.length > 1 && direction.x === 1 ) break
            direction = { x: -1, y: 0 };
            break
        case 'ArrowRight': 
        case 'd': 
        if( direction.x !== 0 && snake.length > 1 && direction.x === -1) break
            direction = { x: 1, y: 0 };
            break
    };
});