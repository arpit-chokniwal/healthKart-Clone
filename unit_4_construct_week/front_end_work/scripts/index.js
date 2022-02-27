let count = 0;
let images = [];
let time = 2000;

images[0] = "https://img5.hkrtcdn.com/18116/bnr_1811544_o.jpg";
images[1] = "https://img5.hkrtcdn.com/18122/bnr_1812184_o.jpg";
images[2] = "https://img5.hkrtcdn.com/18123/bnr_1812294_o.jpg";
images[3] = "https://img9.hkrtcdn.com/18116/bnr_1811548_o.jpg";
images[4] = "https://img7.hkrtcdn.com/18116/bnr_1811556_o.jpg";
images[5] = "https://img1.hkrtcdn.com/18116/bnr_1811570_o.jpg";
images[6] = "https://img5.hkrtcdn.com/18116/bnr_1811574_o.jpg";
images[7] = "https://img9.hkrtcdn.com/18116/bnr_1811598_o.jpg";
images[8] = "https://img7.hkrtcdn.com/18117/bnr_1811606_o.jpg";
images[9] = "https://img1.hkrtcdn.com/18117/bnr_1811620_o.jpg";
images[10] = "https://img6.hkrtcdn.com/14609/bnr_1460845_o.png";
function slidingShows() {
  document.image.src = images[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout("slidingShows()", time);
}
window.onload = slidingShows;

// NavBar Sticky
window.onscroll = function () {
  myFunction();
};

var navlist = document.getElementById("nav");
var sticky = navlist.offsetTop;
/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlist.classList.add("sticky");;
  } else {
    navlist.classList.remove("sticky");
  }
}
//cart length
async function fetch_and_update_cart() {
  
  try {
    let url = `http://localhost:4500/cart`;
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data)
    document.getElementById("cart_quantity").innerText = data.length;
  } catch (err) {
    console.log(err);
  }
}
fetch_and_update_cart()

//fetch products 
fetch_product_list_1();
async function fetch_product_list_1() {
  let url = `http://localhost:4500/product/4`;
  try {
    let responce = await fetch(url);
    let data = await responce.json();
    // console.log(data)
    flashsaleProduct(data);//
    flashsaleProduct1(data);
    flashsaleProduct2(data);
  } catch (err) {
    console.log(err);
  }
}

async function flashsaleProduct(product_list_1_arr) {
  let div_product = document.getElementById("product");
  product_list_1_arr.forEach(function (products) {
    let div = document.createElement("div");
    let mainprice = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";
    button.addEventListener("click", async function () {
         try{ 
           let obj = {
            name:products.name ,
            discount:products.discount ,
            price: products.price,
            avtar: products.avtar,
            rating: products.rating,
            premiumprice: products.premiumprice,
          };
         await fetch("http://localhost:4500/cart", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(obj), // body data type must match "Content-Type" header
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
           console.log(error)
      }
      async function fetch_and_update_cart() {
  
        try {
          let url = `http://localhost:4500/cart`;
          let responce = await fetch(url);
          let data = await responce.json();
          console.log(data)
          document.getElementById("cart_quantity").innerText = data.length;
        } catch (err) {
          console.log(err);
        }
      }
      fetch_and_update_cart()
    });

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;
    image.addEventListener("click", function () {
      window.location.href = "productpage.html";
    });

    let premiumprice = document.createElement("h6");
    premiumprice.innerText = products.premiumprice + "    🔒";

    let rating = document.createElement("p");
    rating.innerHTML = products.rating;

    mainprice.append(price, button);
    div.append(image, discount, name, rating, mainprice, premiumprice);
    div_product.append(div);
  });
}


function flashsaleProduct1(protein1) {
  let div_product1 = document.getElementById("product1");

  protein1.forEach(function (products) {
    let div = document.createElement("div");
    let price1 = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;

    let premiumprice1 = document.createElement("h6");
    premiumprice1.innerText = products.premiumprice1 + " 🔒";

    let rating = document.createElement("img");
    rating.innerHTML = "★ " + products.rating;

    price1.append(price, button);
    div.append(image, discount, name, rating, price1, premiumprice1);
    div_product1.append(div);
  });
}


function flashsaleProduct2(protein2) {
  let div_product2 = document.getElementById("product2");

  protein2.forEach(function (products) {
    let div = document.createElement("div");
    let price2 = document.createElement("div");

    let m_name = document.createElement("h4");
    m_name.innerText = products.name;

    let m_price = document.createElement("b");
    m_price.innerText = "₹" + products.price;

    let m_button = document.createElement("button");
    m_button.innerHTML = "🛒 ADD";

    let m_discount = document.createElement("h5");
    m_discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;

    let m_premiumprice2 = document.createElement("h6");
    m_premiumprice2.innerText = products.premiumprice2 + " 🔒";

    let m_rating = document.createElement("img");
    m_rating.innerHTML = "★ " + products.rating;

    price2.append(m_price, m_button);
    div.append(image, m_discount, m_name, m_rating, price2, m_premiumprice2);
    div_product2.append(div);
  });
}


flashsaleProduct2();
function myLoginFunction() {
  window.location.href = "log.html";
}
