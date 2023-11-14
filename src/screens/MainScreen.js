import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainScreen = () => {
  const { container, header, content, navBar, post, titleWrapper, postWrapper } = styles
  return (
    <View style={container}>

      <View style={header}>
        <Text>HEADER</Text>        
      </View>

      <View style={content}>
        <View style={post}>
          <View style={titleWrapper}>
            <Text>TITLE</Text>
          </View>
          <View style={postWrapper}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
          </View>
        </View> 
      </View>

      <View style={navBar}>
        <Text>NAV BAR</Text>        
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  content: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  post: {
    width: 300,
    height: 200,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  titleWrapper: {
    height: 35,
    justifyContent: 'center',

    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  postWrapper: {
  }
  , 
  navBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainScreen
