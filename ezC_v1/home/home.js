const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

document.getElementById("loginform").style.display ="none";

function displayLoginForm() {loginform

    document.getElementById("textContent").style.display ="none";
    
    document.getElementById("loginform").style.display = "";

    document.getElementById("video").style.opacity = "0.3";
}

function LoginFormexit() {

    document.getElementById("textContent").style.display ="";
    document.getElementById("loginform").style.display = "none";
    document.getElementById("video").style.opacity = "1";

}


