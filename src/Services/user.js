import { setAuthenticatedUser, setToken } from '@/Store/User'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { showMessage, hideMessage } from 'react-native-flash-message'
import GetLocation from 'react-native-get-location'
import { setIsLoading } from '@/Store/Loader'

let baseUrl = 'https://mayihelpu.herokuapp.com'
// baseUrl = 'http://192.168.42.207:5000';

export const getAuthenticatedUser = token => async dispatch => {
  try {
    if (token) {
      const authAxios = axios.create({
        baseURL: baseUrl,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      try {
        const res = await authAxios.get(`/users/getUserData`);
        if (Object.keys(res).length) {
          dispatch(setToken({ token }));
          dispatch(setAuthenticatedUser({ user: res.data.user }));
        }
        return res;
      }catch(e) {
          showMessage({
            message: 'Invalid Token Please Login Again!',
            type: 'danger',
          })
        }
    }
  } catch (e) {
    console.log('erorrr>>>>>>>>>>>>>>>.', e.message)
  }
}

export const storeToken = token => async dispatch => {
  try {
    if (token) {
      const jsonValue = JSON.stringify(token)
      AsyncStorage.setItem('MayIHelpU', jsonValue)
    }
  } catch (error) {
    console.log('error in storing the token', error)
  }
}

export const loginUser =
  ({ formData }) =>
  async dispatch => {
    delete formData.rememberMe
    dispatch(setIsLoading({ isLoading: true }))
    axios
      .post(`${baseUrl}/auth/login`, { ...formData })
      .then(function (response) {
        const { token } = response?.data?.tokens?.access || {}
        if (token) {
          dispatch(setToken({ token }))
          dispatch(setAuthenticatedUser({ user: response.data.user }))
          dispatch(storeToken(token))
        }
        dispatch(setIsLoading({ isLoading: false }))
        showMessage({
          message: 'Logged in successfully!',
          type: 'success',
        })

        return response
      })
      .catch(function (error) {
        showMessage({
          message: 'Email or password is incorrect!',
          type: 'danger',
        })
        console.log(error)
        dispatch(setIsLoading({ isLoading: false }))
      })
  }

export const isUserExists = ({setUserExists}) => async dispatch => {
  try {
    dispatch(setIsLoading({ isLoading: true }));
    const token = JSON.parse(await AsyncStorage.getItem('MayIHelpU'));
    if (token) {
      dispatch(getAuthenticatedUser(token)).then(() => {
        dispatch(setIsLoading({ isLoading: false }));
        setUserExists(1);
      }
      )
    } else {
      setUserExists(2);
      dispatch(setIsLoading({ isLoading: false }));
    }
  } catch (error) {
    dispatch(setIsLoading({ isLoading: false }))
    console.log('error in checking is user exists', error)
  }
}

export const logOut = () => async dispatch => {
  try {
    dispatch(setIsLoading({ isLoading: true }));
    await AsyncStorage.removeItem('MayIHelpU');
    dispatch(setToken({ token: null }));
    dispatch(setAuthenticatedUser({ user: {} }));
    dispatch(setIsLoading({ isLoading: false }));
    showMessage({
      message: 'Logged out successfully!',
      type: 'success',
    })
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    })
    dispatch(setIsLoading({ isLoading: false }))
    console.log('error in deleting the token>>>>>>>>>>', error)
  }
}
