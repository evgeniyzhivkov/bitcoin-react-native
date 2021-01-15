import React from 'react'
import { View, Text } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const QUERY = gql`
    query($blockHash:String) {
      bitcoin {
        blocks(blockHash:{is:$blockHash}) {
          blockSize
          count
          transactionCount
          difficulty
          blockVersion
        }
      }
    }
`

export default ({ route:{ params: { block: { blockHash}}} }) => {
  const { data, loading } = useQuery(QUERY, {
    variables: { blockHash },
  })

  if(loading) {
    return <Loading/>
  }
  let [ {
    blockSize,
    count,
    transactionCount,
    difficulty,
    blockVersion,
  } ] = data.bitcoin.blocks;
  return (
    [
      {
        title:"Size",
        value:blockSize,
      },
      {
        title:"Count",
        value:count,
      },
      {
        title:"Transactions Count",
        value:transactionCount,
      },
      {
        title:"Difficulty",
        value:difficulty,
      },
      {
        title:"Version",
        value:blockVersion,
      }
    ].map(({title, value}) => (
      <View key={title} style={styles.section}> 
        <Text style={styles.header}>
          {title}:
        </Text>
        <Text style={styles.subheader}>
          {value}
        </Text>
      </View>
    ))
  )
}
