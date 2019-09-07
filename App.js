import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import GamesScreen from './src/screens/games/GamesScreen';
import SearchScreen from './src/screens/search/SearchScreen';
import UserScreen from './src/screens/user/UserScreen';
import { MaterialIcons } from '@expo/vector-icons';

 const bottomNavigator = createBottomTabNavigator({
   Home: createStackNavigator({
     Home: HomeScreen
   }, {
     defaultNavigationOptions: {
       title: 'Home'
     }
   }),
   Games: createStackNavigator({
    Games: GamesScreen
  }, {
    defaultNavigationOptions: {
      title: 'Games'
    }
  }),
  Search: createStackNavigator({
   Search: SearchScreen
 }, {
   defaultNavigationOptions: {
     title: 'Search'
   }
 }),
 User: createStackNavigator({
  User: UserScreen
}, {
  defaultNavigationOptions: {
    title: 'User'
  }
}),
 }, {
   defaultNavigationOptions: ({navigation}) => ({
     tabBarIcon: ({ tintColor }) => {
       let { routeName } = navigation.state;
       let iconName;
       if (routeName === 'Home') {
         iconName = 'home'
       } else if (routeName === 'Games') {
        iconName = 'games'
      } else if (routeName === 'Search') {
        iconName = 'search'
      } else if (routeName === 'User') {
        iconName = 'person'
      }
      return (
        <MaterialIcons color={tintColor} name={iconName} size={25} />
      );
     }
   }),
   tabBarOptions: {
     activeTintColor: 'black',
     inactiveTintColor: 'gray'
   }
 });

 const App = createAppContainer(bottomNavigator);

 export default () => {
   return (
     <App />
   )
 }

