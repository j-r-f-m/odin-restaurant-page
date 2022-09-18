// create food cards
import { domObjs, linkElement } from "./utility";


const food = () => {
    // card container
    const cardContainer = domObjs('card-container', 'div', '.description');

    // card-burger 1
    const card1 = domObjs('card-1', 'div', '.card-container');
    const h1Card = domObjs('h1-card', 'h1', '.card-1', 'BBQ Burger');


};

export { food };