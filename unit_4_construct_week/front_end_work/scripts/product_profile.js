//cart length
async function fetch_and_update_cart() {
  try {
    let url = `http://localhost:4500/cart`;
    let responce = await fetch(url);
    let data = await responce.json();
    document.getElementById("cart_quantity").innerText = data.length;
  } catch (err) {
    console.log(err);
  }
}
fetch_and_update_cart();


//find the product
var product_profile;
async function find_the_current_product() {
  try {
    let url = `http://localhost:4500/productprofile`;
    let responce = await fetch(url);
    let data = await responce.json();
    product_profile = data[data.length-1];
    showImage(product_profile);
  } catch (err) {
    console.log(err);
  }
}
find_the_current_product();

console.log(product_profile)



// use this array for Local storage
function showImage(product_profile) {
  document.getElementById("big_img").src = product_profile.avtar;
  document.getElementById("small_img1").src = product_profile.avtar;
  document.getElementById("ls_name").innerText = product_profile.name;
  document.getElementById("price_of_item").innerText = `₹${product_profile.price}`;
}

//this function is for shift the small images to large one
function smallImg1(num) {
  let big_img = (document.getElementById("big_img").src =
    document.getElementById(`small_img${num}`).src);
}

//this function is for increase and decrease quantity
function addOne() {
  let quantity = document.getElementById("pp_quantity");
  quantity.innerText = +quantity.innerText + 1;
}
function removeOne() {
  let quantity = document.getElementById("pp_quantity");
  if (+quantity.innerText > 1) {
    quantity.innerText = +quantity.innerText - 1;
  }
}

// this function is to change unit
function unitChange(n) {
  let kg_btn = document.getElementById("kilogram");
  let pound_btn = document.getElementById("pound");
  let unit_value1 = document.getElementById("ppbtn41");
  let unit_value2 = document.getElementById("ppbtn42");
  let unit_value3 = document.getElementById("ppbtn43");
  if (n == 1) {
    pound_btn.style.background = "rgb(196, 194, 194)";
    kg_btn.style.background = "white";
    unit_value1.innerText = "2 lb";
    unit_value2.innerText = "5 lb";
    unit_value3.innerText = "10 lb";
  } else if (n == 2) {
    kg_btn.style.background = "rgb(196, 194, 194)";
    pound_btn.style.background = "white";
    unit_value1.innerText = "498 g";
    unit_value2.innerText = "5.0 kg";
    unit_value3.innerText = "997 g";
  }
}
function selectQuantity(n) {
  document.getElementById(`ppbtn4${n}`).style.background = "white";
}

//this function to show the address
async function pincodeFunc() {
  let pincode = document.getElementById("pincode").value;
  let res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
  let data = await res.json();
  let address = document.getElementById("address");
  address.innerText = `${data[0].PostOffice[0].District},${data[0].PostOffice[0].Circle}`;
}


async function addToCart() {
  try {
    // console.log(product_profile)
    let obj = {
      title: product_profile.title,
      name: product_profile.name,
      discount: product_profile.discount,
      price: product_profile.price,
      avtar: product_profile.avtar,
      rating: product_profile.rating,
      premiumprice: product_profile.premiumprice,
    };
    
    await fetch("http://localhost:4500/cart", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
  async function fetch_and_update_cart() {
    try {
      let url = `http://localhost:4500/cart`;
      let responce = await fetch(url);
      let data = await responce.json();
      document.getElementById("cart_quantity").innerText = data.length;
    } catch (err) {
      console.log(err);
    }
  }
  fetch_and_update_cart();
  window.location.href = "cart.html";
}






//use this to add this product to cart page
// let cart_product=JSON.parse(localStorage.getItem("cart_data"))||[];
// document.getElementById('cart_quantity').innerText=cart_product.length;


