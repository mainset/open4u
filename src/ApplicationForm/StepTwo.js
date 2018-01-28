import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Checkbox, Divider, Button } from 'semantic-ui-react';

const propTypes = {
  invitations: PropTypes.shape({
    slack: PropTypes.bool,
    github: PropTypes.bool,
  }).isRequired,
  completeStepTwo: PropTypes.func.isRequired,
  handleInvitationsChange: PropTypes.func.isRequired,
};

const StepTwo = ({ invitations, completeStepTwo, handleInvitationsChange }) => (
  <Form onSubmit={completeStepTwo}>
    <Form.Field>
      <Icon name="slack" />
      <span>Slack</span>
      <Checkbox
        toggle
        name="slack"
        checked={invitations.slack}
        onChange={handleInvitationsChange}
      />
    </Form.Field>

    <Form.Field>
      <Icon name="github" />
      <span>GitHub</span>
      <Checkbox
        toggle
        name="github"
        checked={invitations.github}
        onChange={handleInvitationsChange}
      />
    </Form.Field>

    {
      invitations.github && (
        <div>
          <Form.Input label="GitHub username" placeholder="username" />
          <span>
            NOTE: leave that field empty of you would like to receive inventation for an email
            that you indicated on previous step.
          </span>
        </div>
      )
    }

    <div className="form--navigation">
      <Divider />
      <Button basic color="red">
        Complete
        {/* <Icon name="checkmark" /> */}
      </Button>
    </div>
  </Form>
);

StepTwo.propTypes = propTypes;

export default StepTwo;
