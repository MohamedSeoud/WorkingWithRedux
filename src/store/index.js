import { legacy_createStore as createStore} from 'redux'


const defaultValues = {
    value:0
};
const counterReducer = (state = {value:0} , action)=>{
    
    switch(action.type)
    {
        case 'INCREMENT' :{
            return state.value +1;
        }
        case 'DECREMENT':{
            return state.value -1;
        }
        default:
            return state.value;
    }
}

const store = createStore(counterReducer,['Use Redux']);
export default store;