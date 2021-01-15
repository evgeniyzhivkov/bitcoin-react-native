import React from 'react'
import { View, Text, FlatList, StatusBar, SafeAreaView } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const SECTIONS_QUERY = gql`
    query($blockHash:String) {
      bitcoin {
        blocks(blockHash:{is:$blockHash}) {
          blockSize
          count
          blockHash
        }
      }
    }
`
const Details = ({
  details:{
    blockSize,
    count,
  }

}) => (
  <>
    <Text>
      {blockSize}
    </Text>
    <Text>
      {count}
    </Text>
  </>
)

export default ({ route:{ params: { block: { blockHash}}} }) => {
  const { data, loading } = useQuery(SECTIONS_QUERY, {
    variables: { blockHash },
  })

  

  return (
    <>
      {loading && <Loading /> || (
        <Details
          details={data.bitcoin.blocks[0]}
        />
      )}
    </>
  )
}
