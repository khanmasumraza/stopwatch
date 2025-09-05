const display=document.getElementById("display")
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")

let time=0;
let timer;

// ! timer check krta hai ki interval already chal rha hai ya nhi.
// agar nhi chal raha hai to naya st hoga

start.addEventListener("click",function(){
    if(!timer){
        timer=  setInterval(() => {
             display.innerText=time;
             time=time+1
         }, 1000);
    }

})

stop.addEventListener("click",function(){
    clearInterval(timer);
    timer=null;
})

reset.addEventListener("click",function(){
    clearInterval(timer);
    timer=null;
    time=0;
    display.innerText=0;
})