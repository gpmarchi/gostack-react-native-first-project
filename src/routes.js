import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

const generalOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#7159c1',
  },
  headerTintColor: '#FFF',
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={generalOptions}>
        <Stack.Screen
          name="Main"
          options={{ title: 'Usuários' }}
          component={Main}
        />
        <Stack.Screen
          name="User"
          options={({ route }) => ({ title: route.params.user.name })}
          component={User}
        />
        <Stack.Screen
          name="Repository"
          options={({ route }) => ({ title: route.params.repository.name })}
          component={Repository}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
