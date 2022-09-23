import { domObj, foodCardFac } from "./utility";

const drinks = () => {
        // card container
        const cardContainer = domObj();
        cardContainer.createDomObject('card-container', 'div', '.description');
    
        // card1
        const drinkCard1 = foodCardFac();
        drinkCard1.createDomObject('card-1', 'div', '.card-container');
        drinkCard1.createDomObject('drink-header', 'p', '.card-1', 'Caipirinha - 12,95 €');
        drinkCard1.createDomObject('drink-desc', 'p', '.card-1', 'Cachaca, Limette, Crushed Ice, Rohrzucker');

        // card2
        const drinkCard2 = foodCardFac();
        drinkCard2.createDomObject('card-2', 'div', '.card-container');
        drinkCard2.createDomObject('drink-header', 'p', '.card-2', 'Pina Colada - 10,95 €');
        drinkCard2.createDomObject('drink-desc', 'p', '.card-2', 'Wießer Rum, Ananassaft, Cream of Cocunut, Schlagsahne, Eiswürfel, Scheibe Ananas, Kokosflocken');

        
        // card3
        const drinkCard3 = foodCardFac();
        drinkCard3.createDomObject('card-3', 'div', '.card-container');
        drinkCard3.createDomObject('drink-header', 'p', '.card-3', 'Magarita - 11,95 €');
        drinkCard3.createDomObject('drink-desc', 'p', '.card-3', 'Tequila, Triple Sec, Meersalz, Agavendicksaft, Eiswürfel');

        // card4
        const drinkCard4 = foodCardFac();
        drinkCard4.createDomObject('card-4', 'div', '.card-container');
        drinkCard4.createDomObject('drink-header', 'p', '.card-4', 'Erdbeer-Mojito - 11,25 €');
        drinkCard4.createDomObject('drink-desc', 'p', '.card-4', 'Erdbeeren, Rohrzucker, Blätter Minze, Weißer Rum, Eiswürfel, Zitrone, Soda');

        // card5
        const drinkCard5 = foodCardFac();
        drinkCard5.createDomObject('card-5', 'div', '.card-container');
        drinkCard5.createDomObject('drink-header', 'p', '.card-5', 'Cuba-Libre - 11,25 €');
        drinkCard5.createDomObject('drink-desc', 'p', '.card-5', 'Cola, Limette, Weißer Rum, Eiswürfel, Limette');

        // card6
        const drinkCard6 = foodCardFac();
        drinkCard6.createDomObject('card-6', 'div', '.card-container');
        drinkCard6.createDomObject('drink-header', 'p', '.card-6', 'Moscuw Mule - 10,25 €');
        drinkCard6.createDomObject('drink-desc', 'p', '.card-6', 'Gurke, Limettensaft, Vodka, Ginger Beer');

        // card7
        const drinkCard7 = foodCardFac();
        drinkCard7.createDomObject('card-7', 'div', '.card-container');
        drinkCard7.createDomObject('drink-header', 'p', '.card-7', 'Gin Tonix - 11,25 €');
        drinkCard7.createDomObject('drink-desc', 'p', '.card-7', 'Gin, Tonic, Eiswürfel');
} 

export {
        drinks
}