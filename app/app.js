fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    let pizzas = data;
    console.log(pizzas);
    pizzas.forEach((p) => {
      let pizza = document.createElement("div");
      pizza.className = "chicken-burgerr";
      let pizzaImg = document.createElement("img");
      pizzaImg.src = `../api-pizza/images/${p.img}`;
      pizza.appendChild(pizzaImg);
      let pizzaTitle = document.createElement("p");
      pizzaTitle.innerHTML = p.title;
      pizza.appendChild(pizzaTitle);
      let pizzaPriceContainer = document.createElement("div");
      pizzaPriceContainer.className = "burger-price";
      let pizzaPrice = document.createElement("div");
      pizzaPrice.className = "burger-price-details";
      pizzaPrice.innerHTML = p.price;
      pizzaPriceContainer.appendChild(pizzaPrice);
      let pizzaBtn = document.createElement("div");
      pizzaBtn.className = "price-btn";
      pizzaBtn.innerHTML = "Add to cart";
      pizzaPriceContainer.appendChild(pizzaBtn);
      pizza.appendChild(pizzaPriceContainer);
      let pizzaContainer = document
        .getElementById("chicken-containerr")
        .appendChild(pizza);
      console.log(pizza);
    });
  });

console.log("helloworld");
