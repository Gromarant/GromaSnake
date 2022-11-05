export const snakeSpeed = 1; 
const snake = [
    { x: 10, y: 10 },
];

const update = () => {
    for( let i = snakeBody.length - 2; i >= 0; i-- ) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += 1;
    snakeBody[0].y += 0;

};

const render = ( board ) => {

    snake.forEach( part => {
      const snakeBody = document.createElement('div'); 
      snakeBody.style.gridRowStart = part.x;
      snakeBody.style.gridColumnStart = part.y;
      snake.classList.add( 'snake' );
      board.appendchild( snakeBody );
    });
};