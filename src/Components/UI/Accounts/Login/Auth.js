//import axios from 'axios';
import store from '../../../../Store/UserInfo/UserReducer'


// export const auth = (email, password, isSignup) => {
//     return dispatch => {
//         dispatch(authStart());
//         const authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         };
//         let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
//         if (!isSignup) {
//             url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
//         }
//         axios.post(url, authData)
//             .then(response => {
//                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
//                 localStorage.setItem('token', response.data.idToken);
//                 localStorage.setItem('expirationDate', expirationDate);
//                 localStorage.setItem('userId', response.data.localId);
//                 dispatch(authSuccess(response.data.idToken, response.data.localId));
//                 dispatch(checkAuthTimeout(response.data.expiresIn));
//             })
//             .catch(err => {
//                 dispatch(authFail(err.response.data.error));
//             });
//     };
// };

export const setAuthRedirectPath = (path) => {
    return {
        type: "actionTypes.",
        path: path
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: "AUTH_LOGOUT"
    };
};

export const authSuccess = (token, userId) => {
    store.dispatch({ type: "AUTH_SUCCESS" });
    // return {
    //     type: "AUTH_SUCCESS",
    //     token: token,
    //     userId: userId
    // };
};

export const authCheckState = () => {

    const token = localStorage.getItem('token');
    console.log('runnnn', token);
    if (token !== '1234') {
        logout();
    }
    else {
        authSuccess('1234', "12")
    }
    // return dispatch => {
    //     if (token !== '1234') {
    //         console.log('logout');
    //         dispatch(logout());
    //     } else {

    //         console.log('login');
    //         dispatch(authSuccess(token, "12"));
    //         // const expirationDate = new Date(localStorage.getItem('expirationDate'));
    //         // if (expirationDate <= new Date()) {
    //         //     dispatch(logout());
    //         // } else {
    //         //     const userId = localStorage.getItem('userId');
    //         //     //dispatch(authSuccess(token, userId));
    //         //     //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    //         // }
    //     }
    //};
};
