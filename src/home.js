import Background from './images/background.jpg'
import { domObjs, linkElement} from './utility.js'


const homePage = (() => {

    // create starting page

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
    const link1 = linkElement('link-1', 'a', '.list-1', 'Home'); 
    const link2 = linkElement('link-2', 'a', '.list-2', 'Food'); 
    const link3 = linkElement('link-3', 'a', '.list-3', 'Drinks'); 

    // main content
    // description of restaurant
    const description = domObjs('description', 'article', '#content');
    //heading text
    const headingDescription = domObjs('heading-description', 'h1', '.description', 'A La Plancha');
    // text article
    let textOfPara = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam '
    const paraTxt = domObjs('text-para', 'p', '.description', textOfPara);

    // footer
    const footer = domObjs('footer', 'footer', '#content')
    const footerTxt = domObjs('footer-txt', 'div', 'footer', 'JRFM')
    
    // set background image
    const content = document.querySelector('body');
    content.style.backgroundImage = `url(${Background})`;
    //console.log(content)
    //content.appendChild(backgroundImg);
});


const testHome = () => console.log('home-module')

export {
    testHome,
    homePage
}