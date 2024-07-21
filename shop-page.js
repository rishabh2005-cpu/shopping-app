const body = document.body;
const animation = body.animate(
  [{ backgroundColor: 'lightblue' }, { backgroundColor: 'white' }],
  { duration: 2000, iterations: Infinity }
);
const subscribeButton = document.querySelector('.subscribe-now3');

subscribeButton.addEventListener('click', () => {
  // Your code to handle the button click event
  console.log('Subscribe button clicked!');
});
fetch('path/to/your/api.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.querySelector('.product-items');

    data.products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product-item');

      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;

      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));