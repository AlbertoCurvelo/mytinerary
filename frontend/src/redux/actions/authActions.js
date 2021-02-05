import axios from "axios"

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/signup', nuevoUsuario)
           if (!respuesta.data.success) {
               return respuesta.data
           }
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },

    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/signin', user)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    }
}

export default authActions