
//pasar los numeros de un array en orden inverso
//aplicar la operacion a los numeros de las posiciones pares(caracter/2=0) X*2 
//if(X*2=> 10 ){ sumar los dígitos del resultado}
// sumar los dígitos y nuevos dígitos ejem( 5 está en posición 8, por tanto 5*2= 10 => 1+0= 1)
//luego sumar los numeros de posiciones impares con el nuevo número de las posiciones pares
// comprobar si es una tarjeta válida

 // usuario no puede ingresar nº vacío
//array (3 array uno nº de tarjeta, otro con orden inverso, 
//3er con posiciones de los caracteres en orden inverso)
// sumar todos los dígitos impares y resultado de pares, el resultado de esta suma
// se divide por 10 y el residuo debe ser 0 (40 % 10= 0)

function isValidCard(numCreditCard){
	//preguntar n al usuario número de tarjeta
	var numCredit= prompt("Digite los números de su tarjeta de crédito:"," ");
	var separados = numCredit.split('');
	var arrNumber=[];
	var invertido = "";
	if(isNaN(numCredit){

	} else {alert("¡Debe ingresar números!")

	}

	for(var i=0; i < separados.length; i++){
		arrNumber.push(parseInt(separados[i]));
		invertido = arrNumber.reverse();
	}
	
	for(var i=0; invertido.length -1; i>= 0;i--){
    var numImparPosition= [];
}
for(var j=1; j< numCredit.length; j+= 2)
    var numParPosition= arrNumber[j]*2;
}

	isValidCard();

	/*var arrNumber= numCreditCard.split(' ').reverse().join(',')
	console.log(arrNumber);*/

	/*arrNumber= numCreditCard.split('').reverse().join(',');
	for(var i=1; i < arrNumber.length ; i += 2){
		var numParPosition= arrNumber[j]*2;

console.log(numParPosition);
   } 



var numImparPosition= [];
}*/

/*var numCreditCard= prompt("Digite los números de su tarjeta de crédito:"," ");
var array=[];
for(var i= numCreditCard.length -1; i>= 0;i--) { 
  var numCreditReverse= parseInt(numCreditCard.charAt(i));
  array.push(numCreditReverse);}
  var numImparPosition=[];
  for(var j= 1; j < array.length; j+= 2) {
    var numParPosition= array[j]*2;
    for(var numParPosition= j; j >= 10; j++) {
      var sum=
    
  }*/


/*
//function isValidCard(numCreditCard){
var numCreditCard= '4539456076758487';
var array=[];
for(var i= numCreditCard.length -1; i>= 0;i--) { 
  var numCreditReverse= parseInt(numCreditCard.charAt(i));
  array.push(numCreditReverse);}
  var numImparPosition=[];
  for(var j= 1; j < array.length; j+= 2) {
    var numParPosition= array[j]*2;}{
      console.log(numParPosition);
    }
      
    
*/





/*function isValidCard(numCreditCard){
var numCreditCard= prompt("Digite los números de su tarjeta de crédito:"," ");
var arrNumber=[];
var numImparPosition= [];
arrNumber= numCreditCard.split('').reverse().join(',');
	for(var i=1; i < arrNumber.length ; i += 2){
		var numParPosition= arrNumber[j]*2;
console.log(numParPosition);
   } 


}*/





















