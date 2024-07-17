window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
let mbtn = document.querySelector(".menuBtn");
    let mbtnb = document.querySelector(".menuBtn::before");
    let spn = document.querySelector("span");
    let con = document.querySelector(".dropDown");
let x =0;
    mbtn.addEventListener("click", () => {
        if(x===0){
            con.style.top = "5rem"
            spn.style.display = "none";
            x=1
        }else{
             con.style.top = "-15rem"
            spn.style.display = "block";
            x=0
        }
      mbtn.classList.toggle("rotate");
    });