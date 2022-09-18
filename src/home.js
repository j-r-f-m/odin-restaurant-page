import Background from './images/background.jpg'
import { domObjs, linkElement} from './utility.js'
import { createHeader } from './headerFooter';


const home = (() => {
    // create starting page

    //createHeader();

    // main content
    // description of restaurant
    const description = domObjs('description', 'article', '#content');
    //heading text
    const headingDescription = domObjs('heading-description', 'h1', '.description', 'A La Plancha');
    // text article
    let textOfPara = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam '
    const paraTxt = domObjs('text-para', 'p', '.description', textOfPara);


    
    // set background image
    const content = document.querySelector('body');
    content.style.backgroundImage = `url(${Background})`;
    //console.log(content)
    //content.appendChild(backgroundImg);
});


const testHome = () => console.log('home-module')

export {
    testHome,
    home
}