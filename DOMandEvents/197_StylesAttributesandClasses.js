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
