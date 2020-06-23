const Producto = require('./Producto');

class Carne extends Producto {
    constructor(corte, origenAnimal){
        super(500, 0.15, 2);
        this.corte = corte;
        this.origenAnimal = origenAnimal;
    }

    ObtenerCorte() {
        return `{El corte de carne es: ${this.corte}}`
    }
    ObetenerOrigen() {
        return `{El orgien animal es: ${this.origenAnimal}}`
    }

}

module.exports = Carne;