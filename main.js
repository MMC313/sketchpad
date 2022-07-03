const container = document.querySelector(".container");
const size = document.querySelector(".size");
const reset = document.querySelector(".clear");


function clear(){
    const grid = document.querySelectorAll(".grid")

    grid.forEach(item =>{
        
        item.style.backgroundColor="lightgray";
    })
    
}
function resize(){
    let box = prompt("How many boxes per side? (Max:100)",16);
    if(box>100){
        box=100;
    }
    container.innerHTML="";

    for(i=1;i<=Math.pow(Number(box),2);i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.height=`${600/box}px`
        div.style.width=`${650/box}px`
    
        container.appendChild(div);
    }
    const grid = document.querySelectorAll(".grid").forEach(item => {
        item.addEventListener("mouseover",activate =>{
            item.style.backgroundColor=`hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, ${Math.floor(Math.random()*100)}%)`;
        })
    });
    
}

size.addEventListener("click",resize);
reset.addEventListener("click",clear);




for(i=1;i<=256;i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.height="37.5px"
    div.style.width="40.625px"

    container.appendChild(div);
}
  const grid = document.querySelectorAll(".grid").forEach(item => {
        item.addEventListener("mouseenter",activate =>{
            item.style.backgroundColor=`hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, ${Math.floor(Math.random()*100)}%)`;
        })
    });