import './style.css';

import { testHome, home } from './home.js';
import { foodPage } from './food.js';
import { createHeader, createFooter } from './headerFooter.js'





(() => {
    testHome();
    home();
    createHeader();
    createFooter();
    //testHome();
})();