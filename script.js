const boxes = document.querySelectorAll('.box')


/* Line 5 is adding an event listener to the window so that it can check for a user's scroll action
the 'scroll' in parenthesis is the actual event that is being passed through the addEventListener method
and the checkBoxes is a function that will be passed through (written later)*/

window.addEventListener('scroll', checkBoxes)

checkBoxes();

/* this function checks the position of your box/image/content etc */
function checkBoxes(){
    const triggerBottom = (window.innerHeight/5*4)
/* here we are calling boxes (which we brought in using line 1, they are treated as a node list),
and passing them through a forEach loop where one of the pass through variables is "box" aka the name of the divs we 
are using for content boxes*/
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}





/*getBoundingClientRect is a built in method*/