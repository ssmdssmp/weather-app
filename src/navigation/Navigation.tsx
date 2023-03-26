import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WeatherScreen, CalendarScreen, SetLocationScreen} from '../screens';
import TestScreen from '../screens/TestScreen';
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Weater" component={WeatherScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Location" component={SetLocationScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
