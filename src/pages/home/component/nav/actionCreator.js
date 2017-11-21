import { CHANGE_NAV } from "./actionTypes";

export const getNavAction = (value) => ({
	type: CHANGE_NAV,
	value: value
})
