console.log("Ajax tutorial in one video");

let fetchbtn=document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',buttonClickHandler);


function buttonClickHandler(){
    console.log('You have clicked the fetchbtn');
    const xhr=new XMLHttpRequest();
    
    // xhr.open('GET','harry.txt',true);
    xhr.open('GET','https://jsonplaceholder.typicode.com/',true);

    xhr.onprogress=function(){
        console.log('on progress');
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state is',xhr.readyState)
    // }

    xhr.onload=function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured")
        }
    }

    xhr.send();

    console.log("We are done");
}