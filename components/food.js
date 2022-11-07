"use strict";

import { onSnake, expands } from './snake.js';
import { randomPosition } from '../grid.js';

const getRandomPosition = () => {
    let newFoodPosition;
    while( newFoodPosition == null || onSnake( newFoodPosition) ) {
        newFoodPosition = randomPosition();
    };
    return newFoodPosition;
};

let foodBody = getRandomPosition();
const growing = 1;

export const update = () => {
    if( onSnake( foodBody ) ) {
        expands( growing );
        foodBody = getRandomPosition();
    }
};

export const render = ( board ) => {
      const food = document.createElement('div');
      food.style.gridRowStart = foodBody.y;
      food.style.gridColumnStart = foodBody.x;
      food.classList.add( 'randomFood' );
      board.appendChild( food );
};