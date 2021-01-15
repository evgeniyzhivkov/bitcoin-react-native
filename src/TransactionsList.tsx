import React from 'react'
import { Text, FlatList, View, StatusBar, SafeAreaView } from 'react-native'
import { gql, useQuery, useMutation } from '@apollo/client'
import { format } from 'date-fns'
import { createStackNavigator } from '@react-navigation/stack'
import { screenOptions } from './styles'

import styles from './styles'
import Loading from './Loading'

const QUERY = gql`
    query {
        bitcoin{
            transactions(options: {desc:"date.date",limit:50}){ 
                index
                date {
                    date
                }
            }
        }
    }
`

const TransactionItem = ({
    transaction: {
        date: {
            date
        },
        index
    }
}) => (
    <View
        style={{...styles.item, ...styles.row}}
    >
        <Text style={styles.header}>
            {format(new Date(date), "yyyy/dd/MM")}
        </Text>
        <Text style={styles.info}>{index}</Text>
    </View>
)

const Stack = createStackNavigator()

export default ({ navigation }) => {
    const { data, loading } = useQuery(QUERY)

    if(loading) {
        return <Loading />
    }
    if(data == null) {
        return (
        <Text>
            data failed
        </Text>
        )
    }

    return (
            <FlatList
                data={data.bitcoin.transactions}
                renderItem={({item}) => (
                    <TransactionItem
                        transaction={item}
                    />
                )}
                keyExtractor={({ index }) => index.toString()}
            />
        )
}
