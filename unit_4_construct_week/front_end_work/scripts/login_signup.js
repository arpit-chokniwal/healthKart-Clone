const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


document.getElementById("up_signup").addEventListener("click", ()=>{
  console.log(`hello`)
  signup();
})

async function signup() {
try {
  var data = {
    email: document.getElementById("up_email").value,
    password: document.getElementById("up_pass").value
  };
  
  data = JSON.stringify(data);
  let url = "http://localhost:4500/register"
  console.log("-----------------------------------------------------");

  let response = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("-----------------------------------------------------");
  let result = await response.json();
  // console.log(result);
  if(result.status=="Done"){
    alert("Registered Succesfully");
}
else{
    alert("Already Registered");
}
} catch (err) {
  console.log(err);
}
}



document.getElementById("login_up").addEventListener("click", (event) => {
  event.preventDefault();
  var data = {
    email: document.getElementById("in_email").value,
    password: document.getElementById("in_pass").value,
  };
  // console.log(data)
  data = JSON.stringify(data);
  console.log(11111111111111111111)

  fetch("http://localhost:4500/login", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (res) {
    res.json().then(function (res) {
      if (res.Status == "Done") {
        window.localStorage.setItem('user_token', JSON.stringify(res.token));
        alert(`Login Succesful`);
        window.location.href = "index.html";
      } else {
        alert("Wrong Credentials");
      }
    });
  });
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


document.getElementById("up_signup").addEventListener("click", ()=>{
  console.log(`hello`)
  auth();
})

async function auth() {
  window.location.href = "http://localhost:4500/auth/google"
}

















// let sign_up_arr = [] || JSON.parse(localStorage.getItem("sign_up_data"));

// document.getElementById("signUp_action").addEventListener("submit", signUpFun);
// function signUpFun() {
//   event.preventDefault();
//   let sign_up_obj = {
//     name: document.getElementById("up_name").value,
//     email: document.getElementById("up_email").value,
//     pass: document.getElementById("up_pass").value,
//   };
//   sign_up_arr.push(sign_up_obj);
//   localStorage.setItem("sign_up_data", JSON.stringify(sign_up_arr));
//   console.log("sign_up_arr", sign_up_arr);
//   alert(
//     `${document.getElementById("up_name").value} Your Sign Up is Succesful`
//   );
// }

// // login Script
// let r = 0;
// let sign_in_arr = JSON.parse(localStorage.getItem("sign_up_data"));
// document.getElementById("signIn_action").addEventListener("submit", signInFun);
// function signInFun() {
//   event.preventDefault();

//   let email_in = document.getElementById("in_email").value;
//   let pass_in = document.getElementById("in_pass").value;

//   // console.log(sign_in_arr)
//   for (let i = 0; i < sign_in_arr.length; i++) {
//     if (sign_in_arr[i].email == email_in && sign_in_arr[i].pass == pass_in) {
//       alert(`${sign_in_arr[i].name} your login is Succesful`);
//       r++; //console.log('kk')
//     }
//   }
// }
// // if(r ==0 ){
// //   alert("Please Enter Valid Details")
// // }
