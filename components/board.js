"use strict";

const screenMinWidth600 = window.matchMedia(' screen and (min-width: 600px) ').matches;
const screenMinWidth900 = window.matchMedia(' screen and (min-width:900px) ').matches;

const boardContainer = document.querySelector('.inProcess');
export const board = document.querySelector('#board');
const boardContainerRect = () => boardContainer.getBoundingClientRect();
export let columnNumber = 12;
export let rowNumber = 20;

const setSize = (columnNumber, rowNumber, squareGridSize) => {
    board.style.width = `${(columnNumber + 1)*squareGridSize}px`;
    board.style.height = `${(rowNumber + 1)*squareGridSize}px`;
}

const setBoardSizeBaseOnSquareGridsThatFitInItsContainer = (containerSize, boardWidthPercentage, boardHeightPercentage, squareGridSize) => {
    columnNumber = Math.floor( ((containerSize.width * boardWidthPercentage) /squareGridSize)) - 1;
    rowNumber = Math.floor( ((containerSize.height * boardHeightPercentage) /squareGridSize)) - 1;
    setSize(columnNumber, rowNumber, squareGridSize);
}

export const setBoardSize = () => {
    const boardContainerSize = boardContainerRect();
    
    if ( window.innerWidth < 600 ) {
        setBoardSizeBaseOnSquareGridsThatFitInItsContainer(boardContainerSize, 1, 0.52, 16);
    }
    else if ( screenMinWidth600 && window.innerWidth < 900 ) { 
        setBoardSizeBaseOnSquareGridsThatFitInItsContainer(boardContainerSize, 0.54, 1, 16);
    }
    else {
        setBoardSizeBaseOnSquareGridsThatFitInItsContainer(boardContainerSize, 1, 0.7, 20);
    }
}

window.addEventListener('resize', setBoardSize, true);