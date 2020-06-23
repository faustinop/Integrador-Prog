const Producto  = require('./Producto');
const Bebida = require('./Bebida');
const Sandwich = require('./Sandwich');
const Carne = require('./Carne');

console.info("Ejemplo de Polimorfismo - Integrador Programación") 

const p1 = new Carne('Vacío', 'Vacuno',);
const rta = p1.CalcularPrecioTotal();
const rta2 = p1.DescuentoRealizado()
const rta3 = p1.AplicarDescuento();
const rta4 = p1.ObetenerOrigen();
const rta5 = p1.ObtenerCorte();
console.info(rta, rta2, rta3, rta4, rta5);

const p2 = new Bebida(2,'plastico',);
console.info(p2.CalcularPrecioTotal(), p2.DescuentoRealizado(), p2.AplicarDescuento(), p2.ObtenerMaterial(), p2.CalcularLitros());

const p3 = new Sandwich(30);
console.info(p3.CalcularPrecioTotal(), p3.DescuentoRealizado(), p3.AplicarDescuento(), p3.ObtenerTamano());