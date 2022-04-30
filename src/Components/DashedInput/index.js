import React from 'react'
import { View, TextInput, TouchableOpacity, Image } from '@/AppComponents'
import { useTheme } from '@/Hooks'

const DashedInput = props => {
  const {
    value = '',
    setValue = () => {},
    inputIcon,
    iconClick,
    iconStyle = {},
    dashStyle = {},
    placeholder = 'type here...',
    inputColor = {},
    outerContainerStyle = {},
  } = props || {}

  const { Layout, Images, Gutters, Common } = useTheme()

  const handleClick = () => {
    if (iconClick) {
      iconClick()
    } else {
      setValue('')
    }
  }
  return (
    <View
      style={{
        ...Layout.row,
        ...Gutters.largeVMargin,
        ...Gutters.smallHPadding,
        ...Layout.center,
        justifyContent: 'space-between',
        position: 'relative',
        width: '96%',
        ...outerContainerStyle,
      }}
    >
      <View
        style={{
          width: '100%',
          borderRadius: 50,
          borderColor: '#000',
          borderWidth: 1,
          borderStyle: 'dashed',
          height: 50,
          marginTop: 2,
        }}
      >
        <View
          style={{
            width: '100%',
            borderRadius: 50,
            borderColor: '#000',
            borderWidth: 1,
            paddingLeft: 18,
            paddingRight: 28,
            top: -6,
            left: -3,
            backgroundColor: '#fff',
            position: 'absolute',
          }}
        >
          <TextInput
            placeholder={placeholder}
            style={{
              ...Common.inputColor,
              ...inputColor,
            }}
            placeholderTextColor={Common.placeholderColor}
            value={value}
            onChangeText={Invalue => {
              setValue(Invalue)
            }}
          />
          {inputIcon && value && value.length ? (
            <TouchableOpacity
              style={{ right: 12, top: 16, position: 'absolute' }}
              onPress={handleClick}
            >
              <Image source={inputIcon} style={{ ...iconStyle }} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default DashedInput
