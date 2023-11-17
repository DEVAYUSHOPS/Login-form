var reg_email = document.querySelector(".reg-email");
var reg_pass = document.querySelector(".reg-pass");
var reg_user = document.querySelector(".user");
var reg_btn = document.querySelector(".register-btn");

reg_btn.addEventListener("click",() => {
    if (reg_email.value === "" || reg_pass.value === "" || reg_user.value === "") {
        alert("Fill the missing field");
    } else{
        window.location.href = "./index.html";
    }
        
});

function togglePass() {
    let x = document.querySelector(".reg-pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}