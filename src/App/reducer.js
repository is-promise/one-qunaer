import { combineReducers } from 'redux';
import { reducer as listReducer } from '../pages/home/slider/';

export default combineReducers({
	list: listReducer
})