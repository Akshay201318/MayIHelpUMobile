import React, { useCallback } from 'react'
import { CreatePost, Feed, Groups, Home } from '@/MayIHelpU'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { h14_SemiBold } from '@/Theme/Fonts'
import { useTheme } from '@/Hooks'
import { SafeAreaView, View, Image, Text } from '@/AppComponents'
import Gallery from '@/Components/Gallery'
import Button from '@/Components/Button/Button'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const MainNavigator = () => {
  const { Images } = useTheme()

  const HomeStack = useCallback(() => {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Initial" component={Home} />
        {/* <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Groups" component={Groups} /> */}
      </Stack.Navigator>
    )
  }, [])

  // const FeedStack = useCallback(() => {
  //   return (
  //     <Stack.Navigator
  //       initialRouteName="Feed"
  //       screenOptions={{ headerShown: false }}
  //     >
  //       <Stack.Screen name="Feed" component={Feed} />
  //       <Stack.Screen name="CreatePost" component={CreatePost} />
  //       <Stack.Screen name="Gallery" component={Gallery} />
  //     </Stack.Navigator>
  //   )
  // }, [])

  const drawerItems = [
    {
      name: 'Home',
      component: HomeStack,
      icon: Images.menu,
      headerShown: false,
    },
    // {
    //   name: 'Log out',
    //   component: Button({}),
    //   icon: Images.menu,
    //   headerShown: false,
    // },
    // {
    //   name: 'Groups',
    //   component: Groups,
    //   icon: Images.menu,
    //   headerShown: false,

    // },
  ]

  const drawer = props => (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor:"#d4fffa" }}>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
        }}
      >
        <Image source={Images.appNameLogo} style={{ height: 80, width: 140}}/>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          paddingTop: 10,
        }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  )

  return (
    <Drawer.Navigator
      drawerContent={props => drawer(props)}
      initialRouteName={'Home'}
      screenOptions={{
        // headerShown: true,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#fff',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          width: 225,
        },
        drawerItemStyle: {
          height: 50,
          justifyContent: 'center',
        },
        drawerLabelStyle: {
          // backgroundColor: 'red',
          color: '#000',
          width: 130,
          ...h14_SemiBold,
        },
      }}
    >
      {drawerItems &&
        drawerItems.map(item => {
          return (
            <Drawer.Screen
              name={item.name}
              component={item.component}
              key={item.name}
              options={{
                unmountOnBlur: true,
                headerShown: item?.headerShown === false ? false : true,
                drawerIcon: ({ color, size }) => (
                  <Image
                    style={{
                      marginLeft: 17,
                      width: 24,
                      height: 24,
                    }}
                    resizeMode={'contain'}
                    source={item.icon}
                  />
                ),
              }}
            />
          )
        })}
    </Drawer.Navigator>
    //   <Drawer.Navigator initialRouteName="Home" >
    //   <Drawer.Screen name="Home" component={Home}  />
    //   <Drawer.Screen name="Post" component={Feed} />
    // </Drawer.Navigator>
  )
}

export default MainNavigator
