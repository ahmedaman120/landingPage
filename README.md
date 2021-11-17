# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Create Navbar](#create-navbar)
* [Js Manipulation](#js-mainpulation)
* [Sections Navigation](#sections-navigation)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.



## First step

This step I create navbar using css code in the starter css file ,then I added the scroll behavior to html tag in css file to made scroll smooth when click on nav bar links. <br/>
<b>this list summarize the first step</b>
<ol>
  <li>add four li contains a tag to ul tag in html file</li>
  <li>add class <code>menu__link</code> to a tag thats child from <code>li</code></li>
  <li>Test</li>
</ol>

## Js Manipulation

In this step I will manipulate the sections in the page and when we look on the `index.html` we see this is the tree

```
BODY
    HEADER.page__header
    NAV.navbar__menu
        UL
            LI
                A.menu__link
            LI
                A.menu__link
            LI
                A.menu__link
            LI
                A.menu__link
    MAIN
        HEADER.main__hero
            H1
        SECTION.your-active-class
            DIV.landing__container
                H2
                P
                P
        SECTION
            DIV.landing__container
                H2
                P
                P
        SECTION
            DIV.landing__container
                H2
                P
                P
    FOOTER.page__footer
        P
```
as we see there is `HEADER` that will manipulate alone with `document.getElementsByClassName` and then add it to array that contain `section` objects that will manipulate with `document.querySelectorAll`.
 

## Sections Navigation

in this part of landing page we face some issues because js has no explicit function to detect what user see in the page thus so we will built some function to calculate where all sections lie from the viewport to make this I will use `offsetTop` attribute to find this to feed scroll event with them to check if the user arrive to section or not.