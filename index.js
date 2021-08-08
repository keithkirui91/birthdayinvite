

var container = document.getElementById("container");

container.style.display = "none";



function myToggler(){
    var main = document.getElementById("main");
    if (main.style.display === "none") {
      main.style.display = "block";
      container.style.display = "none";
  
    } 
    else {
      main.style.display = "none";
      container.style.display = "block";
    }
}
