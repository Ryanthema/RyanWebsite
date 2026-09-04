const timebutton = document.getElementById("time");
const output = document.getElementById("output");

timebutton.addEventListener("click", function(){
    output.innerHTML = new Date().toLocaleTimeString();
})