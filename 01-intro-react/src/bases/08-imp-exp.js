//import  heroes, { owners } from '../data/heroes';
import  heroes from '../data/heroes';

//console.log(owners);
export const getHeroeById = (id) => heroes.find(x => x.id === id);

//console.log(getHeroeById(2));

//
export const getHeroesByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner);
//console.log(getHeroesByOwner('Marvel'));