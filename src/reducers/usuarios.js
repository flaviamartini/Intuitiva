import { listaUsuarios } from '../actions'

const initialState = {
    list: []
}

export function showUsers(state = initialState, action) {
    
    switch (action.type) {
        case listaUsuarios:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
    
}