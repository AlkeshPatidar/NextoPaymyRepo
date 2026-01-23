import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  white
} from '../../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import IMG from '../../../assets/Images';

const RechargePaymentsScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  const services = [
    { id: 1, name: 'Mobile', icon: 'phone-portrait-outline', type: 'ionicon', navigation:'RechargeScreen' },
    { id: 2, name: 'DTH', icon: 'disc-outline', type: 'ionicon', navigation:'SelectProviderScreen' },
    { id: 3, name: 'Electricity', icon: 'flash', type: 'ionicon', navigation:'ElectricBiller' },
    { id: 4, name: 'Postpaid', icon: 'receipt-outline', type: 'ionicon' , navigation:'AllContacts'},
    { id: 5, name: 'Broadband', icon: 'wifi', type: 'ionicon', navigation:'BroadbandProviderScreen' },
    { id: 6, name: 'Water', icon: 'water', type: 'ionicon', navigation:'WaterBiller' },
    { id: 7, name: 'landline', icon: 'call-outline', type: 'ionicon', navigation:'LandLineProvider' },
    { id: 8, name: 'Book A Cylinder', icon: 'flame-outline', type: 'ionicon', navigation:'GasProvider' },
    { id: 9, name: 'Gaspipe', icon: 'flame-circle-outline', type: 'ionicon', navigation:'PipedGasProvider' },
    { id: 10, name: 'Cable Tv', icon: 'tv-outline', type: 'ionicon', navigation:'CableProvider' },
    { id: 12, name: 'Loan Repayment', icon: 'cash-outline', type: 'ionicon', navigation:'LoanProvider' },
    { id: 17, name: 'Insurance', icon: 'shield-checkmark-outline', type: 'ionicon', navigation:'InsuranceProvider' },
    { id: 11, name: 'FASTag', icon: 'car-outline', type: 'ionicon', navigation:'FastagProvider' },
    { id: 16, name: 'Credit Card/ Bill Payments', icon: 'card-outline', type: 'ionicon', navigation:'CreditCardBillPayment' },
    { id: 13, name: 'Housing Society', icon: 'business-outline', type: 'ionicon', navigation:'HousingSocietyPayment'  },
    { id: 14, name: 'Subscription', icon: 'play-circle-outline', type: 'ionicon', navigation:'SubscriptionProvider' },
    { id: 18, name: 'Health Insurance', icon: 'medical-outline', type: 'ionicon', navigation:'InsuranceProvider' },
    { id: 15, name: 'Brands & Vouchers', icon: 'gift-outline', type: 'ionicon', navigation:'BrandsVouchersScreen' },
  ];

  const ServiceCard = ({ item }) => {
    const getIconComponent = () => {
      switch (item.name) {
        case 'Mobile':
          return <Ionicons name="phone-portrait-outline" size={30} color={white} />;
        case 'DTH':
          return <MaterialCommunityIcons name="satellite-variant" size={30} color={white} />;
        case 'Electricity':
          return <Ionicons name="flash" size={30} color={white} />;
        case 'Postpaid':
          return <Ionicons name="document-text-outline" size={30} color={white} />;
        case 'Broadband':
          return <Ionicons name="wifi" size={30} color={white} />;
        case 'Water':
          return <Ionicons name="water" size={30} color={white} />;
        case 'landline':
          return <Ionicons name="call-outline" size={30} color={white} />;
        case 'Book A Cylinder':
          return <MaterialCommunityIcons name="gas-cylinder" size={30} color={white} />;
        case 'Gaspipe':
          return <MaterialCommunityIcons name="gauge" size={30} color={white} />;
        case 'Cable Tv':
          return <Ionicons name="tv-outline" size={30} color={white} />;
        case 'FASTag':
          return <MaterialCommunityIcons name="car-side" size={30} color={white} />;
        case 'Loan Repayment':
          return <MaterialCommunityIcons name="sack" size={30} color={white} />;
        case 'Housing Society':
          return <MaterialCommunityIcons name="office-building" size={30} color={white} />;
        case 'Subscription':
          return <Ionicons name="play-circle-outline" size={30} color={white} />;
        case 'Brands & Vouchers':
          return <MaterialCommunityIcons name="wallet-giftcard" size={30} color={white} />;
        case 'Credit Card/ Bill Payments':
          return <Ionicons name="card-outline" size={30} color={white} />;
        case 'Insurance':
          return <MaterialCommunityIcons name="shield-refresh-outline" size={30} color={white} />;
        case 'Health Insurance':
          return <MaterialCommunityIcons name="shield-plus-outline" size={30} color={white} />;
        default:
          return <Ionicons name="grid" size={30} color={white} />;
      }
    };

    return (
      <TouchableOpacity 
        style={styles.serviceCard} 
        activeOpacity={0.7}
        onPress={() => navigation.navigate(item?.navigation, { service: item.name })}
      >
        <View style={styles.serviceIconContainer}>
          {getIconComponent()}
        </View>
        <Text style={styles.serviceName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F3FF',
    },
    headerGradient: {
      paddingTop: 38,
      paddingBottom: 10,
      paddingHorizontal: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomWidth:3,
      borderBottomColor:App_Primary_color
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    backButton: {
    //   width: 40,
    //   height: 40,
    //   borderRadius: 20,
    //   backgroundColor: 'rgba(255,255,255,0.2)',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
      flex: 1,
      textAlign: 'center',
      marginHorizontal: 10,
    },
    logoContainer: {
      width: 50,
      height: 50,
    },
    logo: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    scrollContent: {
      paddingBottom: 30,
    },
    servicesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 15,
      paddingTop: 20,
    },
    serviceCard: {
      width: '25%',
      alignItems: 'center',
      marginBottom: 18,
      paddingHorizontal: 5,
    },
    serviceIconContainer: {
      width: 55,
      height: 55,
      borderRadius: 9,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    serviceName: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      textAlign: 'center',
      lineHeight: 14,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6B4CE6" />

      {/* Header with Gradient */}
      <LinearGradient
        colors={['#6B4CE6', App_Primary_color, '#E5D1FB']}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton} 
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Recharge & Bill Payments</Text>
          
          <View style={styles.logoContainer}>
            <Image 
              source={IMG.BharatPay}
              style={styles.logo}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Services Grid */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RechargePaymentsScreen;