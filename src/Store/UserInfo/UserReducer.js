import * as actionTypes from './UserActionTypes';
import { act } from 'react-dom/test-utils';

const initialState={
    userId:'m_modrek@yahoo.com',
    userToken:'fgsjhdgfjdh',
    userName:'Modrek',
    firstName:'Mohammad',
    lastName:'Modrek',
    userPic:'',
    exprieDate:'',
}
const reducer =((state=initialState,action)=>{
    if (action.type==='START_LOGIN')
    return {
        ...state,
        userName:action.userName,
        userToken:action.userName
      
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



export default reducer ;