import React from 'react'
import { View, Image, Text, StyleSheet, Pressable } from '@/AppComponents'
import { h20_Regular } from '@/Theme/Fonts'

const Button = ({
  type = 'curved',
  isRightIcon = false,
  isLeftIcon = false,
  leftIcon,
  rightIcon,
  label = 'Select groups',
  onClick = () => {},
  buttonStyle = {},
}) => {
  return (
    <Pressable style={{ ...styles.container }} onPress={onClick}>
      {({ pressed }) => (
        <>
          {/* <View
            style={
              type == 'curved'
                ? {
                    ...styles.curvedStyle,
                    borderColor: '#002B38',
                    // borderStyle: 'dashed',
                    position: 'absolute',
                    right: -6,
                    top: 6,
                    backgroundColor: '#fff',
                    ...dashStyle,
                  }
                : {
                    ...styles.squareStyle,
                    borderColor: '#002B38',
                    // borderStyle: 'dashed',
                    position: 'absolute',
                    right: -6,
                    top: 6,
                    backgroundColor: '#fff',
                    ...dashStyle,
                  }
            }
          ></View> */}
          <View
            style={
              type == 'curved'
                ? {
                    ...styles.curvedStyle,
                  ...(pressed ? { backgroundColor: '#cce0e6' } : {}),
                    ...buttonStyle
                  }
                : {
                    ...styles.squareStyle,
                  ...(pressed ? { backgroundColor: '#cce0e6' } : {}),
                    ...buttonStyle
                  }
            }
          >
            {isLeftIcon && (
              <View
                style={{
                  ...styles.circleStyle,
                  bottom: type == 'curved' ? 6 : 24,
                }}
              ></View>
            )}
            {isLeftIcon && (
              <View style={styles.leftImageContainer}>
                <Image
                  source={leftIcon}
                  style={{
                    height: 40,
                    width: 40,
                    marginRight: 5,
                  }}
                />
              </View>
            )}
            <Text style={styles.textStyle}>{label}</Text>
            {isRightIcon && (
              <View
                style={{
                  position: 'absolute',
                  flex: 0.2,
                  right: 20,
                  bottom: 25,
                }}
              >
                <Image
                  source={rightIcon}
                  style={{
                    height: 8,
                    width: 12.5,
                    marginRight: 5,
                  }}
                />
              </View>
            )}
          </View>
        </>
      )}
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    width: '90%',
  },
  circleStyle: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 50,
    flex: 0.2,
    left: 15,
    backgroundColor: 'rgba(0, 129, 167, 0.25)',
  },
  leftImageContainer: { position: 'absolute', flex: 0.2, left: 20 },
  textStyle: {
    ...h20_Regular,
    fontFamily: 'Gayathri-Bold',
    textAlign: 'center',
    color: '#000000',
  },
  curvedStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#EBF5F8',
    borderColor: '#2A96B6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    flexDirection: 'row',
  },
  squareStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 95,
    backgroundColor: '#EBF5F8',
    borderColor: '#2A96B6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    flexDirection: 'row',
  },
})
