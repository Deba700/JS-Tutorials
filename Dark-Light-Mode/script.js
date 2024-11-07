// const para = document.querySelector("p");
const body = document.querySelector("body");
const btn = document.querySelector("button");
let mode = "light";
btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
btn.addEventListener("click", ()=>{
    
    if(mode==="light"){
        mode = "dark";
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        body.classList.add("dark");
        body.classList.remove("light");

        btn.classList.add("btn-dark");
        btn.classList.remove("btn-light");
        
    }else{
        mode = "light";
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        body.classList.add("light");
        body.classList.remove("dark");

        btn.classList.add("btn-light");
        btn.classList.remove("btn-dark");
        
    }

    console.log(mode);
})