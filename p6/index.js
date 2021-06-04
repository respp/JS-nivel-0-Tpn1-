for(var numero = prompt("Ingrese un numero") ; numero > 1 ; numero--){
    for(var piramide = numero*2 ; piramide > numero; piramide--){
        document.write(numero);
    }
    document.write("<br>");
}