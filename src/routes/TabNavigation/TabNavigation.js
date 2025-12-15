// import * as React from 'react'
// import { useState, useEffect } from 'react'
// import { Keyboard, Dimensions, View, Image } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// import CustomText from '../../components/TextComponent'
// import color, { App_Primary_color, white } from '../../common/Colors/colors'
// import { FONTS_FAMILY } from '../../assets/Fonts'
// import IMG from '../../assets/Images'

// import { useSelector } from 'react-redux'
// import HomeScreen from '../../screens/Home/Home'
// import Category from '../../screens/Category/Category'
// import Favourite from '../../screens/Favourites/Favourites'
// import ProfilePage from '../../screens/Profile/Profile'
// import MyOrdersPage from '../../screens/Orders/Orders'

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
//           bottom: verticalScale(10),
//           borderRadius: moderateScale(40),
//           height: verticalScale(68),
//           justifyContent: 'center',
//           alignItems: 'center',
//           elevation: 20,
//           shadowColor: '#000',
//           paddingHorizontal: 10,
//           // backgroundColor: isDarkMode ? '#444' : 'white',
//           backgroundColor: 'rgba(255, 255, 255, 0.4)',
//           borderWidth: 1,
//           borderColor: App_Primary_color,
//           display: keyboardVisible ? 'none' : 'flex',
//           marginHorizontal: 10,
//           // overflow: 'visible'

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
//                   gap: 8,
//                 }}>
//                 <Image
//                   // source={IMG.activeHome}
//                   source={IMG.Active1}

//                   style={{
//                     height: 45,
//                     width: 45,
//                     // bottom: 30,
//                     // tintColor: App_Primary_color,
//                     // tintColor: App_Primary_color,


//                   }}
//                 />

//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}
//               >
//                 <Image
//                   source={IMG.deActiveHome}
//                   style={{
//                     height: 20,
//                     width: 20,
//                     tintColor: isDarkMode ? 'white' : '#6B7280',
//                   }}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   }}>
//                   Home
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />
//       <Tab.Screen
//         name='Fav'
//         component={Category}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   // source={IMG.activeCategroy}
//                   source={IMG.Active2}

//                   style={{
//                     height: 45,
//                     width: 45,
//                     // bottom: 30,
//                   }}
//                 />

//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   source={IMG.deActiveCategory}
//                   style={{
//                     height: 20,
//                     width: 20,
//                     tintColor:isDarkMode? white: '#6B7280',
//                   }}
//                 />

//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   }}>
//                   Categroy
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />

//       <Tab.Screen
//         name='My Order'
//         component={MyOrdersPage}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   // gap: 8,
//                   backgroundColor: App_Primary_color,
//                   justifyContent: 'center',
//                   // bottom: 30,
//                   height: 45,
//                   width: 45,
//                   borderRadius: 28,
//                 }}>
//                 <Image
//                   source={IMG.myOrder}
//                   // source={IMG.Active3}

//                   style={{
//                     height: 25,
//                     width: 25,
//                     // bottom:30,
//                     tintColor: white,
//                   }}
//                 />

//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   source={IMG.myOrder}
//                   style={{
//                     height: 20,
//                     width: 20,
//                     tintColor:isDarkMode? white: '#6B7280',
//                   }}
//                 />

//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   }}>
//                   My Order's
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />
//       {/* <Tab.Screen
//         name='Message'
//         component={Favourite}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   // source={IMG.activeFav}
//                   source={IMG.Active3}

//                   style={{
//                     height: 56,
//                     width: 56,
//                     bottom: 30
//                   }}
//                 />

//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   source={IMG.deActiveFav}
//                   style={{
//                     height: 25,
//                     width: 25,
//                     // tintColor: isDarkMode ? 'white' : '#6B7280'
//                   }}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   }}>
//                   Favourite
//                 </CustomText>
//               </View>
//             ),
//         }}
//       /> */}

//       <Tab.Screen
//         name='Profile'
//         component={ProfilePage}
//         options={{
//           tabBarLabel: () => <></>,
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   // source={IMG.activeProfile}
//                   source={IMG.Active4}

//                   style={{
//                     height: 45,
//                     width: 45,
//                     // bottom: 30
//                   }}
//                 />

//               </View>
//             ) : (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   gap: 8,
//                 }}>
//                 <Image
//                   source={IMG.deActiveProfile}
//                   style={{
//                     height: 25,
//                     width: 25,
//                     tintColor: isDarkMode ? 'white' : '#6B7280'
//                   }}
//                 />
//                 <CustomText
//                   style={{
//                     color: isDarkMode ? 'white' : '#6B7280',
//                     fontSize: 12,
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   }}>
//                   More
//                 </CustomText>
//               </View>
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default TabNavigation



import * as React from 'react'
import { useState, useEffect } from 'react'
import { Keyboard, Dimensions, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../components/TextComponent'
import color, { App_Primary_color, white } from '../../common/Colors/colors'
import { FONTS_FAMILY } from '../../assets/Fonts'
import Icon from 'react-native-vector-icons/Ionicons'

import { useSelector } from 'react-redux'
import HomeScreen from '../../screens/Home/HomeDashBoard'
import TripsScreen from '../../screens/Trips/Trips'
import RatesScreen from '../../screens/Rates/Rates'
import ProfileScreen from '../../screens/Profile/Profile'
import ChatScreen from '../../screens/Chat/Chat'

const Tab = createBottomTabNavigator()

function TabNavigation() {
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const { isDarkMode } = useSelector(state => state.theme)

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
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: verticalScale(10),
          borderRadius: moderateScale(20),
          height: verticalScale(68),
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 20,
          shadowColor: '#000',
          // paddingHorizontal: 10,
          backgroundColor: 'white',
          // borderWidth: 1,
          // borderColor: App_Primary_color,
          display: keyboardVisible ? 'none' : 'flex',
          justifyContent: 'center'
          // marginHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
              style={{
                  alignItems: 'center',
                  // gap: 8,
                  top: 20,
                   width: 45,
                }}
              >

              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: App_Primary_color,
                  justifyContent: 'center',
                  height: 42,
                  width: 42,
                  borderRadius: 28,
                }}>
                <Icon
                  name="home"
                  size={25}
                  color={white}
                />
              
              </View>
                  <CustomText
                  style={{
                    color: App_Primary_color,
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Home
                </CustomText>
              </View>

            ) : (
              <View
                style={{
                  alignItems: 'center',
                  gap: 8,
                  top: 20,
                  width: 100
                }}
              >
                <Icon
                  name="home-outline"
                  size={20}
                  color={isDarkMode ? 'white' : '#6B7280'}
                />
                <CustomText
                  style={{
                    color: isDarkMode ? 'white' : '#6B7280',
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Home
                </CustomText>
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
                <View
              style={{
                  alignItems: 'center',
                  // gap: 8,
                  top: 20,
                   width: 45,
                }}
              >
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: App_Primary_color,
                  justifyContent: 'center',
                  height: 42,
                  width: 42,
                  borderRadius: 28,
                  // top: 20
                }}>
                <Icon
                  name="car"
                  size={25}
                  color={white}
                />
              </View>
               <CustomText
                  style={{
                    color: App_Primary_color,
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Trips
                </CustomText>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  gap: 8,
                  top: 20,
                  width: 100
                }}>
                <Icon
                  name="car-outline"
                  size={20}
                  color={isDarkMode ? white : '#6B7280'}
                />
                <CustomText
                  style={{
                    color: isDarkMode ? 'white' : '#6B7280',
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Trips
                </CustomText>
              </View>
            ),
        }}
      />

      <Tab.Screen
        name='Rates'
        component={RatesScreen}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({ focused }) =>
            focused ? (
                 <View
              style={{
                  alignItems: 'center',
                  // gap: 8,
                  top: 20,
                   width: 45,
                }}
              >
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: App_Primary_color,
                  justifyContent: 'center',
                  height: 42,
                  width: 42,
                  borderRadius: 28,
                  // top: 20,
                }}>
                <Icon
                  name="pricetag"
                  size={25}
                  color={white}
                />
              </View>
                <CustomText
                  style={{
                    color: App_Primary_color,
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Rates
                </CustomText>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  gap: 8,
                  top: 20,
                  width: 100
                }}>
                <Icon
                  name="pricetag-outline"
                  size={20}
                  color={isDarkMode ? white : '#6B7280'}
                />
                <CustomText
                  style={{
                    color: isDarkMode ? 'white' : '#6B7280',
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Rates
                </CustomText>
              </View>
            ),
        }}
      />


      <Tab.Screen
        name='chat'
        component={ChatScreen}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({ focused }) =>
            focused ? (
                 <View
              style={{
                  alignItems: 'center',
                  // gap: 8,
                  top: 20,
                   width: 45,
                }}
              >
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: App_Primary_color,
                  justifyContent: 'center',
                  height: 42,
                  width: 42,
                  borderRadius: 28,
                  // top: 20,
                }}>
                <Icon
                  name="chatbubbles"
                  size={25}
                  color={white}
                />
              </View>
               <CustomText
                  style={{
                    color: App_Primary_color,
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Chat
                </CustomText>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  gap: 8,
                  top: 20,
                  width: 100
                }}>
                <Icon
                  name="chatbubbles"
                  size={20}
                  color={isDarkMode ? white : '#6B7280'}
                />
                <CustomText
                  style={{
                    color: isDarkMode ? 'white' : '#6B7280',
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Chat
                </CustomText>
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
                 <View
              style={{
                  alignItems: 'center',
                  // gap: 8,
                  top: 20,
                   width: 45,
                }}
              >
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: App_Primary_color,
                  justifyContent: 'center',
                  height: 38,
                  width: 38,
                  borderRadius: 28,
                  // top: 20,
                }}>
                <Icon
                  name="person"
                  size={23}
                  color={white}
                />
              </View>
                <CustomText
                  style={{
                    color:App_Primary_color,
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Profile
                </CustomText>
              </View>
            ) : (
              
              <View
                style={{
                  alignItems: 'center',
                  gap: 8,
                  top: 20,
                  width: 100
                }}>
                <Icon
                  name="person-outline"
                  size={23}
                  color={isDarkMode ? 'white' : '#6B7280'}
                />
                <CustomText
                  style={{
                    color: isDarkMode ? 'white' : '#6B7280',
                    fontSize: 12,
                    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
                  }}>
                  Profile
                </CustomText>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation