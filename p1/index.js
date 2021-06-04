var nota = prompt ("ingrese su nota");
    if (nota >= 0 && nota <= 3){
        document.write("Muy deficiente");
    }
        else if (nota < 5){
            document.write("Insuficiente");
        }
            else if (nota < 6){
                document.write("Suficiente");
            }
                else if (nota < 7){
                    document.write("Bien");
                }
                    else if (nota < 9){
                        document.write("Notable");
                    }
                        else if (nota <= 10){
                            document.write("Excelente");
                        }