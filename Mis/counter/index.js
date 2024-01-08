if (!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}
let intervalID=null;
let isPaused=false;


function count(){
    if (!isPaused){
        let counter=localStorage.getItem('counter');
        counter++;
        document.querySelector('h1').innerHTML=counter;
        localStorage.setItem('counter',counter);

    }
    
    // let rescounT=localStorage.getItem('counter');
}

function stop(){
    counter = 0;
    document.querySelector('h1').innerHTML=counter;
    localStorage.setItem('counter', counter);
    clearInterval(intervalID);
}

function resume(){
    isPaused = true;
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('h1').innerHTML=localStorage.getItem('counter');
    document.querySelector('button').onclick=count;
    // setInterval(count,1000);
})
document.getElementById("stop").addEventListener("click",stop);
document.getElementById('resume').addEventListener('click',resume);
