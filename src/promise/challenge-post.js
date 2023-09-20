//esta app nos va a permitir guardar datos de esa api
import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

//esta funcion recibe 2 parametros, la api y la data que vamos a guardar
function postData(urlApi, data){
    const response = fetch(urlApi, {
        //este objeto tiene la configuracion necesaria para indicar que metodo usaremos, los datos, y los headers para la peticion
        method:'POST', //el metodo
        /* 
            Hay mas metodos: 
                GET → Sirve para solicitar recurso.
                POST → Sirve para la creación de recursos en el servidor.
                PUT → Sirve actualizar por completo un recurso.
                DELETE → Sirve para eliminar un recurso. 
        */

        mode: 'cors', //los permisos que va a llevar la peticion (CORS)
        credentials: 'same-origin', //si no lo asignamos no tiene efecto. Si no tiene autenticacion no pasa nada
        headers: {
            'Content-type': 'application/json', //le indico que lo que le envio es json
        },
        body: JSON.stringify(data), //la informacion que le mando parseada a JSON
    })

    return response //retorno la promesa
}

//ESTAMOS USANDO LA API DE LA FAKE STORE DE PLATZI
const new_produt = { //creo el objeto que le voy a mandar
    title: "Steven Universe Figure",
    price: 9999,
    description: "A description",
    categoryId: 1,
    images: [
        "https://placeimg.com/640/480/any"
    ] 
}

postData(`${API}/products`, new_produt) //llamo a la promesa
    .then(res => res.json())
    .then(res => console.log(res))