import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class Sidebar extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  
  drawerItemsContainer:{
    flex:0.9
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:25
  },
  logOutButton : {
    height:35,
    width:'100%',
    justifyContent:'center',
    padding:15
  }
})