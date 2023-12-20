import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const PostComp = ({ postId, onRemove }) => {
  const { post, titleWrapper, postWrapper, postContentStyle, postTitleStyle } =
    styles

  return (
    <View style={post}>
      <View style={titleWrapper}>
        <TextInput
          editable
          placeholder="To Do"
          placeholderTextColor="black"
          cursorColor="black"
          style={postTitleStyle}
        />
        <TouchableOpacity onPress={() => onRemove(postId)}>
          <AntDesign name="closecircleo" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <View style={postWrapper}>
        <TextInput
          editable
          placeholderTextColor="black"
          cursorColor="black"
          style={postContentStyle}
        />
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
  postContentStyle: {
    fontSize: 16
  }
})

export default PostComp
