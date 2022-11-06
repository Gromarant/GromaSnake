import { getDirection } from '../controlDirections.js';

export const snakeSpeed = 1;

export const snake = [ { x: 10, y: 10 } ];

export const update = () => {
    const direction = getDirection();
    for( let i = snake.length - 2; i >= 0; i-- ) {
        snake[i + 1] = { ...snake[i] }
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;

};

export const render = ( board ) => {
    snake.forEach( part => {
      const snakeBody = document.createElement('div')
      snakeBody.style.gridRowStart = part.y
      snakeBody.style.gridColumnStart = part.x
      snakeBody.classList.add( 'snake' );
      board.appendChild( snakeBody );
    });
};