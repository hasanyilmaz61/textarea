
let textarea=document.getElementById("nachricht");
let span=document.getElementById("span");


  function neu() {

    let zahl=textarea.value.length;

    span.innerHTML=zahl+" /100";


    if (zahl==100) {

        span.style.color="red";
    }

    else if (zahl>=85) {
        span.style.color="#a00";
    }
    else if(zahl>= 70){
        span.style.color="#700"
    }
    else
    span.style.color="black";

    
  } 

 
  