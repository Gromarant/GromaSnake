const joystick = document.querySelector('.joystick-middle');
const joystickCenter = document.querySelector('.joystick-center');
let initialPositionX = 0;
let initialPositionY = 0;
export let positionX = 0;
export let positionY = 0;


export const joystickControlerPosition = () => {
    joystick.style.justifyContent = 'center';
    joystick.style.alignItems = 'center';
};

const setControlerMove = ( eve ) => {
    joystickCenter.style.position ='absolute';
    joystickCenter.style.left = `${positionX}px`;
    joystickCenter.style.top = `${positionY}px`;
};
joystick.addEventListener( 'touchstart', eve => {
    eve.preventDefault();
    initialPositionX= eve.touches[0].clientX;
    initialPositionY = eve.touches[0].clientY;
});

joystick.addEventListener( 'touchmove', eve => {
    eve.preventDefault();
    positionX = eve.touches[0].pageX;
    positionY = eve.touches[0].pageY;
    setControlerMove( eve );
});

joystick.addEventListener( 'touchend', () => joystickControlerPosition() );