 const grade=["seven", "Eight", "Nine"]
 console.log(grade);
 let i;
//  for(i=0;i<grade.length;i++){
//     console.log(grade[i]);
//  }
const arraydata =document.getElementById("arraydata");
 grade.forEach(element => {
    const textnode = document.createTextNode(element);
    arraydata.appendChild(textnode);
    console.log(element);
 });

