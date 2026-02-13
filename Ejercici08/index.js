"use strict";

function ejercicio8() {
    let world = ['s','o','n','a','c','n','e','u','c'];

    let invertido = [];
    let i = world.length - 1;

    while (i >= 0) {
        invertido.push(world[i]);
        i--;
    }

    alert("Invertido: " + invertido.join(""));
}

ejercicio8();
