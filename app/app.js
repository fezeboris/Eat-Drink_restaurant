fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    let pizzas = data;
    console.log(pizzas[0]);
  });

console.log("helloworld");
