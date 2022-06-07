let listItem = document.getElementById("secondary-nav");
/**
I study the meterial from this website
Arthur: W3schools
URL: https://www.w3schools.com/howto/howto_js_toggle_class.asp
Date accessed: 13 Nov 2021
*/
document.getElementById("secondary-nav-opener").addEventListener("click", function(){
    listItem.classList.toggle("show");
});

let listItem2 = document.getElementById("primary-nav");

document.getElementById("primary-nav-opener").addEventListener("click", function(){
    listItem2.classList.toggle("show");
});
