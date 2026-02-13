"use strict";

function ejercicio3() {
    let nums = [0, 2, 4, 8];
    let resultado = "";

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            resultado += "" + nums[i] + nums[j] + " ";
        }
        resultado += "\n";
    }

    alert(resultado);
}

ejercicio3();
