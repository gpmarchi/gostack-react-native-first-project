import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  state = {
    starred: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ starred: response.data });
  }

  render() {
    const { starred } = this.state;
    return <View />;
  }
}

User.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        login: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};
