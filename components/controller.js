"use strict";

const arrowUp = document.querySelector('.controller-up');
const arrowRight = document.querySelector('.controller-right');
const arrowDown = document.querySelector('.controller-down');
const arrowLeft = document.querySelector('.controller-left');

export let controllerDirections = '';

arrowUp.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'up';
}, { passive: false });
arrowRight.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'right'; 
}, { passive: false });

arrowDown.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'down'; 
}, { passive: false });

arrowLeft.addEventListener( 'touchstart', ( eve ) => {
    eve.preventDefault();
    controllerDirections = 'left'; 
}, { passive: false });