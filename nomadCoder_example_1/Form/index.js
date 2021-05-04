const nameO = document.querySelector('#nameOrder');
const telO = document.querySelector('#telOrder');
const addrO = document.querySelector('#addrOrder');

const nameT = document.querySelector('#nameTak');
const telT = document.querySelector('#telTak');
const addrT = document.querySelector('#addrTak');

const copyBtn = document.querySelector('#copyContent');

function handleCheck(){  
  if(copyBtn.checked === true){
    nameT.value = nameO.value;
    telT.value = telO.value;
    addrT.value = addrO.value;
  }
  else{
    nameT.value = '';
    telT.value = '';
    addrT.value = '';
  }
}
copyBtn.addEventListener('click',handleCheck);
