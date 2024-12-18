////196_Selecting, Creating, and Deleting Elements
//selecting elements
console.log(document.documentElement); //html
console.log(document.head); //head
console.log(document.body); //body

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton); //button

document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for imporve functionality and analytics';
message.innerHTML =
  'We use cookies for imporve functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

header.before(message);
header.after(message);

////Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
