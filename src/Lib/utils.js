import { Dimensions, PermissionsAndroid } from '@/AppComponents'

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

export const screenHeight = Dimensions.get('window').height
export const screenWidth = Dimensions.get('window').width

export async function hasAndroidPermission(key) {
  const permission = PermissionsAndroid.PERMISSIONS[key]

  const hasPermission = await PermissionsAndroid.check(permission)
  if (hasPermission) {
    return true
  }

  const status = await PermissionsAndroid.request(permission)
  return status === 'granted'
}

export const camera_permission =
  Platform.OS === 'android'
    ? PERMISSIONS.ANDROID.CAMERA
    : Platform.OS === 'ios'
    ? PERMISSIONS.IOS.CAMERA
    : null

export const gallery_permission =
  Platform.OS === 'android'
    ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    : Platform.OS === 'ios'
    ? PERMISSIONS.IOS.PHOTO_LIBRARY
    : null

const askForPermission = permission => {
  return new Promise((resolve, reject) => {
    request(permission)
      .then(res => {
        console.log('res>>>', res)
        if (res == 'granted') {
          resolve(true)
        } else {
          reject(false)
        }
      })
      .catch(err => {
        console.log('err>>>', err)
        reject(err)
      })
  })
}

export const checkPermission = async permission => {
  let answer
  const result = await check(permission)
    .then(async res => {
      console.log('🚀######### ~ file: utils.js ~ line 59 ~ res', res)
      switch (res) {
        case RESULTS.GRANTED:
          console.log('The permission is granted')
          return true

        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          )
          return false

        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          )
          answer = await askForPermission(permission)
          return answer

        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible')
          return false

        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore')
          answer = await askForPermission(permission)
          return answer
      }
    })
    .catch(err => {
      console.log('<<< Error In Check Permession >>>', err)
    })
  return result
}
