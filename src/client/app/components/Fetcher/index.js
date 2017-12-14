import React, { Component } from 'react';
import cookie from 'cookie';

import connect from 'rzero-link';

const mstpFetcher = (fetcherOptions) => ({fetcherOptions});

const actionsFetcher = {
  setFetch: (state) => (fetch) => ({ ...state, fetch })
}


const actionsResponse = {
  setBody: (state) => (body) => ({...state, body }),
  setHeaders: (state) => (headers) => ({...state, headers }),
  setCookies: (state) => (cookies) => ({...state, cookies })
}

const mstpRequest = (request) => ({request});


@connect('state.fetcher', mstpFetcher, actionsFetcher)
@connect('state.response', undefined, actionsResponse)
@connect('state.request',mstpRequest)
export default class Fetcher extends Component {

  fetcher =  (url) => async (e) => {
    console.log(this)
    const { request, fetcherOptions } = this.props;
    const response = await fetch(`/accounts/${url}`,
      { 
        method: fetcherOptions.method,
        credentials: 'include',
        mode:'same-origin',
        redirect: 'follow',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...request.headers,
        },
        body: JSON.stringify(request.body) 
      }
    )
    this.props.setBody(await response.json())
    this.props.setHeaders({
      accessToken: response.headers.get('accessToken'),
      refreshToken: response.headers.get('refreshToken')
    })
    this.props.setCookies(cookie.parse(document.cookie))
  }

  componentDidMount() {
    this.props.setFetch(this.fetcher);
  }

  render(){
    return null
  }
}