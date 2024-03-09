//Tabbed Menu

function openMenu(event,menuName) {
    //Grab the element with the class of menu from the DOM
    let menuArray = document.getElementsByClassName('menu')
    //Loop through each nested anchor tag and set the display to none
    for(let i = 0; i < menuArray.length; i++) {
        menuArray[i].style.display = 'none';
    }
    //Declare the tablinks variable to be the element with the class name, 'tablink'
    let tablinks = document.getElementsByClassName('tablink')
    //Remove 'active-tab' from each element
    for(let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active-tab');
    }
    //Set the display to block, making it visible.
    document.getElementById(menuName).style.display = 'block'
    //The element in which the handler is attached (currentTarget) will have the 'active-tab' class added, which applies styling to it as it is made active.
    event.currentTarget.classList.add('active-tab');
}
//Click event will run to set the Dumplings menu as the default to show
document.getElementById('mainLink').click()

