// create the header
import { domObjs, domObj, linkElement } from "./utility.js";



const createHeader = () => {
        // header
        const hearderNav = domObj();
        hearderNav.createDomObject('header', 'header', '#content');



        // name of restaurant
        const resName = domObj();
        resName.createDomObject('name-restaurant', 'div', '.header', 'A La Plancha');

        // navigation
        const navi = domObj();
        navi.createDomObject('navigation', 'nav', '.header');
        
        //ul 
        const naviList = domObj();
        naviList.createDomObject('nav-list', 'ul', '.navigation');
        
        // list elements
        const li1 = domObj();
        li1.createDomObject('list-1', 'li', '.nav-list');
        
        const li2 = domObj();
        li2.createDomObject('list-2', 'li', '.nav-list');
        
        const li3 = domObj();
        li3.createDomObject('list-3', 'li', '.nav-list');
        
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