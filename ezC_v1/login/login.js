function toggleForm()
{
    var container = document.querySelector('.container');
    container.classList.toggle('active')
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

const togglePasswordLogin = document.querySelector('#togglePasswordlogin');
const passwordLogin = document.querySelector('#password');

togglePasswordLogin.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordLogin.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordLogin.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});