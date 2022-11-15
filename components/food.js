"use strict";

import { onSnake, expands} from './snake.js';
import { randomPosition } from '../grid.js';

const growing = 1;

const getRandomPosition = () => {
    let newFoodPosition;
    while( newFoodPosition == null || onSnake( newFoodPosition) ) {
        newFoodPosition = randomPosition();
    };
    return newFoodPosition;
};

let foodBody = getRandomPosition();
const randomColor = () => '#'+ Math.floor( Math.random() * 16777215 ).toString( 16 );
let setColor = randomColor();

export const update = () => {
    if( onSnake( foodBody ) ) {
        expands( growing );
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
      let foodColor = food.style.backgroundColor = setColor;
      board.appendChild( food );
      return foodColor;
};