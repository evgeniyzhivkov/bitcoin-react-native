import React from 'react'
import { Text, FlatList, View, StatusBar, SafeAreaView } from 'react-native'
import { gql, useQuery, useMutation } from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const QUERY = gql`
    query($from: ISO8601DateTime, $till: ISO8601DateTime){
      bitcoin{
        transactions(options: {desc: "date.date", limit:5 }, 
          date: {since: $from, till: $till}, ) {
                txVolUSD: inputValue(calculate: sum in: USD)      
          date{date}
          index
        }
      }
    }
`

const TransactionItem = ({
    transaction: {
        txVolUSD
    }
}) => (
    <View
        style={styles.item}
    >
        <Text style={styles.header}>{txVolUSD}</Text>
    </View>
)

export default ({ navigation }) => {
    const { data, loading } = useQuery(QUERY, {
        variables: { "from": "2021-01-15T01:03:30+00:00", "till": null }
    })

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex:1}}>
                {loading && <Loading /> || (
                    <FlatList
                        data={data.bitcoin.transactions}
                        renderItem={({item}) => (
                            <TransactionItem
                                transaction={item}
                            />
                        )}
                        keyExtractor={({ index }) => index.toString()}
                    />
                )}
            </SafeAreaView>
        </>
    )
}
