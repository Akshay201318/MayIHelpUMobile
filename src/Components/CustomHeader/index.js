import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from '@/AppComponents'
import { useTheme } from '@/Hooks'
import { h18_Regular } from '@/Theme/Fonts'
import { s } from '@/Lib/scale'
import { camera_permission, checkPermission } from '@/Lib/utils'
import { launchCamera } from 'react-native-image-picker'
import Colors from '@/Theme/Colors'
import { goBack, openDrawer } from '@/Navigators/utils'

const CustomHeader = props => {
  const {
    addPostFunc,
    groupFunc,
    cameraFunc,
    notificationFunc = () => {},
    backIconFunc = () => {
      goBack()
    },
    title,
    titleStyle = {},
    backIcon,
    drawerIcon = false,
  } = props
  const { Images } = useTheme()

  const openCamera = async () => {
    const result = await checkPermission(camera_permission)
    if (result) {
      try {
        const option = {
          mediaType: 'photo',
          quality: 0.5,
          saveToPhotos: true,
          includeExtra: true,
        }
        launchCamera(option, res => {
          if (res?.assets?.[0]?.uri) {
            console.log('>>>>>>>>>>>>>>>>>', res?.assets?.[0])
            cameraFunc(res?.assets?.[0])
          } else {
            console.log('>>>', res)
          }
        })
      } catch (error) {
        console.log('Error In ImagePicker >>>', error)
      }
    }
  }

  return (
    <SafeAreaView>
      <View style={Style.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}
          >
            {!drawerIcon ? (
              <TouchableOpacity onPress={backIconFunc}>
                <Image
                  source={backIcon ? backIcon : Images.backIcon}
                  style={{ width: s(20), height: s(20) }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={openDrawer}>
                <Image
                  source={Images.menu}
                  style={{ width: s(20), height: s(20) }}
                />
              </TouchableOpacity>
            )}
            {title != '' && (
              <View style={{ paddingLeft: s(15) }}>
                <Text
                  style={{
                    ...Style.headerTitle,
                    ...titleStyle,
                  }}
                >
                  {title}
                </Text>
              </View>
            )}
          </View>
          <View style={Style.rightIconContainer}>
            {groupFunc ? (
              <TouchableOpacity style={{ paddingHorizontal: s(5) }}>
                <Image source={Images.groupIcon} style={Style.imageStyle} />
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={notificationFunc}
              style={{ paddingHorizontal: s(5) }}
            >
              <Image
                source={Images.notificationIcon}
                style={{
                  ...Style.imageStyle,
                  transform: [{ scale: 1.19 }],
                }}
              />
            </TouchableOpacity>
            {addPostFunc ? (
              <TouchableOpacity
                onPress={addPostFunc}
                style={{ paddingHorizontal: s(5) }}
              >
                <Image source={Images.addPostIcon} style={Style.imageStyle} />
              </TouchableOpacity>
            ) : null}

            {cameraFunc ? (
              <TouchableOpacity
                style={{ paddingHorizontal: s(5) }}
                onPress={() => openCamera()}
              >
                <Image
                  source={Images.cameraIcon}
                  style={{
                    ...Style.imageStyle,
                    transform: [{ scale: 1.17 }],
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const Style = StyleSheet.create({
  imageStyle: {
    width: s(35),
    height: s(35),
  },
  container: {
    flexDirection: 'row',
    paddingLeft: s(15),
    paddingRight: s(5),
    paddingVertical: s(10),
    backgroundColor: Colors.backGroundColor.white,
  },
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '54%',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: '#001A21',
    ...h18_Regular,
  },
})
export default CustomHeader
