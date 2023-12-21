let text = document.getElementById('text');
let birds = document.getElementById('birds');
let sun = document.getElementById('sun');
let mountain = document.getElementById('mountain');
let valley1 = document.getElementById('valley1');
let valley2 = document.getElementById('valley2');
let valley4 = document.getElementById('valley4');
let valley5 = document.getElementById('valley5');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    text.style.top = value * .4 + 'px'
    sun.style.top = value * .4 + 'px'
    birds.style.top = value * .3 + 'px'
    mountain.style.top = value * .6 + 'px'
    valley1.style.top = value * .3 + 'px'
    valley2.style.top = value * .4 + 'px'
    valley4.style.top = value * .6 + 'px'
    valley5.style.top = value * .4 + 'px'
})