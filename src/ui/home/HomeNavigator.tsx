import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Navigation} from '@typings/navigation';
import {Image, StyleSheet} from 'react-native';
import {location} from '@utils/assets/images';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator<Navigation.HomeNavigatorParams>();

const headerImage = () => {
  return <Image source={location} style={styles.headerIcon} />;
};
const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LocationFinder"
        component={HomeScreen}
        options={{
          title: 'Location Finder',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          headerTitleAlign: 'center',
          headerLeft: headerImage,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: 50,
    width: 50,
    marginTop: 3,
  },
});

export default HomeNavigator;
