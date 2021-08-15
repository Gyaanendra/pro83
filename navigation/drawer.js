import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./tabnavigator";
import Profile from "../screens/profile";
import Setting from "../screens/setting";
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();
const Drawernavigator = () =>{
 return(
     <Drawer.Navigator
     color='white'
     screenOptions={{
        headerShown: false,
        color:'white',
        drawerStyle: {
            width: 240,
            backgroundColor: "#2f345d",
          },
          drawerType:'fade',
          swipeEdgeWidth:95
      }}
     >

        <Drawer.Screen name="Home" component={BottomTabNavigator}
           options={{
            drawerInactiveTintColor:'gray',
            drawerActiveTintColor:'tomato',
        drawerIcon:({ color }) => (
         <Ionicons name="home" size={24} color={color} />
       ),
    }}
      />



      <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerInactiveTintColor:'gray',
            drawerActiveTintColor:'tomato',
        drawerIcon:({ color }) => (
         <Ionicons name="md-person" size={24} color={color} />
       ),
    }}
      />


      <Drawer.Screen name="Setting" component={Setting}
      
      options={{
        drawerInactiveTintColor:'gray',
            drawerActiveTintColor:'tomato',
        drawerIcon:({ color}) => (
         <Ionicons name="settings" size={24} color={color} />
       ),
    }}
      />

     </Drawer.Navigator>
 )
}

export default Drawernavigator ;