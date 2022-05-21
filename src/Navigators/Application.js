import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { useDispatch, useSelector } from 'react-redux'
import NetworkError from '@/Components/NetworkError'
import  NetInfo  from '@react-native-community/netinfo';
import { setNetworkError } from '@/Store/Network'
import CustomeToaster from '@/Components/CustomeToaster'
import Toast from 'react-native-root-toast';
import { h18_Bold } from '@/Theme/Fonts';
import { ToastConfig } from '@/helper'
import AuthNavigator from './Auth'
import { isUserExists } from '@/Services/user'

// @refresh reset
const ApplicationNavigator = () => {
  const [userExists, setUserExists] = useState(0);
  const token = useSelector(state => state.user.token);
  const networkError=useSelector(state => state.network.networkError);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setNetworkError({ status: !state.isConnected }));
    });
    dispatch(isUserExists({setUserExists}));
    return () => unsubscribe();
  },[]);

  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  if (networkError) {
    return <NetworkError />
  }
  if (userExists == 0) {
    return null;
  }
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer ref={navigationRef}>
        {!token ? <AuthNavigator/>:
        <MainNavigator />}
        <Toast/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
