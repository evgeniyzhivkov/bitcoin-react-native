import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery, useMutation } from '@apollo/client'
import { format, formatDistance} from 'date-fns'

import styles from './styles'
import Loading from './Loading'

const QUERY = gql`
    query {
        bitcoin{
            blocks (options:{desc:"medianTime.unixtime",limit:10}){
              blockHash
              height
              medianTime{
                unixtime
              }
            }
        }
    }
`

const BlockItem = ({
    block: {
        blockHash,
        height,
        medianTime: {
            unixtime
        }
    }, onPress }) => (
    <Pressable style={styles.item} onPress={onPress}>
        <View style={styles.row}>
            <Text style={styles.header}>
                {`Time: ${format(unixtime*1000,"yyyy/dd/MM HH:mm") }`}
            </Text>
            <Text style={styles.info}>
                {`${formatDistance(unixtime*1000, new Date()) }`}
            </Text>
        </View>
        <Text style={styles.subheader}>{`height: ${height}`}</Text>
        <Text style={styles.info}>{`${blockHash}`}</Text>
    </Pressable>
)

export default ({ navigation }) => {
    const { data, loading } = useQuery(QUERY)

    if (loading) {
        return <Loading />
    }

    return (
        <FlatList
            data={data.bitcoin.blocks}
            renderItem={({ item }) => (
                <BlockItem
                    block={item}
                    onPress={() => 
                        navigation.navigate('BlockDetail', { block: item })}
                />
            )}
            keyExtractor={({ blockHash }) => blockHash}
        />
    )
}
