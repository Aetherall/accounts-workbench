import React from 'react';
import connect from 'rzero-link';

import { Heading, Flex, Box } from 'rebass'

import Request from './components/Request'
import Response from './components/Response'
import Fetcher from './components/Fetcher'
import Actions from './components/Actions'

const App = () => 
<div>
  <Heading>Accounts Workspace</Heading>
  <Flex>
    <Box w={9/10}>
      <Request/>
      <Response/>
      <Fetcher/>
    </Box>
    <Box>
      <Actions/>
    </Box>
  </Flex>
</div>

export default App;