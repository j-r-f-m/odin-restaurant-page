import './style.css'
import Background from './images/background.jpg'



const createPage = (() => {

    const createDomEle = (nameClass, typeOfElement, parent) =>  {   
        // select parent element
        const parentElement = document.querySelector(parent);
        console.log(parentElement);
        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        parentElement.appendChild(createDomElement);
        return 
    
    };
    
    const domObjs = (nameClass, typeOfElement, parent, txt) =>  {  
        // create a dom element 
    
        // select parent element
        const parentElement = document.querySelector(parent);
        
        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent= txt;
        parentElement.appendChild(createDomElement);
    };
    
    const linkElement = (nameClass, typeOfElement, parent, txt) => {
        // this function creates link dom elements
        domObjs(nameClass, typeOfElement, parent, txt)
        const link = document.querySelector(nameClass);
        

    }

    // create starting page
    // header
    const header = domObjs('header', 'header', '#content');
    // name of restaurant
    const restaurantName = domObjs('name-restaurant', 'div', '.header', 'Burger');
    // navigation
    const nav = domObjs('navigation', 'nav', '.header');
    //ul 
    const navList = domObjs('nav-list', 'ul', '.navigation');
    // list elements
    const linstOne = domObjs('list-1', 'li', '.nav-list');
    const lintTwo = domObjs('list-2', 'li', '.nav-list');
    const lintTHree = domObjs('list-3', 'li', '.nav-list');
    // link elements
    const link1 = linkElement('link-1', 'a', '.list-1', 'link-1'); 
    const link2 = linkElement('link-2', 'a', '.list-2', 'link-2'); 
    const link3 = linkElement('link-3', 'a', '.list-3', 'link-3'); 
    // description of restaurant
    const description = domObjs('description', 'article', '#content');
    //heading text
    const headingDescription = domObjs('heading-description', 'h1', '.description', 'Main Title');
    // text article
    let textOfPara = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam '
    const paraTxt = domObjs('text-para', 'p', '.description', textOfPara);
    // footer
    const footer = domObjs('footer', 'footer', '#content', 'footer')
    
    
    // set background iamge
    const content = document.querySelector('body');
    content.style.backgroundImage = `url(${Background})`;
    console.log(content)
    //content.appendChild(backgroundImg);
})();