// // // import * as React from 'react'
// // // import { useState, useEffect } from 'react'
// // // import { Keyboard, Dimensions, View, Image } from 'react-native'
// // // import { NavigationContainer } from '@react-navigation/native'
// // // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // // import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// // // import CustomText from '../../components/TextComponent'
// // // import color, { App_Primary_color, white } from '../../common/Colors/colors'
// // // import { FONTS_FAMILY } from '../../assets/Fonts'
// // // import IMG from '../../assets/Images'

// // // import { useSelector } from 'react-redux'
// // // import HomeScreen from '../../screens/Home/Home'
// // // import Category from '../../screens/Category/Category'
// // // import Favourite from '../../screens/Favourites/Favourites'
// // // import ProfilePage from '../../screens/Profile/Profile'
// // // import MyOrdersPage from '../../screens/Orders/Orders'

// // // const Tab = createBottomTabNavigator()

// // // function TabNavigation() {
// // //   const [keyboardVisible, setKeyboardVisible] = useState(false)
// // //   const { isDarkMode } = useSelector(state => state.theme)


// // //   useEffect(() => {
// // //     const keyboardDidShowListener = Keyboard.addListener(
// // //       'keyboardDidShow',
// // //       () => {
// // //         setKeyboardVisible(true)
// // //       },
// // //     )
// // //     const keyboardDidHideListener = Keyboard.addListener(
// // //       'keyboardDidHide',
// // //       () => {
// // //         setKeyboardVisible(false)
// // //       },
// // //     )

// // //     return () => {
// // //       keyboardDidShowListener.remove()
// // //       keyboardDidHideListener.remove()
// // //     }
// // //   }, [])

// // //   return (
// // //     <Tab.Navigator
// // //       initialRouteName='Home'
// // //       screenOptions={{
// // //         headerShown: false,
// // //         tabBarStyle: {
// // //           position: 'absolute',
// // //           bottom: verticalScale(10),
// // //           borderRadius: moderateScale(40),
// // //           height: verticalScale(68),
// // //           justifyContent: 'center',
// // //           alignItems: 'center',
// // //           elevation: 20,
// // //           shadowColor: '#000',
// // //           paddingHorizontal: 10,
// // //           // backgroundColor: isDarkMode ? '#444' : 'white',
// // //           backgroundColor: 'rgba(255, 255, 255, 0.4)',
// // //           borderWidth: 1,
// // //           borderColor: App_Primary_color,
// // //           display: keyboardVisible ? 'none' : 'flex',
// // //           marginHorizontal: 10,
// // //           // overflow: 'visible'

// // //         },
// // //       }}>
// // //       <Tab.Screen
// // //         name='Home'
// // //         component={HomeScreen}
// // //         options={{
// // //           tabBarLabel: () => <></>,
// // //           tabBarIcon: ({ focused }) =>
// // //             focused ? (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   // source={IMG.activeHome}
// // //                   source={IMG.Active1}

// // //                   style={{
// // //                     height: 45,
// // //                     width: 45,
// // //                     // bottom: 30,
// // //                     // tintColor: App_Primary_color,
// // //                     // tintColor: App_Primary_color,


// // //                   }}
// // //                 />

// // //               </View>
// // //             ) : (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}
// // //               >
// // //                 <Image
// // //                   source={IMG.deActiveHome}
// // //                   style={{
// // //                     height: 20,
// // //                     width: 20,
// // //                     tintColor: isDarkMode ? 'white' : '#6B7280',
// // //                   }}
// // //                 />
// // //                 <CustomText
// // //                   style={{
// // //                     color: isDarkMode ? 'white' : '#6B7280',
// // //                     fontSize: 12,
// // //                     fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //                   }}>
// // //                   Home
// // //                 </CustomText>
// // //               </View>
// // //             ),
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name='Fav'
// // //         component={Category}
// // //         options={{
// // //           tabBarLabel: () => <></>,
// // //           tabBarIcon: ({ focused }) =>
// // //             focused ? (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   // source={IMG.activeCategroy}
// // //                   source={IMG.Active2}

// // //                   style={{
// // //                     height: 45,
// // //                     width: 45,
// // //                     // bottom: 30,
// // //                   }}
// // //                 />

// // //               </View>
// // //             ) : (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   source={IMG.deActiveCategory}
// // //                   style={{
// // //                     height: 20,
// // //                     width: 20,
// // //                     tintColor:isDarkMode? white: '#6B7280',
// // //                   }}
// // //                 />

// // //                 <CustomText
// // //                   style={{
// // //                     color: isDarkMode ? 'white' : '#6B7280',
// // //                     fontSize: 12,
// // //                     fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //                   }}>
// // //                   Categroy
// // //                 </CustomText>
// // //               </View>
// // //             ),
// // //         }}
// // //       />

// // //       <Tab.Screen
// // //         name='My Order'
// // //         component={MyOrdersPage}
// // //         options={{
// // //           tabBarLabel: () => <></>,
// // //           tabBarIcon: ({ focused }) =>
// // //             focused ? (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   // gap: 8,
// // //                   backgroundColor: App_Primary_color,
// // //                   justifyContent: 'center',
// // //                   // bottom: 30,
// // //                   height: 45,
// // //                   width: 45,
// // //                   borderRadius: 28,
// // //                 }}>
// // //                 <Image
// // //                   source={IMG.myOrder}
// // //                   // source={IMG.Active3}

// // //                   style={{
// // //                     height: 25,
// // //                     width: 25,
// // //                     // bottom:30,
// // //                     tintColor: white,
// // //                   }}
// // //                 />

// // //               </View>
// // //             ) : (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   source={IMG.myOrder}
// // //                   style={{
// // //                     height: 20,
// // //                     width: 20,
// // //                     tintColor:isDarkMode? white: '#6B7280',
// // //                   }}
// // //                 />

// // //                 <CustomText
// // //                   style={{
// // //                     color: isDarkMode ? 'white' : '#6B7280',
// // //                     fontSize: 12,
// // //                     fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //                   }}>
// // //                   My Order's
// // //                 </CustomText>
// // //               </View>
// // //             ),
// // //         }}
// // //       />
// // //       {/* <Tab.Screen
// // //         name='Message'
// // //         component={Favourite}
// // //         options={{
// // //           tabBarLabel: () => <></>,
// // //           tabBarIcon: ({ focused }) =>
// // //             focused ? (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   // source={IMG.activeFav}
// // //                   source={IMG.Active3}

// // //                   style={{
// // //                     height: 56,
// // //                     width: 56,
// // //                     bottom: 30
// // //                   }}
// // //                 />

// // //               </View>
// // //             ) : (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   source={IMG.deActiveFav}
// // //                   style={{
// // //                     height: 25,
// // //                     width: 25,
// // //                     // tintColor: isDarkMode ? 'white' : '#6B7280'
// // //                   }}
// // //                 />
// // //                 <CustomText
// // //                   style={{
// // //                     color: isDarkMode ? 'white' : '#6B7280',
// // //                     fontSize: 12,
// // //                     fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //                   }}>
// // //                   Favourite
// // //                 </CustomText>
// // //               </View>
// // //             ),
// // //         }}
// // //       /> */}

// // //       <Tab.Screen
// // //         name='Profile'
// // //         component={ProfilePage}
// // //         options={{
// // //           tabBarLabel: () => <></>,
// // //           tabBarIcon: ({ focused }) =>
// // //             focused ? (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   // source={IMG.activeProfile}
// // //                   source={IMG.Active4}

// // //                   style={{
// // //                     height: 45,
// // //                     width: 45,
// // //                     // bottom: 30
// // //                   }}
// // //                 />

// // //               </View>
// // //             ) : (
// // //               <View
// // //                 style={{
// // //                   alignItems: 'center',
// // //                   gap: 8,
// // //                 }}>
// // //                 <Image
// // //                   source={IMG.deActiveProfile}
// // //                   style={{
// // //                     height: 25,
// // //                     width: 25,
// // //                     tintColor: isDarkMode ? 'white' : '#6B7280'
// // //                   }}
// // //                 />
// // //                 <CustomText
// // //                   style={{
// // //                     color: isDarkMode ? 'white' : '#6B7280',
// // //                     fontSize: 12,
// // //                     fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //                   }}>
// // //                   More
// // //                 </CustomText>
// // //               </View>
// // //             ),
// // //         }}
// // //       />
// // //     </Tab.Navigator>
// // //   )
// // // }

// // // export default TabNavigation



// // import * as React from 'react'
// // import { useState, useEffect } from 'react'
// // import { Keyboard, Dimensions, View } from 'react-native'
// // import { NavigationContainer } from '@react-navigation/native'
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// // import CustomText from '../../components/TextComponent'
// // import color, { App_Primary_color, white } from '../../common/Colors/colors'
// // import { FONTS_FAMILY } from '../../assets/Fonts'
// // import Icon from 'react-native-vector-icons/Ionicons'

// // import { useSelector } from 'react-redux'
// // import HomeScreen from '../../screens/Home/HomeDashBoard'
// // import TripsScreen from '../../screens/Trips/Trips'
// // import RatesScreen from '../../screens/Rates/Rates'
// // import ProfileScreen from '../../screens/Profile/Profile'
// // import ChatScreen from '../../screens/Chat/Chat'
// // import TruckListingScreen from '../../screens/Booking/TruckListingScreen'

// // const Tab = createBottomTabNavigator()

// // function TabNavigation() {
// //   const [keyboardVisible, setKeyboardVisible] = useState(false)
// //   const { isDarkMode } = useSelector(state => state.theme)

// //   useEffect(() => {
// //     const keyboardDidShowListener = Keyboard.addListener(
// //       'keyboardDidShow',
// //       () => {
// //         setKeyboardVisible(true)
// //       },
// //     )
// //     const keyboardDidHideListener = Keyboard.addListener(
// //       'keyboardDidHide',
// //       () => {
// //         setKeyboardVisible(false)
// //       },
// //     )

// //     return () => {
// //       keyboardDidShowListener.remove()
// //       keyboardDidHideListener.remove()
// //     }
// //   }, [])

// //   return (
// //     <Tab.Navigator
// //       initialRouteName='Home'
// //       screenOptions={{
// //         headerShown: false,
// //         tabBarStyle: {
// //           position: 'absolute',
// //           // bottom: verticalScale(10),
// //           borderRadius: moderateScale(30),
// //           height: verticalScale(68),
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           // elevation: 20,
// //           // shadowColor: '#000',
// //           // paddingHorizontal: 10,
// //           backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //           borderWidth: 1,
// //           borderColor: App_Primary_color,
// //           display: keyboardVisible ? 'none' : 'flex',
// //           justifyContent: 'center',
// //           marginHorizontal: 10,
// //           bottom: 10

// //         },
// //       }}>
// //       <Tab.Screen
// //         name='Home'
// //         component={HomeScreen}
// //         options={{
// //           tabBarLabel: () => <></>,
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   // gap: 8,
// //                   top: 20,
// //                   width: 45,
// //                 }}
// //               >

// //                 <View
// //                   style={{
// //                     alignItems: 'center',
// //                     backgroundColor: App_Primary_color,
// //                     justifyContent: 'center',
// //                     height: 33,
// //                     width: 33,
// //                     borderRadius: 28,
// //                   }}>
// //                   <Icon
// //                     name="home"
// //                     size={20}
// //                     color={white}
// //                   />

// //                 </View>
// //                 <CustomText
// //                   style={{
// //                     color: App_Primary_color,
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Home
// //                 </CustomText>
// //               </View>

// //             ) : (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   gap: 8,
// //                   top: 20,
// //                   width: 100
// //                 }}
// //               >
// //                 <Icon
// //                   name="home-outline"
// //                   size={20}
// //                   color={isDarkMode ? 'white' : '#6B7280'}
// //                 />
// //                 <CustomText
// //                   style={{
// //                     color: isDarkMode ? 'white' : '#6B7280',
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Home
// //                 </CustomText>
// //               </View>
// //             ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name='Trips'
// //         component={TripsScreen}
// //         options={{
// //           tabBarLabel: () => <></>,
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   // gap: 8,
// //                   top: 20,
// //                   width: 45,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     alignItems: 'center',
// //                     backgroundColor: App_Primary_color,
// //                     justifyContent: 'center',
// //                     height: 33,
// //                     width: 33,
// //                     borderRadius: 28,
// //                     // top: 20
// //                   }}>
// //                   <Icon
// //                     name="car"
// //                     size={25}
// //                     color={white}
// //                   />
// //                 </View>
// //                 <CustomText
// //                   style={{
// //                     color: App_Primary_color,
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Trips
// //                 </CustomText>
// //               </View>
// //             ) : (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   gap: 8,
// //                   top: 20,
// //                   width: 100
// //                 }}>
// //                 <Icon
// //                   name="car-outline"
// //                   size={20}
// //                   color={isDarkMode ? white : '#6B7280'}
// //                 />
// //                 <CustomText
// //                   style={{
// //                     color: isDarkMode ? 'white' : '#6B7280',
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Trips
// //                 </CustomText>
// //               </View>
// //             ),
// //         }}
// //       />

// //       <Tab.Screen
// //         name='Book'
// //         component={TruckListingScreen}
// //         options={{
// //           tabBarLabel: () => <></>,
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   // gap: 8,
// //                   // top: 20,
// //                   width: 45,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     alignItems: 'center',
// //                     backgroundColor: App_Primary_color,
// //                     justifyContent: 'center',
// //                     height: 33,
// //                     width: 33,
// //                     borderRadius: 28,
// //                     // top: 20,
// //                   }}>
// //                   <Icon
// //                     name="pricetag"
// //                     size={22}
// //                     color={white}
// //                   />
// //                 </View>
// //                 <CustomText
// //                   style={{
// //                     color: App_Primary_color,
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Book
// //                 </CustomText>
// //               </View>
// //             ) : (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   gap: 8,
// //                   top: 20,
// //                   width: 100
// //                 }}>
// //                 <Icon
// //                   name="pricetag-outline"
// //                   size={20}
// //                   color={isDarkMode ? white : '#6B7280'}
// //                 />
// //                 <CustomText
// //                   style={{
// //                     color: isDarkMode ? 'white' : '#6B7280',
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Book
// //                 </CustomText>
// //               </View>
// //             ),
// //         }}
// //       />


// //       <Tab.Screen
// //         name='chat'
// //         component={ChatScreen}
// //         options={{
// //           tabBarLabel: () => <></>,
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   // gap: 8,
// //                   top: 20,
// //                   width: 45,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     alignItems: 'center',
// //                     backgroundColor: App_Primary_color,
// //                     justifyContent: 'center',
// //                     height: 33,
// //                     width: 33,
// //                     borderRadius: 28,
// //                     // top: 20,
// //                   }}>
// //                   <Icon
// //                     name="chatbubbles"
// //                     size={22}
// //                     color={white}
// //                   />
// //                 </View>
// //                 <CustomText
// //                   style={{
// //                     color: App_Primary_color,
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Chat
// //                 </CustomText>
// //               </View>
// //             ) : (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   gap: 8,
// //                   top: 20,
// //                   width: 100
// //                 }}>
// //                 <Icon
// //                   name="chatbubbles"
// //                   size={20}
// //                   color={isDarkMode ? white : '#6B7280'}
// //                 />
// //                 <CustomText
// //                   style={{
// //                     color: isDarkMode ? 'white' : '#6B7280',
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Chat
// //                 </CustomText>
// //               </View>
// //             ),
// //         }}
// //       />

// //       <Tab.Screen
// //         name='Profile'
// //         component={ProfileScreen}
// //         options={{
// //           tabBarLabel: () => <></>,
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   // gap: 8,
// //                   top: 20,
// //                   width: 45,
// //                 }}
// //               >
// //                 <View
// //                   style={{
// //                     alignItems: 'center',
// //                     backgroundColor: App_Primary_color,
// //                     justifyContent: 'center',
// //                     height: 33,
// //                     width: 33,
// //                     borderRadius: 28,
// //                     // top: 20,
// //                   }}>
// //                   <Icon
// //                     name="person"
// //                     size={22}
// //                     color={white}
// //                   />
// //                 </View>
// //                 <CustomText
// //                   style={{
// //                     color: App_Primary_color,
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Profile
// //                 </CustomText>
// //               </View>
// //             ) : (

// //               <View
// //                 style={{
// //                   alignItems: 'center',
// //                   gap: 8,
// //                   top: 20,
// //                   width: 100
// //                 }}>
// //                 <Icon
// //                   name="person"
// //                   size={22}
// //                   color={'#6B7280'}
// //                 />
// //                 {/* <Icon
// //                   name="person-outline"
// //                   size={23}
// //                   color={isDarkMode ? 'white' : '#6B7280'}
// //                 /> */}
// //                 <CustomText
// //                   style={{
// //                     color: isDarkMode ? 'white' : '#6B7280',
// //                     fontSize: 12,
// //                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //                   }}>
// //                   Profile
// //                 </CustomText>
// //               </View>
// //             ),
// //         }}
// //       />
// //     </Tab.Navigator>
// //   )
// // }

// // export default TabNavigation

// import * as React from 'react'
// import { useState, useEffect } from 'react'
// import { Keyboard, Dimensions, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// import CustomText from '../../components/TextComponent'
// import color, { App_Primary_color, white } from '../../common/Colors/colors'
// import { FONTS_FAMILY } from '../../assets/Fonts'
// import Icon from 'react-native-vector-icons/Ionicons'

// import Fontisto from 'react-native-vector-icons/Fontisto'


// import { useSelector } from 'react-redux'
// import HomeScreen from '../../screens/Home/HomeDashBoard'
// import TripsScreen from '../../screens/Trips/Trips'
// import RatesScreen from '../../screens/Rates/Rates'
// import ProfileScreen from '../../screens/Profile/Profile'
// import ChatScreen from '../../screens/Chat/Chat'
// import TruckListingScreen from '../../screens/Booking/TruckListingScreen'

// const Tab = createBottomTabNavigator()

// function TabNavigation() {
//   const [keyboardVisible, setKeyboardVisible] = useState(false)
//   const { isDarkMode } = useSelector(state => state.theme)

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         setKeyboardVisible(true)
//       },
//     )
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         setKeyboardVisible(false)
//       },
//     )

//     return () => {
//       keyboardDidShowListener.remove()
//       keyboardDidHideListener.remove()
//     }
//   }, [])

//   return (
//     <Tab.Navigator
//       initialRouteName='Home'
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           position: 'absolute',
//           borderRadius: moderateScale(30),
//           height: verticalScale(68),
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)',
//           borderWidth: 1,
//           borderColor: App_Primary_color,
//           display: keyboardVisible ? 'none' : 'flex',
//           justifyContent: 'center',
//           marginHorizontal: 10,
//           bottom: 10
//         },
//       }}>
//       <Tab.Screen
//         name='Home'
//         component={HomeScreen}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   top: 20,
//                   width: 45,
//                 }}
//               >
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: App_Primary_color,
//                     justifyContent: 'center',
//                     height: 33,
//                     width: 33,
//                     borderRadius: 28,
//                   }}>
//                   <Fontisto
//                     name="home"
//                     size={20}
//                     color={white}
//                   />
//                 </View>
//                 <CustomText
//                   style={{
//                     color: App_Primary_color,
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Home
//                 </CustomText>
//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                   top: 20,
//                   width: 100
//                 }}
//               >
//                 {/* <Icon
//                   name="home-outline"
//                   size={20}
//                   color={isDarkMode ? 'white' : '#6B7280'}
//                 /> */}
//                   <Fontisto
//                     name="home"
//                     size={20}
//                     color={isDarkMode ? 'white' : '#6B7280'}
//                   />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Home
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />
//       <Tab.Screen
//         name='Trips'
//         component={TripsScreen}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   top: 20,
//                   width: 45,
//                 }}
//               >
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: App_Primary_color,
//                     justifyContent: 'center',
//                     height: 33,
//                     width: 33,
//                     borderRadius: 28,
//                   }}>
//                   <Icon
//                     name="car"
//                     size={25}
//                     color={white}
//                   />
//                 </View>
//                 <CustomText
//                   style={{
//                     color: App_Primary_color,
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Trips
//                 </CustomText>
//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 5,
//                   top: 20,
//                   width: 100
//                 }}>
//                 <Icon
//                   name="car"
//                   size={22}
//                   color={isDarkMode ? white : '#6B7280'}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Trips
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />

//       <Tab.Screen
//         name='Book'
//         component={TruckListingScreen}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 bottom: 14,
//               }}>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   backgroundColor: App_Primary_color,
//                   justifyContent: 'center',
//                   height: 60,
//                   width: 60,
//                   borderRadius: 30,
//                   elevation: 8,
//                   shadowColor: '#000',
//                   shadowOffset: { width: 0, height: 4 },
//                   shadowOpacity: 0.3,
//                   shadowRadius: 5,
//                 }}>
//                   <View
//                   style={{
//                     backgroundColor:'white',
//                     borderRadius:30,
//                     padding:2,
//                   }}
//                   >

//                 <Icon
//                   name="add"
//                   size={28}
//                   color={App_Primary_color}
//                 />
//                   </View>
              
//               </View>
//                   {/* <CustomText
//                   style={{
//                     color: focused ? App_Primary_color : isDarkMode ? white : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Book
//                 </CustomText> */}
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name='chat'
//         component={ChatScreen}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   top: 20,
//                   width: 45,
//                 }}
//               >
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: App_Primary_color,
//                     justifyContent: 'center',
//                     height: 33,
//                     width: 33,
//                     borderRadius: 28,
//                   }}>
//                   <Icon
//                     name="chatbubbles"
//                     size={22}
//                     color={white}
//                   />
//                 </View>
//                 <CustomText
//                   style={{
//                     color: App_Primary_color,
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Chat
//                 </CustomText>
//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                   top: 20,
//                   width: 100
//                 }}>
//                 <Icon
//                   name="chatbubbles"
//                   size={20}
//                   color={isDarkMode ? white : '#6B7280'}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Chat
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />

//       <Tab.Screen
//         name='Profile'
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   top: 20,
//                   width: 45,
//                 }}
//               >
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: App_Primary_color,
//                     justifyContent: 'center',
//                     height: 33,
//                     width: 33,
//                     borderRadius: 28,
//                   }}>
//                   <Icon
//                     name="person"
//                     size={22}
//                     color={white}
//                   />
//                 </View>
//                 <CustomText
//                   style={{
//                     color: App_Primary_color,
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Profile
//                 </CustomText>
//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                   top: 20,
//                   width: 100
//                 }}>
//                 <Icon
//                   name="person"
//                   size={22}
//                   color={'#6B7280'}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                   }}>
//                   Profile
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default TabNavigation

// import * as React from 'react'
// import { useState, useEffect } from 'react'
// import { Keyboard, View } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { moderateScale, verticalScale } from 'react-native-size-matters'
// import CustomText from '../../components/TextComponent'
// import { App_Primary_color, white } from '../../common/Colors/colors'
// import { FONTS_FAMILY } from '../../assets/Fonts'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Fontisto from 'react-native-vector-icons/Fontisto'
// import { useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'

// import HomeScreen from '../../screens/Home/HomeDashBoard'
// import TripsScreen from '../../screens/Trips/Trips'
// import ProfileScreen from '../../screens/Profile/Profile'
// import ChatScreen from '../../screens/Chat/Chat'
// import TruckListingModal from '../../screens/Booking/TruckListingModel'

// const Tab = createBottomTabNavigator()

// // Dummy component for Book tab
// const EmptyComponent = () => null

// function TabNavigation() {
//   const [keyboardVisible, setKeyboardVisible] = useState(false)
//   const [isModalVisible, setIsModalVisible] = useState(false)
//   const { isDarkMode } = useSelector(state => state.theme)
//   const navigation = useNavigation()

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         setKeyboardVisible(true)
//       },
//     )
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         setKeyboardVisible(false)
//       },
//     )

//     return () => {
//       keyboardDidShowListener.remove()
//       keyboardDidHideListener.remove()
//     }
//   }, [])

//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName='Home'
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: {
//             position: 'absolute',
//             borderRadius: moderateScale(30),
//             height: verticalScale(68),
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'rgba(255, 255, 255, 0.9)',
//             borderWidth: 1,
//             borderColor: App_Primary_color,
//             display: keyboardVisible ? 'none' : 'flex',
//             marginHorizontal: 10,
//             bottom: 10
//           },
//         }}
//       >
//         <Tab.Screen
//           name='Home'
//           component={HomeScreen}
//           options={{
//             tabBarLabel: () => <></>,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     top: 20,
//                     width: 45,
//                   }}
//                 >
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       backgroundColor: App_Primary_color,
//                       justifyContent: 'center',
//                       height: 33,
//                       width: 33,
//                       borderRadius: 28,
//                     }}>
//                     <Fontisto
//                       name="home"
//                       size={20}
//                       color={white}
//                     />
//                   </View>
//                   <CustomText
//                     style={{
//                       color: App_Primary_color,
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,

//                     }}>
//                     Home
//                   </CustomText>
//                 </View>
//               ) : (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     gap: 11,
//                     top: 20,
//                     width: 100
//                   }}
//                 >
//                   <Fontisto
//                     name="home"
//                     size={20}
//                     color={isDarkMode ? 'white' : '#6B7280'}
//                   />
//                   <CustomText
//                     style={{
//                       color: isDarkMode ? 'white' : '#6B7280',
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Home
//                   </CustomText>
//                 </View>
//               ),
//           }}
//         />
//         <Tab.Screen
//           name='Trips'
//           component={TripsScreen}
//           options={{
//             tabBarLabel: () => <></>,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     top: 20,
//                     width: 45,
//                   }}
//                 >
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       backgroundColor: App_Primary_color,
//                       justifyContent: 'center',
//                       height: 33,
//                       width: 33,
//                       borderRadius: 28,
//                     }}>
//                     <Icon
//                       name="car"
//                       size={25}
//                       color={white}
//                     />
//                   </View>
//                   <CustomText
//                     style={{
//                       color: App_Primary_color,
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Trips
//                   </CustomText>
//                 </View>
//               ) : (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     gap: 5,
//                     top: 20,
//                     width: 100
//                   }}>
//                   <Icon
//                     name="car"
//                     size={22}
//                     color={isDarkMode ? white : '#6B7280'}
//                   />
//                   <CustomText
//                     style={{
//                       color: isDarkMode ? 'white' : '#6B7280',
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Trips
//                   </CustomText>
//                 </View>
//               ),
//           }}
//         />

//         <Tab.Screen
//           name='Book'
//           component={EmptyComponent}
//           options={{
//             tabBarLabel: () => <></>,
//             tabBarIcon: ({ focused }) => (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   bottom: 14,
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     backgroundColor: App_Primary_color,
//                     justifyContent: 'center',
//                     height: 60,
//                     width: 60,
//                     borderRadius: 30,
//                     elevation: 8,
//                     shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 4 },
//                     shadowOpacity: 0.3,
//                     shadowRadius: 5,
//                   }}>
//                   <View
//                     style={{
//                       backgroundColor: 'white',
//                       borderRadius: 30,
//                       padding: 2,
//                     }}
//                   >
//                     <Icon
//                       name="add"
//                       size={28}
//                       color={App_Primary_color}
//                     />
//                   </View>
//                 </View>
//               </View>
//             ),
//           }}
//           listeners={{
//             tabPress: (e) => {
//               e.preventDefault()
//               setIsModalVisible(true)
//             },
//           }}
//         />

//         <Tab.Screen
//           name='chat'
//           component={ChatScreen}
//           options={{
//             tabBarLabel: () => <></>,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     top: 20,
//                     width: 45,
//                   }}
//                 >
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       backgroundColor: App_Primary_color,
//                       justifyContent: 'center',
//                       height: 33,
//                       width: 33,
//                       borderRadius: 28,
//                     }}>
//                     <Icon
//                       name="chatbubbles"
//                       size={22}
//                       color={white}
//                     />
//                   </View>
//                   <CustomText
//                     style={{
//                       color: App_Primary_color,
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Chat
//                   </CustomText>
//                 </View>
//               ) : (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     gap: 11,
//                     top: 20,
//                     width: 100
//                   }}>
//                   <Icon
//                     name="chatbubbles"
//                     size={20}
//                     color={isDarkMode ? white : '#6B7280'}
//                   />
//                   <CustomText
//                     style={{
//                       color: isDarkMode ? 'white' : '#6B7280',
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Chat
//                   </CustomText>
//                 </View>
//               ),
//           }}
//         />

//         <Tab.Screen
//           name='Profile'
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: () => <></>,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     top: 20,
//                     width: 45,
//                   }}
//                 >
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       backgroundColor: App_Primary_color,
//                       justifyContent: 'center',
//                       height: 32,
//                       width: 32,
//                       borderRadius: 28,
//                     }}>
//                     <Icon
//                       name="person"
//                       size={20}
//                       color={white}
//                     />
//                   </View>
//                   <CustomText
//                     style={{
//                       color: App_Primary_color,
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Profile
//                   </CustomText>
//                 </View>
//               ) : (
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     gap: 9,
//                     top: 20,
//                     width: 100
//                   }}>
//                   <Icon
//                     name="person"
//                     size={22}
//                     color={'#6B7280'}
//                   />
//                   <CustomText
//                     style={{
//                       color: isDarkMode ? 'white' : '#6B7280',
//                       fontSize: 12,
//                       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//                     }}>
//                     Profile
//                   </CustomText>
//                 </View>
//               ),
//           }}
//         />
//       </Tab.Navigator>

//       {/* Truck Listing Modal */}
//       <TruckListingModal
//         visible={isModalVisible}
//         onClose={() => setIsModalVisible(false)}
//         navigation={navigation}
//       />
//     </>
//   )
// }

// export default TabNavigation



import * as React from 'react'
import { useState, useEffect } from 'react'
import { Keyboard, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../components/TextComponent'
import { App_Primary_color, white } from '../../common/Colors/colors'
import { FONTS_FAMILY } from '../../assets/Fonts'
import Icon from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import HomeScreen from '../../screens/Home/HomeDashBoard'
import TripsScreen from '../../screens/Trips/Trips'
import ProfileScreen from '../../screens/Profile/Profile'
import ChatScreen from '../../screens/Chat/Chat'
import TruckListingModal from '../../screens/Booking/TruckListingModel'

const Tab = createBottomTabNavigator()

// Dummy component for Book tab
const EmptyComponent = () => null

// Custom Tab Bar Background Component
const TabBarBackground = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={['#2d4ea1ff', '#1a3d8f', '#2f4479ff']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      >
        {/* Decorative Blobs */}
        <View style={styles.blob1} />
        <View style={styles.blob2} />
      </LinearGradient>
    </View>
  )
}

function TabNavigation() {
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { isDarkMode } = useSelector(state => state.theme)
  const navigation = useNavigation()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      },
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return (
    <>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            borderRadius: moderateScale(50),
            height: verticalScale(55),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            display: keyboardVisible ? 'none' : 'flex',
            marginHorizontal: 10,
            bottom: 10,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          },
          tabBarBackground: () => <TabBarBackground />,
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: () => <></>,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={styles.focusedContainer}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.15)']}
                    style={styles.focusedIconWrapper}
                  >
                    <Fontisto
                      name="home"
                      size={20}
                      color={white}
                    />
                  </LinearGradient>
                  {/* <CustomText style={styles.focusedLabel}>
                    Home
                  </CustomText> */}
                </View>
              ) : (
                <View style={styles.unfocusedContainer}>
                  <Fontisto
                    name="home"
                    size={20}
                    color={'rgba(255, 255, 255, 0.6)'}
                  />
                  {/* <CustomText style={styles.unfocusedLabel}>
                    Home
                  </CustomText> */}
                </View>
              ),
          }}
        />
        <Tab.Screen
          name='Trips'
          component={TripsScreen}
          options={{
            tabBarLabel: () => <></>,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={styles.focusedContainer}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.15)']}
                    style={styles.focusedIconWrapper}
                  >
                    <Icon
                      name="car"
                      size={25}
                      color={white}
                    />
                  </LinearGradient>
                  {/* <CustomText style={styles.focusedLabel}>
                    Trips
                  </CustomText> */}
                </View>
              ) : (
                <View style={styles.unfocusedContainer}>
                  <Icon
                    name="car"
                    size={22}
                    color={'rgba(255, 255, 255, 0.6)'}
                  />
                  {/* <CustomText style={styles.unfocusedLabel}>
                    Trips
                  </CustomText> */}
                </View>
              ),
          }}
        />

        <Tab.Screen
          name='Book'
          component={EmptyComponent}
          options={{
            tabBarLabel: () => <></>,
            tabBarIcon: ({ focused }) => (
              <View style={styles.centerButtonContainer}>
                <LinearGradient
                  colors={[App_Primary_color, App_Primary_color, App_Primary_color]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.centerButton}
                >
                  <View style={styles.centerButtonInner}>
                    <Icon
                      name="add"
                      size={28}
                      color={App_Primary_color}
                    />
                  </View>
                </LinearGradient>
              </View>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              // alert (0)
              e.preventDefault()
              setIsModalVisible(true)
            },
          }}
        />

        <Tab.Screen
          name='chat'
          component={ChatScreen}
          options={{
            tabBarLabel: () => <></>,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={styles.focusedContainer}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.15)']}
                    style={styles.focusedIconWrapper}
                  >
                    <Icon
                      name="chatbubbles"
                      size={22}
                      color={white}
                    />
                  </LinearGradient>
                  {/* <CustomText style={styles.focusedLabel}>
                    Chat
                  </CustomText> */}
                </View>
              ) : (
                <View style={styles.unfocusedContainer}>
                  <Icon
                    name="chatbubbles"
                    size={20}
                    color={'rgba(255, 255, 255, 0.6)'}
                  />
                  {/* <CustomText style={styles.unfocusedLabel}>
                    Chat
                  </CustomText> */}
                </View>
              ),
          }}
        />

        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: () => <></>,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={styles.focusedContainer}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.15)']}
                    style={styles.focusedIconWrapper}
                  >
                    <Icon
                      name="person"
                      size={20}
                      color={white}
                    />
                  </LinearGradient>
                  {/* <CustomText style={styles.focusedLabel}>
                    Profile
                  </CustomText> */}
                </View>
              ) : (
                <View style={styles.unfocusedContainer}>
                  <Icon
                    name="person"
                    size={22}
                    color={'rgba(255, 255, 255, 0.6)'}
                  />
                  {/* <CustomText style={styles.unfocusedLabel}>
                    Profile
                  </CustomText> */}
                </View>
              ),
          }}
        />
      </Tab.Navigator>

      {/* Truck Listing Modal */}
      <TruckListingModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        navigation={navigation}
      />
    </>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: moderateScale(30),
    overflow: 'hidden',
  },
  blob1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 107, 157, 0.1)',
    top: -30,
    right: 50,
    opacity: 0.6,
  },
  blob2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    bottom: -20,
    left: 30,
    opacity: 0.6,
  },
  focusedContainer: {
    alignItems: 'center',
    top: 10,
    width: 45,
  },
  focusedIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
    width: 33,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  focusedLabel: {
    color: white,
    fontSize: 12,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginTop: 4,
  },
  unfocusedContainer: {
    alignItems: 'center',
    gap: 8,
    top: 10,
    width: 100,
  },
  unfocusedLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  centerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  centerButtonInner: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 2,
  },
})