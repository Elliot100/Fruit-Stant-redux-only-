import { createStore } from "redux";
import { addApple, addOrange } from './actions.js';
import reducer from './reducer.js';

const store = createStore(reducer);

//put onto the window
window.store = store;
window.addApple = addApple;
window.addOrange = addOrange;