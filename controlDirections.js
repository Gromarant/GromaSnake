import { snake } from './components/snake.js';

let direction = { x: 0, y: 0 };
let lastDirection = { x: 0, y: 0 };

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
    return direction;
};