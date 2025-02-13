// select side navbar, menu icon

let navbar=document.getElementById("sidenav")
let menu=document.getElementById("menuicon")
let close=document.getElementById("closenav")

menu.addEventListener("click",function(){
    navbar.style.right=0
})

close.addEventListener("click",function(){
    navbar.style.right="-50%"
})