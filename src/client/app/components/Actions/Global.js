import React, { Component } from 'react'
import connect from 'rzero-link';

import { Box, Button, Flex, Panel, PanelHeader } from 'rebass'

const Global = (props) => 
<Panel m={1} >
  <PanelHeader>
    Global
  </PanelHeader>
  <Flex direction={'column'}>
    <Button m={1} onClick={props.fetch('user')}> User</Button>
    <Button m={1} onClick={props.fetch('impersonate')}> Impersonate </Button>
    <Button m={1} onClick={props.fetch('logout')}> Logout </Button>
    <Button m={1} onClick={props.fetch('refreshTokens')}> refreshTokens </Button>
  </Flex>
</Panel>


export default connect('state.fetcher')(Global)
