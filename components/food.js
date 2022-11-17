"use strict";

import { onSnake, expands, setPoints} from './snake.js';
import { randomPosition } from './grid.js';

const growing = 1;

export const getRandomPosition = () => {
    let newFoodPosition;
    while( newFoodPosition == null || onSnake( newFoodPosition) ) {
        newFoodPosition = randomPosition();
    };
    return newFoodPosition;
};

let foodBody = getRandomPosition();
export const randomColor = () => '#'+ Math.floor( Math.random() * 16777215 ).toString( 16 );
let setColor = randomColor();

export const update = () => {
    if( onSnake( foodBody ) ) {
        expands( growing );
        setPoints( Math.floor( Math.random() * 10 ) );
        foodBody = getRandomPosition();
        setColor = randomColor();
    };
};

export const render = ( board ) => {
      const food = document.createElement('span');
      food.id = 'randomFood';
      food.style.gridRowStart = foodBody.y;
      food.style.gridColumnStart = foodBody.x;
      food.classList.add( 'randomFood' );
      food.style.backgroundColor = setColor;
      board.appendChild( food );
};