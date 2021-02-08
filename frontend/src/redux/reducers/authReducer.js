const initialState = {
    loggedUser: {
        "urlPic":require(`../../assets/img/logoUser.png`).default,
        "firtsName":"",
        "lastName":"",
        "mail":""
      }
}

export function authReducer(state = initialState, action){
    switch (action.type) {
        case 'LOG_USER':
            localStorage.setItem('firtsName', action.payload.response.firtsName)
            localStorage.setItem('lastName', action.payload.response.lastName)
            localStorage.setItem('mail', action.payload.response.mail)
            localStorage.setItem('urlPic', action.payload.response.urlPic)
            localStorage.setItem('whereAccount', action.payload.response.whereAccount)
            localStorage.setItem('token', action.payload.response.token)
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT_USER': 
            localStorage.clear()
            return {
                ...state,
                loggedUser: {
                    "urlPic":require(`../../assets/img/logoUser.png`).default,
                    "firtsName":"",
                    "lastName":"",
                    "mail":""
                  }
            }
        default:
            return state
    }
}