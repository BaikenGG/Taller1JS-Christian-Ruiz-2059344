console.log("Hola Mundo");


const btnIn = document.getElementById('btnIn');
const lista = document.getElementById('lista');
let usuarios = [];
let existe;

btnIn.addEventListener('click', ()=> {

const cajaTexto = document.getElementById('textoIn');
const textoIn = cajaTexto.value;

if (textoIn != "") {
	existeUsuario(textoIn);
	if (!existe){
	usuarios.push(textoIn);
	mensajeAlerta.classList.add('ocultar')
}
	else {
		textoUser.innerText = textoIn
		mensajeAlerta.classList.remove('ocultar')
	}
		//alert ("El usuario "+ textoIn+ " Ya Existe");
	
} else {
	usuarios.sort();
	pintarArray();
}

//console.log(" == >" + textoIn)

cajaTexto.value = ""

});

const pintarArray = () => {

	for(usuario of usuarios){
		let etiqueta = document.createElement("li");
		etiqueta.textContent = usuario;
		lista.appendChild(etiqueta)
	}

}
const existeUsuario = (userIn) =>{
	existe = false;
	for (usuario of usuarios){

		if (userIn === usuario)
			existe=true;
	}


}