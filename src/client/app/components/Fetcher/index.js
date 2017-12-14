import React, { Component } from 'react';

import connect from 'rzero-link';

const actions = {
  setFetch: (state) => (fetch) => ({...state, fetcher:{...state.fetcher, fetch}})
}

class Fetcher extends Component {

  fetcher =  (url) => async (e) => {
    const { request, fetcher:fetcherOptions } = this.props;
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
    console.log(await response.json())
    console.log(response.body)
  }

  componentDidMount() {
    this.props.setFetch(this.fetcher);
  }

  render(){
    return null
  }
}

export default connect('state', actions)(Fetcher)