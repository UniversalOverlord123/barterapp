import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen'
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Sidebar from './assets/Sidebar'
import SettingsScreen from './screens/SettingsScreen'
import Barters from './screens/MyBarters'
import ReceiverDetails from './screens/ReceiverDetails'
import NotificationScreen from './screens/Notifications'

export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarLabel : "Home",
    }
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarLabel : "Exchange",
    }
  }
});

const AppDrawNavigator = createDrawerNavigator({
   Home: {
     screen: AppTabNavigator
   },
   Settings: {
     screen: SettingsScreen
   },
   MyBarters: {
     screen: Barters
   },
   Mail: {
     screen: NotificationScreen
   }
  },
  {
    contentComponent: Sidebar
  },
  {
    initialRouteName: 'Home'
  })

  const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    Drawer:{screen: AppDrawNavigator},
    BottomTab: {screen: AppTabNavigator},
  })

  const AppStackNavigator = createStackNavigator({
    ExchangeList : {
      screen : ExchangeScreen
    },
    ReceiverDetails : {
      screen : ReceiverDetails
    }
  },
    {
      initialRouteName: 'ExchangeList'
    }
  );
