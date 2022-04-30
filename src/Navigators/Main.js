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

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const MainNavigator = () => {
  const { Images } = useTheme()

  const HomeStack = useCallback(() => {
    return (
      <Stack.Navigator
        initialRouteName="Initial"
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
    //   name: 'Feeds',
    //   component: FeedStack,
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
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          height: 79,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: 150,
        }}
      >
        <Text numberOfLines={1} style={{ color: '#000' }}>
          Home
        </Text>
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
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          width: 225,
        },
        drawerItemStyle: {
          height: 50,
          marginVertical: 2,
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
