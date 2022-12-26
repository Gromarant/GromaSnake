"use strict";
import { columnNumber, rowNumber } from './board.js';

export const randomPosition = () => {
    return {
        x: Math.floor( Math.random() * columnNumber ) + 1,
        y: Math.floor( Math.random() * rowNumber ) + 1,
    };
};

export const outsideBoard = ( position ) => position.x < 1 || position.x > columnNumber || position.y < 1 || position.y > rowNumber;