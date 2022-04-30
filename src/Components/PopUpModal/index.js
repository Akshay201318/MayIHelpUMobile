import React from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from '@/AppComponents'

import { h18_Bold, h20_Regular, h30_Bold } from '@/Theme/Fonts'
import { ActionButton } from '@/Components/ActionButton'
import { useTheme } from '@/Hooks'
import { s, vs } from '@/Lib/scale'
import Button from '@/Components/Button/Button'

const { width } = Dimensions.get('window')

const PopUpModal = props => {
  const {
    setModalVisible = () => {},
    modalVisible,

    title = 'Add link to your post',
    message,
    firstLabel,
    firstFunc,
    secondFunc,
    titleStyle,
    messageStyle,
    firstButtonProps,
    buttonGroupStyle,
    closeIcon = true,
    closeIconStyle,
    modalViewStyle,
    middleImage,
    middleImageStyle,
    children,
    buttonDashStyle = {},
  } = props || {}

  const { Images } = useTheme()

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(prev => !prev)
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, modalViewStyle]}>
          {closeIcon && (
            <Pressable
              onPress={() => setModalVisible(false)}
              style={[styles.closeIconStyle, closeIconStyle]}
            >
              <Image source={Images.crossIcon} />
            </Pressable>
          )}
          {middleImage && (
            <Image source={middleImage} style={{ ...middleImageStyle }} />
          )}
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {message && (
            <Text style={[styles.message, messageStyle]}>{message}</Text>
          )}
          {children}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              paddingHorizontal: s(10),
              width: '100%',
              justifyContent: secondFunc ? 'space-between' : 'center',
              ...buttonGroupStyle,
            }}
          >
            {/* <ActionButton
              text={firstLabel}
              onPress={firstFunc}
              buttonStyle={{width: '100%',backgroundColor:"#EBF5F8",
              paddingVertical:vs(16),
              borderRadius:100,
              ...h20_Regular,
              marginTop:s(16),
              ...firstButtonProps?.buttonStyle|| {}}}
              textStyle={{color:"#000",...firstButtonProps?.textStyle|| {}}}
            /> */}

            <Button
              onClick={firstFunc}
              label={firstLabel}
              dashStyle={{ ...buttonDashStyle }}
            />

            {secondFunc && (
              <ActionButton
                text={firstLabel}
                onPress={firstFunc}
                width="45%"
                invertColor
                {...firstButtonProps}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    alignItems: 'center',
    width: width * 0.9,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginVertical: 15,
    textAlign: 'center',
    ...h30_Bold,
    color: '#000',
    fontFamily: 'Gayathri',
  },
  message: {
    ...h18_Bold,
    textAlign: 'center',
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  closeIconStyle: { position: 'absolute', top: 12, right: 15, padding: 10 },
})

export default PopUpModal
