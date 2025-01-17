import axios from "axios"

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const response = await axios.post('https://curvelo-mytinerary.herokuapp.com/api/user/register', nuevoUsuario)
            if (!response.data.success) {
                return response.data
            }
            dispatch({type: 'LOG_USER', payload: response.data})
        }
    },

    logingForLS: (token) => {
        
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('https://curvelo-mytinerary.herokuapp.com/api/user/localStorage', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                dispatch({type: 'LOG_USER', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
                if (err.response.status === 401) {
                    localStorage.clear()
                    return '/'
                }
            }
        }
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },

    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://curvelo-mytinerary.herokuapp.com/api/user/signin', user)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    }
}

export default authActions