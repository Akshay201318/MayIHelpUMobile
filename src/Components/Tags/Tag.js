import { View, Text, Pressable, StyleSheet, Image } from '@/AppComponents'
import { s, vs } from '@/Lib/scale'
import Colors from '@/Theme/Colors'
import { h14_Bold, h14_Regular, h20_Regular } from '@/Theme/Fonts'
import React from 'react'

const Tag = ({
  label,
  isSelected,
  selectedIcon,
  onClick = () => {},
  type = 'curved',
  style = {},
}) => {
  return (
    <Pressable style={{ ...styles.container }} onPress={onClick}>
      {({ pressed }) => (
        <>
          <View style={[styles.curvedStyle, styles.tagOverlay]}>
            <Text style={styles.textStyle}>{label}</Text>
          </View>
          <View
            style={{
              ...styles.curvedStyle,
              position: 'absolute',
              ...style,
              ...(pressed ? { backgroundColor: '#cce0e6' } : {}),
            }}
          >
            <Text style={styles.textStyle}>{label}</Text>
            {isSelected ? (
              <View
                style={{
                  position: 'absolute',
                  right: 4,
                  top: -10,
                  borderRadius: 20,
                }}
              >
                <Image
                  source={selectedIcon}
                  style={{ height: 20, width: 20 }}
                />
              </View>
            ) : null}
          </View>
        </>
      )}
    </Pressable>
  )
}

export default Tag

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: s(8),
    marginBottom: s(12),
    position: 'relative',
  },
  circleStyle: {
    position: 'absolute',
    height: vs(40),
    width: s(40),
    borderRadius: 50,
    flex: 0.2,
    left: s(15),
    backgroundColor: Colors.backGroundColor.advertisingBlue,
  },
  leftImageContainer: { position: 'absolute', flex: 0.2, left: s(20) },
  textStyle: {
    ...h14_Bold,
    color: Colors.color.black,
    marginHorizontal: s(1),
    textAlign: 'center',
    width: '100%',
  },
  curvedStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: s(180),
    minWidth: s(60),
    backgroundColor: Colors.backGroundColor.white,
    borderColor: Colors.color.black,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingHorizontal: s(8),
    paddingVertical: vs(8),
    // flexDirection: 'row',
  },
  tagOverlay: {
    borderColor: Colors.color.darkCyan,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    borderStyle: 'dashed',
    position: 'relative',
    left: s(3),
    top: vs(3),
    maxWidth: s(180),
    minWidth: s(60),
  },
})
