import { environment } from '../../environments/environment';

const serverUrl = environment.url;

/** API GLOBAL URL **/
const securityUrl = `${serverUrl}/security`;

export const ApiGlobalConfig = {
  /** ENDPOINT URL **/
  activateAccount: `${securityUrl}/password`,
  getUserId: `${securityUrl}/activatingLink`,
  login: `${securityUrl}/login`,
  forgotPassword: `${securityUrl}/password/request`,
  resetPassword: `${securityUrl}/password/reset`,
  userDetails: `${securityUrl}/user/details`,
};
