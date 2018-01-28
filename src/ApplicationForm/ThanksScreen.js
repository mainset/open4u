import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

const ThanksScreen = () => (
  <Grid verticalAlign="middle">
    <Grid.Row>
      <Grid.Column textAlign="center">

        <Header as="h2" icon>
          <Icon name="users" color="red" circular />
          <Header.Content>
            We are almost there...
          </Header.Content>
        </Header>

        <p>
          We just send you all the inventation to your email, just accept them
          and start to code with &lt;3 as one family.
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ThanksScreen;
