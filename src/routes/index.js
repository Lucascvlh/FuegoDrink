import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../pages/Category';
import Drinks from '../pages/Drinks';
import Details from '../pages/Details'

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Category"
  >
    <App.Screen name="Category" component={Category} />
    <App.Screen name="Drinks" component={Drinks} />
    <App.Screen name="Details" component={Details} />
 
  </App.Navigator>
);
export default AppRoutes;