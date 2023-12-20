import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const PostComp = ({ postId, onRemove }) => {
  const { post, titleWrapper, postWrapper, postContentStyle, postTitleStyle } =
    styles

  return (
    <LinearGradient colors={['#0e1c26', '#252F31']} style={post}>
      <View style={titleWrapper}>
        <TextInput
          editable
          placeholder="To Do"
          placeholderTextColor="gray"
          cursorColor="#B6B6B6"
          style={postTitleStyle}
        />
        <TouchableOpacity onPress={() => onRemove(postId)}>
          <AntDesign name="delete" size={25} color="#A50303" />
        </TouchableOpacity>
      </View>
      <View style={postWrapper}>
        <TextInput
          editable
          multiline
          placeholder="Add new task"
          placeholderTextColor="gray"
          cursorColor="#B6B6B6"
          style={postContentStyle}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  post: {
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B6B6B6',
    paddingHorizontal: 10
  },
  titleWrapper: {
    paddingVertical: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#B6B6B6'
  },
  postWrapper: {
    paddingLeft: 5,
    paddingVertical: 10
  },
  postTitleStyle: {
    fontSize: 25,
    width: 290,
    maxWidth: 290,
    color: '#B6B6B6'
  },
  postContentStyle: {
    fontSize: 16,
    color: '#B6B6B6'
  }
})

export default PostComp
