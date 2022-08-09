import makeAction from "../makeAction";
import * as Types from './apiTypes';


export const authenticate = makeAction(Types.AUTHENTICATE, 'data', 'redirect');
export const authenticateSucceeded = makeAction(Types.AUTHENTICATE_SUCCEEDED, 'data');
export const authenticateFailed = makeAction(Types.AUTHENTICATE_FAILED, 'error');