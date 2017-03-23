  function mostrar(input,character){
     var entrada=document.getElementById("numeros");
     if(entrada.value == null || entrada.value == "0")
        entrada.value = character;
     else
        entrada.value += character;
}
var nuevo=[];
function guardar(input){
    var entry= document.getElementById("numeros");
     if(entry.value!=0){
        nuevo.push(entry.value);
        document.getElementById("numeros").value="";
    }console.log(nuevo);
}
var resultado =[];
function sumar(){
  var operacion=nuevo.join("+")
  var num =(Array.from(nuevo));
  var res=0;
  console.log(num);
  for (var i=0;i<=num.length-1;i++){
    res+=(Number(num[i]));
}
  //resultado.push(res);
   console.log(res);
}
function restar(){
  var operacion=nuevo.join("+")
  var num =(Array.from(nuevo));
  var res=0;
  console.log(num);
  for (var i=0;i<=num.length-1;i++){
    console.log(res=(Number(num[i]))-(Number(num[i+1])));

  }
  console.log(res);
}

function mult(){
  var operacion=nuevo.join("+")
  var num =(Array.from(nuevo));
  var res=0;
  console.log(num);
  for (var i=0;i<=num.length-1;i++){
    res*=(Number(num[i]));

  }
  console.log(res);
}
function div(){
  var operacion=nuevo.join("+")
  var num =(Array.from(nuevo));
  var res=0;
  console.log(num);
  for (var i=0;i<=num.length-1;i++){
    res/=(Number(num[i]));

  }
  console.log(res.toFixed(2));
}
