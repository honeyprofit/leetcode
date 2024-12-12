//Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'short',
};
const locale = navigator.language;
console.log(locale);

document.querySelector('.date').textContent = new Intl.DateTimeFormat(
  locale,
  options
).format(now);
