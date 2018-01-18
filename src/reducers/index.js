import {combineReducers} from 'redux'
import * as motivationReducer from './motivation'

export default combineReducers(Object.assign(
    motivationReducer
))