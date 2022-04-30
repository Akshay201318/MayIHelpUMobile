import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from '@/AppComponents'
import { useTheme } from '@/Hooks'
import { h14_Regular, h16_Regular } from '@/Theme/Fonts'
import { s, vs } from '@/Lib/scale'

const ReplyTile = props => {
  const { reply } = props
  const [liked, setLiked] = useState(false)

  const { Layout, Images, Gutters } = useTheme()
  return (
    <View style={{ paddingLeft: s(20), marginTop: vs(10) }}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: 'rgba(240, 246, 253, 0.5)',
          padding: s(10),
        }}
      >
        <View
          style={{
            ...Layout.row,
            flex: 1,
            paddingHorizontal: s(5),
            // backgroundColor:"grey",
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ ...Layout.row }}>
            <Image
              source={Images.dummyUser3}
              style={{ width: 30, height: 30 }}
            />
            <View
              style={{
                ...Gutters.smallHMargin,
                ...Layout.selfCenter,
                marginLeft: s(10),
              }}
            >
              <Text
                style={{
                  marginVertical: vs(2),
                  color: '#001A21',
                  ...h16_Regular,
                }}
              >
               {reply?.commentedBy?.name || ""}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: s(8) }}>
          <Text style={{ color: '#272727', ...h14_Regular }}>
            {reply?.content || ""}
          </Text>
        </View>

        {/* Like Reply Time */}
        <View
          style={{
            paddingHorizontal: s(8),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                paddingRight: s(10),
                borderRightWidth: 1,
                borderColor: '#808D90',
              }}
            >
              <Text style={{ color: '#808D90' }}>2 Likes</Text>
            </View>
            <View
              style={{
                paddingHorizontal: s(10),
                borderRightWidth: 1,
                borderColor: '#808D90',
              }}
            >
              <Text style={{ color: '#808D90' }}>Reply</Text>
            </View>
            <View>
              <Text style={{ marginLeft: s(10), color: '#808D90' }}>14 min</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => setLiked(pre => !pre)}>
              <Image
                source={Images?.[liked ? 'likedIcon' : 'likeIcon']}
                style={{
                  transform: [{ scale: 1.5 }],
                  ...(liked ? { transform: [{ scale: 2 }] } : {}),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ------------Like Reply Time End---------- */}
      </View>
    </View>
  )
}

export default ReplyTile
