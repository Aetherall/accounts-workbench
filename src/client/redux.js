import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import devtoolsMiddleware from './dev-tools';

const initialState = { 
  request: { 
    body: {
      username: '',
      email: '',
      password: '',
      accessToken: '',
      refreshToken: ''
    },
    headers: {
      accessToken: '',
      refreshToken: ''
    },
    cookies: {
      accessToken: '',
      refreshToken: ''
    }
  },
  response: {
    body: { json : {} },
    headers: { json : {} },
    cookies: { json : {} },
  },
  fetcher: {
    method: 'POST',
    credentials: 'include',
    fetch: () => ()=>{console.log('fetch function not assigned to store')}
  }
};


const middlewares = devtoolsMiddleware ? applyMiddleware(devtoolsMiddleware.connect(initialState)): [];
const store = createStore({ state: initialState }, middlewares);

export default store;