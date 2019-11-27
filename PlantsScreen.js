import React, { Component } from 'react';
import MainNavigator from "./MainNavigator";
import { Container, Header, Content, Button, Text, Title, Left, Icon, Body, Right, Footer, FooterTab } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class PlantsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Plants</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>Plants</Text>
        </Content>

      </Container>
    );
  }
}