"use strict";

const sizeSnakeMobile = 18;
const sizeSnakeTablet = 32;
const sizeSnakeDesktop = 42;

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const gridHeight = ( snakeSize ) => ( screenHeight / snakeSize );
const gridWidth = ( snakeSize ) => ( screenWidth / snakeSize );
const frameHeight = ( snakeSize ) => ( screenHeight * snakeSize );
const frameWidth = ( snakeSize ) => ( screenWidth * snakeSize );

let portrait = window.matchMedia("(orientation: portrait)");
let inPortrait = true;

portrait.addEventListener("change", ( eve ) => {
    if( eve.matches ) { inPortrait }
    else { inPortrait = false };
});

export const setGrid = () => {

    if( inPortrait && screenHeight < 950 && screenWidth < 500 || !inPortrait && screenWidth < 950 && screenHeight < 500 ) {
        gridHeight( sizeSnakeMobile );
        gridWidth( sizeSnakeMobile );
        if( gridHeight() === screenHeight ) { frameHeight( sizeSnakeMobile ) };
        if( gridWidth() === screenWidth ) { frameWidth( sizeSnakeMobile ) };
    };
    if( inPortrait && screenHeight < 1500 && screenWidth < 1400 || !inPortrait && screenWidth < 1500 && screenHeight < 1400 ) {
        gridHeight( sizeSnakeTablet );
        gridWidth( sizeSnakeTablet );
        if( gridHeight() === screenHeight ) { frameHeight( sizeSnakeTablet ) };
        if( gridWidth() === screenWidth ) { frameWidth( sizeSnakeTablet ) };;
    };
    if( inPortrait && screenHeight > 1500 && screenWidth > 1400 || !inPortrait && screenWidth > 1500 && screenHeight > 1400 ) {
        gridHeight( sizeSnakeDesktop );
        gridWidth( sizeSnakeDesktop );
        if( gridHeight() === screenHeight ) { frameHeight( sizeSnakeDesktop ) };
        if( gridWidth() === screenWidth ) { frameWidth( sizeSnakeDesktop ) };;
    };
};

export const randomPosition = () => {
    return {
        x: Math.floor( Math.random() * gridSize ) + 1,
        y: Math.floor( Math.random() * gridSize ) + 1,
    };
};

export const outsideBoard = ( position ) => position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize;