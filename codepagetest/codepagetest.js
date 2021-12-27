const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

document.getElementById("loginform").style.display ="none";

function displayLoginForm() {
    document.getElementById("textContent").style.display ="none";
    setTimeout(1000);
    document.getElementById("loginform").style.display = "";

}

function LoginFormexit() {

    document.getElementById("textContent").style.display ="";
    document.getElementById("loginform").style.display = "none";

}


