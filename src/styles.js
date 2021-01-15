import { StyleSheet } from 'react-native'

export const BLUE = '#1d4477'

export const screenOptions = {
  headerStyle: {
    backgroundColor: BLUE,
  },
  headerTintColor: '#fff',
}

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  section: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row:{
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center"  
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
  info: {
    fontSize:10,
    color:'#515151'
  },
})
