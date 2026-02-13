"use strict";

function ejercicio1() {
    let nums = [7, 4, 0, 9, 7, 6, 3, 8];
    let contador = 0;
    let i = 0;

    while (nums[i] !== undefined) {
        contador++;
        i++;
    }

    alert("Tamaño del array: " + contador);
}

ejercicio1();


