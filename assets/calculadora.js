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
function sumar(){
  var numeros=nuevo.join("+");
  var res =0;
  console.log(numeros);
  for (var i=0;i<=numeros.length;i++){
    res+=(numeros[i]);

  }
  console.log(parseInt(res));
}
