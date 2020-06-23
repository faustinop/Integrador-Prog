# Programacion_1
Repositorio Materia Programacion

## Trabajo Inegrador N°1

***Consignas***
1. Explicar y ejemplificar composición y agregación.
2. Explicar que es polimorfismo.
3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
4. Codificar el ejemplo del punto 3 con Javascript.
___
1. - **Agregacion**: Es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes. Habitualmente se da con mayor frecuencia que la composición.
La agregación se representa en UML mediante un diamante de color blanco colocado en el extremo en el que está la clase que representa el “todo”.

     ![Ejemplo Agregación](https://www.seas.es/blog/wp-content/uploads/ScreenShot081.png)

    - **Composición**: Es una forma fuerte de asociación donde la vida de la clase contenida debe coincidir con la vida de la clase contenedor. Los componentes constituyen una parte del objeto compuesto. De esta forma, los componentes no pueden ser compartidos por varios objetos compuestos. La supresión del objeto compuesto conlleva la supresión de los componentes.
El símbolo de composición es un diamante de color negro colocado en el extremo en el que está la clase que representa el “todo” (Compuesto).

       ![Ejemplo Composición](https://www.seas.es/blog/wp-content/uploads/ScreenShot082.png)

2. **Polimorfismo**: Es una propiedad de la programación orientada a objetos en la cual se hace uso de la herencia para compartir atributos y comportamientos. En el polimorfismo, los objetos reaccionan de forma distinta ante un mismo llamado. Es decir, cada objeto sabe como comportarse de acuerdo a quien es y sus caracterisiticas.
3. En este caso trabajamos en un local de venta de comida. Lo que se quiere hacer es aplicar un descuento según la cantidad que se lleve de un mismo producto, detallando que en bebida es del 5%, en sandwich del 10% y en carne del 15%. El ejemplo será realizado sobre un piso de $600. Devolvera una especie de factura detallando precio total, descuento a realizar, precio con descuento y luego detalles especificos del producto.

      <a href="https://ibb.co/vDHVqv2"><img src="https://i.ibb.co/9GNcg3R/Diagramadeclase.png" alt="Diagramadeclase" border="0"></a>

