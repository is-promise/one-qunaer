import { CHANGE_NAV } from "./actionTypes";

const defaultState = {
	navList: []
}

export default (state = defaultState , action) => {
	
	if (action.type === CHANGE_NAV) {
		const newState = Object.assign({}, state);
		newState.navList = action.value;
		return newState;
	}	
	
	return state
}
