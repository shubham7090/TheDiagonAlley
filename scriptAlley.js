
const menuToggle = document.querySelector('.toggle');
const menuIcon=document.querySelector('.toggle i')
const menuShowcase = document.querySelector('.showcase');
menuToggle.addEventListener("click",function(){
    menuShowcase.classList.toggle('active');
    if(menuIcon.classList.contains("fas")){
        console.log("yes");
        menuIcon.classList.remove("fas","fa-bars");
        menuIcon.classList.add("far","fa-times-circle");
    }else{
        menuIcon.classList.remove("far","fa-times-circle");
        menuIcon.classList.add("fas","fa-bars");
    }
});

const portKey= document.querySelector(".text a");
portKey.addEventListener("click",function(){
    portKey.innerHTML="PortKey is outside your Window";
});