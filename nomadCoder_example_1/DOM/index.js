const d1 = document.querySelector('.d1');
const img1 = d1.querySelector('img');

const d2 = document.querySelector('.d2');
const img2 = d2.querySelector('img');

const d3 = document.querySelector('.d3');
const img3 = d3.querySelector('img');

const d4 = document.querySelector('.d4');
const img4 = d4.querySelector('img');



function handleClick(event){  
  const img = event.target.getAttribute('src');
  img1.setAttribute('src',img);
}

d2.addEventListener('click',handleClick);
d3.addEventListener('click',handleClick);
d4.addEventListener('click',handleClick);



