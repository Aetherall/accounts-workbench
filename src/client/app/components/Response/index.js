import React from 'react';

import { Panel, PanelHeader } from 'rebass'

import Body from './Body'
import Headers from './Headers'
import Cookies from './Cookies'

const Response = () => 
<Panel mt={20}>

  <PanelHeader>
    Response
  </PanelHeader>

  <Body/>
  <Headers/>
  <Cookies/>
  
</Panel>

export default Response;