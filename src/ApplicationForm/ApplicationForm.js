import React, { Component } from 'react';
import { Step, Segment, Icon } from 'semantic-ui-react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import ThanksScreen from './ThanksScreen';

import './application-form.css';

const isEmailFormatValid = (value) => (
  !!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
);

class ApplicationForm extends Component {
  state = {
    applicationStep: 1,
    email: '',
    isEmailValid: undefined,
    form: {
      FIRST_NAME: '',
      LAST_NAME: '',
    },
    invitations: {
      slack: true,
      github: true,
    },
  };

  handleEmailChange = (e, { value }) => {
    this.setState({ email: value, isEmailValid: undefined });
  }

  handleFormChange = (e, { name, value }) => {
    const { form } = this.state;
    form[name] = value;
    this.setState({ form });
  }

  handleInvitationsChange = (e, { name, checked }) => {
    const { invitations } = this.state;
    invitations[name] = checked;
    this.setState({ invitations });
  }

  validateStepOne = () => {
    if (!isEmailFormatValid(this.state.email)) {
      this.setState({ isEmailValid: false });
    } else {
      this.setState({ isEmailValid: true, applicationStep: 2 });
    }
  }

  completeStepTwo = () => {
    this.proceedApplication();
  }

  showThanksScreen() {
    this.setState({ applicationStep: 3 });
  }

  proceedApplication() {
    const myHeaders = new Headers({
      Authorization: `apikey ${process.env.REACT_APP_MAILCHIMP_API_KEY}`,
    });

    fetch(`/api-mailchimp-resource/3.0/lists/${process.env.REACT_APP_MAILCHIMP_LIST_ID}/members/`, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify({
        email_address: this.state.email,
        status: 'subscribed',
        merge_fields: this.state.form,
      }),
    }).then(() => {
      this.showThanksScreen();
    });
  }

  renderDynamicForm() {
    let dynamicForm;
    const {
      applicationStep, email, form, isEmailValid, invitations,
    } = this.state;

    switch (applicationStep) {
      case 1:
        dynamicForm = (
          <StepOne
            email={email}
            emailInvalid={isEmailValid}
            formValues={form}
            handleEmailChange={this.handleEmailChange}
            handleFormChange={this.handleFormChange}
            validateStepOne={this.validateStepOne}
          />
        );
        break;
      case 2:
        dynamicForm = (
          <StepTwo
            invitations={invitations}
            completeStepTwo={this.completeStepTwo}
            handleInvitationsChange={this.handleInvitationsChange}
          />
        );
        break;
      case 3:
        dynamicForm = (
          <ThanksScreen />
        );
        break;
      // no default
    }

    return dynamicForm;
  }

  render() {
    const { applicationStep } = this.state;

    return (
      <div className="application-form">
        <Step.Group attached="top">
          <Step active={applicationStep === 1} completed={applicationStep > 1}>
            <Icon name="add user" />
            <Step.Content>
              <Step.Title>Basic application</Step.Title>
              <Step.Description>latest community news</Step.Description>
            </Step.Content>
          </Step>

          <Step
            active={applicationStep === 2}
            disabled={applicationStep < 2}
            completed={applicationStep > 2}
          >
            <Icon name="code" />
            <Step.Content>
              <Step.Title>Immediate invitations</Step.Title>
              <Step.Description>
                for&nbsp;
                <a href="https://open4u.slack.com/" target="_blank" rel="noopener noreferrer">
                  Slack
                </a>
                &nbsp;and&nbsp;
                <a href="https://github.com/open4u/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>

        <Segment attached clearing>
          {this.renderDynamicForm()}
        </Segment>
      </div>
    );
  }
}

export default ApplicationForm;
