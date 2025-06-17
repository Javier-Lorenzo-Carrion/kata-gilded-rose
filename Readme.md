# Refactoring Kata Gilded Rose

## Refactoring Sostenible - Técnicas para mantener el Legacy Code bajo control
Este ejercicio forma parte del curso [Refactoring Sostenible](https://refactoringsostenible.com)

![Refactoring Sostenible](cover.png)

## Requisitos
- Node.js

## Instalación
Antes de comenzar el proyecto, debes cambiar a la versión correcta de Node e instalar las dependencias necesarias. Ejecuta los siguientes comandos en tu terminal:

```
npm install
```

### Tests

Para ejecutar las pruebas unitarias usando Jest, ejecuta:

```
npm run test
```

# Requisitos de la kata

- Compramos y vendemos mercadería.
- La calidad de la mercadería va bajando a medida que se aproxima la fecha de venta
- Existe un sistema que actualiza automáticamente el inventario 
- Todos los artículos tienen una propiedad sellIn que especifica el número de días que se tienen para vender el producto. 
- Todos los artículos tienen una propiedad quality que establece la calidad el artículo y al final de cada dia el sistema disminuye en una unidad los días que se tienen para vender (sellIn) y la calidad (quality). 
- Una vez que ha pasado los días de venta (sellIn) la calidad se degrada al doble de velocidad (quality). 
- La calidad no puede ser nunca negativa pero tampoco puede ser superior a 50
- Hay artículos, como el queso brie envejecido (aged brie), con los que pasa al contrario, su calidad aumenta una unidad cada día y una vez alcanzados los días de venta (sellIn), su calidad aumenta al doble de velocidad.
- El artíulo sulfuras no modifica los días de venta ni su calidad
- El artículo entrada al backstage incrementa su calidad en 2uds si faltan 10 días o menos, en 3uds si faltan 5 días o menos y una vez pasada la fecha de venta su calidad es cero

La tarea es agregar una nueva característica para poder vender una nueva categoría de items conjurados que degrada su calidad al doble que los normales

- No se puede modificar la clase Item ni sus propiedades