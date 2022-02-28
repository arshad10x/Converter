const Input = document.getElementById("take-input");
const Select_1 = document.getElementById("select-from");
const Select_2 = document.getElementById("select-to");
const Output = document.getElementById("value");

function Calculate(){

if(Select_1.value === Select_2.value){
    Output.innerText = Input.value;
}
else if(!Input.value){
  alert("Please Enter the Value");
}
else if(Select_1.value == "Decimal" && Select_2.value == "Hexadecimal"){
  let number = parseInt(Input.value);
  let str = number.toString(16);
  Output.innerText = str;
}
else if(Select_1.value == "Decimal" && Select_2.value=="Octal"){
  let number = parseInt(Input.value);
  let str = number.toString(8);
  Output.innerText = str;
}
else if(Select_1.value=="Decimal" && Select_2.value=="Binary"){
  let number = parseInt(Input.value);
  let str = number.toString(2);
  Output.innerText = str;
}
else if(Select_1.value=="Hexadecimal" && Select_2.value=="Decimal"){
  let number = Input.value;
  let str = parseInt(number,16);
  Output.innerText = str;
}
else if(Select_1.value=="Hexadecimal" && Select_2.value=="Octal"){
  let number = Input.value;
  let str = parseInt(number,16).toString(8);
  Output.innerText = str;
}
else if(Select_1.value=="Hexadecimal" && Select_2.value=="Binary"){
  let number = Input.value;
  let str = (parseInt(number,16).toString(2)).padStart(8,"0");
  Output.innerText = str;
}
else if(Select_1.value=="Octal" && Select_2.value=="Decimal"){
  let number = Input.value;
  let str = parseInt(number,8).toString(10);
  Output.innerText = str;
}
else if(Select_1.value=="Octal" && Select_2.value=="Hexadecimal"){
  let number = Input.value;
  let str = parseInt(number,8).toString(16);
  Output.innerText = str;
}
else if(Select_1.value=="Octal" && Select_2.value=="Binary"){
  let number = Input.value;
  let str = parseInt(number,8).toString(2);
  Output.innerText = str;
}
else if(Select_1.value=="Binary" && Select_2.value=="Decimal"){
  let number = parseInt(Input.value);
  let str =  parseInt(number,2).toString(10);
  Output.innerText = str;
}
else if(Select_1.value=="Binary" && Select_2.value=="Hexadecimal"){
  let number = parseInt(Input.value);
  let str =  parseInt(number,2).toString(16);
  Output.innerText = str;
}
else if(Select_1.value=="Binary" && Select_2.value=="Octal"){
  let number = parseInt(Input.value);
  let str =  parseInt(number,2).toString(8);
  Output.innerText = str;
}
}