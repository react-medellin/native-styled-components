import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const primaryColor = '#5c3799';
const secondaryColor = '#fff';

const RMButtonStyled = styled.TouchableHighlight`
  background: ${props => props.primary ? primaryColor : secondaryColor};
  border-radius: 3px;
  border: 1px solid ${props => !props.primary && primaryColor};
  padding: 15px;
`;

const RMButtonTextStyled = styled.Text`
  color: ${props => props.primary ? secondaryColor : primaryColor};
  font-weight: bold;
`;

export class Button extends Component {
  render() {
    const { primary, children } = this.props;

    return (
        <RMButtonStyled primary={primary}>
          <RMButtonTextStyled primary={primary}>
            {children}
          </RMButtonTextStyled>
        </RMButtonStyled>
    )
  }
}
