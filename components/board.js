"use strict";

const board = document.querySelector('#board');

let querySmall_414_Portrait = window.matchMedia(' (min-width: 414px) and (orientation: portrait) ').matches;
let querySmall_414_Landscape = window.matchMedia(' only screen and (min-width: 736px) and (orientation: landscape)').matches;
let queryMedium_700_Portrait = window.matchMedia(' only screen and (min-width: 700px) and (orientation: portrait) ').matches;
let queryMedium_1000_Landscape = window.matchMedia('(min-width: 768px)').matches;
let queryLarge = window.matchMedia(' only screen and (min-width: 1200px) ').matches;

export let columnNumber = 0;
export let rowNumber = 0;

if ( querySmall_414_Portrait || querySmall_414_Landscape ) { 
    columnNumber = 23;
    rowNumber = 22;
 }
else if ( queryMedium_700_Portrait ) { 
    columnNumber = 28;
    rowNumber = 24;
} 
else if ( queryMedium_1000_Landscape ) { 
    columnNumber = 30;
    rowNumber = 24;
 }
else if ( queryLarge ) { 
    columnNumber = 42;
    rowNumber = 25;
 }
else { 
    columnNumber = 17;
    rowNumber = 17;
 } 