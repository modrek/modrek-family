import * as actionTypes from './UserActionTypes';
import { act } from 'react-dom/test-utils';

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
        let userToken = "1234";
        console.log('loginnnnnnnnnn');
        localStorage.setItem('token', userToken);
        return {
            ...state,
            userName: action.userName,
            userToken: userToken

        }
    }
    if (action.type === 'AUTH_LOGOUT') {
        let userToken = "";
        console.log('logooooooooooooout');
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