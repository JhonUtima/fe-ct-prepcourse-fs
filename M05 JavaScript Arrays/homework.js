/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:

   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   //var arreglo2 = array.forEach(function(array) {return array+1} );

   //return num +1;
   
     for (var i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
      } 
      return array;
   
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

  var agregar = array.push(elemento);

  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   var inicio = array.unshift(elemento);

   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   
   return palabras.join(' ');

   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   return array.includes(elemento);


}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   return arrayOfNums.reduce(function(acu, ele){
   acu = acu + ele
   return acu;}
   );

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0;

   for (var i = 0; i < resultadosTest.length; i++) {

         var promedio = promedio + resultadosTest[i]  
   }
   return promedio / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   return Math.max (...arrayOfNums); 

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   let resultArgu = 1;

   if (arguments.length == 0) {
      return 0;}

   else {
      
      for(let i=0; i < arguments.length; i++){

         resultArgu = resultArgu * arguments[i]
      };
   }
      return resultArgu;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let mayores = 0;

      /////////// OPCION 1 /////////////

      array.forEach((ele)=>{
         if (ele > 18) {
            mayores = mayores + 1;
         }

      })
         return mayores;

      /////////// OPCION 2 ///////////// 

      // for (let i=0; i < array.length; i++){
      //    if (array[i] > 18) {
      //       mayores = mayores + 1;
      // }}
      // return mayores;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   
      if (numeroDeDia === 1 || numeroDeDia === 7) {
         return "Es fin de semana"
      }
      else {return "Es dia laboral"};

   /////// ESTA OPCION NO ES CORRECTA, DEBO TENER PRESENTE QUE NO TODAS LAS FUNCIONES SON ARRAYS ///////

   // for(let i=1; i < numeroDeDia.length; i++){
   //    if (numeroDeDia[i] == 1)  {
   //       return "Es fin de semana"
   //    };
   //    else if (numeroDeDia[i] == 7) {
   //       return "Es fin de semana"
   //    };
   //    else {
   //       return "Es dia laboral"
   //    };
   // };

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   return num.toString()[0] === '9' ? true : false;

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   /////// OPCION 1 /////////
  return array.every(ele => ele === array[0]);

   ///////OPCION 2 /////////
   // let primero = array[0];

   // for(let i=1; i < array.length; i++){
   //    if (array[i] !== primero) {
   //       return false;
   //    }
   //    else { return true;}
   // }

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   // let map1 = array.map((ele) => {
   //    if (ele == 'Enero' ) {}
   // })

   let newArray = [];

   array.forEach((ele) =>{
      if (ele == 'Enero' || ele == 'Marzo' || ele == 'Noviembre'){
       
       newArray.push(ele)
      }
     
   });

      if (newArray.length === 3) {
         return newArray;

      }
      else {return 'No se encontraron los meses pedidos'};

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   let tab = [];

   for(let i=0; i<=10; i++){
      tab.push(i * 6)
   }
   return tab;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   let cien = [];

   array.forEach((ele)=>{
      if (ele > 100) {
         cien.push(ele)
      }
   });

   return cien;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
