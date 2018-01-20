import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

// import DigestSignUpForm from './../DigestSignUpForm';

import logo from './../assets/open4u-logo.svg';

import './Main.css';

const Main = () => (
  <Grid className="main" verticalAlign="middle" columns={3}>
    <Grid.Row centered>
      <Grid.Column textAlign="center">
        <Image src={logo} size="small" centered />

        {/* TODO: create digest signup form  */}
        {/* <DigestSignUpForm /> */}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Main;
