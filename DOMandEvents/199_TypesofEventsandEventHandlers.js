////199. Types of Events and Event Handlers

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListner: Great!');
// });

// h1.onmouseenter = function (e) {
//   alert('onmouseenter');
// };

const alertH1 = function (e) {
  alert('alert H1');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
