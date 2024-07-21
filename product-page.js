const header = document.querySelector('header');
const animation = header.animate(
  [{ backgroundColor: 'lightblue' }, { backgroundColor: 'white' }],
  { duration: 2000, iterations: Infinity }
);

