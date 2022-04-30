import React from 'react'
import {
  Text,
  View,
  Image as CstImage,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Modal,
  PermissionsAndroid,
  FlatList,
  ActivityIndicator,
  Linking,
} from 'react-native'

const Image = props => {
  return <CstImage resizeMode={'contain'} {...props} />
}
export {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Modal,
  PermissionsAndroid,
  FlatList,
  ActivityIndicator,
  Linking,
}
