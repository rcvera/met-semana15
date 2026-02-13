"use strict";

function ejercicio2() {
    let nums = [0, 2, 4, 8];

    let resultado = "";

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            resultado += "" + nums[i] + nums[j] + " ";
        }
        resultado += "\n";
    }

    alert(resultado);
}

ejercicio2();
