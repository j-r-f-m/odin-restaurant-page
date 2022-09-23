// create food cards
import { domObj, foodCardFac } from "./utility";


const food = () => {
    // card container
    const cardContainer = domObj();
    cardContainer.createDomObject('card-container', 'div', '.description');

    // card1
    const foodCard1 = foodCardFac();
    foodCard1.createDomObject('card-1', 'div', '.card-container');
    foodCard1.createDomObject('food-header', 'p', '.card-1', 'BBQ Burger - 12,95 €');
    foodCard1.createDomObject('food-desc', 'p', '.card-1', 'Saftiges Rindfleisch mit knackigem Salat, Knusprigem Speck, Käse, Tomate, Röstzwiebel, Barbecue-Soße und Senf');

    // card2
    const foodCard2 = foodCardFac();
    foodCard2.createDomObject('card-2', 'div', '.card-container');
    foodCard2.createDomObject('food-header', 'p', '.card-2', 'Klassiker - 8,95 €');
    foodCard2.createDomObject('food-desc', 'p', '.card-2', 'Saftiges Rindfleisch mit knackigem Salat, Tomate, Zwiebel, Gewürzgurke, Ketchup und Senf');

    // card3
    const foodCard3 = foodCardFac();
    foodCard3.createDomObject('card-3', 'div', '.card-container');
    foodCard3.createDomObject('food-header', 'p', '.card-3', 'Cheeseburger - 9,95 €');
    foodCard3.createDomObject('food-desc', 'p', '.card-3', 'Saftiges Rindfleisch mit knackigem Salat, Käse, Tomate, Gewürzgurke, Röstzwiebel, Ketchup und Senf');

    // card4
    const foodCard4 = foodCardFac();
    foodCard4.createDomObject('card-4', 'div', '.card-container');
    foodCard4.createDomObject('food-header', 'p', '.card-4', 'Chili-Burger - 11,00 €');
    foodCard4.createDomObject('food-desc', 'p', '.card-4', 'Saftiges Rindfleisch mit knackigem Salat, Jalapeños, gegrillter Paprika, Senf und Chili-Soße');

    // card5
    const foodCard5 = foodCardFac();
    foodCard5.createDomObject('card-5', 'div', '.card-container');
    foodCard5.createDomObject('food-header', 'p', '.card-5', 'Anden-Burger - 11,50 €'); 
    foodCard5.createDomObject('food-desc', 'p', '.card-5', 'Saftiges Rindfleisch mit knackigem Salat, knusprigem Speck, Käse und hausgemachter Guacamole');
    
    // card6
    const foodCard6 = foodCardFac();
    foodCard6.createDomObject('card-6', 'div', '.card-container');
    foodCard6.createDomObject('food-header', 'p', '.card-6', 'Wald Burger - 11,50 €');
    foodCard6.createDomObject('food-desc', 'p', '.card-6', 'Saftiges Rindfleisch mit Rucola und Lollo-Bianco-Salat, knusprigen Speck, angeschwenkten Zwiebeln und Champignons, Barbecue-Sosse und Meerrettich-Sosse');
};

export { food };