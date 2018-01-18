import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedMotivation=createReducer({},{

});

export const motivationCount=createReducer(0,{
[types.ADD_MOTIVATION](state,action)=>{
    return  state+10;
}
});