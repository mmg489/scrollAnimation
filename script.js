const boxes = document.querySelectorAll('.box')


/* Line 5 is adding an event listener to the window so that it can check for a user's scroll action
the 'scroll' in parenthesis is the actual event that is being passed through the addEventListener method
and the checkBoxes is a function that will be passed through (written later)*/

window.addEventListener('scroll', checkBoxes)

checkBoxes();

/* this function checks the position of your box/image/content etc */
function checkBoxes(){
    console.log(window.innerHeight/5*4)

}