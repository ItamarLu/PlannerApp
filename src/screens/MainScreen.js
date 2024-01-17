import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image
} from 'react-native'
import PostComp from '../components/PostComponent'
import { AntDesign } from '@expo/vector-icons'
import { loadPosts, savePosts } from '../utilities/storage'
import { LinearGradient } from 'expo-linear-gradient'

const MainScreen = () => {
  const {
    container,
    header,
    headerTitle,
    content,
    navBar,
    scrollContent,
    fillView,
    image
  } = styles

  const [posts, setPosts] = useState([])

  const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36)
    return `${timestamp}`
  }

  const addPost = () => {
    const postId = generateUniqueId()
    const newPost = { postId, title: '', task: '' }
    setPosts([...posts, newPost])
  }

  const removePost = (postIdToRemove) => {
    const updatedPosts = posts.filter((post) => post.postId !== postIdToRemove)
    setPosts(updatedPosts)
  }

  const updatePost = (postId, updatedTitle, updatedTask) => {
    const updatedPosts = posts.map((post) => {
      if (post.postId === postId) {
        return {
          ...post,
          title: updatedTitle,
          task: updatedTask
        }
      }
      return post
    })

    setPosts(updatedPosts)
  }

  useEffect(() => {
    const loadPostsFromStorage = async () => {
      const storedPosts = await loadPosts()
      setPosts(storedPosts)
    }

    loadPostsFromStorage()
  }, [])

  useEffect(() => {
    savePosts(posts)
  }, [posts])

  return (
    <LinearGradient colors={['#0e1c26', '#13232c']} style={container}>
      <StatusBar backgroundColor={'#0e1c26'}/>
      <View style={header}>
        <TouchableOpacity onPress={addPost}>
          <AntDesign name="pluscircleo" size={40} color="#B6B6B6" />
        </TouchableOpacity>
        <View style={fillView} />
      </View>

      <View style={content}>
        <ScrollView>
          <View style={scrollContent}>
            {posts.map((post) => (
              <React.Fragment key={post.postId}>
                <PostComp
                  postId={post.postId}
                  titleValue={post.title}
                  titleTask={post.task}
                  onRemove={removePost}
                  onChangeContent={updatePost}
                />
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={navBar}>
        <Image
          source={require('../../assets/icon.png')}
          style={image}
          tintColor={'#B6B6B6'}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  headerTitle: {
    color: '#B6B6B6',
    fontSize: 30
  },
  content: {
    flex: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#B6B6B6'
  },
  scrollContent: {
    padding: 15,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fillView: {
    width: 40
  },
  image: {
    width: 50,
    height: 50
  }
})

export default MainScreen
