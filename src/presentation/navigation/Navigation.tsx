import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

export type RootStackNavigation = {
  Home: undefined;
  Details: {movieId: number};
};
const StackNavigaton = createNativeStackNavigator<RootStackNavigation>();
export const Navigation = () => {
  return (
    <StackNavigaton.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigaton.Screen name="Home" component={HomeScreen} />
      <StackNavigaton.Screen name="Details" component={DetailsScreen} />
    </StackNavigaton.Navigator>
  );
};

export default Navigation;
