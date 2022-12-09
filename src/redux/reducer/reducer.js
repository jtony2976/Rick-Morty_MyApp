import {ADD_CARD_FAVORITE, DELETE_CARD_FAVORITE, FILTER, ORDER} from '../actions/types'

//estado global
const initialState = {
    myFavorites: [],
    allCharacters: []
}

//Recibe 2 estados:
// -> la variable 'initialState' que es un objeto con una propiedad 'myFavorites' que es un array
// -> un objeto 'actions' = { type, payload } pero en forma destructuring 
export default function rootReducer(state = initialState, { type, payload }) {
    switch(type){
        case ADD_CARD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        //por medio de .filter hacemos una copia del array myFavorites con solo los elementos que no tengan el id del elemento que se quiere borrar
        case DELETE_CARD_FAVORITE:
            const filtered = state.myFavorites.filter(elem => elem.id !== payload )  //payload -> sera el 'id' que viene de la action en el archivo 'actions.js'
            return{
                ...state,
                myFavorites: filtered,
                allCharacters: filtered
            }

        case FILTER:
            const filterCopy = [...state.allCharacters];
            const filteredFav = state.allCharacters.filter(elem => elem.gender === payload )  //payload -> era el 'genero' del 'personaje' en el archivo 'actions.js'
            return{
                ...state,
                myFavorites: filteredFav,
            }

        case ORDER:
            const orderCopy = [...state.allCharacters];
            let orderSort = orderCopy.sort((a,b) => {
                if(payload === 'Ascendente'){
                    return a.id - b.id
                }
                if(payload === 'Descendente'){
                    return  b.id - a.id
                }
                else return 0
            } )
            return{
                ...state,
               myFavorites: orderSort,
            }

        default:
            return {...state}
    }
}