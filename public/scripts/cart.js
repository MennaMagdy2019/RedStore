//function to set cookie for testing
// function setCookie(cName,cValue,exDays)
// {
//     var date=new Date();
//     date.setTime(date.getTime()+(exDays*24*60*60*1000));
//     var expires = "expires="+ date.toUTCString();
//     document.cookie = cName + "=" + cValue + ";" + expires;
// }
// setCookie("quantity",5,20);
// setCookie("title","Red Printed T-shirt by HRX",20);
// setCookie("price",50,20)
// setCookie("pic","buy-1.jpg",20)

//function to get cookies
function getInfo(cName) {
    console.log(document.cookie);
    var y= cName + ":";
    var cookie = getCookie("Item1");
    // console.log(cookie);
    var ca = cookie.split(',');
    for(let i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(y) == 0) {
        return c.substring(y.length, c.length);
      }
    }
    return "";
  }

//get value of quantity, title, price, pic from cookies
var quantity=getInfo("quantity");
var title=getInfo("title");
var price=getInfo("price");
var pic=getInfo("picture").trim();
console.log(pic);
console.log(title);
console.log(document.cookie);
//check cookies and create row in html to put values
if(title!="")
{
    var table=document.getElementById("table")
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var img=document.createElement("img");
    var div=document.createElement("div");
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    var put=document.createElement("input");
    var td2=document.createElement("td");
    var td3=document.createElement("td")
    var put2=document.createElement("input");

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(put);
    td1.appendChild(img);
    td1.appendChild(div);
    td2.appendChild(put2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    td1.className="col1";
    // img.src="./assets/images/"+pic+".jpg";
    img.src="./assets/images/"+pic+".jpg";
    div.className="pinfo";
    p1.innerText=title;
    p2.innerText="Price: $"+(Number(price).toFixed(2))
    put.type="button";
    put.value="Remove";
    put.className="btn_rem";
    put.onclick=function(){remove(this)}
    put2.type="number";
    put2.className="quant";
    put2.id="shirt";
    put2.value=Number(quantity);
    put2.oninput=function(){calc();};
    td3.className="col3";
    td3.id="subTshirt";
    td3.innerText="$"+((put2.value)*price).toFixed(2);
    calc()
 }

//calculate subtotal,total,tax 
 function calc()
{
    //get quantity of each product
    var qshirt=document.getElementById("shirt").value;
    var qshoes=document.getElementById("Shoes").value;
    var qtrackpants=document.getElementById("Trackpants").value;
   
   //get subtotal of each product
    document.getElementById("subTshirt").innerText="$"+((qshirt*price).toFixed(2));
    document.getElementById("subShoe").innerText="$"+((qshoes*75).toFixed(2));
    document.getElementById("subPant").innerText="$"+((qtrackpants*75).toFixed(2));
    
   //get the total & tax & final price
   document.getElementById("total").innerText="$"+(((qshirt*price)+(qshoes*75)+(qtrackpants*75)).toFixed(2));
   document.getElementById("tax").innerText="$"+((((qshirt*price)+(qshoes*75)+(qtrackpants*75))*0.15).toFixed(2));
   document.getElementById("fPrice").innerText="$"+((((qshirt*price)+(qshoes*75)+(qtrackpants*75))+(((qshirt*price)+(qshoes*75)+(qtrackpants*75))*0.15)).toFixed(2));
}

//remove row and calc new totalPrice

var flag=0;
function remove(e)
{
    
    if(flag==0)
    {
        e.parentElement.parentElement.nextElementSibling.children[0].value=0 ;
        calc();
        var z= document.getElementById("total").innerText;
        e.parentElement.parentElement.parentElement.remove();
        flag++;

    }
    else
    {
        var sub=e.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText.replace("$","");
        var currentTotal=document.getElementById("total").innerText.replace("$","");
        document.getElementById("total").innerText="$"+(Number(currentTotal)-Number(sub)).toFixed(2);
        document.getElementById("tax").innerText="$"+((Number(currentTotal)-Number(sub))*0.15).toFixed(2);
        document.getElementById("fPrice").innerText="$"+((Number(currentTotal)-Number(sub))+(Number(currentTotal)-Number(sub))*0.15).toFixed(2);
        e.parentElement.parentElement.parentElement.remove(); 
    }
    document.cookie = "Item1=; expires=" + new Date();
}



















  
