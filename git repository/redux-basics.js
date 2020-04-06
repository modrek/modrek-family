const redux =require('redux');
const createStore = redux.createStore;

const initialState={
    name:'mohammad',
    family:'modrek'
}
// Reducer 

const rootReducer=(state=initialState,action)=>{
    if (action.type==='CHANGE_NAME')
    return {
        ...state,
        name:action.name
      
    }
    return state;
}

// Store

const store = createStore(rootReducer);
console.log('[initial]',store.getState());

// Subscription
store.subscribe(()=>{
    console.log('[subscription]',store.getState());
})

// Dispatching Action

store.dispatch({type:'CHANGE_NAME',name:'Ali'});
store.dispatch({type:'CHANGE_Family',name:'Nasr'});
console.log('[Dispatch]',store.getState());
