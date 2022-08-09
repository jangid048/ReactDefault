import Immutable from 'immutable';

export const getActiveMediaType = (state, request) => state.getIn(['desk', 'activeMediaType'], 0);