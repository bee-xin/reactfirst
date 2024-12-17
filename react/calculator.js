function calculator(operation){
    const input1=parseInt(document.getElementById("input1").value);
    const input2=parseInt(document.getElementById("input2").value);
    const result=document.getElementById("result");
    if(operation ==="add"){
       result.innerHTML= input1 + input2;
    }
    else if(operation==="sub"){
        result.innerHTML= input1 - input2;
    }
    else if(operation==="mul"){
        result.innerHTML= input1 * input2;
    }
     else if(operation ==="div"){
        result.innerHTML= input1 / input2;
     }
     else{
        alert("Invalid Operation");
     }
}