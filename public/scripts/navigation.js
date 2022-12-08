//Navigation
const navigation = document.getElementById("navigation")
const avatar = document.getElementById("avatar");
const msg = document.getElementById("msg");
if(hasCookie("userName")) {
    let userName = getCookie("userName");
    let avatarImg = document.createElement("img");
    avatar.appendChild(avatarImg);
    avatarImg.src = "./assets/images/userLogged.png";
    msg.innerHTML = "Welcom " + userName;
}
else {
    let avatarImg = document.createElement("img");
    avatar.appendChild(avatarImg);
    avatarImg.src = "./assets/images/logo.png";
    avatarImg.style.width = "200px"
    navigation.style.backgroundColor = "white";
}