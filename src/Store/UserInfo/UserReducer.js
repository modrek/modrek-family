import * as actionTypes from './UserActionTypes';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

const initialState = {
    userId: 'm_modrek@yahoo.com',
    userToken: '',
    userName: 'Modrek',
    firstName: 'Mohammad',
    lastName: 'Modrek',
    userPic: '',
    exprieDate: '',
}

const reducer = ((state = initialState, action) => {

    if (action.type === 'START_LOGIN') {
        let AuthData = {
            email: action.userName,
            password: action.password,
            returnSecureToken: true

        }
        const API_KEY = "AIzaSyC6V88usZ9_Btp9cRqqu0mYld2i2k2YaRk";
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY, AuthData)
            .then(response => {
                let userToken = response.data.idToken;
                localStorage.setItem('token', userToken);
                // console.log('[username]', action.userName);
                // console.log('[password]', action.password);
                // console.log('[token]', userToken);

                return {
                    ...state,
                    userName: action.userName,
                    userToken: userToken

                }

            }).catch(error => {
                console.log(error.message);

            });



    }
    if (action.type === 'AUTH_LOGOUT') {
        let userToken = "";

        localStorage.removeItem('token', userToken);
        return {
            ...state,
            userName: action.userName,
            userToken: userToken

        }
    }
    return state;
    // switch (action.type) {
    //     case ActionTypes.START_LOGIN:
    //         {
    //             return
    //         }
    //         break;

    //     default:
    //         break;
    // }
    // return state;
});



export default reducer;