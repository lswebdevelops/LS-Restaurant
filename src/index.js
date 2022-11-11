import _ from 'lodash';
import './style.css';
import Icon from './laughing.svg';



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

  function printMe() {
    console.log('I get called from print.js!');
  }
  function component2() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
    
 

    return element;
  }
  
  document.body.appendChild(component2());


