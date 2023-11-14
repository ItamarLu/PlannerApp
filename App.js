import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainScreen from './src/screens/MainScreen'

const App = () => {
  const { container } = styles
  return (
    <View style={container}>
      <MainScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
