import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const PostComp = () => {
  const {
    post,
    titleWrapper,
    postWrapper,
    textConfig,
    addTask,
    postTitleStyle
  } = styles

  return (
    <View style={post}>
      <View style={titleWrapper}>
        <TextInput
          editable
          placeholder="TITLE"
          placeholderTextColor="black"
          cursorColor="black"
          style={postTitleStyle}
        />
        <TouchableOpacity>
          <AntDesign name="closecircleo" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <View style={postWrapper}>
        <Text style={textConfig}>Read</Text>
        <Text style={textConfig}>Play games</Text>
        <Text style={textConfig}>Work</Text>
        <Text style={textConfig}>Study</Text>
        <TouchableOpacity style={addTask}>
          <AntDesign name="pluscircleo" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  titleWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  postWrapper: {
    padding: 10
  },
  postTitleStyle: {
    fontSize: 25
  },
  textConfig: {
    fontSize: 20
  },
  addTask: {
    marginTop: 10
  }
})

export default PostComp
