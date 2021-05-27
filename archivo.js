function esItaliano(nombre) {
    if (nombre.charAt(nombre.length - 1) === "i") {
        return true;
    } else {
        return false;
    }
}

function impresion(nombre) {
    if (esItaliano(nombre)) {
        return `${nom}: Este apellido tiene muchas probabilidades de ser italiano`;
    } else {
        return `${nom}: Este apellido podrí­a ser de cualquier país`;
    }
}

const nombreItaliano = "Maldini";
const nombreNoItaliano = "Xavier";
console.log(impresion(nombreItaliano));
console.log(impresion(nombreNoItaliano));
