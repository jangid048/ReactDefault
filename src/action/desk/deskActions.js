import makeAction from '../makeAction';
import * as Types from './deskType';

export const setActiveMediaType = makeAction(Types.SET_ACTIVE_MEDIA_TYPE, 'value');
export const setSetpsCount = makeAction(Types.SET_SETPS_COUNT, 'value');
export const setCaloriesCount = makeAction(Types.SET_CALORIES_COUNT, 'value');
export const setUserGoal = makeAction(Types.SET_USER_GOAL, 'value');
