const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primero valor del arr se llamara nombre
// 2. Se llamara setNombre
const _useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = _useState('Goku');

console.log(nombre);
setNombre();

