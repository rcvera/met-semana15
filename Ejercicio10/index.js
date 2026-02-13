"use strict";

function ejercicio10() {
    let binaryNumber = [0, 1, 0, 1];
    let decimal = 0;
    let potencia = binaryNumber.length - 1;

    for (let i = 0; i < binaryNumber.length; i++) {
        decimal += binaryNumber[i] * Math.pow(2, potencia);
        potencia--;
    }

    alert("Decimal: " + decimal);
}

ejercicio10();
