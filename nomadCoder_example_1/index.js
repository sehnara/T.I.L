const textRange = document.querySelector('.js-textRange');

const form = document.querySelector('.js-formRange');
const numInput = form.querySelector('input');
const choose = document.querySelector('.js-chooseNum');
const userInput = choose.querySelector('.js-userInput');
const submit = choose.querySelector('.js-submit');

const result = document.querySelector('.js-result');

let maxValue = 0;

function handleClick(){ 
  // 결과를 보여줄 paragraph 2줄 생성
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');  

  // get userNum & machineNum 
  let randNum = getRandomNum();
  let userNum = parseInt(userInput.value);

  // 결과 paragraph에 결과 문장 넣어주기
  para1.innerHTML = `You Chose : ${userNum}, the machine chose : ${randNum}`;

  if(randNum === userNum){
    para2.innerHTML = `You win!`;
  }else{
    para2.innerHTML = `You lost!`;
  } 
  result.appendChild(para1);
  result.appendChild(para2);
}

function chooseNum(){
  submit.addEventListener('click',handleClick);
}

function getRandomNum(){
  const randomNum = Math.floor(Math.random()*(maxValue+1));  
  return randomNum;
}
function handleChange(){
  maxValue = parseInt(numInput.value);  
  textRange.innerHTML = `Generate a number between 0 and ${maxValue}`;  
}

function init(){

  // 1. input(range) 변화 값을 h2에 반영
  numInput.addEventListener('change', handleChange);
  // 2. user와 machine 모두 숫자 선택
  chooseNum();

}
init();