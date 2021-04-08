'use strict';
let dark=document.getElementById('dark');
let light=document.getElementById('light');
let header=document.getElementById('header');
let footer= document.getElementById('footer');
let link=document.querySelectorAll('a');
dark.addEventListener('click',darkTheme);

function darkTheme(){
  header.style.backgroundColor='#000A33';
  footer.style.backgroundColor='#000A33';
  document.body.style.backgroundColor ='#5D2144';
  document.body.style.color='white';
  for (let i=0;i<link.length;i++){
    link[i].style.color='white';
  }
  document.querySelector('h1').style.color='#CCB5BD';
}

light.addEventListener('click',lightTheme);

function lightTheme(){
  header.style.backgroundColor='#CCB5BD';
  footer.style.backgroundColor='#CCB5BD';
  document.body.style.backgroundColor ='#E9CFCE';
  document.body.style.color='black';
  for (let i=0;i<link.length;i++){
    link[i].style.color='black';
  }
  document.querySelector('h1').style.color='rgb(59, 59, 59)';
}
