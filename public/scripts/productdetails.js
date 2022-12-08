//Viewing product

const imgView = document.getElementById("view-img");

let selectImgs = document.querySelectorAll(".select-img");

//Assign Event Listner to Img
for(i = 0; i < selectImgs.length; i++) {
    selectImgs[i].addEventListener("click", function(e) {
        changeImg(e, imgView);
    });
}
//Handling Cart Cart
//Needed Elements
const addToCart = document.getElementById("add-btn");
const removeCart = document.getElementById("rem-btn");
const quantityInput = document.getElementById("quantity");
const sizeInput = document.getElementById("size").options;

//Adding Items
addToCart.addEventListener("click", function(e) {
    console.log("hello");
    e.preventDefault();
    addItem(e);
});

//Removing Items
removeCart.addEventListener("click", function(e) {
    e.preventDefault();
    removeCookies();
});

function addItem(e) {
    let quantity = parseInt(quantityInput.value);
    let size;
    let price = e.target.parentElement.previousElementSibling.innerText.substring(1);
    let title = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    let pic = e.target.parentElement.id;
    if(quantity) {
        for(i = 0; i < sizeInput.length; i++) {
            if(sizeInput[i].selected) {
                size = sizeInput[i].innerText;
            }
        }
        saveToCookies(quantity, size, title, price, pic);
    }
}


//Saving to Cookies
function saveToCookies(quantity, size, title, price, pic) {
    document.cookie = "Item1=quantity: " + quantity + ", size: " + size + ", title: " + title + ", price: " + price + ", picture: " + pic;
}

//Remove from Cart
function removeCookies() {
    console.log(document.cookie);
    document.cookie = "Item1=; expires=" + new Date();
    console.log(document.cookie);
}

//Checks if there is cookie//
// const avatar = document.getElementById("avatar");
// const msg = document.getElementById("msg");
// if(hasCookie("userName")) {
//     console.log("hi");
//     let userName = getCookie("userName");
//     let avatarImg = document.createElement("img");
//     avatar.appendChild(avatarImg);
//     avatarImg.src = "./assets/images/userLogged.png";
//     msg.innerHTML = "Welcom " + userName;
// }