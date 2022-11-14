// Funciones en JS
const saludar = function (nombre){
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'Test name'
})

const user = getUser();
console.log(user);

// Tarea
function getUsuarioActual(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const objetoImplicito = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActual('Miguel');
const implicito = objetoImplicito('Miguelito');
console.log(usuarioActivo);
console.log(implicito);