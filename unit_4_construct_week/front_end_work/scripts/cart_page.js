async function fetch_and_update_cart() {
  try {
    let url = `http://localhost:4500/cart`;
    let responce = await fetch(url);
    let data = await responce.json();
    appendToCart(data);
    // console.log(data);
    document.getElementById("cart_quantity").innerText = data.length;
  } catch (err) {
    console.log(err);
  }
}
fetch_and_update_cart();

let total = 0;
function appendToCart(cartArr) {
  console.log(cartArr);
  let cart_left_div = document.getElementById("cart_left_div");
  cart_left_div.innerHTML="";
  

  cartArr.forEach((el) => {
    let cart_left_product_div = document.createElement("div");
    cart_left_product_div.setAttribute("class", "cart_left_product_div");

    let cart_left_img_div = document.createElement("div");
    cart_left_img_div.setAttribute("class", "cart_left_img_div");

    let image = document.createElement("img");
    image.src = el.avtar;
    cart_left_img_div.append(image);

    let cart_left_details_div = document.createElement("div");
    cart_left_details_div.setAttribute("class", "cart_left_details_div");

    let h21 = document.createElement("h2");
    h21.innerText = el.name;
    let h22 = document.createElement("h2");
    h22.innerText = `₹${el.price}`;
    let br = document.createElement("br")

    let button = document.createElement("button");
    button.setAttribute("class", "remove_from_cart");
    button.innerText = "Remove";
    button.addEventListener("click", ()=>{
      removeAndUpdate(el);
    });

    cart_left_details_div.append(h21, h22, br, button);

    cart_left_product_div.append(cart_left_img_div, cart_left_details_div);
    let hr = document.createComment("hr");
    cart_left_div.append(cart_left_product_div, hr);

    total += el.price;
  });
  let bag_total = document.getElementById("bag_total");
  bag_total.innerText = `Rs ${total}`;
  let grand_total = document.getElementById("grand_total");
  grand_total.innerText = `Rs ${total + 49}`;
  total = 0;
}

async function removeAndUpdate(product) {
  try {
    //delete the product
    let id = product._id;
    let res = await fetch(`http://localhost:4500/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //fetch the new product list
    let url = `http://localhost:4500/cart`;
    let responce = await fetch(url);
    let data = await responce.json();
    appendToCart(data);
    // console.log(data);
    document.getElementById("cart_quantity").innerText = data.length;
  } catch (err) {
    console.log(err);
  }
}


async function gotopayment() {
  
  const token = JSON.parse(localStorage.getItem("user_token"))
  console.log(token)
  let url = `http://localhost:4500/payment`;
  try {
    let responce = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    PaymentData = await responce.json();
    console.log("Payment Data : ", PaymentData);
    if(PaymentData == true){
      window.location.href = `payment.html`
    }else{
      window.location.href = `log.html`
    }
  } catch (err) {
    console.log(err);
  }

}