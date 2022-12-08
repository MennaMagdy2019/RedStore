var productsli = document.querySelectorAll(".filterProducts ul li")
var allProduct = document.getElementById("allProducts");
var shirts = document.getElementById("shirts");
var trackpants = document.getElementById("trackpants");
var watches = document.getElementById("watches");
var sockes = document.getElementById("sockes");
var shoes = document.getElementById("shoes");
var sortt = document.getElementById("sort");

var allproductsarr = document.getElementsByClassName("product");
var allshirtsarr = document.getElementsByClassName("shirt");
var allshoessarr = document.getElementsByClassName("shoes");
var alltrackpantsarr = document.getElementsByClassName("trackpants");
var allwatchesarr = document.getElementsByClassName("watch");
var allsockesarr = document.getElementsByClassName("socks");

function displynon () {
    for(var i=0;i<allproductsarr.length;i++){
        allproductsarr[i].style.display="none";
        // sortt.style.display="none";
    }
    for(var i=0;i<productsli.length;i++){
        productsli[i].classList.remove("active")
    }
}
/*********allProductshow*** */
allProduct.onclick = function(){
    for(var i=0;i<allproductsarr.length;i++){
        allproductsarr[i].style.display="inline-block";
    }
    this.classList.add("avtive");
    console.log("allProductshow");
}
/*********allshirtsarr****/
shirts.onclick = function() {
    displynon();
    for(var i=0;i<allshirtsarr.length;i++){
        allshirtsarr[i].style.display="inline-block";
    }
    this.classList.add("active");
    console.log("allshirts");
}
/*********allshoessarr****/
shoes.onclick = function() {
    displynon();
    for(var i=0;i<allshoessarr.length;i++){
        allshoessarr[i].style.display="inline-block";
    }
    this.classList.add("active");
    console.log("allshoessarr");
}
/*********allshoessarr****/
trackpants.onclick = function() {
    displynon();
    for(var i=0;i< alltrackpantsarr.length;i++){
         alltrackpantsarr[i].style.display="inline-block";
    }
    this.classList.add("active");
    console.log(" alltrackpantsarr");
}
/**********allwatchesarr ***/
watches.onclick = function() {
    displynon();
    for(var i=0;i< allwatchesarr .length;i++){
         allwatchesarr [i].style.display="inline-block";
    }
    this.classList.add("active");
    console.log(" allwatchesarr ");
}
/******allsockesarr *******/
sockes.onclick = function() {
    displynon();
    for(var i=0;i< allsockesarr.length;i++){
         allsockesarr[i].style.display="inline-block";
    }
    this.classList.add("active");
    console.log(" allsockesarr");
}

