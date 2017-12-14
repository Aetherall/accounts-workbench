import React from 'react';
import connect from 'rzero-link';

import { Heading } from 'rebass'

import Request from './components/Request'
import Response from './components/Response'
import Fetcher from './components/Fetcher'
import Actions from './components/Actions'

const App = () => 
<div>
  <Heading>Accounts Workspace</Heading>
  <Request/>
  <Response/>
  <Fetcher/>
  <Actions/>
</div>

export default App;