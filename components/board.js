"use strict";

const board = document.querySelector('#board');

let queryMobileLandscape = window.matchMedia(' (max-width: 740px) and (orientation: landscape) ').matches;
let queryTablet = window.matchMedia('(min-width: 768px)').matches;
let queryTabletLandscape = window.matchMedia('(min-width: 768px) and (orientation: landscape) ').matches;
let queryDesktop = window.matchMedia('(min-width: 1200px)').matches;

export let columnNumber = 0;
export let rowNumber = 0;

if ( queryMobileLandscape ) { 
    columnNumber = 21;
    rowNumber = 20;
 }
else if ( queryTablet ) { 
    columnNumber = 33;
    rowNumber = 31;
} 
else if ( queryTabletLandscape ) { 
    columnNumber = 32;
    rowNumber = 27;
 }
else if ( queryDesktop ) { 
    columnNumber = 32;
    rowNumber = 27;
 }
else { 
    columnNumber = 20;
    rowNumber = 24;
 } 