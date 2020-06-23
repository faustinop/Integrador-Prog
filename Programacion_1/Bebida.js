const Producto = require('./Producto');

class Bebida extends Producto {
    constructor(Litros_Unidad, MaterialEnvase){
        super(50, 0.05, 12);
        this.Litros_Unidad = Litros_Unidad;
        this.MaterialEnvase = MaterialEnvase;
    }

    ObtenerMaterial() {
        return `{El material es: ${this.MaterialEnvase}}`;
    }
    CalcularLitros() {
        return `{Litros en total: ${this.Litros_Unidad * this._cantidad}}`
    }


}
module.exports = Bebida;