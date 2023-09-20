//para trabajar con fetch dentro de node debemos instalar fetch con node: npm install node-fetch
import fetch from 'node-fetch' //importamos la dependencia instalada
const API = 'https://api.escuelajs.co/api/v1'

//funcion que recibe una api, y retorna la promesa de fetch
function fetchData(urlAPI) {
    return fetch(urlAPI)
}

// hacemos el llamado de fetch para que traiga los datos
/*fetchData(`${API}/products`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .then(console.log('hola, puedo agregar varios then a la promesa'))
    .catch(error => console.log(error + ' hubo un error'))*/

//en el ejemplo se ter se hacia new Promise((resolve, reject) => {}) para construir promesas, pero en este caso fetch ya es una promesa por si misma, entonces ya no es necesario poner el constructor de promise

//fetch ya es propio de JS pero como en este ejercicio estamos trabajando con npm y no con un navegador en si por eso lo instalamos en npm

fetchData(`${API}/products`)
    .then(res => res.json()) //convertimos los datos de texto plano a json
    .then(products => { //puedo usar los datos aqui en este then
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) //con esto traemos el id del primer elemento del json retornado
    })
    .then(res => res.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(res => res.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))