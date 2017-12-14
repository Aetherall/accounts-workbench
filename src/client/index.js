import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from "redux-zero/react"

import { Provider as LayoutProvider } from 'rebass'

import App from './app'
import store from './redux'

const Root = () => 
<Provider store={store}>
  <LayoutProvider>
    <App />
  </LayoutProvider>
</Provider>

ReactDOM.render(<Root/>, document.getElementById("app"))