import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, StyleSheet, Image } from '@/AppComponents/index'
import useTheme from '@/Theme/Images'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  getImage = (source, width, height) => {
    return (
      <Image
        source={source}
        style={{
          resizeMode: 'contain',
          width: width || 30,
          height: height || 30,
          marginRight: 10,
          paddingHorizontal: 10,
        }}
      />
    )
  }

  render() {
    let {
      isDrawerNavigation,
      isNotificationsEnabled,
      isGroups,
      isAddPost,
      isaddCam,
      isbackIcon,
      isCloseIcon,
    } = this.props
    const { menu, backIcon, xCircle, groups, notification, addPost, addCam } =
      useTheme()
    return (
      <SafeAreaView style={Styles.Container}>
        <View style={Styles.leftItemContainer}>
          {isDrawerNavigation && this.getImage(menu)}
          {isbackIcon && this.getImage(backIcon)}
          {isCloseIcon && this.getImage(xCircle)}
        </View>

        <View style={Styles.rightItemContainer}>
          {isGroups && this.getImage(groups, 40, 40)}
          {isNotificationsEnabled && this.getImage(notification, 40, 40)}
          {isAddPost && this.getImage(addPost, 40, 40)}
          {isaddCam && this.getImage(addCam, 40, 40)}
        </View>
      </SafeAreaView>
    )
  }
}
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  rightItemContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    minHeight: 30,
    flex: 1,
  },
  leftItemContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minHeight: 30,
    flex: 1,
  },
})
export default Header
