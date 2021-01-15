import React from 'react'
import { Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery, useMutation} from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const CHAPTERS_QUERY = gql`
    {
        bitcoin{
            blocks (options:{ limit:10}){
              blockHash
              height
              medianTime{
                unixtime
              }
            }
        }
    }
`

const TransactionItem = ({
    transaction:{
        blockHash,
        height,
        medianTime:{
            unixtime
        }
    }, onPress }) => {

        return (
            <Pressable style={styles.item} onPress={onPress}>
                <Text style={styles.header}>{blockHash}</Text>
            </Pressable>
        )
    }

export default ({ navigation }) => {
    const { data, loading } = useQuery(CHAPTERS_QUERY)

    if (loading) {
        return <Loading/>
    }
    if(data == null)
    {
        return (
            <Text>
                data is null
            </Text>
        )
    }

    return (
        <FlatList
            data={data.bitcoin.blocks}
            renderItem={({ item }) => (
                <TransactionItem
                    transaction={item}
                    onPress={() => navigation.navigate('BlockDetail', { block: item })}
                />
            )}
            keyExtractor={({blockHash}) => blockHash}
        />
    )
}
