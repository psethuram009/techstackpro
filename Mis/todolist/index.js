document.addEventListener('DOMContentLoaded',function(){
    //by default submit button should be disabled.
    document.querySelector("#submit").disabled=true;

    document.querySelector("#task").onkeyup=()=>{// if anything is typed 
        if (document.querySelector("#task").value.length>0){//if value is reentered or backspaced
            document.querySelector("#submit").disabled=false;
        }else{
            document.querySelector("#submit").disabled=true;
        }
    }
    document.querySelector('form').onsubmit=()=>{
        const task = document.querySelector("#task").value;
        const li = document.createElement('li');
        li.innerHTML=task;

        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value='';
        document.querySelector("#submit").disabled=true;

        return false;
    }
})