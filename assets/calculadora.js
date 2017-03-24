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
var operacionAnterior =[];
  function sumar(){
    var ins=document.getElementById("numeros")
    var numeroS= nuevo.toString().split("+")
    var res=0;
    for (var i=0;i<=numeroS.length-1;i++){
    res+=Number(numeroS[i]);
}
   operacionAnterior.push(res);
   ins.innerHTML= res;
}
function restar(){
  var ins=document.getElementById("numeros")
  var numeroS= nuevo.toString().split("-")
  var res=0;
  for (var i=0;i<=numeroS.length-2;i++){
    res=Number(numeroS[i])- Number(numeroS[i+1]);
}
   operacionAnterior.push(res);
   ins.innerHTML= res
 }
 function mult(){
  var ins=document.getElementById("numeros")
  var numeroS= nuevo.toString().split("*")
  var res=1;
  for (var i=0;i<=numeroS.length-1;i++){
    res*=Number(numeroS[i])
}
   operacionAnterior.push(res);
   ins.innerHTML= res;
 }
 function divi(){
   var ins=document.getElementById("numeros")
   var numeroS= nuevo.toString().split("/")
   var res=0;
   for (var i=0;i<=numeroS.length-2;i++){
     res=Number(numeroS[i])/Number(numeroS[i+1])
 }
    operacionAnterior.push(res);
    ins.innerHTML= res.toFixed(2);
  }
