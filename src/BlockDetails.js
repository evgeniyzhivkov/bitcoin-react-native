import React from 'react'
import { View, Text, FlatList, StatusBar, SafeAreaView} from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const SECTIONS_QUERY = gql`
  query Sections($id: Int!) {
    chapter(id: $id) {
      sections {
        number
        title
      }
    }
  }
`

const SectionItem = ({ section, chapter }) => (
  <View style={styles.item}>
    <Text style={styles.header}>
      {chapter.number}.{section.number}: {section.title}
    </Text>
  </View>
)

export default ({ route }) => {
  const { data, loading } = useQuery(SECTIONS_QUERY, {
    variables: { blockHash: route.params.block.blockHash },
  })

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
        { loading && <Loading/> || (
            <Text>
              details
            </Text>
        )}
    </SafeAreaView>
</>
  )
}
