// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array.shift()
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop()
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(x=>x+1)
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  return numeros.reduce((previousValue, currentValue) => previousValue + currentValue)
}


function promedioResultadosTest(resultadosTest) {
  let totalAmount=0
  let adding=0
  for (let i=0; i<resultadosTest.length;i++){ 
    adding += resultadosTest[i]; totalAmount=i
  }totalAmount+=1
  return adding/totalAmount
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  totalArguments=1
  for(let i=0;i<arguments.length;i++){
    totalArguments*= arguments[i]
  }return arguments.length===0?0:totalArguments
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  newArray=[]
  for(let i=0;i<arreglo.length;i++){
    arreglo[i]>18?newArray.push(arreglo[i]): false;
  }
  return newArray.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  return numeroDeDia===2||numeroDeDia===3||numeroDeDia===4||numeroDeDia===5||numeroDeDia===6?'Es dia Laboral':'Es fin de semana' 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return n.toString().charAt(0)==='9'?true:false
}


function todosIguales(arreglo) {
  let igualdad
  for (let i=0;i<arreglo.length-1;i++){
    if(arreglo[i]!=arreglo[i+1]){
      igualdad= false
  }
  } return igualdad===false?false:true
}




function mesesDelAño(array) {
  
  const nuevoArray=['Marzo','Noviembre','Enero']
  let findEnero
  let findMarzo
  let findNoviembre
  array.includes('Enero')?findEnero=true:findEnero=false
  array.includes('Marzo')?findMarzo=true:findMarzo=false
  array.includes('Noviembre')?findNoviembre=true:findNoviembre=false;
  return findEnero===true&&findMarzo===true&&findNoviembre===true?nuevoArray:"No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newArray=[]
  for(let i=0;i<array.length;i++){
    if(array[i]>100)newArray.push(array[i])
  }return newArray
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  newArray=[numero+2]
  for(let i=0;i<9;i++){
    newArray.push(newArray[newArray.length-1]+2)
    if (newArray[newArray.length-1]===i){break}
  } return newArray.length<9?"Se interrumpió la ejecución":newArray
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  newArray=[numero+2]
  for(let i=0;i<8;i++){
    
    if (newArray[newArray.length-1]!==5)newArray.push(newArray[newArray.length-1]+2)
  } return newArray
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
