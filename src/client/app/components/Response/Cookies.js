

import React from 'react';

import JSONTree from 'react-json-tree'

import connect from 'rzero-link';

import { Panel, PanelHeader, Box } from 'rebass'


const Cookies = (props) =>
<Panel m={4}>

  <PanelHeader>Cookies</PanelHeader>

  <Box p={4}>
    <JSONTree data={props.json} />
  </Box>

</Panel>
  

export default connect('state.response.cookies')(Cookies)