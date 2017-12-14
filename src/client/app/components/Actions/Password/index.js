import React, { Component } from 'react'
import connect from 'rzero-link';

import { Box, Button } from 'rebass'

const Password = (props) => 
<Box>
  <Button m={1} onClick={props.fetch('password/register')}> Register '/password/register'</Button>
  <Button m={1} onClick={props.fetch('password/authenticate')}> Authenticate '/password/authenticate'</Button>
</Box>

export default connect('state.fetcher')(Password)
