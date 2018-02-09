/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { Button2 } from './Button2';
import { Button3 } from './Button3';

const StyledTouchable = styled.TouchableHighlight`
  align-items: center;
  background: #ddd;
  margin-top: 15px;
  padding: 10px;
`;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
        >
          <Text>Touch Here - Regular Styles</Text>
        </TouchableHighlight>

        <StyledTouchable onPress={this.onPress}>
          <Text>Touch - Styled Components</Text>
        </StyledTouchable>

        <Text style={{marginTop: 15, marginBottom: 15}}>Button 1:</Text>

        <Button primary>A primary button</Button>
        <Button>A secondary button</Button>

        <Text style={{marginTop: 15, marginBottom: 15}}>Button 2:</Text>
        <ThemeProvider theme={{primary: true}}>
          <Button2>A primary button</Button2>
        </ThemeProvider>
        <ThemeProvider theme={{ primary: false }}>
          <Button2>A secondary button</Button2>
        </ThemeProvider>

        <Text style={{marginTop: 15, marginBottom: 15}}>Button 3:</Text>
        <Button3 primary>A primary button</Button3>
        <Button3>A secondary button</Button3>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
