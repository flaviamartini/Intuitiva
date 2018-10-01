import axios from 'axios'

export const listaUsuarios = 'listaUsuarios'

export function mostraUsuarios() {
    
    return (dispatch, getState) => {
        axios.get('http://177.207.220.156:8080/v1/users')
            .then((response) => {
                dispatch( { type: listaUsuarios, payload: response.data } ) 
            }) 
    }
    
}