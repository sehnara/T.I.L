const textRange = document.querySelector('.js-textRange');

const form = document.querySelector('.js-formRange');
const numInput = form.querySelector('input');

let maxvalue = 0;

function handleChange(){
  maxvalue = numInput.value;  
  textRange.innerHTML = `Generate a number between 0 and ${maxvalue}`;  
}

function init(){
  // 1. input(range) 변화 값을 h2에 반영
  numInput.addEventListener('change', handleChange);
}
init();