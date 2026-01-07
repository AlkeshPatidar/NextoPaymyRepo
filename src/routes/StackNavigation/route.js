import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';

import Splash1 from '../../screens/Splash/Splash1';
import Login from '../../screens/Auth/Login';

import OtpScreen from '../../screens/Auth/OtpScreen';

import SplashScreen from '../../screens/Splash/SplashScreen';

import LocationPermissionScreen from '../../screens/Auth/LocationPermission';

import Signup from '../../screens/Auth/Signup';
import LanguageSelection from '../../screens/Auth/LanguageSelection';
import HomeScreen from '../../screens/Home/HomeDashBoard'
import BookingDetailScreen from '../../screens/Home/BookingDetail'
import TruckListingScreen from '../../screens/Booking/TruckListingScreen'

import CreateBookingScreen from '../../screens/Booking/CreateBooking'
import NotificationCenter from '../../screens/Notification/Notification'
import TabNavigation from '../TabNavigation/TabNavigation'
import { FAQsScreen, CallSupportScreen, SubmitComplaintScreen } from '../../screens/HelpCenter/Faq'
// TermsAndConditionsScreen

import TermsAndConditionsScreen from '../../screens/HelpCenter/Terms&condition'
import PrivacyPolicyScreen from '../../screens/HelpCenter/PrivacyPolicy'
import TripDetailScreen from '../../screens/Trips/TripDetail'
import TrackingScreen from '../../screens/Trips/TripTrackingScreen'
import PaymentScreen from '../../screens/Trips/PaymentScreen'

import WebViewScreen from '../../screens/Profile/WebView'
import AccountDetailsScreen from '../../screens/Profile/AccountDetail'

import RatesScreen from '../../screens/Rates/Rates'











const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000' },
          animation: 'slide_from_right'
        }}
        initialRouteName="SplashScreen">
          
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'LanguageSelection'} component={LanguageSelection} />

        
        <Stack.Screen name={'Onboarding'} component={Splash1} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'Otpscreen'} component={OtpScreen} />
        <Stack.Screen name={'LocationPermissionScreen'} component={LocationPermissionScreen} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'CreateBookingScreen'} component={CreateBookingScreen}
         options={{
            animation: 'slide_from_bottom',
             presentation: 'transparentModal',
          }}
        />
        <Stack.Screen name={'NotificationCenter'} component={NotificationCenter} />

        <Stack.Screen name={'FAQsScreen'} component={FAQsScreen} />
        <Stack.Screen name={'CallSupportScreen'} component={CallSupportScreen} />
        <Stack.Screen name={'SubmitComplaintScreen'} component={SubmitComplaintScreen} />
        <Stack.Screen name={'TermsAndConditionsScreen'} component={TermsAndConditionsScreen} />
        <Stack.Screen name={'PrivacyPolicyScreen'} component={PrivacyPolicyScreen} />
        <Stack.Screen name={'Tab'} component={TabNavigation} />
        <Stack.Screen name={'BookingDetailScreen'} component={BookingDetailScreen} />
        <Stack.Screen name={'TripDetailScreen'} component={TripDetailScreen} />
        <Stack.Screen name={'TrackingScreen'} component={TrackingScreen} />
        <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} />

        <Stack.Screen name={'TruckListingScreen'} component={TruckListingScreen} />

        <Stack.Screen name={'WebViewScreen'} component={WebViewScreen} />
        <Stack.Screen name={'AccountDetailsScreen'} component={AccountDetailsScreen} />
        <Stack.Screen name={'RatesScreen'} component={RatesScreen} />








        




        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
