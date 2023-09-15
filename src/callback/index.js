// EJEMPLO #1
sum = (num1, num2) => {
    return num1 + num2
}

calc = (num1, num2, callFunction) => {
    return callFunction(num1, num2)
}

console.log(calc(2,2,sum));


//EJEMPLO #2
setTimeout(() => {
    console.log('Hola perrilla');
}, 5000);
//el setTimeOut por si mismo ya es una funcion callback porque recibe una funcion como parametro

//EJEMPLO #3
gretting = (name) => {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Laurencia');
//el tercer parámetro para el setTimeout son argumentos para la funcion gretting o cualquier funcion que este ahi pero sea externa