"use strict";

/*

Manipulación de un array
Tome el siguiente array:

    const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

    ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

    El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

    sugerencia

• Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Elimina el cuarto y quinto elemento.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.



    const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

    theList.pop(); // Elimina el ultimo elemento de un array.

    theList.shift(); // Elimina el primer elemento de un array.

    theList.unshift('FIRST'); // Añade un elemento al principio de un array.

    theList[3] = 'hola mundo'; // Reemplaza el elemento de la posicion especificada.

    theList.splice(2, 1, 'MEDIO'); // Añade o quita un elemento de un array, (pos, cuantos elementos quiero quitar, que quiero quitar).

    theList.splice(4, 2); // Elimina dos elementos de la posicion [4] dentro del array.

    theList.push('ÜLTIMO'); // Añade un elemento al final de un array.

    console.log(theList);

    .toString(); // Convierte todo a "string".

    .indexOf(); // Indice de un array.

    .forEach(); // Recorre un array.

*/