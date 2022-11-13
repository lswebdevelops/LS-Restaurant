import _ from 'lodash';
import './style.css';

// arrray recepies and beverages: it's used to generate a ramdon menu
// randon number from 1 to 17

let random1to17 = Math.floor(Math.random() * (17 - 1 + 1)) + 1;
let random1to17_1 = Math.floor(Math.random() * (17 - 1 + 1)) + 1;
let random1to17_2 = Math.floor(Math.random() * (17 - 1 + 1)) + 1;
// random number from 1 t0 6
let random1to6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let random1to6_1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let random1to6_2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;


const recepies = {
  optionDish1: 'ANTIPASTO PLATE WITH OLIVES, PARMIGIANO, MORTADELLA, SPICY COPPA, AND PROSCIUTTO',
  optionDish2: 'OLIVES ',
  optionDish3: 'FAVA BEAN PUREE ' ,
  optionDish4: ' HAKUREI TURNIPS WITH ANCHOVY, WALNUTS AND PARMIGIANO' ,
  optionDish5: 'CHICORIES WITH RADISH, MUSTARD VINAIGRETTE AND CACIOCAVALLO' ,
  optionDish6: ' MARINATED BEETS WITH STRACCIATELLA AND HAZELNUTS' ,
  optionDish7: 'TAGLIATELLE WITH MAITAKE MUSHROOMS ' ,
  optionDish8: 'FUSILLI WITH ROMANESCO, GOLDEN RAISINS AND BREADCRUMBS ' ,
  optionDish9: ' SPAGHETTI WITH SWORDFISH, TOMATOES AND PINE NUTS' ,
  optionDish10: ' CHICKEN DIAVOLO WITH ROASTED BROCCOLINI' ,
  optionDish11: ' PORK CHOP WITH SWEET POTATOES, BROCCOLI LEAF AND MUSTARD' ,
  optionDish12: ' STRIPED BASS WITH POTATOES AND PISTACHIO PESTO' ,
  optionDish13: ' TROUT CONSERVA WITH RADISHES, HABANADA PEPPERS AND AN EGG' ,
  optionDish14: ' CHICKPEA, CABBAGE AND KOGINUT SQUASH STEW WITH A FRIED EGG' ,
  optionDish15: 'ORECCHIETTE WITH SAUSAGE, BROCCOLI LEAF AND RICOTTA ' ,
  optionDish16: 'CHITARRA WITH TOMATO ' ,
  optionDish17: ' ' ,
  dessert1: ' OLIVE OIL CAKE WITH PLUOTS' ,
  dessert2: ' PANNA COTTA WITH FRUTTI DI BOSCO' ,
  dessert3: ' PISTACHIO ICE CREAM' ,
  dessert4: 'CHOCOLATE SORBETTO ' ,
  dessert5: ' CHOCOLATE SORBETTO' ,
  dessert6: ' PISTACHIO ICE CREAM' ,

  optionSparkling1:'DURELLA | VENETO 2018',
  optionSparkling2:'GARGANEGA | VENETO 2020',
  optionSparkling3:'GLERA | VENETO 2018',
  optionSparkling4:'GLERA | VENETO 2020',
  optionSparkling5:'TREBBIANO | EMILIA-ROMAGNA 2020',
  optionSparkling6:'CHARDONNAY | CHAMPAGNE NV',

  optionWhite1:"PINOT GRIS | VALLE D’AOSTA 2019" ,
  optionWhite2:'PINOT BIANCO, MANZONI BIANCO | TRENTINO-ALTO ADIGE 2019',
  optionWhite3:'KERNER | TRENTINO -ALTO ADIGE 2020',
  optionWhite4:'GEWURZTRAMINER | TRENTINO-ALTO ADIGE 2019',
  optionWhite5:'NOSIOLA | TRENTINO-ALTO ADIGE 2020',
  optionWhite6:'CHARDONNAY | FRIULI 2011',

  optionRed1:'GRIGNOLINO | PIEMONTE 2020',
  optionRed2:'NEBBIOLO | PIEMONTE NV',
  optionRed3:'NEBBIOLO | PIEMONTE 2019',
  optionRed4:'PINOT NERO | VENETO 2019',
  optionRed5:'SANGIOVESE | TOSCANA 2019',
  optionRed6:'SANGIOVESE | TOSCANA 2020',
}
// console.log(recepies.first1)

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
//  creating the inner supperior buttons:
function innerDivtop() {
    const div1 = document.createElement('button');
    div1.innerText = _.join(['Dinner'], ' ');
    div1.classList.add('innerDiv1');
    return div1;
}
divTop.appendChild(innerDivtop());

function innerDivtop2() {
    const div2 = document.createElement('button');
    div2.innerText = _.join(['Lunch'], ' ');
    div2.classList.add('innerDiv2');
    return div2;
}

divTop.appendChild(innerDivtop2());

function innerDivtop3() {
    const div3 = document.createElement('button');
    div3.innerText = _.join(['Beverage'], ' ');
    div3.classList.add('innerDiv3');
    return div3;
}

divTop.appendChild(innerDivtop3());





  // clicking the buttons: 
let buttonLunchEvent = document.querySelector('.innerDiv1').addEventListener('click', buttonDinner)

// when clicking ' Dinner' > shows content
function buttonDinner(e){
 
  
  
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
    element.innerText = _.join([`${ monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`], ' ');
    element.classList.add('p3');
    return element;
  
  }
  
  para.appendChild(paraDate());
  
  
  // defining the first, second, third and dessert: 
  
  function first() {
    const element = document.createElement('p');
    // Lodash, now imported by this script
    element.innerText = _.join([`FIRST`], ' ');
    element.classList.add('servings');
    return element;
  }
  para.appendChild(first());
  princesDishes()
  
  
  function second() {
    const element = document.createElement('p');
    // Lodash, now imported by this script
    element.innerText = _.join([`SECOND`], ' ');
    element.classList.add('servings');
    return element;
  }
  para.appendChild(second());
  princesDishes()
  function third() {
    const element = document.createElement('p');
    // Lodash, now imported by this script
    element.innerText = _.join([`THIRD`], ' ');
    element.classList.add('servings');
    return element;
  }
  para.appendChild(third());
  princesDishes()
  
  function dessert() {
    const element = document.createElement('p');
    // Lodash, now imported by this script
    element.innerText = _.join([`DESSERT`], ' ');
    element.classList.add('servings');
    return element;
  }
  para.appendChild(dessert());
  princesDishesDesserts()
  
  function princesDishes(){
  //dish: 
  const element1 = document.createElement('p');
    // Lodash, now imported by this script
    element1.innerText = _.join([`${recepies[`optionDish${random1to17}`]}` ], ' ');
    element1.classList.add('p2');
   para.appendChild(element1);
  
   
   // create a random price:
   let random = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  // price: 
   const price1 = document.createElement('p');
    // Lodash, now imported by this script
    price1.innerText = _.join([`$${random}`], ' ');
    price1.classList.add('p4');
   para.appendChild(price1);
  
  
  //dish: 
  
  const element2 = document.createElement('p');
    // Lodash, now imported by this script
    element2.innerText = _.join([`${recepies[`optionDish${random1to17_1}`]}` ], ' ');
    element2.classList.add('p2');
   para.appendChild(element2);
   // create a random price:
   let random2 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
   // price: 
  const price2 = document.createElement('p');
  // Lodash, now imported by this script
  price2.innerText = _.join([`$${random2}`], ' ');
  price2.classList.add('p4');
  para.appendChild(price2);
  
  //dish3: 
  
  const element3 = document.createElement('p');
    // Lodash, now imported by this script
    element3.innerText = _.join([`${recepies[`optionDish${random1to17_2}`]}` ], ' ');
    element3.classList.add('p2');
   para.appendChild(element3);
   // create a random price:
   let random3 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
   // price: 
  const price3 = document.createElement('p');
  // Lodash, now imported by this script
  price3.innerText = _.join([`$${random3}`], ' ');
  price3.classList.add('p4');
  para.appendChild(price3);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function princesDishesDesserts(){
    //dish: 
    const element1 = document.createElement('p');
      // Lodash, now imported by this script
      element1.innerText = _.join([`${recepies[`dessert${random1to6}`]}` ], ' ');
      element1.classList.add('p2');
     para.appendChild(element1);
    
     
     // create a random price:
     let random = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
    // price: 
     const price1 = document.createElement('p');
      // Lodash, now imported by this script
      price1.innerText = _.join([`$${random}`], ' ');
      price1.classList.add('p4');
     para.appendChild(price1);
    
    
    //dish: 
    
    const element2 = document.createElement('p');
      // Lodash, now imported by this script
      element2.innerText = _.join([`${recepies[`dessert${random1to6_2}`]}` ], ' ');
      element2.classList.add('p2');
     para.appendChild(element2);
     // create a random price:
     let random2 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
     // price: 
    const price2 = document.createElement('p');
    // Lodash, now imported by this script
    price2.innerText = _.join([`$${random2}`], ' ');
    price2.classList.add('p4');
    para.appendChild(price2);
    
    //dish3: 
    
    const element3 = document.createElement('p');
      // Lodash, now imported by this script
      element3.innerText = _.join([`${recepies[`dessert${random1to6_1}`]}` ], ' ');
      element3.classList.add('p2');
     para.appendChild(element3);
     // create a random price:
     let random3 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
     // price: 
    const price3 = document.createElement('p');
    // Lodash, now imported by this script
    price3.innerText = _.join([`$${random3}`], ' ');
    price3.classList.add('p4');
    para.appendChild(price3);
    }
    
    }



