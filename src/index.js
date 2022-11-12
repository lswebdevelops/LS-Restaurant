import _ from 'lodash';
import './style.css';


const para = document.getElementById('content')

function paragh() {

    const element = document.createElement('p');

    // Lodash, now imported by this script
    element.innerText = _.join(['LS-RESTAURANT'], ' ');
    element.classList.add('p1');
    return element;

}

para.appendChild(paragh());
//  creating the supperior div:

function divtop() {

    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.classList.add('divTop');
    return element;
}
para.appendChild(divtop());
const divTop = document.querySelector('.divTop')
//  creating the inner supperior divs:
function innerDivtop() {
    const div1 = document.createElement('div');
    div1.innerText = _.join(['Dinner'], ' ');
    div1.classList.add('innerDiv');
    return div1;
}
divTop.appendChild(innerDivtop());

function innerDivtop2() {
    const div2 = document.createElement('div');
    div2.innerText = _.join(['Lunch'], ' ');
    div2.classList.add('innerDiv');
    return div2;
}

divTop.appendChild(innerDivtop2());

function innerDivtop3() {
    const div3 = document.createElement('div');
    div3.innerText = _.join(['Beverage'], ' ');
    div3.classList.add('innerDiv');
    return div3;
}

divTop.appendChild(innerDivtop3());



//  adding text below the top divs:



function paragh2() {

    const element = document.createElement('p');

    // Lodash, now imported by this script
    element.innerText = _.join([`WE OFFER LOAVES OF DELICIOUS SHE WOLF BREAD FOR \nSALE \nMON-FRI BEGINNING AT 5PM, AND SAT-SUN BEGINNING AT \nNOON. \nAVAILABLE WHILE SUPPLIES LAST.`], ' ');
    element.classList.add('p2');
    return element;

}

para.appendChild(paragh2());


function paraDate() {

  const element = document.createElement('p');
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let today = new Date();
  // Lodash, now imported by this script
  element.innerText = _.join([`${ monthNames[today.getMonth()]} ${today.getDay()}, ${today.getFullYear()}`], ' ');
  element.classList.add('p3');
  return element;

}

para.appendChild(paraDate());