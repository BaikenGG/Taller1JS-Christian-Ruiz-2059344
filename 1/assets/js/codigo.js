var cadena = prompt("Digita una palabra plox:");
var cadenainvertida = "";
var espaciosVacios = "0";
   
//Ciclo for para posicionar cada caracter de la cadena en una nueva pero invertido
for(var i = cadena.length-1; i>=0; i--)
{
	 if (cadena.charAt(i) == ' ') espaciosVacios++;
  //Resultado del ciclo for despues de invertir todos los caracteres
  cadenainvertida += cadena[i];
}
console.log("El tamaño de la cadena invertida es "+cadenainvertida);
console.log("El tamaño de la cadena es "+cadena.length);
console.log("El numero de espacios es "+espaciosVacios);
