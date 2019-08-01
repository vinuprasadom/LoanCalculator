var userName = document.getElementById("userName");
var password = document.getElementsByClassName("password");

function getUserNamePassword(){
    console.log(userName.value);
    console.log(password[0].value);
    userName.value = "";
    password[0].value = "";
}