const d1 = document.querySelector('.d1');
const img1 = d1.querySelector('img');

const d2 = document.querySelector('.d2');
const img2 = d2.querySelector('img');

const d3 = document.querySelector('.d3');
const img3 = d3.querySelector('img');

const d4 = document.querySelector('.d4');
const img4 = d4.querySelector('img');

const mouse = document.querySelector('.mouse');
const mouse_img = mouse.querySelector('img');

function handleClick(event){  
  const img = event.target.getAttribute('src');
  img1.setAttribute('src',img);
}

d2.addEventListener('click',handleClick);
d3.addEventListener('click',handleClick);
d4.addEventListener('click',handleClick);

function handleMouseOver(){
  const img = 'b.png';
  mouse_img.setAttribute('src',img);
}

function handleMouseOut(){
  const img = 'a.png';
  mouse_img.setAttribute('src',img);
}

mouse_img.addEventListener('mouseover',handleMouseOver);
mouse_img.addEventListener('mouseout',handleMouseOut);