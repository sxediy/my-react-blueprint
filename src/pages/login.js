import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.func,
    validateFields: PropTypes.func,
    isAuthorized: PropTypes.bool,
    logIn: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.logIn(values.userName, values.password);
      }
    });
  };

  render() {
    const { isAuthorized } = this.props;
    console.log('isAuthorized in login.js', isAuthorized);

    if (isAuthorized) {
      return <Redirect to='/' />;
    }

    const { getFieldDecorator } = this.props.form;
    const { error } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })}

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
        <div className='error-message' hidden={!error}>
          {error}
        </div>
      </Form>
    );
  }
}


const mapStateToProps = ({ auth }) => (
  {
    isAuthorized: Boolean(auth.username),
    error: auth.errorMessage
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (username, password) => dispatch({ type: 'LOG_IN', payload: { username, password } }),
  }
);

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);

ReactDOM.render(
  <WrappedNormalLoginForm />,
  document.getElementById('root')
);
