
import { applyReducers } from "./applyReducers"
import * as Types from '../action/api/apiTypes';
import Immutable, { fromJS } from 'immutable';


const authenticate = apiRequest(
    Types.AUTHENTICATE,
    Types.AUTHENTICATE_SUCCEEDED,
    Types.AUTHENTICATE_FAILED
);





const apiReducerFunction = (state = Immutable.fromJS({}), action) => {
    switch (action.type) {
        case "REFRESH_TOKEN":
            return state.set('token', true);
        default:
            return applyReducers(state, action, {
                authenticate: authenticate,                                

            })
    }

}

export default apiReducerFunction;

export function apiRequest(request, succeeded, failed) {
    return (state = Immutable.fromJS({}), action) => {
        switch (action.type) {
            case request:
                //TODO set data to null when request begins
                state = state
                    .set('inProgress', true)
                    .set('succeeded', null)
                    .set('error', null)
                    .set('paginated', false);
                if (action.paginated && action.page >= 0) {
                    state = state
                        .set('page', action.page)
                        .set('paginated', true);
                    if (action.page === 0) {
                        state = state
                            .set('data', Immutable.List())
                            .set('hasMore', true);
                    }
                }
                return state;
            case succeeded: {
                const responseData = action.data ? Immutable.fromJS(action.data) : null;
                state = state
                    .set('inProgress', false)
                    .set('succeeded', true)
                    .set('error', null);

                if (state.get('paginated')) {
                    if (responseData.size === 0 && state.get('page') !== 0) {
                        state = state.set('hasMore', false);
                    }
                    state = state.update('data', data => data.concat(responseData));
                } else {
                    state = state.set('data', responseData);
                }

                return state;
            }
            case failed:
                return state
                    .set('inProgress', false)
                    .set('succeeded', false)
                    .set('error', action.error)
                    .delete('data');
            default:
                return state;
        }
    };
}