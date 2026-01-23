


import * as React from 'react'
import { useState, useEffect } from 'react'
import { Keyboard, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../components/TextComponent'
import { App_Primary_color, white } from '../../common/Colors/colors'
import { FONTS_FAMILY } from '../../assets/Fonts'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import HomeScreen from '../../screens/Home/HomeDashBoard'
import ProfileScreen from '../../screens/Profile/Profile'
import TruckListingModal from '../../screens/Booking/TruckListingModel'
import OffersScreen from '../../screens/Offers/Offers'

import IntroducingHome from '../../screens/IntroDucing/IntroducingHome'


const Tab = createBottomTabNavigator()

// Dummy component for other tabs
const EmptyComponent = () => null

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
            height: 80,
            backgroundColor: white,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
            display: keyboardVisible ? 'none' : 'flex',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: { App_Primary_color },
          tabBarInactiveTintColor: '#95A5A6',
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            marginTop: -5,
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                size={24}
                color={App_Primary_color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: FONTS_FAMILY.Poppins_Medium,
              // marginTop: -5,
              
              letterSpacing: 0.3, // ye add karo
            },
          }}
        />

        <Tab.Screen
          name='Offer'
          component={OffersScreen}
          options={{
            tabBarLabel: 'Offer',
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "pricetag" : "pricetag-outline"}
                size={24}
                   color={focused ? App_Primary_color : '#95A5A6'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: FONTS_FAMILY.Poppins_Medium,
              // marginTop: -5,
              
              letterSpacing: 0.3, // ye add karo
            },
          }}
        />

        <Tab.Screen
          name='MyBusiness'
          component={IntroducingHome}
          options={{
            tabBarLabel: 'My Business',
            tabBarIcon: ({ focused }) => (
              <View style={styles.centerButtonContainer}>
                <View style={styles.centerButton}>
                  <Icon
                    name="briefcase"
                    size={28}
                       color={focused ? App_Primary_color : '#95A5A6'}
                  />
                </View>
              </View>
            ),
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: FONTS_FAMILY.Poppins_Medium,
              // marginTop: -5,
              
              
            },
          }}
          // listeners={{
          //   tabPress: (e) => {
          //     e.preventDefault()
          //     setIsModalVisible(true)
          //   },
          // }}
        />

        <Tab.Screen
          name='History'
          component={EmptyComponent}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "time" : "time-outline"}
                size={24}
                   color={focused ? App_Primary_color : '#95A5A6'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: FONTS_FAMILY.Poppins_Medium,
              // marginTop: -5,
              
              
            },
          }}
        />

        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "person" : "person-outline"}
                size={24}
                   color={focused ? App_Primary_color : '#95A5A6'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: FONTS_FAMILY.Poppins_Medium,
              // marginTop: -5,
              
            },
          }}
        />
      </Tab.Navigator>

      {/* Truck Listing Modal */}
      {/* <TruckListingModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        navigation={navigation}
      /> */}
    </>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  centerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: white,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 0,
    bottom: 8
  },
})