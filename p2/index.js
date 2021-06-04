var textoFinal="";
do{
    do{
        var texto= prompt("Ingrese un texto");
            if(!isNaN(texto)){
                alert ("Ha ingresado un número, intentelo de nuevo");
            }
    }while(!isNaN(texto)) 
        var continuar = confirm("Desea continuar?");
            if(textoFinal == ""){
            textoFinal = textoFinal + texto;
            }
                else{
                    var textoFinal = textoFinal + " - " + texto;
                }
}while(!continuar == false); 
            document.write (textoFinal);