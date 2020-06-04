import request from '@/utils/axios.js'

export function login (username, password) {
  debugger;
  return request({
    url: './dataJson/login.json',
    method: 'get',
    data: {
      username,
      password
    }
    // ,
    // withoutToken: true
  })
}
