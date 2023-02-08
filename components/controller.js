"use strict";

const arrowUp = document.querySelector('.controller__up');
const arrowRight = document.querySelector('.controller__right');
const arrowDown = document.querySelector('.controller__down');
const arrowLeft = document.querySelector('.controller__left');

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