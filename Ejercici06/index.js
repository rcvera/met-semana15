"use strict";

function ejercicio6() {
    let name = ['a', 'o', 'l', 'h'];

    let aux = name[0];
    name[0] = name[name.length - 1];
    name[name.length - 1] = aux;

    alert("Nuevo array: " + name.join(", "));
}

ejercicio6();
