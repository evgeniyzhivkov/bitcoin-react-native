import React, { useState, useEffect } from 'react';

import {
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BlocksList from './BlocksList'
import BlockDetails from './BlockDetails'
import Loading from './Loading'
import { screenOptions } from './styles'

const Stack = createStackNavigator()

export default function BlocksScreen() {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={screenOptions}>
      <Stack.Screen
        name="List"
        component={BlocksList}
        options={{ title: 'Bitcoins Blocs' }}
      />
      <Stack.Screen
        name="BlockDetail"
        component={BlockDetails}
        options={({
          route: {
            params: {
              block: { blockHash, height}
            },
          },
        }) => ({
          title: `${blockHash}: ${height}`,
          gestureResponseDistance: { horizontal: 500 },
        })}
      />
    </Stack.Navigator>
  )
}
