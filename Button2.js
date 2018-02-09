import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const primaryColor = '#5c3799';
const secondaryColor = '#fff';

const RMButtonStyled = styled.TouchableHighlight`
  background: ${props => {
    console.log(props);
    return (props.theme.primary ? primaryColor : secondaryColor)
  }};
  border-radius: 3px;
  border: 1px solid ${props => !props.theme.primary && primaryColor};
  padding: 15px;
`;

const RMButtonTextStyled = styled.Text`
  color: ${props => (props.theme.primary ? secondaryColor : primaryColor)};
  font-weight: bold;
`;

export class Button2 extends Component {
  render() {
    const { children } = this.props;

    return (
      <RMButtonStyled>
        <RMButtonTextStyled>{children}</RMButtonTextStyled>
      </RMButtonStyled>
    );
  }
}
