import React, { Component } from "react";
import PlantsScreen from "./PlantsScreen";
import HarvestedScreen from "./HarvestedScreen";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { TabNavigator } from 'react-navigation';

export default (MainNavigator = TabNavigator (
{
    Plants: { screen: props => <PlantsScreen/> },
    Harvested: { screen: props => <HarvestedScreen/> },
    Alarms: { screen: props => <PlantsScreen/> },
    Profile: { screen: props => <PlantsScreen/> },
},
{
    tabBarPosition: "bottom",
    tabBarComponent: props => {
        return (
            <Footer>
            <FooterTab>
                <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("Plants")}>
                    <Text>Plants</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("Harvested")}>
                    <Text>Harvested</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 2}
                    onPress={() => props.navigation.navigate("Gallery")}>
                    <Text>Alarms</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 3}
                    onPress={() => props.navigation.navigate("Details")}>
                    <Text>Profile</Text>
                </Button>
            </FooterTab>
            </Footer>
        );
    }
}));