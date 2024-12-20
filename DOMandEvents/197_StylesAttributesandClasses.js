////197_Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); //rgb(55, 56, 61)
console.log(getComputedStyle(message).height); //50px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height); //90px

//document element : root
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.className); //nav__logo

//Non-standard attribute
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt); //minimalist
console.log(logo.getAttribute('designer')); //minimalist
logo.setAttribute('company', 'Bankist');

//Url
console.log(logo.src); //absolute url: http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.getAttribute('src')); //relative url: img/logo.png

const link = document.querySelector('.twitter-link');
console.log(link.href); //https://twitter.com/jonasschmedtman
console.log(link.getAttribute('href')); //https://twitter.com/jonasschmedtman

//Data attributes
console.log(logo.dataset.versionNumber); //3.0

//Classes
logo.classList.add('c', 'class2');
logo.classList.remove('c', 'class2');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don' use
logo.className = 'Jonas';
