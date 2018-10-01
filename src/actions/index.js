import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS'

export function showUsers() {
    
    return (dispatch, getState) => {
        axios.get('http://177.207.220.156:8080/v1/users')
            .then((response) => {
                console.log(response)
                dispatch( { type: SHOW_USERS, payload: response.data } ) 
            }) 
    }
    
}