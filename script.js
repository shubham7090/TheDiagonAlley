const time = document.querySelector("time");
document.querySelector(".glass").addEventListener("click",function(){
    window.location.href="brickwall.html";
});

function DisplayTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 == 0 ? 12 : hour % 12;

    time.innerHTML = `${addZero(hour)} : ${addZero(min)} : ${addZero(sec)} ${ampm}`;

    setTimeout(DisplayTime,1000);

}
function addZero(n){
    if(n<9)return "0"+n;
    else return n;
}
DisplayTime();