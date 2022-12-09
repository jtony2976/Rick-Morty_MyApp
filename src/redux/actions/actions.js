import {ADD_CARD_FAVORITE, DELETE_CARD_FAVORITE, FILTER, ORDER} from './types';


//Action creator para agregar personajes a la lista de favoritos
//Los action creators retornan una action
export function addFavorite(personaje){
    return({
        type: ADD_CARD_FAVORITE,
        payload: personaje,
    })
}

//Action creator para borrar personajes de la lista de favoritos
//Los action creators retornan una action
export function deleteFavorite(id){
    return({
        type: DELETE_CARD_FAVORITE,
        payload: id,
    })
}

// status --> tiene el genro del personaje
export function filterCards(status){
    return({
        type: FILTER,
        payload: status,
    })
}

export function orderCards(id){
    return({
        type: ORDER,
        payload: id,
    })
}

