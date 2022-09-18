// this module contains functions that create and manipulate dom elements



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
    link.addEventListener('click', testfunc)
    };

function testfunc () {
    
    console.log('testfunc');
}

//const button = ()

export {
    domObjs,
    linkElement
}