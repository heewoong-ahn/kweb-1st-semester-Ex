const price = {
  apple: 700,
  orange: 800,
  lemon: 900,
};
let totalPrice = 0;
for (const btn of document.getElementsByClassName("add-to-cart")) {
  btn.addEventListener("click", (event) => {
    const fruit = event.target.parentNode.parentNode.getAttribute("id");
    totalPrice += price[fruit];
    document.getElementById("cost").innerText = totalPrice;
  });
}
