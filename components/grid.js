"use strict";

let gridSize = 21;

export const randomPosition = () => {
    return {
        x: Math.floor( Math.random() * gridSize ) + 1,
        y: Math.floor( Math.random() * gridSize ) + 1,
    };
};

export const outsideBoard = ( position ) => position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize;