

import React from 'react';

import JSONTree from 'react-json-tree'

import connect from 'rzero-link';

import { Panel, PanelHeader, Box } from 'rebass'


const Body = (props) =>
<Panel m={4}>

  <PanelHeader>
    Body
  </PanelHeader>

  <Box p={4}>
    <JSONTree data={props.body} />
  </Box>

</Panel>
  

export default connect('state.response')(Body)