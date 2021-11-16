/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 * What I will do here?
 * First Day
 * 1- I will gather all section + header 
 * 2- Create DocumentFragment to add in it the navbar items 
 * 3- make loop to create items
 * 4- append items to the dom tree to reflow and repaint at the same time to enhance performance
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function createNavElement(name, anchorRel) {
    /**
     * this function create one element of nav bar
     * 
     * args
     *  name is the string that will be anchor's text 
     *  anchorRel is the section Id 
     * 
     * return 
     *  liElement is the list item tag contain anchor 
     */
    let liElement = document.createElement('li');
    let linkElemetn = document.createElement('a');
    linkElemetn.classList.add('menu__link');
    linkElemetn.href = "#".concat(anchorRel);
    linkElemetn.textContent = name;
    liElement.appendChild(linkElemetn);
    return liElement;
}


// this function add id to if there's no id in section or header 
function addIdToSection(id, ele) {
    ele.setAttribute("id", id);
    return ele;
}

function containId(ele) {
    return ele.id != '';
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
/**
 * first find the number of sections in page
 */
let fragment = document.createDocumentFragment();
let navBarParent = document.getElementById('navbar__list');
let sections = document.getElementsByTagName('section');
let idList = []
Array.prototype.forEach.call(sections, (section) => {
    const id = section.id;
    const headerOfSection = section.firstElementChild.childNodes[1].textContent;
    fragment.appendChild(createNavElement(headerOfSection, id))
});

navBarParent.appendChild(fragment);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active