let direction={x:0,y:0};
let speed=2;
let lastPainTime=0;
let snakearr=[
    {x:13,y:15}
]

function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime-lastPainTime)/1000 <1 /speed)
    {
        return ;
    }
    lastPainTime=ctime;

    function gameEngine(){

        BeforeUnloadEvent.innerHTML="";
        snakearr.forEach((e,index)=>{
            snakeelement=document.createElement('div');
            snakeElement.style.gridRowStart=e.y;
            snakeElement.style.gridcolumnStart=e.x;
            snakeelement.ClassList.add('food');
            BeforeUnloadEvent.appendChild(snakeElement);
        })
    }
}

window.requestAnimationFrame(main);