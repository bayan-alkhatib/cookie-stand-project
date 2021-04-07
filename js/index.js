'use strict';
let dark=document.getElementById('dark');
let light=document.getElementById('light');
let header=document.getElementById('header');
let footer= document.getElementById('footer');

dark.addEventListener('click',darkTheme);

function darkTheme(){
  header.style.backgroundColor='#000A33';
  footer.style.backgroundColor='#000A33';
  document.body.style.backgroundColor ='#5D2144';
  document.body.style.color='white';
  document.querySelectorAll('a')[0].style.color='white';
  document.querySelectorAll('a')[1].style.color='white';
  document.querySelector('h1').style.color='#CCB5BD';
}

light.addEventListener('click',lightTheme);

function lightTheme(){
  header.style.backgroundColor='#CCB5BD';
  footer.style.backgroundColor='#CCB5BD';
  document.body.style.backgroundColor ='#E9CFCE';
  document.body.style.color='black';
  document.querySelectorAll('a')[0].style.color='black';
  document.querySelectorAll('a')[1].style.color='black';
  document.querySelector('h1').style.color='rgb(59, 59, 59)';
}
