import React, { useEffect } from 'react'
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

// @refresh reset
const ApplicationNavigator = () => {

  const networkError=useSelector(state => state.network.networkError);
  const dispatch = useDispatch()
useEffect(() => {
  
const unsubscribe= NetInfo.addEventListener(state => {
    dispatch(setNetworkError({status:!state.isConnected}))
  });
  return () => unsubscribe();

},[])

  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  if(networkError){
    return <NetworkError/>
  }
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
        <Toast/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
