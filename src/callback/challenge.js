const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //paquete instalado con npm
const API = 'https://api.escuelajs.co/api/v1'; //url de la api que vamos a consumir


fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttpRequest() //hacemos referencia al paquete que definimos arriba

    //que metodo usaremos, la api, y el true para que se habilite el asincronismo o no. El open es para abrir una solicitud.
    xhttp.open('GET', urlApi, true)

    //con esta funcion monitoreamos el estatus de nuestra peticion
    xhttp.onreadystatechange = (event) => {
        // ESTADOS DE LA PETICIONE
        // 0 no inicializado (no se ha llamado a open())
        // 1 loadign (aquí ya se llamo a open())
        // 2 ya ejecutado  (se ha llamado a send())
        // 3 interactuando o trabajando con la solicitud
        // 4 cuando se ha completado la llamada (la solicitud se completo)
        if(xhttp.readyState === 4) {

            // con .status vemos que nos arrojo el servidor
            if(xhttp.status === 200) { // servidor respondio de forma correcta
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                //cuando tengamos un error
                const error = new Error('Error parse: ' + urlApi) 
                return callback(error, null)
            }
        } else { //si aun no esta terminada la solicitud
            console.log('esperando a que termine')
        }
    }

    xhttp.send() //para que se ejecute toda la logica que hicimos anteriormente en esta función
}

fetchData(`${API}/products`, (error, data) => { //todo se puede sacar desde este callback, pero para fines de ejemplo hacemos los demas
    if(error) return console.error(error)
    
    fetchData(`${API}/products/${data[0].id}`, (error2, data2) => {
        if(error2) return console.error(error2)

        fetchData(`${API}/categories/${data2.category.id}`, (error3, data3) => {
            if(error3) return console.error(error3)

            console.log(data[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})

//se cambio esta wea, ya no es necesario usar onreadystatechange, ahora es xhttp.onload = function(){ aqui se va directo a la condicional del servidor } y en la función open ya no es necesario usar el ultimo parametro