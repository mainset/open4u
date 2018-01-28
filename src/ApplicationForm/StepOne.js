import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Input,
  Icon,
  Label,
  Accordion,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react';

const propTypes = {
  email: PropTypes.string.isRequired,
  formValues: PropTypes.shape({
    FIRST_NAME: PropTypes.string,
    LAST_NAME: PropTypes.string,
  }).isRequired,
  emailInvalid: PropTypes.bool,
  handleEmailChange: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  validateStepOne: PropTypes.func.isRequired,
};

const defaultProps = {
  emailInvalid: undefined,
};

const positionOptions = [
  { key: 'blank', text: 'Choose your position', value: '' },
];

class StepOne extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const {
      email, formValues, emailInvalid, handleEmailChange, handleFormChange, validateStepOne,
    } = this.props;

    return (
      <Form onSubmit={validateStepOne}>
        <Form.Field className="input--fixed">
          <Input
            type="email"
            placeholder="Email"
            iconPosition="left"
            value={email}
            onChange={handleEmailChange}
            required
          >
            <Icon name="at" />
            <input />
          </Input>
          {
            emailInvalid === false && (
              <Label basic color="red" pointing>
                We are unable to validate your email
              </Label>
            )
          }
        </Form.Field>

        <Accordion as={Form.Field}>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name="dropdown" />
            we will appreciate additionally filled information about you
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Header as="h3" dividing>
              Personal information
            </Header>

            <Form.Group widths={2}>
              <Form.Input
                name="FIRST_NAME"
                value={formValues.FIRST_NAME}
                label="First Name"
                placeholder="First Name"
                onChange={handleFormChange}
              />
              <Form.Input
                name="LAST_NAME"
                value={formValues.LAST_NAME}
                label="Last Name"
                placeholder="Last Name"
                onChange={handleFormChange}
              />

            </Form.Group>

            <Header as="h3" dividing>
              Professional information
            </Header>
            <Form.Group widths={3}>
              <Form.Select fluid label="Position" options={positionOptions} placeholder="Position" />
            </Form.Group>
          </Accordion.Content>
        </Accordion>


        <div className="form--navigation">
          <Divider />
          <Button basic color="red">
            Next
            <Icon name="right arrow" />
          </Button>
        </div>
      </Form>
    );
  }
}

StepOne.propTypes = propTypes;
StepOne.defaultProps = defaultProps;

export default StepOne;
