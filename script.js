function showDetails(name, price, image) {
  document.getElementById("item-name").textContent = name;
  document.getElementById("item-price").textContent = "Price: " + price;
  document.getElementById("item-image").src = image;
  document.getElementById("details").classList.remove("hidden");
}
