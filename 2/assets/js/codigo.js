var cadena = prompt("Digita una palabra plox:");
    var nuevaCadena = cadena.length;   
    var espacio;
    var i;
    for (i = 0; i < nuevaCadena; i++) {
	espacio = cadena.charAt(i);    //Recupera el contador de la cadena
	if (i == nuevaCadena - 1) {
		document.write(espacio);
	}
	else {
		document.write(espacio + "-");
		}
    }