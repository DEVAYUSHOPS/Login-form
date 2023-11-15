var input = document.querySelectorAll("input");
var btn = document.querySelector(".btn");

btn.addEventListener("click",() => {
    if (input[0].value === "" || input[1].value === "") {
        alert("Fill the missing field");
    } else{
        window.location.href = "reg.html";
    }
});