import './style.css';

import { home } from './home.js';
import { createHeader, createFooter } from './headerFooter.js'
import { backGround } from './utility.js';

(() => {
    backGround();
    home();
    createHeader();
    createFooter();
    //testHome();
})();