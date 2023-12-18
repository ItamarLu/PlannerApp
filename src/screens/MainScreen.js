import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import PostComp from '../components/PostComp'
import { AntDesign } from '@expo/vector-icons'

const MainScreen = () => {
  const { container, header, content, navBar, addPostButton, scrollContent } =
    styles

  const [posts, setPosts] = useState([])

  const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36)
    const randomString = Math.random().toString(36)
    return `${timestamp}${randomString}`
  }

  const addPost = () => {
    const postId = generateUniqueId()
    const newPost = <PostComp key={postId} />
    setPosts([...posts, newPost])
  }

  return (
    <View style={container}>
      <View style={header}>
        <TouchableOpacity style={addPostButton} onPress={addPost}>
          <AntDesign name="pluscircleo" size={40} color="black" />
        </TouchableOpacity>
      </View>

      <View style={content}>
        <ScrollView>
          <View style={scrollContent}>
            {posts.map((post) => (
              <React.Fragment key={post.id}>{post}</React.Fragment>
            ))}
          </View>
        </ScrollView>
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
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'start',
    paddingLeft: 20,
    paddingBottom: 20
  },
  content: {
    flex: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  scrollContent: {
    padding: 15,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPostButton: {
    marginTop: 10
  },
  navBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainScreen
