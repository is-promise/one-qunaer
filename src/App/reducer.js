import { combineReducers } from 'redux';
import listReducer from '../pages/home/component/topicList/reducer';
import navReducer from '../pages/home/component/nav/reducer';

export default combineReducers({
	list: listReducer,
	navList: navReducer
})