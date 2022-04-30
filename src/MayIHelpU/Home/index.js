import React, { useEffect } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from '@/AppComponents'
import Button from '@/Components/Button/Button'
import { h30_Bold } from '@/Theme/Fonts'
import { useTheme } from '@/Hooks'
import Colors from '@/Theme/Colors'
import { s, vs } from '@/Lib/scale'
import CustomHeader from '@/Components/CustomHeader'
import { useDispatch } from 'react-redux'
import { getAuthenticatedUser } from '@/Services/user'
import { setIsLoading } from '@/Store/Loader'
import { useSelector } from 'react-redux'

const Home = props => {
  const { Images } = useTheme()
  const { navigation } = props;
  const user = useSelector(state => state?.user.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading({isLoading: true}));
    dispatch(
      getAuthenticatedUser('652514195a902a0ea5c975f9796a7769020d4b6b'),
    ).then(res => {
      dispatch(setIsLoading({isLoading: false}));
    })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGroundColor.white }}>
      <CustomHeader drawerIcon={true} />
      <ScrollView
        // style={{ flex: 1 }}
        contentContainerStyle={homeStyles.container}
      >
        <View style={homeStyles.imageWrapper}>
          <Image source={Images.intro} style={homeStyles.introImage} />
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: s(10),
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: vs(80),
          }}
        >
          <View style={{ flexDirection: 'row', paddingBottom: s(30) }}>
            <Text
              style={{
                ...h30_Bold,
                color: Colors.color.black,
                fontFamily: 'Think Big',
              }}
            >
              HELLO
            </Text>
            <Text
              style={{
                marginLeft: s(10),
                ...h30_Bold,
                fontFamily: 'Think Big',
                color: Colors.color.username,
              }}
            >
              { user?.name }!
            </Text>
          </View>
          <Button
            type={'square'}
            isLeftIcon={true}
            isRightIcon={true}
            leftIcon={Images.select}
            rightIcon={Images.next}
            onClick={() => navigation.navigate('Groups')}
          />
        </View>
      </ScrollView>
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
