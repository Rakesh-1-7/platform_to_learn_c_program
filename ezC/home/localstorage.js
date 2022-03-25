const signUp = (e) => 
{
    let newuser = document.getElementById("newuser").value,
        newemail = document.getElementById("newemail").value,
        signup_pwd = document.getElementById("signup_pwd").value;
        confirm_pwd = document.getElementById("confirm_password").value;
    if(signup_pwd !== confirm_pwd)
    {
        alert("Passwords do not match.");
        return;
    }
    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    let exist = 
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
        (data) =>
        data.newuser.toLowerCase() == newuser.toLowerCase()
    );

    if(!exist) {
        formData.push({newuser, newemail, signup_pwd});
        localStorage.setItem("formData", JSON.stringify(formData));
        document.querySelector("form").reset();
        // document.getElementById("newuser").focus();
        alert("Account Created. \n\nYou can now Sign In.");
    } else {
        alert("Account already exists.");
    }
    e.preventDefault();

}

function signIn(e){
    let newuser = document.getElementById("newuser").value,
        signup_pwd = document.getElementById("signup_pwd").value;

    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    let exist = 
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
        (data) =>
        data.newuser.toLowerCase() == newuser.toLowerCase() && data.signup_pwd.toLowerCase() == signup_pwd.toLowerCase()
    );
    if(!exist) {
        alert("Incorrect login credentials.");
    }else{
        location.href = "/";
    }
    e.preventDefault();
}


