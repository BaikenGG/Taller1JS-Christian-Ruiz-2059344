
function soloNumeros(e){

    key=e.keyCode || e.which;

    teclado = String.fromCharCode(key);
    numero ="0123456789";
    especiales="8-37-38-46";//array
    teclado_especial= false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        swal({
            title: "Espera!",
            text: "Solo se permite digitar Números!",
            icon: "error",
            button: "Volver",
          });
        return false;
    }
}