// create the header
import { domObjs, linkElement } from "./utility.js";



const createHeader = () => {
        // header
    const header = domObjs('header', 'header', '#content');
    // name of restaurant
    const restaurantName = domObjs('name-restaurant', 'div', '.header', 'A La Plancha');
    // navigation
    const nav = domObjs('navigation', 'nav', '.header');
    //ul 
    const navList = domObjs('nav-list', 'ul', '.navigation');
    // list elements
    const linstOne = domObjs('list-1', 'li', '.nav-list');
    const lintTwo = domObjs('list-2', 'li', '.nav-list');
    const lintTHree = domObjs('list-3', 'li', '.nav-list');
    // link elements
    const link1 = linkElement('home', 'a', '.list-1', 'Home'); 
    const link2 = linkElement('food', 'a', '.list-2', 'Food'); 
    const link3 = linkElement('drinks', 'a', '.list-3', 'Drinks'); 
};

const createFooter = () => {
        // footer
        const footer = domObjs('footer', 'footer', '#content')
        const footerTxt = domObjs('footer-txt', 'div', 'footer', 'JRFM')
}


export { createHeader, createFooter };