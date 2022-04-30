import { Text, View, Image, TouchableOpacity } from '@/AppComponents'
import { useTheme } from '@/Hooks'
import { s, vs } from '@/Lib/scale'
import { updateComment } from '@/Services/post'
import { h14_Regular, h16_Regular } from '@/Theme/Fonts'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReplyTile from './replyTile'

const CommentWrapper = props => {
  const {
    comment = {},
    setComments = () => {},
    commentIndex,
    replyingTo = {},
    setReplyingTo = () => {},
  } = props || {}
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState([])
  const { Layout, Images, Gutters } = useTheme()
  const { token, user } = useSelector(state => state.user)

  const tempLikes = [...(comment?.likes || [])]
  const dispatch = useDispatch()

  useEffect(() => {
    setLikeCount(tempLikes)
  }, [])

  const handleLikeDislike = () => {
    const likedIndex = tempLikes.findIndex(item => item._id === user._id)
    if (likedIndex === -1) {
      tempLikes.push({ _id: user?._id })
    } else {
      tempLikes.splice(likedIndex, 1)
    }
    setLikeCount(pre => tempLikes)
    dispatch(
      updateComment({ _id: comment?._id, data: { likes: tempLikes }, token }),
    ).then(res => {
      setComments(pre => {
        const old = [...pre]
        old[commentIndex].likes = tempLikes
        console.log(old[commentIndex].likes)
        return old
      })
    })
  }

  return (
    <View style={{ marginVertical: vs(2), marginHorizontal: s(5) }}>
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
              source={Images.dummyUser2}
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
                {comment?.commentedBy?.name || ''}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: s(8) }}>
          <Text style={{ color: '#272727', ...h14_Regular }}>
            {comment?.content || ''}
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
              <Text style={{ color: '#808D90' }}>{likeCount.length} Likes</Text>
            </View>
            <View
              style={{
                paddingHorizontal: s(10),
                borderRightWidth: 1,
                borderColor: '#808D90',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  setReplyingTo({
                    _id: comment?._id,
                    userId: comment?.commentedBy?._id,
                    name: comment?.commentedBy?.name,
                  })
                }
              >
                <Text
                  style={{
                    ...(replyingTo?._id == comment?._id
                      ? { color: '#2A96B6', textDecorationLine: 'underline' }
                      : { color: '#808D90' }),
                  }}
                >
                  Reply
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ marginLeft: s(10), color: '#808D90' }}>
                14 min
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={handleLikeDislike}>
              <Image
                source={
                  Images?.[
                    likeCount.findIndex(item => item?._id == user?._id) !== -1
                      ? 'likedIcon'
                      : 'likeIcon'
                  ]
                }
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
      {comment.reply && comment.reply.length
        ? comment.reply.map(item => (
            <ReplyTile reply={item} liked={liked} setLiked={setLiked} />
          ))
        : null}
    </View>
  )
}

export default CommentWrapper
