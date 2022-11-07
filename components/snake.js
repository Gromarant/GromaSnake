"use strict";

import { getDirection } from '../controlDirections.js';

export const snakeSpeed = 3;
export const snake = [  { x: 10, y: 11 } ];
let newPart = 0;

export const update = () => {
    addOnePart();
    const direction = getDirection();
    for( let i = snake.length - 2; i >= 0; i-- ) {
        snake[i + 1] = { ...snake[i] }
    }
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

export const addOnePart = () => {
    for( let i = 0; i < newPart; i++ ) {
        snake.push( { ...snake[ snake.length - 1 ] });
    };
    newPart = 0;
};