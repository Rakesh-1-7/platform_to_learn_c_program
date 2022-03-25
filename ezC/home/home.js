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

document.getElementById("passwd-conditions").style.display = "none";
function validatePassword() {
    var user = document.getElementById('newuser').value;
    var email = document.getElementById('newemail').value;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var Password = document.getElementById('signup_pwd').value;
    var PasswordConfirm = document.getElementById('confirm_password').value;
    console.log("out");
    if(!regularExpression.test(Password) && user != "" && email != "") {
        console.log("in");
        document.getElementById("passwd-conditions").style.display = "";

        setTimeout(function(){
            document.getElementById("passwd-conditions").style.display = "none";

        }, 4000); 

    }
}

// function validateAdmin()
// {
//     var username = document.getElementById('username');
//     var password = document.getElementById('signup_pwd');
//     if(username == "admin" && password == "admin")
//     {
//         return true;
//     }else{
//         return false
//     }

// }
