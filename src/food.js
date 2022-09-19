// create food cards
import { domObjs, linkElement, foodCardFac } from "./utility";


const food = () => {
    // card container
    const cardContainer = domObjs('card-container', 'div', '.description');

    // card-burger 1
    //const card1 = domObjs('card-1', 'div', '.card-container');
    // const h1Card = domObjs('h1-card', 'h1', '.card-1', 'BBQ Burger');
    // card1.innerHTML = '<ul><li>ingredients<li><li>Beef<li><li>Tomatoe<li><li>Cheese<li>' 

    const foodCard1 = foodCardFac();
    //foodCard1.createCard('div')
    foodCard1.createDomObject('card-1', 'div', '.card-container');
    

};

export { food };