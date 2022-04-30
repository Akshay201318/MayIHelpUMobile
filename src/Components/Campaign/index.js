import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground } from '@/AppComponents'
import { h12_Regular, h22_Regular } from '@/Theme/Fonts'
import { useTheme } from '@/Hooks'
import { Skeleton } from './Skeleton'
import { vs } from '@/Lib/scale'
import Colors from '@/Theme/Colors'

const Campaign = () => {
  const { Images } = useTheme()
  const [showSkelton, setShowSkelton] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowSkelton(false), 1000)
  }, [])

  if (showSkelton) {
    return <Skeleton />
  }
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F6FD',
        paddingBottom: vs(26),
      }}
    >
      <View style={{ paddingHorizontal: 10, alignSelf: 'flex-start' }}>
        <Text
          style={{
            fontFamily: 'Gayathri',
            ...h22_Regular,
            color: Colors.color.black,
          }}
        >
          Recent camps near you
        </Text>
        <Image
          source={Images.sparkleIcon}
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            right: -2,
            top: -3,
          }}
        />
      </View>

      {/* Campaign Boxes */}

      <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* Campaign Box 1 */}
          <View style={{ width: '46%' }}>
            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderRadius: 20,
                paddingRight: 3,
                backgroundColor: Colors.backGroundColor.white,
                height: 230,
              }}
            >
              <View
                style={{
                  height: 230,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
                resizeMode="cover"
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'Think Big',
                      color: Colors.color.black,
                      ...h22_Regular,
                    }}
                  >
                    Blood Camp
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={Images.calendarIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      color: '#808D90',
                      ...h12_Regular,
                      marginLeft: 10,
                    }}
                  >
                    Feb 11, 2022
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                paddingRight: 3,
                backgroundColor: Colors.backGroundColor.white,
                position: 'absolute',
                top: -8,
                left: -6,
                width: '100%',
                paddingLeft: 3,
              }}
            >
              <ImageBackground
                source={Images.campaign}
                style={{
                  height: 230,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}
                resizeMode="cover"
              >
                <Image
                  source={Images.rightIcon}
                  style={{
                    transform: [{ scale: 1.3 }],
                    position: 'absolute',
                    right: 10,
                    top: 10,
                  }}
                />

                <View>
                  <Text
                    style={{
                      fontFamily: 'Think Big',
                      color: Colors.color.black,
                      ...h22_Regular,
                    }}
                  >
                    Blood Camp
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={Images.calendarIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      color: '#808D90',
                      ...h12_Regular,
                      marginLeft: 10,
                    }}
                  >
                    Feb 11, 2022
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={{ width: '46%' }}>
            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderRadius: 20,
                paddingRight: 3,
                backgroundColor: Colors.backGroundColor.white,
                height: 230,
              }}
            >
              <View
                style={{
                  height: 230,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
                resizeMode="cover"
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'Think Big',
                      color: '#000',
                      ...h22_Regular,
                    }}
                  >
                    Blood Camp
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={Images.calendarIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      color: '#808D90',
                      ...h12_Regular,
                      marginLeft: 10,
                    }}
                  >
                    Feb 11, 2022
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                paddingRight: 3,
                backgroundColor: '#fff',
                position: 'absolute',
                top: -8,
                left: -6,
                width: '100%',
                paddingLeft: 3,
              }}
            >
              <ImageBackground
                source={Images.campaign2}
                style={{
                  height: 230,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}
                resizeMode="cover"
              >
                <Image
                  source={Images.rightIcon}
                  style={{
                    transform: [{ scale: 1.3 }],
                    position: 'absolute',
                    right: 10,
                    top: 10,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: 'Think Big',
                      color: '#000',
                      ...h22_Regular,
                    }}
                  >
                    Yoga Camp
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={Images.calendarIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={{
                      color: '#808D90',
                      ...h12_Regular,
                      marginLeft: 10,
                    }}
                  >
                    Feb 18, 2022
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Campaign
