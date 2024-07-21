const dealOfTheMonth = document.querySelector('.deal-of-the-month1');

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const image = document.createElement('img');
      image.src = `./public/${item.image}`;
      image.loading = 'lazy';
      dealOfTheMonth.querySelector('.image7').appendChild(image);

      const saleBanner = document.createElement('div');
      saleBanner.classList.add('sale-banner');

      const saleLabel = document.createElement('div');
      saleLabel.classList.add('sale-label');
      saleLabel.textContent = item.saleBanner.label;
      saleBanner.appendChild(saleLabel);

      const discountIcon = document.createElement('div');
      discountIcon.classList.add('discount-icon');
      discountIcon.innerHTML = `<img src="./public/vector-1.svg" />`;
      saleBanner.appendChild(discountIcon);

      const saleText = document.createElement('div');
      saleText.classList.add('spring-sale');
      saleText.textContent = item.saleBanner.saleText;
      saleBanner.appendChild(saleText);

      const off = document.createElement('div');
      off.classList.add('off');
      off.textContent = item.saleBanner.discount;
      saleBanner.appendChild(off);

      dealOfTheMonth.querySelector('.text6').appendChild(saleBanner);
    });
  });