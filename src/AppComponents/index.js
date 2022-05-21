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
  TextInput as CustomeTextInput,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Modal,
  PermissionsAndroid,
  FlatList,
  ActivityIndicator,
  Linking,
  Switch,
} from 'react-native'

const Image = props => {
  return <CstImage resizeMode={'contain'} {...props} />
}

const TextInput = props => {
  const { style = {} } = props;
  return <CustomeTextInput {...props} style={{...style, flex: 1}}/>
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
  Switch,
}
