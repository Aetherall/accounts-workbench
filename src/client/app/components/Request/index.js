import React from 'react';

import { Panel, PanelHeader } from 'rebass'

import Body from './Body'
import Headers from './Headers'
import Cookies from './Cookies'

const Request = () => 
<Panel mt={20}>

  <PanelHeader>
    Request
  </PanelHeader>

  <Body/>
  <Headers/>
  <Cookies/>
  
</Panel>

export default Request;