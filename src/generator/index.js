//GENERATORS: permite crear una funciona para controlar una iteracion, pordemos pausar y continuar lo que nosotros queremos. Se define por un * despues de function

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen() 
console.log(g.next().value) // permite ir iterando por cada elemento de la funcion gen
console.log(g.next().value) 
console.log(g.next().value) 
console.log(g.next().value) //este valor dara undefined porque ya no hay mas elementos para iterar

function* iterable(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterable(['LAURA', 'CECILIA', 'ARCINIEGA', 'ROQUE'])
console.log(it.next().value) //LAURA
console.log(it.next().value) //CECILIA
console.log(it.next().value) //ARCINIEGA
console.log(it.next()) //{ value: 'ROQUE', done: false }  //para que no salga así y solo salga el nombre, ponemos el .value
console.log(it.next().value) //este valor dara undefined porque ya no hay mas elementos para iterar