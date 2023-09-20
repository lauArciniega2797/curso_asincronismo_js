// construir una promesa (con la promesa reservada Promise con dos funciones dentro: resolve y reject)
// la promesa se puede resolver ahora, en un futuro o nunca
// la promesa tiene 3 estados (pendiente, cumplido, rechazado)
const promise = new Promise(function(resolve, reject){
    resolve(console.log('se resolvio'))
    reject(console.log('no se resolvio'))
});

promise
    .then(x => console.log(x))
    .catch(error => console.log(error))
    .finally(() => console.log('termino la promesa'))



//------------------------------------------------------------------
const cows = 12;
const countCows = new Promise(function(resolve, reject){
    if(cows > 9){
        resolve('Se cumplio la producción');
    } else {
        reject('no se arma la producción');
    }
})

countCows
    .then(x => console.log(x) )
    .catch(error => console.log(error))
    .finally(() => console.log('termino la promesa'))


// -----------------------------------------------------------------
function delay(time, message) { //una funcion normal la conviertes en promesa al retornar una promesa... :|
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time);
    })
}

delay(2000, 'Hola mundo!') //asi llamo a la funcion/promesa
    .then(x => console.log(x))