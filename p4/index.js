do{
    var variable= false;
    const resultadoDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V"
    , "H", "L", "C", "K", "E"];
        do{
        var numeroDni= parseInt(prompt("Ingrese su numero de DNI"));
        if(isNaN(numeroDni)){
            alert ("lo que ha ingresado no es un número, intentelo de nuevo");
        }
        else if (numeroDni < 0 || numeroDni > 99999999){
            alert ("los dígitos ingresados no concuerdan con un DNI, intentelo de nuevo");
        }else{
            var variable=true;
        }
        }while(isNaN(numeroDni) || variable == false) 
            numeroDni = numeroDni % 23;
            alert (resultadoDni [numeroDni]);
            var continuar= confirm("Desea continuar?");
}while(!continuar==false)