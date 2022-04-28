import { ADD_COUNT, ADD_TODO } from "./action";

export const reducer = (store ,action) =>{



    switch(action.type){
        case ADD_COUNT: return {...store, counter:store.counter + action.payload};
        case ADD_TODO:return {todos:action.payload};
       

        default:return store
    }

}