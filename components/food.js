import { onSnake, expands } from './snake.js';

let foodBody = { x: 10, y: 1 };
const growing = 1;

export const update = () => {
    if( onSnake( foodBody ) ) {
        expands( growing );
        foodBody = { x: 10, y: 15 };
    }
};

export const render = ( board ) => {
      const food = document.createElement('div');
      food.style.gridRowStart = foodBody.y;
      food.style.gridColumnStart = foodBody.x;
      food.classList.add( 'randomFood' );
      board.appendChild( food );
};

const getRandomPosition = () => {
    let newFoodPosition
    while( newFoodPosition == null || onSnake( newFoodPosition) ) {
        newFoodPosition = randomPosition();
    };
    return newFoodPosition;
};


const randomPosition = () => {};