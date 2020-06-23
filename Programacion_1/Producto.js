class Producto {
  constructor(_precio_unidad, _porcentaje_descuento, _cantidad) {
        this._precio_unidad = _precio_unidad;
        this._porcentaje_descuento = _porcentaje_descuento;
        this._cantidad = _cantidad;


    }

  CalcularPrecioTotal() {
      return `{precio_total = ${this.precio_total = this._precio_unidad * this._cantidad}}`
  }
  DescuentoRealizado() {
      return `{descuento_realizado = ${this.descuento_realizado = this.precio_total * this._porcentaje_descuento}}`
  }
  AplicarDescuento() {
     return `{precio_descuento = ${this._precio_descuento = this.precio_total - this.descuento_realizado}}`

  }   
    
  

}

module.exports = Producto;