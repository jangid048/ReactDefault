import Immutable from 'immutable';
import * as Types from '../action/desk/deskType';
import {applyReducers} from './applyReducers';

const deskReducer = (state = Immutable.fromJS({
    activeMediaType: 0,
    activeSetpsCount: 0,
    activeCaloriesCount: 0,
}), action) => {
  switch (action.type) {
    case Types.SET_ACTIVE_MEDIA_TYPE:
      return state.set('activeMediaType', action.value);
    case Types.SET_SETPS_COUNT:
      return state.set('activeSetpsCount', action.value);
    case Types.SET_CALORIES_COUNT:
      return state.set('activeCaloriesCount', action.value);
    case Types.SET_USER_GOAL:
      return state.set('usergoal', action.value);
    default:
      return applyReducers(state, action, {});
  }
};

export default deskReducer;
