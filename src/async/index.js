//como funciona async/await en JS?
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => {
            resolve('Async!!')
        }, 2000) : reject('no Async!')
    })
}

/* async function callPromise(){
    console.log('llamando');
    const result = await fnAsync()
    console.log(result);
} */

const callPromise = async () => {
    console.log('solving');
    const result = await fnAsync()
    console.log(result);

    // Estas instrucciones no se muestran hasta que el await se complete
    //solo lo que haya en esta funcion va a esperara a que el await termine
    console.log('another console'); 
    console.log('se va a mostrar esto?');
}

callPromise();
console.log('y esto?'); //esto si se muestra inmediatamente porque las promesas no bloquean el callstack/single thread. Por eso son asincronas


/* 
    Usar async y await es escribir las promesas de manera sencilla y mas legible.
    Solo se tiene que crear una funcion a la cual se le ponga un async antes de la palabra clave, y la funcion que funge como promesa se le pone un await antes
    todo lo que este dentro de la funcion async/await se va a esperar hasta que la promesa devuelva algo.

    A diferencia de las promesas normales usando el then/catch dentro de las async/await usamos el try/catch para obtener los errores.
*/