"use strict";

const arrowUp = document.querySelector('.controller-up');
const arrowRight = document.querySelector('.controller-right');
const arrowDown = document.querySelector('.controller-down');
const arrowLeft = document.querySelector('.controller-left');

export let controllerDirections = '';

arrowUp.addEventListener( 'touchstart', () => controllerDirections = 'up' );
arrowRight.addEventListener( 'touchstart', () => controllerDirections = 'right' );
arrowDown.addEventListener( 'touchstart', () => controllerDirections = 'down' );
arrowLeft.addEventListener( 'touchstart', () => controllerDirections = 'left' );