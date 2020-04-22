import counterRedcuer from './counter';
import loogedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
	counter: counterRedcuer,
	logged: loogedReducer,
});

export default allReducer;
