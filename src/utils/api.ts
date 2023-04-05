const version: string = '/api/v1'

export const API = {
  login : `${version}/oauth/sign_in`,
  credential : `${version}/oauth/credentials`,
  register : `${version}/register`,
  request_otp : `${version}/register/otp/request`
} 