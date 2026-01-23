import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

// import Splash1 from '../../screens/Splash/Splash1';
// import Login from '../../screens/Auth/Login';

// import OtpScreen from '../../screens/Auth/OtpScreen';

// import SplashScreen from '../../screens/Splash/SplashScreen';

// import LocationPermissionScreen from '../../screens/Auth/LocationPermission';

// import Signup from '../../screens/Auth/Signup';
// import LanguageSelection from '../../screens/Auth/LanguageSelection';
// import TruckListingScreen from '../../screens/Booking/TruckListingScreen'

// import CreateBookingScreen from '../../screens/Booking/CreateBooking'
// import NotificationCenter from '../../screens/Notification/Notification'
// import { FAQsScreen, CallSupportScreen, SubmitComplaintScreen } from '../../screens/HelpCenter/Faq'
// // TermsAndConditionsScreen

// import TermsAndConditionsScreen from '../../screens/HelpCenter/Terms&condition'
// import PrivacyPolicyScreen from '../../screens/HelpCenter/PrivacyPolicy'
// import TripDetailScreen from '../../screens/Trips/TripDetail'
// import TrackingScreen from '../../screens/Trips/TripTrackingScreen'
// import PaymentScreen from '../../screens/Trips/PaymentScreen'

// import WebViewScreen from '../../screens/Profile/WebView'
// import AccountDetailsScreen from '../../screens/Profile/AccountDetail'

// import RatesScreen from '../../screens/Rates/Rates'

// import TrackingHubScreen from '../../screens/OuterTracking/OuterTracking'


import HomeScreen from '../../screens/Home/HomeDashBoard'
import RechargePaymentsScreen from '../../screens/Home/SeeAll/SeeAll'
import ProfileScreen from '../../screens/Profile/Profile'
import MyQRScreen from '../../screens/Profile/MyQR'
import PoliciesScreen from '../../screens/Profile/Policies'
import Notification from '../../screens/Notification/Notification'
import EditProfileScreen from '../../screens/Profile/EditProfile'
import TabNavigation from '../TabNavigation/TabNavigation'
import OffersScreen from '../../screens/Offers/Offers'
import OfferDetailScreen from '../../screens/Offers/Offerdetail'
import RechargeScreen from '../../screens/Home/SeeAll/Recharge/Recharge'
import SelectRechargePlanScreen from '../../screens/Home/SeeAll/Recharge/SelectRechargePlan'
import SelectProviderScreen from '../../screens/Home/SeeAll/DTH/SelectProvider'
import DTHRechargeScreen from '../../screens/Home/SeeAll/DTH/DTHrechargeScreen'
import PayDTHBillScreen from '../../screens/Home/SeeAll/DTH/PaymentBillscreen'
import ElectricBiller from '../../screens/Home/SeeAll/Electricity/Biller'
import EnterBillDetail from '../../screens/Home/SeeAll/Electricity/EnterBillDetail'
import AllContacts from '../../screens/Home/SeeAll/PostPaid/AllContacts'
import PostpaidBillScreen from '../../screens/Home/SeeAll/PostPaid/PostpaidBillOperator'
import PayPostpaidBill from '../../screens/Home/SeeAll/PostPaid/PayPostpaidBill'
import BroadbandProviderScreen from '../../screens/Home/SeeAll/BoradBand/BroadBanOperator'
import BroadbandEnterscreen from '../../screens/Home/SeeAll/BoradBand/BroadbandEnterscreen'
import BroadbandViewBill from '../../screens/Home/SeeAll/BoradBand/BroadbandViewBill'

import WaterEnterDetail from '../../screens/Home/SeeAll/Water/WaterEnterDetail'
import WaterBiller from '../../screens/Home/SeeAll/Water/WaterBiller'
import LandLineProvider from '../../screens/Home/SeeAll/LandLine/LandLineProvider'
import GasProvider from '../../screens/Home/SeeAll/GasCylinder/GasProvider'
import ViewGasBill from '../../screens/Home/SeeAll/GasCylinder/ViewGasBill'
import PipedGasProvider from '../../screens/Home/SeeAll/PipedGas/PipedGas'

import CableProvider from '../../screens/Home/SeeAll/CableTv/CableOperator'
import CableEnterscreen from '../../screens/Home/SeeAll/CableTv/EnterCabledetail'

import LoanProvider from '../../screens/Home/SeeAll/Loan/LoanProvider'
import EnterLoanDetail from '../../screens/Home/SeeAll/Loan/EnterLoanDetail'
import InsuranceProvider from '../../screens/Home/SeeAll/Insurance/InsuranceProvider'
import EnterInsuranceDetail from '../../screens/Home/SeeAll/Insurance/EnterInsuranceDetial'
import FastagProvider from '../../screens/Home/SeeAll/Fastag/FastagProvider'
import EnterVehicleDetail from '../../screens/Home/SeeAll/Fastag/EnterVehicleNumber'
import CreditCardBillPayment from '../../screens/Home/SeeAll/CreditCard/CreditCardBillPayment'
import HousingSocietyPayment from '../../screens/Home/SeeAll/Housingsociety/Housingsociety'

import SubscriptionProvider from '../../screens/Home/SeeAll/Subscription/Subscription'
import SubscriptionDetail from '../../screens/Home/SeeAll/Subscription/SubscriptionDetail'
import EnterSubscriptionDetail from '../../screens/Home/SeeAll/Subscription/EnterSubscriptionNumber'

import BrandsVouchersScreen from '../../screens/Home/SeeAll/BrandVoucher/BrandVoucher'

import BillNotificationsScreen from '../../screens/Notification/Notification';
import IntroducingMultiSteps from '../../screens/IntroDucing/IntroducingMultiSteps'




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
        initialRouteName="Tab">
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'RechargePaymentsScreen'} component={RechargePaymentsScreen} />
        <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <Stack.Screen name={'MyQRScreen'} component={MyQRScreen} />
        <Stack.Screen name={'PoliciesScreen'} component={PoliciesScreen} />
        <Stack.Screen name={'Notification'} component={Notification} />
        <Stack.Screen name={'EditProfileScreen'} component={EditProfileScreen} />
        <Stack.Screen name={'Tab'} component={TabNavigation} />
        <Stack.Screen name={'OffersScreen'} component={OffersScreen} />
        <Stack.Screen name={'OfferDetailScreen'} component={OfferDetailScreen} />
        <Stack.Screen name={'RechargeScreen'} component={RechargeScreen} />
        <Stack.Screen name={'SelectRechargePlanScreen'} component={SelectRechargePlanScreen} />

        <Stack.Screen name={'SelectProviderScreen'} component={SelectProviderScreen} />
        <Stack.Screen name={'DTHRechargeScreen'} component={DTHRechargeScreen} />
        <Stack.Screen name={'PayDTHBillScreen'} component={PayDTHBillScreen} />
        <Stack.Screen name={'ElectricBiller'} component={ElectricBiller} />
        <Stack.Screen name={'EnterBillDetail'} component={EnterBillDetail} />
        <Stack.Screen name={'AllContacts'} component={AllContacts} />
        <Stack.Screen name={'PostpaidBillScreen'} component={PostpaidBillScreen} />
        <Stack.Screen name={'PayPostpaidBill'} component={PayPostpaidBill} />
        <Stack.Screen name={'BroadbandProviderScreen'} component={BroadbandProviderScreen} />
        <Stack.Screen name={'BroadbandEnterscreen'} component={BroadbandEnterscreen} />
        <Stack.Screen name={'BroadbandViewBill'} component={BroadbandViewBill} />

        <Stack.Screen name={'WaterBiller'} component={WaterBiller} />
        <Stack.Screen name={'WaterEnterDetail'} component={WaterEnterDetail} />

        <Stack.Screen name={'LandLineProvider'} component={LandLineProvider} />
        <Stack.Screen name={'GasProvider'} component={GasProvider} />
        <Stack.Screen name={'ViewGasBill'} component={ViewGasBill} />
        <Stack.Screen name={'PipedGasProvider'} component={PipedGasProvider} />

        <Stack.Screen name={'CableEnterscreen'} component={CableEnterscreen} />
        <Stack.Screen name={'CableProvider'} component={CableProvider} />

        <Stack.Screen name={'LoanProvider'} component={LoanProvider} />
        <Stack.Screen name={'EnterLoanDetail'} component={EnterLoanDetail} />

        <Stack.Screen name={'InsuranceProvider'} component={InsuranceProvider} />
        <Stack.Screen name={'EnterInsuranceDetail'} component={EnterInsuranceDetail} />

        <Stack.Screen name={'FastagProvider'} component={FastagProvider} />
        <Stack.Screen name={'EnterVehicleDetail'} component={EnterVehicleDetail} />
        <Stack.Screen name={'CreditCardBillPayment'} component={CreditCardBillPayment} />
        <Stack.Screen name={'HousingSocietyPayment'} component={HousingSocietyPayment} />

        <Stack.Screen name={'SubscriptionProvider'} component={SubscriptionProvider} />
        <Stack.Screen name={'SubscriptionDetail'} component={SubscriptionDetail} />
        <Stack.Screen name={'EnterSubscriptionDetail'} component={EnterSubscriptionDetail} />
        <Stack.Screen name={'BrandsVouchersScreen'} component={BrandsVouchersScreen} />

        <Stack.Screen name={'BillNotificationsScreen'} component={BillNotificationsScreen} />
        <Stack.Screen name={'IntroducingMultiSteps'} component={IntroducingMultiSteps} />


        




        



        

































        {/* <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'LanguageSelection'} component={LanguageSelection} />
        <Stack.Screen name={'Onboarding'} component={Splash1} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'Otpscreen'} component={OtpScreen} />
        <Stack.Screen name={'LocationPermissionScreen'} component={LocationPermissionScreen} />
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
        <Stack.Screen name={'TripDetailScreen'} component={TripDetailScreen} />
        <Stack.Screen name={'TrackingScreen'} component={TrackingScreen} />
        <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} />

        <Stack.Screen name={'TruckListingScreen'} component={TruckListingScreen} />

        <Stack.Screen name={'WebViewScreen'} component={WebViewScreen} />
        <Stack.Screen name={'AccountDetailsScreen'} component={AccountDetailsScreen} />
        <Stack.Screen name={'RatesScreen'} component={RatesScreen} />
        <Stack.Screen name={'TrackingHubScreen'} component={TrackingHubScreen} /> */}
















      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
