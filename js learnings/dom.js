let heading = document.getElementById("header");
console.log(header);

let newtext = document.getElementById("h2");
newtext.innerHTML += ",from apna college"; 

// document.querySelectorAll(".box");
// console.log(box);

let b1 = document.getElementsByClassName(".box");
b1.innerHTML = " Hey im 1";

let b2 = document.getElementsByClassName(".box");
b1.innerHTML = " Hey im 2";

let b3 = document.getElementsByClassName(".box");
b1.innerHTML = " Hey im 3";

let newbtn = document.createElement("button");
newbtn.innerHTML = "CLickme";

console.log(newbtn);
newbtn.style.backgroundColor ="white";

let body = document.querySelector("body");
body.prepend(newbtn);


let para1 = document.querySelector("para1").style.backgroundColor = "blue";
// let div1 = document.querySelector("div");
// div.prepend(newbtn);