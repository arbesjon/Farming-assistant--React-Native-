import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Form, Label, Item, Input, Content, Button, Text, Title, Left, Icon, Body, Right, Footer, FooterTab } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Config from './Config';
import firebase from 'firebase';
import DatePicker from 'react-native-datepicker';

firebase.initializeApp(Config.firebaseConfig);

export default class HarvestedScreen extends React.Component {

  constructor() {
    super();

    this.state = {
        name: '',
        plantdate: '',
        plantcost: '',
        date: '2016-05-15'
    };
}

onNameChanged(val) {
    this.setState({
        name: val
    });
}

onPlantdateChanged(val) {
    this.setState({
        plantdate: val
    });
}

onPlantcostChanged(val) {
    this.setState({
        plantcost: val
    });
}

onSubmitPressed() {

    if (this.state.name.trim() == '') {
        Alert.alert("Error", "You must enter a name!");
        return;
    }

    if (this.state.plantdate.trim() == '') {
        Alert.alert("Error", "You must enter a plantdate!");
        return;
    }

    if (this.state.plantcost.trim() == '') {
        Alert.alert("Error", "You must enter a plantcost!");
        return;
    }

    var rootRef = firebase.database().ref("Crops");

    var newNode = rootRef.push({
        name: this.state.name,
        plantdate: this.state.plantdate,
        plantcost: this.state.plantcost
    }, () => {

        Alert.alert(this.state.name + " successfully planted!");

        this.resetFields();
    });

}

resetFields()  {
    this.setState({
        name: '',
        plantdate: '',
        plantcost: ''
    });
}

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
        <Form>
            <Item stackedLabel>
                <Label>Name</Label>
                <Input onChangeText={this.onNameChanged.bind(this)}  value={this.state.name}/>
            </Item>
            <Item stackedLabel last>
                <Label>Plant Date</Label>
                <DatePicker
                  value={this.state.plantcost}
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2000-05-01"
                  maxDate="2020-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={this.onPlantdateChanged.bind(this)}
                />
            </Item>
            <Item stackedLabel last>
                <Label>Plant Cost</Label>
                <Input onChangeText={this.onPlantcostChanged.bind(this)} value={this.state.plantcost}/>
            </Item>
            <Button block onPress={this.onSubmitPressed.bind(this)} style={style.submitButton}>
                <Text>Add</Text>
            </Button>
        </Form>
        </Content>
    </Container>
    );
}
}

const style = {
submitButton: {
    margin: 15
}
}