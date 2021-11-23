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
 * Define Global Variables
 * 
 */
let fragment = document.createDocumentFragment();
let navBarParent = document.getElementById('navbar__list');
let sections = document.getElementsByTagName('section');
let mainBody = document.getElementsByTagName('main')[0];
let idList = [];


//those variable will use in scroll event function
let style = (document.getElementsByClassName('landing__container')[0].currentStyle ||
    window.getComputedStyle(document.getElementsByClassName('landing__container')[0]));
const padding = parseInt(style.paddingTop);
const sectionsHeight = getBoundingOfEachSection(sections, 'height');
const leftOfSections = getBoundingOfEachSection(sections, 'left');

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
    // linkElemetn.href = "#".concat(anchorRel);
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



function getBoundingOfEachSection(sections, type) {
    let topOfEachSection = [];
    for (let section of sections) {
        topOfEachSection.push(section.getBoundingClientRect()[type]);
    }
    return topOfEachSection;

}


function createSection(section) {
    const id = section.id;
    const headerOfSection = section.firstElementChild.childNodes[1].textContent;
    fragment.appendChild(createNavElement(headerOfSection, id));
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



//initialize tops of the sections 
//this variable will use with scroll event to add active class.

Array.prototype.forEach.call(sections, createSection);

navBarParent.appendChild(fragment);
//End of creating Navbar


window.addEventListener('scroll', (ev) => {
    /**
     * the main idea I think about it is getting the boundary of 
     * using getBoundingOfEachSection function and organize
     * the values bottoms and tops must change while scrolling
     * to calculate if the user arrive to section or not 
     * expect Heights it's constant to make sure the user
     * still in the section or not . 
     */
    let sectionsTops = getBoundingOfEachSection(sections, 'top');
    for (let index in sectionsTops) {
        let c = sectionsTops[index] - window.screenY
        if (c <= 9 && c >= (sectionsHeight[index] + padding) * -1) {

            // Add class 'active' to section when near top of viewport
            // document.querySelectorAll('#navbar__list li .menu__link')[index].classList.add('active');
            sections[index].classList.add(...['active', 'your-active-class']);
        } else {
            // document.querySelectorAll('#navbar__list li .menu__link')[index].classList.remove('active');
            sections[index].classList.remove(...['active', 'your-active-class']);
        }
    }
});


// Scroll to anchor ID using scrollTO event
//in this section I will prevent the default actiont of section while clicking
for (let i = 0; i < navBarParent.children.length; i++) {
    navBarParent.children[i].addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            //the offset Top is the constant the pxs from viewport and the section .
            top: sections[i].offsetTop,
            left: leftOfSections[i],
            behavior: 'smooth'
        });
    });
}