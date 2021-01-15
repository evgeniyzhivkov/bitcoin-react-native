import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import TransactionsList from './TransactionsList'
import { screenOptions } from './styles'

const Stack = createStackNavigator()

export default function TransactionsScreen() {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={screenOptions}>
      <Stack.Screen
        name="List"
        component={TransactionsList}
        options={{ title: 'Transactions' }}
      />
    </Stack.Navigator>
  )
}
