const PRODUCTION_URL = 'http://localhost:3000'
const TEST_URL = 'http://localhost:8000'

export const API =
  (process.env.NODE_ENV !== 'production'
    ? `${TEST_URL}`
    : `${PRODUCTION_URL}`) + '/api/v1'

export const REGISTER_API = '/user/register/'
export const LOGIN_API = '/user/token/'

const NAME = 'im-aam'
export const TOKEN_KEY = `${NAME}_jwt`
export const USER_KEY = `${NAME}_usr`
export const ROLE_KEY = `${NAME}_role`
export const ADMIN = 'admin'
export const User = 'user'
