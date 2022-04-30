import React, { useState, useEffect } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from '@/AppComponents'
import { useTheme } from '@/Hooks'
import { CommentSkeleton } from './commentSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, addCommentReply, getComment } from '@/Services/post'
import DashedInput from '@/Components/DashedInput'
import { setIsLoading } from '@/Store/Loader'
import { s, vs } from '@/Lib/scale'
import CommentWrapper from './CommentWrapper'


const CommentTile = props => {
  const { post: { _id: postId } = {}, showComment } = props

  const { token, user } = useSelector(state => state.user)
  const [commentText, setCommentText] = useState('')
  const { Images } = useTheme()
  const [comments, setComments] = useState([])
  const [showSkelton, setShowSkelton] = useState(false)
  const [replyingTo, setReplyingTo] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    setShowSkelton(true)
    dispatch(getComment({ id: postId, token, limit: 5 }))
      .then(res => {
        setComments(res[0].comments || [])
        setShowSkelton(false)
      })
      .catch(e => {
        setShowSkelton(false)
      })
      .finally(setShowSkelton)
  }, [])

  if (showSkelton) {
    return <CommentSkeleton />
  }

  const sendComment = () => {
    if (Object.keys(replyingTo).length) {
      let commentData = {
        comment: { _id: replyingTo?._id },
        reply: {
          content: commentText,
          parent: { _id: replyingTo?._id },
          commentedBy: { _id: user?._id },
          isReply: true,
          post: { _id: postId },
        },
      }

      dispatch(setIsLoading({ isLoading: true }))
      dispatch(addCommentReply({ data: { ...commentData }, token })).then(
        res => {
          setCommentText('')
          setComments(pre => {
            let old = [...pre]
            let modifiedComment = old.map(item => {
              if (item._id == replyingTo._id) {
                commentData.reply.commentedBy["name"] = user.name;
                if (item?.reply?.length) {
                  item.reply.push(commentData?.reply)
                } else {
                  item['reply'] = [commentData?.reply]
                }
              }
              return item
            })
            return modifiedComment
          })
          setReplyingTo({});
          dispatch(setIsLoading({ isLoading: false }))
        },
      )
    } else {
      let commentData = {
        content: commentText,
        commentedBy: { _id: user?._id },
      }
      dispatch(setIsLoading({ isLoading: true }))
      dispatch(
        addComment({
          data: { post: { _id: postId }, comment: commentData },
          token,
        }),
      ).then(res => {
        setCommentText('')
        setComments(pre => [...pre, commentData])
        dispatch(setIsLoading({ isLoading: false }))
      })
    }
  }
  return (
    <>
      {showComment &&
        comments.map((item, index) => {
          if (item?.isReply) {
            return null
          }
          return (
            <CommentWrapper
              comment={item}
              setComments={setComments}
              commentIndex={index}
              setReplyingTo={setReplyingTo}
              replyingTo={replyingTo}
            />
          )
        })}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          {Object.keys(replyingTo).length ? (
            <View style={{paddingTop: vs(8)}}>
              <View style={{ position: 'absolute', top: 0, left: s(16), flexDirection:"row", alignItems: "center" }}>
                <Text>Replying To: {replyingTo.name}</Text>
                <TouchableOpacity onPress ={() => setReplyingTo({})}>
                <Image source={Images.crossIcon} style={{ width: 16, height: 16, marginLeft: s(6)}}/>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          <DashedInput
            outerContainerStyle={{ width: '90%' }}
            value={commentText}
            setValue={setCommentText}
            placeholder={'write your thoughts ...'}
            inputIcon={Images.sendIcon}
            iconStyle={{ width: 20, height: 20 }}
            iconClick={sendComment}
          />
        </View>
        <View style={Styles.likeIcon}>
          <Image
            source={Images.likeIcon}
            style={{
              transform: [{ scale: 1.5 }],
            }}
          />
        </View>
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
  commentWrapper: {
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: s(50),
  },
  commentBoxOverlay: {
    width: '90%',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1.2,
    borderStyle: 'dashed',
    height: s(45),
  },
  commentBox: {
    width: '100%',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1.2,
    paddingLeft: s(10),
    bottom: s(5),
    right: s(2),
    backgroundColor: '#fff',
    position: 'absolute',
  },
  likeIcon: {
    paddingHorizontal: s(4),
    marginBottom: s(3),
    alignContent: 'center',
  },
  sendButton: {
    transform: [{ scale: 1.3 }],
    position: 'absolute',
    right: s(10),
    top: s(13),
  },
})
export default CommentTile
