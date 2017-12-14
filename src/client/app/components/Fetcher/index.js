import React, { Component } from 'react';

import connect from 'rzero-link';

const mstpFetcher = (fetcherOptions) => ({fetcherOptions});

const actionsFetcher = {
  setFetch: (state) => (fetch) => ({ ...state, fetch })
}


const actionsResponse = {
  setBody: (state) => (body) => ({...state, body }),
  setHeaders: (state) => (headers) => ({...state, headers })
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
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...request.headers
        },
        body: JSON.stringify(request.body) 
      }
    )
    this.props.setHeaders({
      accessToken: response.headers.get('accessToken'),
      refreshToken: response.headers.get('refreshToken')
    })
    const json = await response.json();
    this.props.setBody(json)
  }

  componentDidMount() {
    this.props.setFetch(this.fetcher);
  }

  render(){
    return null
  }
}