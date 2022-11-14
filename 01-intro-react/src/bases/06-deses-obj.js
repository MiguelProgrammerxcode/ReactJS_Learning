// Desestructuracion
// Asignacion desestructuracion

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman'
};

/*const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);*/

const useContext = ({ clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 12.32,
            lng : -12.45
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, lating: {lat, lng}} = useContext(persona);
//const {lat, lng} = lating;

console.log(nombreClave, anios);
console.log(lat, lng);
