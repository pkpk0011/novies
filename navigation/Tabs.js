import React, { useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies/MoviesContainer';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => getFocusedRouteNameFromRoute(route) || "Movies";

export default ({ navigation, route }) => {
   useLayoutEffect(() => {
       // console.log(route?.state?.routeNames[route.state.index]);
       const name = getHeaderName(route);
       navigation.setOptions({ 
           title:name
            });
   }, [route]);
    return (
        <Tabs.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                if(route.name === "Movies"){
                    iconName += "film"
                } else if(route.name === "TV"){
                    iconName += "tv"
                } else if(route.name === "Search"){
                    iconName += "search"
                } else if(route.name === "Discovery"){
                    iconName += "heart"
                }
                return (
                <Ionicons 
                name={iconName}
                color={focused ? "white" : "grey"} 
                size={30} 
                />
            );
            }
        })}
        tabBarOptions={{
            showLabel: false,
            style:{
                backgroundColor: "black",
                borderTopColor: "black"
            }
        }}>
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="TV" component={Tv} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Discovery" component={Favs} />
        </Tabs.Navigator>
    );
};