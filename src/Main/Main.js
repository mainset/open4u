import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import ApplicationForm from './../ApplicationForm';

import logo from './../assets/open4u-logo.svg';

import './main.css';

const Main = () => (
  <Grid className="main" verticalAlign="middle">
    <Grid.Row>
      <Grid.Column>
        <Image src={logo} size="small" centered />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered>
      <Grid.Column
        mobile={14}
        tablet={12}
        computer={10}
        largeScreen={6}
      >
        <ApplicationForm />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Main;
