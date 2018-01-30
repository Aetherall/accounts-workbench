import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as AccountsProvider } from '@accounts/client-react-hoc';

import { Provider } from "redux-zero/react"

import { Provider as LayoutProvider } from 'rebass'

import App from './app'
import store from './redux'
import client from './accounts'

const Root = () => 
<AccountsProvider client={client}>
  <Provider store={store}>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </Provider>
</AccountsProvider>

ReactDOM.render(<Root/>, document.getElementById("app"))