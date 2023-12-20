import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'posts'

export const loadPosts = async () => {
  try {
    const storedPosts = await AsyncStorage.getItem(STORAGE_KEY)
    return storedPosts ? JSON.parse(storedPosts) : []
  } catch (error) {
    console.error('Error loading posts from AsyncStorage:', error)
    return []
  }
}

export const savePosts = async (posts) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  } catch (error) {
    console.error('Error saving posts to AsyncStorage:', error)
  }
}
