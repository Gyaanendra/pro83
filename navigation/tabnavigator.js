import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import CreateFeed from '../screens/createfeed';
import Feed from '../screens/feed';
import Search from '../screens/search';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
    >
      <Tab.Screen name="Feed" component={Feed}
       options={{
         tabBarColor:'blue',
        tabBarIcon: ({ focused }) => (
          <Ionicons name="home" color={focused ? 'tomato' : 'gray'} size={RFValue(26)}
          />
        )
       }}
      />
       
       <Tab.Screen name="Search" component={Search}
       options={{
        tabBarColor:'blue',
       tabBarIcon: ({ focused }) => (
         <Ionicons name="search" color={focused ? 'tomato' : 'gray'} size={RFValue(26)}
          />
       )
      }}
       />

      <Tab.Screen name="Create Story" component={CreateFeed}
       options={{
        tabBarColor:'blue',
       tabBarIcon: ({ focused }) => (
         <Ionicons name="add-circle" color={focused ? 'tomato' : 'gray'} size={RFValue(26)}
          />
       )
      }}
       />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;


