//Dynamically populates the input with the current date and time
document.getElementById("dateInput").value = new Date().toISOString().slice(0, 16);

//Alert Box Display Success/Failure
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search)

    //Looking for parameters and alering messages depending on success or error
    //Use ternary here?
    if(urlParams.has('success')) {
        alert('Reservation successful')
    } else if(urlParams.has('error')) {
        alert('There was an error making the reservation, please call 555-555-5555')
    }
}



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



