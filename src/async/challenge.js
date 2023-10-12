import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi) { //esta promesa creada con fetch nos va a consultar en la api los datos que se le indiquen

    /* Es como si hicieramos:
        fetch(urlApi)
        .then(x => x.json())
        .then(x => x)
    */

    const response = fetch(urlApi) // se pone await porque estoy llamando a una promesa (FETCH)
    const data = response.json() // se pone await porque estoy trabajando con la respuesta de la promesa

    return data
}

async function anotherFunction(urlApi) { //esta funcion llama a la promesa para que nos traiga los datos que le indicamos
    try { 
        //creamos la asignacion de la funcion fetchData
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (err) {
        console.log(err);
    }
}

anotherFunction(API) //con este llamanos a la funcion que nos va a traer los datos que necesitamos

// ---------------------------------------------------------
//Esta funcion, devuelve un error si la api no funciona
async function runCode() {
    const url = 'https://domain-api-com'; //esta api no existe
    try {
        let response = await fetch(url)
        let data = await response.json()

        return data // se puede simplificar con un: return await fetch(url) 🙄
    } catch {
        throw new Error('API Not Found')
    }
}
// funciona igual asi, sin el asyn await porque fetch por si misma es una promesa
async function runCode() {
    const url = 'https://domain-api-com'; //esta api no existe
    try {
        let response = await fetch(url)
        let data = await response.json()

        return data
    } catch {
        throw new Error('API Not Found')
    }
}

// ------------------------------------------------------------
//usando generator
async function* fetchDataG(urlAPi) {
    const response = await fetch(urlAPi);
    yield await response.json() //con esto ya no es necesario el return
}

fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
	const idProduct =value[0].id; //Extrae el id del producto que queremos manipular

	fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
		console.log(value.title); //Imprime el Título del producto solicitado
		const idCategory = value.category.id;
        
        fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {
           console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        });
    });
});