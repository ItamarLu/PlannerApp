import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const PostComp = ({
  postId,
  titleValue,
  titleTask,
  onRemove,
  onChangeContent
}) => {
  const { post, titleWrapper, postWrapper, postContentStyle, postTitleStyle } =
    styles

  const [title, setTitle] = useState(titleValue)
  const [task, setTask] = useState(titleTask)

  useEffect(() => onChangeContent(postId, title, task), [title, task])

  return (
    <LinearGradient colors={['#0e1c26', '#252F31']} style={post}>
      <View style={titleWrapper}>
        <TextInput
          editable
          placeholder="Title"
          placeholderTextColor="gray"
          cursorColor="#B6B6B6"
          style={postTitleStyle}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TouchableOpacity onPress={() => onRemove(postId)}>
          <AntDesign name="delete" size={25} color="#B6B6B6" />
        </TouchableOpacity>
      </View>
      <View style={postWrapper}>
        <TextInput
          editable
          multiline
          placeholder="Write task"
          placeholderTextColor="gray"
          cursorColor="#B6B6B6"
          style={postContentStyle}
          value={task}
          onChangeText={(text) => setTask(text)}
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
