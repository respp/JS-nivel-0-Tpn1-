for(var numero = 1 ; numero <= 500 ; numero++){
    document.write(numero);
        if(numero%4===0){
            document.write(" (Múltiplo de 4)");    
        }
            if(numero%9===0){
                document.write(" (Múltiplo de 9");  
            }
                if (numero%5===0){
                    document.write("<br>"); 
                    document.write("_____________________________________________________________");
                    document.write("<br>"); 
                }
    document.write("<br>"); 
}