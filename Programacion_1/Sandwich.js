const Producto = require('./Producto');

class Sandwich extends Producto {
    constructor(Tamano_Cm){
        super(300, 0.10, 2);
        this.Tamano_Cm = Tamano_Cm;
    }

    ObtenerTamano() {
        return `{El tamaño del sandwich es de: ${this.Tamano_Cm} Cm.}`
    }

}

module.exports = Sandwich;