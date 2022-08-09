import ApiReducers from "./ApiReducers";
import { applyReducers } from "./applyReducers";
import deskReducer from "./DeskReucers";
import * as Types from '../action/types';
import Immutable, { fromJS } from 'immutable';

export function combineReducers(reducers) {
    return (state = Immutable.fromJS({}), action) => {
        return applyReducers(state, action, reducers);
    };
}
const appReducer = combineReducers({
    api: ApiReducers,
    desk: deskReducer
})


const reducer = (state, action) => {
    if (action.type === Types.Api.LOGOUT) {
        state = undefined;
    }

    return appReducer(state, action);
};
export default reducer;
