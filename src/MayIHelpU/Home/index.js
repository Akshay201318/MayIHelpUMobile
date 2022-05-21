import React, { useEffect } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from '@/AppComponents'
import Button from '@/Components/Button/Button'
import { h30_Bold } from '@/Theme/Fonts'
import { useTheme } from '@/Hooks'
import Colors from '@/Theme/Colors'
import { s, vs } from '@/Lib/scale'
import CustomHeader from '@/Components/CustomHeader'
import { useDispatch } from 'react-redux'
import { getAuthenticatedUser, logOut } from '@/Services/user'
import { setIsLoading } from '@/Store/Loader'
import { useSelector } from 'react-redux'

const Home = props => {
  const { Images } = useTheme()
  const { navigation } = props;
  const user = useSelector(state => state?.user.user)
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGroundColor.white }}>
      <CustomHeader drawerIcon={true} />
      <Button
        label={"Log Out"}
        onClick={() => dispatch(logOut())}
        buttonStyle = {{height: 50, width: 200}}
      />
    </View>
  )
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageWrapper: {
    height: '50%',
    width: '90%',
    borderRadius: 20,
    paddingTop: vs(50),
  },
  introImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
})
export default Home
