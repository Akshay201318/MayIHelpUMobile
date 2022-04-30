import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from '@/AppComponents'
import { s } from '@/Lib/scale'
import { h12_Regular, h16_Regular, h16_SemiBold } from '@/Theme/Fonts'
import Colors from '@/Theme/Colors'

const ActionButton = props => {
  const {
    text = 'Action',
    onPress = () => {},
    buttonStyle = {},
    textStyle = {},
    disabled=false,
  } = props
  return (
    <TouchableOpacity
      style={{ ...Styles.wrapper, ...buttonStyle }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          ...h16_Regular,
          color: Colors.color.grey,
          ...textStyle,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
const Styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.backGroundColor.cream,
    borderRadius: 20,
    paddingVertical: s(6),
    minWidth: s(70),
    borderColor: Colors.color.grey,
    borderWidth: 1.2,
    borderRadius: 50,
  },
})
export { ActionButton }
