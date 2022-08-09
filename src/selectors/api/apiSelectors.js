import Immutable from 'immutable';

export const getErrorInApiRequest = (state, request) => state.getIn(['api', request, 'error'], null);
export const isApiRequestInProgress = (state, request) => state.getIn(['api', request, 'inProgress'], false);
export const isRequestInProgress = (state, section, request) => state.getIn([section, request, 'inProgress'], false);
export const hasMore = (state, section, request) => state.getIn([section, request, 'hasMore']);
export const apiRequestData = (state, request) => state.getIn(['api', request, 'data'], Immutable.List());
export const isApiRequestInSucceeded = (state, request) => { return state.getIn(['api', request, 'succeeded'], null) }