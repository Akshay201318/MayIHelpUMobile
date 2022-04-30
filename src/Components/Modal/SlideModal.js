import React, { useState, useMemo } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  TextInput,
} from '@/AppComponents'
import { screenHeight } from '@/Lib/utils'
import { h18_Medium, h22_Medium, h22_SemiBold, h25_Bold } from '@/Theme/Fonts'
import { s } from '@/Lib/scale'

const SlideModal = props => {
  const {
    modalVisible = true,
    setModalVisible = () => {},
    title = '',
    resetList,
    position = 0,
  } = props || {}

  return (
    <Modal animationType="fade" visible={modalVisible} transparent>
      <View style={styles.container}>
        <Pressable
          style={screenHeight * 0.51 > 350 ? { flex: 0.3 } : {}}
          onPress={() => setModalVisible(false)}
        />
        <View
          style={{
            backgroundColor: '#fff',
            height: 10,
            borderRadius: 8,
            marginVertical: 10,
            width: '20%',
            alignSelf: 'center',
          }}
        />
        <View style={styles.modalContainer}></View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flex: 0.3,
    padding: 20,
    borderTopEndRadius: screenHeight * 0.51 < 350 ? 0 : 40,
    borderTopStartRadius: screenHeight * 0.51 < 350 ? 0 : 40,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    color: '#08507d',
    ...h25_Bold,
    marginHorizontal: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: s(40),
  },
  tabScroll: { width: '100%', maxHeight: 42 },
  InputTextStyle: {
    textAlign: 'center',
    ...h22_Medium,
    backgroundColor: 'rgba(20, 149, 222, 0.1)',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
  },
})

export default SlideModal
