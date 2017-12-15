

import React from 'react';
import connect from 'rzero-link';

import { Panel, PanelHeader, Box, Row, Label, Input } from 'rebass'


const actions = {
  setUsername: (state) => (e) => ({ ...state, username: e.target.value}),
  setEmail: (state) => (e) => ({ ...state, email: e.target.value}),
  setPassword: (state) => (e) => ({ ...state, password: e.target.value}),
  setAccessToken: (state) => (e) => ({ ...state, accessToken: e.target.value}),
  setRefreshToken: (state) => (e) => ({ ...state, refreshToken: e.target.value}),
  setToken: (state) => (e) => ({ ...state, token: e.target.value}),
}


const Body = (props) =>
<Panel m={4}>

  <PanelHeader>
    Body
  </PanelHeader>

  <Box p={4}>
    <Row>
      <Label w={1/5}>Username : </Label>
      <Input type="string" name="username" defaultValue={props.username} onInput={props.setUsername} />
    </Row>

    <Row>
      <Label w={1/5}>Email : </Label>
      <Input type="string" name="email" defaultValue={props.email} onInput={props.setEmail} />
    </Row>

    <Row>
      <Label w={1/5}>Password : </Label>
      <Input type="string" name="password" defaultValue={props.password} onInput={props.setPassword} />
    </Row>

    <Row>
      <Label w={1/5}>AccessToken : </Label>
      <Input type="string" name="accessToken" defaultValue={props.accessToken} onInput={props.setAccessToken} />
    </Row>

    <Row>
      <Label w={1/5}>RefreshToken : </Label>
      <Input type="string" name="refreshToken" defaultValue={props.refreshToken} onInput={props.setRefreshToken} />
    </Row>

    <Row>
      <Label w={1/5}>Token : </Label>
      <Input type="string" name="token" defaultValue={props.token} onInput={props.setToken} />
    </Row>
  </Box>

</Panel>
  

export default connect('state.request.body', undefined, actions)(Body)