import React, { useState, useEffect } from 'react';

import {
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import { persistCache } from 'apollo3-cache-persist'

import BlocksScreen from './BlocksScreen';
import TransactionsScreen  from './TransactionsScreen';
import Loading from './Loading';
import { screenOptions } from './styles';

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

const Tab = createBottomTabNavigator();

export default function TestConnection() {
  const [loadingCache, setLoadingCache] = useState(true)

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false))
  }, [])

  if (loadingCache) {
      return <Loading/>
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
          <Tab.Navigator >
            <Tab.Screen
              name="Blocks"
              component={BlocksScreen}
            />
            <Tab.Screen
                name="Transactions"
                component={TransactionsScreen}
                options={{
                  title: 'Transactions',
                }}
            />
          </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
