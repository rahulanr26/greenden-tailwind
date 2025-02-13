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

//serach function

let productContainer=document.getElementById("product-container")
let search=document.getElementById("search")
let list=productContainer.querySelectorAll("div")


    search.addEventListener("keyup",function(){
        let enteredValue=event.target.value.toUpperCase()


        for(count=0;count<list.length;count++)
        {
            let productname = list[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0)
            {
                list[count].style.display="none"
            }
            else
            {
                list[count].style.display="block"
            }
        }
    })