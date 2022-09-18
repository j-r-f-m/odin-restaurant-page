// this module contains functions that create and manipulate dom elements
import { food } from "./food";
import { home } from "./home";



// 
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
// replace following function
const linkElement = (nameClass, typeOfElement, parent, txt) => {
    // this function creates link dom elements
    domObjs(nameClass, typeOfElement, parent, txt)
    console.log(nameClass)
    const link = document.querySelector(`.${nameClass}`);
    console.log(link)
    link.addEventListener('click', () => {
        deleteAllChildren('content');
    })
    // a second eventlistener needs to be created because the e-event argument 
    // has to be passed 
    // it was not possible to incldue the function call in above event listener
    link.addEventListener('click',createDemandedPage)
    };


function testfunc () {
    
    console.log('testfunc');
}

const deleteAllChildren = (parentNode) => {
    // delete all children from parent node
    // is called when user clicks on navigation buttons
    const contentNode = document.querySelector('article')
    //console.log(contentNode)
    contentNode.innerHTML = '';
}

//create demanded page
const createDemandedPage = (e) => { 
    // create the page the user wants to see next
    const nameOfPage = e.target.className;
    console.log(nameOfPage);
    if (nameOfPage === 'food') {
        food();
    } else if (nameOfPage === 'home') {
        home();
    } else if (nameOfPage === 'drinks') {
        drinks();
    }
    

    //testfunc();
}   


//const button = ()

export {
    domObjs,
    linkElement
}