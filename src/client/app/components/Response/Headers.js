

import React from 'react';

import JSONTree from 'react-json-tree'

import connect from 'rzero-link';

import { Panel, PanelHeader, Box } from 'rebass'


const Headers = (props) =>
<Panel m={4}>

  <PanelHeader>Headers</PanelHeader>

  <Box p={4}>
    <JSONTree data={props.headers} />
  </Box>

</Panel>
  

export default connect('state.response')(Headers)