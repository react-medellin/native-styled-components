import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

const primaryColor = '#5c3799';
const secondaryColor = '#fff';

export class Button3 extends Component {
  getButtonStyles = () => {
    return {
      backgroundColor: this.props.primary ? primaryColor : secondaryColor,
      borderRadius: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: !this.props.primary && primaryColor || null,
      padding: 15
    };
  }
  getTextStyles = () => {
    return {
      color: this.props.primary ? secondaryColor : primaryColor,
      fontWeight: 'bold'
    };
  }
  render() {
    const { children } = this.props;

    return (
      <TouchableHighlight style={this.getButtonStyles()}>
        <Text style={this.getTextStyles()}>{children}</Text>
      </TouchableHighlight>
    );
  }
}
