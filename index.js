var login_email = document.querySelector(".login-email");

var login_pass = document.querySelector(".login-pass");

var log_btn = document.querySelector(".login-btn");


log_btn.addEventListener("click",() => {
    if (login_email.value === "" || login_pass.value === "") {
        alert("Fill the missing field");
    } else{
        document.querySelector(".congratulations").innerHTML = "<h1>CONGRATS YOU ARE LOGGED IN</h1><a href='./index.html'><button>Go Back</button></a>";
        document.querySelector(".congratulations").classList.add("active");
        document.querySelector(".login-box").classList.add("active");
    }
});

