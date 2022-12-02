"use strict";

const arrowUp = document.querySelector('.controller-up');
const arrowRight = document.querySelector('.controller-right');
const arrowDown = document.querySelector('.controller-down');
const arrowLeft = document.querySelector('.controller-left');

export let controllerDirections = '';

arrowUp.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'up';
});
arrowRight.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'right'; 
});

arrowDown.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'down'; 
});

arrowLeft.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'left'; 
});
