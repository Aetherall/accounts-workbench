import React, { Component } from 'react'
import connect from 'rzero-link';

import { Box, Button } from 'rebass'

const Password = (props) => 
<Box>
  <Button m={1} onClick={props.fetch('password/register')}> Register</Button>
  <Button m={1} onClick={props.fetch('password/authenticate')}> Authenticate </Button>
  <Button m={1} onClick={props.fetch('password/verifyEmail')}> verifyEmail </Button>
  <Button m={1} onClick={props.fetch('password/sendVerificationEmail')}> sendVerificationEmail </Button>
  <Button m={1} onClick={props.fetch('password/sendResetPasswordEmail')}> sendResetPasswordEmail </Button>
  <Button m={1} onClick={props.fetch('password/resetPassword')}> resetPassword </Button>
</Box>

export default connect('state.fetcher')(Password)
