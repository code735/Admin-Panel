var products = JSON.parse(localStorage.getItem("products")) || [];

display();

function display() {
  document.getElementById("productDisplay").textContent = "";
  products.map(function (elem, index) {
    var div = document.createElement("div");

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.textContent = "₹" + elem.price;

    var priceparent = document.createElement("div");
    priceparent.classList.add("d-flex", "justify-content-between");
    priceparent.append(name, price);

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);

    var p = document.createElement("p");
    p.textContent = elem.gender + " " + elem.category;

    var sold = document.createElement("span");
    sold.textContent = "Sold";
    sold.setAttribute("id", "sold");
    sold.addEventListener("click", function () {
      changeColor(elem.sold, sold);
    });

    if (elem.sold == "true") {
      sold.style.background = "#00dd00";
    } else {
      sold.style.background = "#ff4040";
    }

    var rem = document.createElement("div");
    rem.textContent = "Remove";
    rem.setAttribute("id", "remove");
    rem.addEventListener("click", function () {
      removeelement(div, index);
    });

    var btnParent = document.createElement("div");
    btnParent.append(sold, rem);
    btnParent.classList.add("d-flex", "justify-content-between");

    var imgdetails = document.createElement("div");
    imgdetails.append(priceparent, p, btnParent);
    imgdetails.setAttribute("class", "imgdetails");

    div.append(img, imgdetails);
    document.getElementById("productDisplay").append(div);
  });
}

function changeColor(val, sold) {
  if (val == "true") {
    val = "false";
    sold.style.background = "#ff4040";
    sold.addEventListener("click", function () {
      changeColor(val, sold);
    });
  } else {
    val = "true";
    sold.style.background = "#00dd00";
    sold.addEventListener("click", function () {
      changeColor(val, sold);
    });
  }
}

function removeelement(div, index) {
  div.remove();
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  window.location.reload();
}
