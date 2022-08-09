import * as Util from './Util';

export const authenticate = (data) => { return Util.post('/otp/send-otp', data); };
