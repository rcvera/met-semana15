"use strict";

function ejercicio7() {
    let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];

    let invertido = [];
    let i = world.length - 1;

    while (i >= 0) {
        invertido.push(world[i]);
        i--;
    }

    alert("Invertido: " + invertido.join(""));
}

ejercicio7();
