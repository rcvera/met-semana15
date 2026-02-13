"use strict";

function ejercicio11() {
    let t = parseInt(prompt("Ingrese tamaño del vector:"));
    let x = parseInt(prompt("Ingrese número base:"));

    let v = [];

    for (let i = 1; i <= t; i++) {
        v.push(x * i);
    }

    alert("Vector: " + v.join(", "));
}

ejercicio11();
