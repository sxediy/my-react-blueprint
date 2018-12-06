import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Athorization = (WrappedComponent) => {
  class WithAuthorization extends React.Component {
    static propTypes = {
      isAuthorized: PropTypes.bool
    };

    render() {
      const { isAuthorized } = this.props;
      console.log('HOC AUth');

      if (!isAuthorized) {
        return <Redirect to='/login' />;
      }

      return <WrappedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = ({ auth }) => (
    {
      isAuthorized: Boolean(auth.username)
    }
  );

  return connect(mapStateToProps)(WithAuthorization);
};

export default Athorization;
