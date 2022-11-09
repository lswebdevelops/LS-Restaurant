import _ from 'lodash';
import './style.css';
import Icon from './kitchen.jpg';


function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['LS-Restaurant'], ' ');
    element.classList.add('h1');


    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);



    return element;
  }
  
  document.body.appendChild(component());