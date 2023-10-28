import React from 'react'
import { StyleSheet } from 'react-native'
import {View} from 'react-native'


const App = () => {
  const {container} = styles
  return (
    <View style={container}>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App
