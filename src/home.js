import { domObj } from './utility.js'



const home = (() => {
    const descr = domObj();
    descr.createDomObject('description', 'article', '#content');

    // container
    const descrCon = domObj();
    descrCon.createDomObject('description-container', 'div', '.description');

    //heading text
    const headDescr = domObj();
    headDescr.createDomObject('heading-description', 'h1', '.description-container', 'A La Plancha');
    
    // text article
    let textOfPara = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam '
    const txtDescr = domObj();
    txtDescr.createDomObject('text-para', 'p', '.description-container', textOfPara)

});


//const testHome = () => console.log()

export {
    //testHome,
    home
}