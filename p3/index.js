var numeroFinal=0;
do{
        do{
        var numero= parseInt(prompt("Ingrese un numero"));
        if(isNaN(numero)){
            alert ("lo que ha ingresado no es un número, intentelo de nuevo");
        }
        }while(isNaN(numero)) 
            var continuar= confirm("Desea continuar?");
            numeroFinal= numeroFinal+numero;
}while(!continuar==false); 
        document.write (numeroFinal);