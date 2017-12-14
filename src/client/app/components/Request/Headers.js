

import React from 'react';
import connect from 'rzero-link';

import { Panel, PanelHeader, Box, Row, Label, Input } from 'rebass'

const actions = {
  setAccessToken: (state) => (e) => ({ ...state, accessToken: e.target.value}),
  setRefreshToken: (state) => (e) => ({ ...state, refreshToken: e.target.value}),
}


const Headers = (props) =>
<Panel m={4}>

  <PanelHeader>
    Headers
  </PanelHeader>

  <Box p={4}>
    <Row>
      <Label w={1/5}>AccessToken : </Label>
      <Input type="string" name="accessToken" defaultValue={props.accessToken} onInput={props.setAccessToken} />
    </Row>

    <Row>
      <Label w={1/5}>RefreshToken : </Label>
      <Input type="string" name="refreshToken" defaultValue={props.refreshToken} onInput={props.setRefreshToken} />
    </Row>
  </Box>

</Panel>
  

export default connect('state.request.headers', actions)(Headers)