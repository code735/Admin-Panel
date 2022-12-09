var products = JSON.parse(localStorage.getItem("products")) || [];

function CreateProducts(name, cat, url, price, gender, sold) {
  this.name = name;
  this.category = cat;
  this.image = url;
  this.price = price;
  this.gender = gender;
  this.sold = sold;
}

document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var category = document.getElementById("category").value;
  var imgurl = document.getElementById("image").value;
  var price = document.getElementById("price").value;
  var gender = document.getElementById("gender").value;
  var sold = document.getElementById("soldselect").value;

  var product = new CreateProducts(name, category, imgurl, price, gender, sold);
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));
  console.log(products);
});
