let acive = document.querySelector('.active')
let evetn = document.querySelector(".icon")
document.addEventListener("click",(e)=>{
    if (e.target.className === "icon"){
        acive.style.display = "flex"
    }else{
        acive.style.display = "none"
    }
})