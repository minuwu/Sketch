setTimeout(execution, 5000);

function execution(){
    let space = document.querySelector(".space");
    let cc = 0, c=0, ccc=0;
    for(let i=1; i<=10000; i++){
        
        let divpixel = document.createElement("div");
        divpixel.classList.add("pixel");
        divpixel.addEventListener("mouseover", ()=>{
            cc++,c+=2,ccc+=3;
            cc %= 256; c %= 256; ccc %=256;
            divpixel.style.backgroundColor = `rgb(${c},${cc},${ccc})`;
        });
        space.append(divpixel);
    }

}
