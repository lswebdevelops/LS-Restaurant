import _ from 'lodash';
import './style.css';


const para = document.getElementById('content')

  function paragh(){
    
	  const element =document.createElement('p');
	  
	   // Lodash, now imported by this script
    element.innerHTML = _.join(['LS-RESTAURANT'], ' ');
    element.classList.add('p1');
    return element;
	
  }
  
   para.appendChild(paragh());
	