function getPointerPosition(event) {
    // Get absolute pointer position in pixels
    const { clientX: pointerAbsolutePositionX, clientY: pointerAbsolutePositionY } = event;

    // Convert absolute position to percentage of window dimensions
    const x = (pointerAbsolutePositionX / window.innerWidth) * 100;
    const y = (pointerAbsolutePositionY / window.innerHeight) * 100;

    return { x, y };
}


function getEyePosition(eyeProperties) {
    // Get dimensions of eye element
    const {
        width: eyeWidth,
        height: eyeHeight,
        left: eyeDistanceFromWindowLeft,
        top: eyeDistanceFromWindowTop,
    } = eyeProperties;

    // Find absolute position of the eye's center in window
    const eyeCenterAbsolutePagePositionX = eyeDistanceFromWindowLeft + (eyeWidth / 2);
    const eyeCenterAbsolutePagePositionY = eyeDistanceFromWindowTop + (eyeHeight / 2);

    // Convert absolute position to percentage of window
    const eyePositionX = eyeCenterAbsolutePagePositionX / window.innerWidth * 100;
    const eyePositionY = eyeCenterAbsolutePagePositionY / window.innerHeight * 100;

    return { eyePositionX, eyePositionY };
}


function calculateNewPupilPosition(pointerPosition, eyePosition) {
    const { x: pointerXPosition, y: pointerYPosition } = pointerPosition;
    const { eyePositionX, eyePositionY } = eyePosition;

    // Make sure pupils are in center of eye when cursor is over center of eye
    let x = pointerXPosition - eyePositionX + 50;
    let y = pointerYPosition - eyePositionY + 50;
    // E.g. center of eye @ 25% of window, pointer @ 25% of window - then pupil needs to be @ 50% of eye, hence +50. 

    // Limit range of movement
    if (x > 80) x = 80;
    if (x < 20) x = 20;
    if (y > 80) y = 80;
    if (y < 20) y = 20;

    return { x, y };
}


export {
    getPointerPosition,
    getEyePosition,
    calculateNewPupilPosition,
};