import { setAuthenticatedUser, setToken } from '@/Store/User'
import { Platform } from 'react-native'
import { fetch, post } from './AppServices'

var token = '2779e88f5b77937234d17e0840e15e6036aaada8'

export const getAuthenticatedUser = token => async dispatch => {
  try {
    if (token) {
      let uri = {
        timezoneOffset: new Date().getTimezoneOffset(),
        platform: Platform.OS,
        props: { token },
        id: '_getAuthenticatedUser',
      }
      const { data = {} } = await dispatch(fetch({ uri }))
      dispatch(setToken({ token }))
      dispatch(setAuthenticatedUser({ user: data }))
    }
  } catch (e) {
    console.log('erorrr>>>>>>>>>>>>>>>.', e.message)
  }
}

export const addUserGroups =
  ({ _id, groups, token }) =>
  async dispatch => {
    try {
      if (token) {
        const result = await post({
          data: { _id },
          updates: { groups: groups },
          model: 'User',
          token,
        })
        return result
      }
    } catch (e) {
      console.log('erorrr>>>>>>>>>>>>>>>.', e)
    }
  }

  export const updateUserLikes =
  ({ _id, likes, token }) =>
  async dispatch => {
    try {
      if (token) {
        const result = await post({
          data: { _id },
          updates: { likedPosts: likes },
          model: 'User',
          token,
        })
        return result
      }
    } catch (e) {
      console.log('erorrr>>>>>>>>>>>>>>>.', e)
    }
  } 

export const getUserGroups =
  ({ token, _id }) =>
  async dispatch => {
    console.log('🚀######### ~ file: user.js ~ line 48 ~ token', token)
    // const dispatch = useDispatch()

    try {
      if (token) {
        let uri = {
          timezoneOffset: new Date().getTimezoneOffset(),
          platform: Platform.OS,
          token,
          props: {
            query: {
              id: 'getUserGroups',
              addOnFilter: { _id: _id },
            },
            model: 'User',
          },

          id: '_find',
        }
        console.log('🚀######### ~ file: user.js ~ line 66 ~ uri', uri)
        const { data = {} } = await dispatch(fetch({ uri }))
        return data
      }
    } catch (e) {
      // console.log("erorrr>>>>>>>>>>>>>>>.",e)
    }
  }
