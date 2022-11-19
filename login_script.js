function changeEyeIcon(){
    const pwd = document.getElementById("passwordInput");
    const eye = document.getElementById("hide1");
    const eyeSlash = document.getElementById("hide2");

    if (pwd.type === 'password'){
        pwd.type = 'text';
        eye.style.display = "block";
        eyeSlash.style.display = "none";  
    } else {
        pwd.type = 'password';
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    }
}

function login(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    console.log(username)
    console.log(typeof username)
    console.log(password)
    console.log(typeof password)

    if (username == "test" && password == "test2") {
        window.open('/home.html')
        return false;
    } else {
        alert("Invalid username or password.");
    }
}