

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  dark55,
  darkMode25,
  white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IMG from '../../assets/Images';

const PaymentHomeScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  const services = [
    { id: 1, name: 'See All', icon: 'grid', navigation:'RechargePaymentsScreen' },
    { id: 2, name: 'Mobile', icon: 'phone-portrait-outline' },
    { id: 3, name: 'DTH', icon: 'disc-outline' },
    { id: 4, name: 'Electricity', icon: 'flash' },
  ];

  const recentBills = [
    {
      id: 1,
      name: 'Wade Warren',
      phone: '(308) 555-0121',
      expiry: 'Expire on 26 march',
      amount: '₹30',
    },
    {
      id: 2,
      name: 'Wade Warren',
      phone: '(308) 555-0121',
      expiry: 'Expire on 26 march',
      amount: '₹30',
    },
    {
      id: 3,
      name: 'Wade Warren',
      phone: '(308) 555-0121',
      expiry: 'Expire on 26 march',
      amount: '₹30',
    },
  ];

  const ServiceCard = ({ item }) => {
    const getIconComponent = () => {
      switch (item.name) {
        case 'See All':
          return <Ionicons name="grid" size={32} color={white} />;
        case 'Mobile':
          return <Ionicons name="phone-portrait-outline" size={32} color={white} />;
        case 'DTH':
          return <MaterialCommunityIcons name="satellite-variant" size={32} color={white} />;
        case 'Electricity':
          return <Ionicons name="flash" size={32} color={white} />;
        default:
          return <Ionicons name="grid" size={32} color={white} />;
      }
    };

    return (
      <TouchableOpacity style={styles.serviceCard} activeOpacity={0.7}
      onPress={()=>navigation.navigate(item?.navigation)}
      >
        <View style={styles.serviceIconContainer}>
          {getIconComponent()}
        </View>
        <Text style={styles.serviceName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const RecentBillCard = ({ item }) => (
    <View style={styles.billCard}>
      <View style={styles.billLeft}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={28} color='gray' />
        </View>
        <View style={styles.billInfo}>
          <Text style={styles.billName}>{item.name}</Text>
          <Text style={styles.billPhone}>{item.phone}</Text>
          <Text style={styles.billExpiry}>{item.expiry} <Text style={styles.billAmount}>{item.amount}</Text></Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payNowButton} activeOpacity={0.7}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#F5F3FF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 35,
      paddingBottom: 20,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 25,
      backgroundColor: '#E0E0E0',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    locationText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
    },
 
    notificationButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bannerContainer: {
      marginHorizontal: 20,
      marginTop: 20,
      height: 200,
      borderRadius: 16,
      overflow: 'hidden',
    },
    bannerGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    bannerContent: {
      alignItems: 'center',
    },
    bannerTitle: {
      fontSize: 24,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
      textAlign: 'center',
      marginBottom: 4,
    },
    bannerSubtitle: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      textAlign: 'center',
    },
    illustration: {
      width: '100%',
      height: 120,
      marginTop: 10,
    },
    servicesSection: {
      backgroundColor: white,
      marginHorizontal: 10,
      marginTop: 170,
      borderRadius: 9,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
      marginBottom: 10,
    },
    servicesGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:15
    },
    serviceCard: {
      alignItems: 'center',
      gap: 8,
    },
    serviceIconContainer: {
      width: 50,
      height: 50,
      borderRadius: 8,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
    serviceName: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    recentSection: {
      marginHorizontal: 15,
      marginTop: 16,
      marginBottom: 100,
    },
    recentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14,
    },
    recentTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    viewAllText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
    },
    billCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: white,
      // padding: 16,
      paddingVertical: 5,
      // paddingHorizontal: 16,
      borderRadius: 16,
      marginBottom: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 9,
      // elevation: 3,
    },
    billLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: 12,
    },
    avatarContainer: {
      width: 40,
      height: 40,
      borderRadius: 25,
      backgroundColor: '#F5F3FF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    billInfo: {
      flex: 1,
    },
    billName: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      // marginBottom: 2,
    },
    billPhone: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      // marginBottom: 2,
    },
    billExpiry: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    billAmount: {
      color: '#1A1A1A',
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    payNowButton: {
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: App_Primary_color,
    },
    payNowText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    bottomNav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      backgroundColor: white,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 10,
    },
    navItem: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    navText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#999',
    },
    navTextActive: {
      color: App_Primary_color,
    },
    myBusinessButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: white,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    myBusinessIcon: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <ImageBackground
    source={IMG.HomeBg}
    style={{ flex: 1 }}
    >

    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F3FF" />

      {/* Header */}
      <View style={styles.header}>

        <View style={styles.headerLeft}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('ProfileScreen')}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.profileImage}
            />
            </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color={App_Primary_color} />
            <Text style={styles.locationText}>Jaipur</Text>
            <Ionicons name="chevron-down" size={18} color={App_Primary_color}/>
          </View>
        </View>
        <View style={styles.headerRight}>
         
          <TouchableOpacity  activeOpacity={0.7}
          onPress={()=>navigation.navigate('BillNotificationsScreen')}
          >
            <Ionicons name="notifications" size={27} color={App_Primary_color} />
          </TouchableOpacity>
        </View>
      </View>

       

        {/* Recommended Services */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Recommended Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </View>
        </View>

        {/* Recent Bills */}
        <ScrollView>
        <View style={styles.recentSection}>
          <View style={{
            backgroundColor:'white',
            elevation:3,
            borderRadius:8,
            padding:16
          }}>
            <View style={styles.recentHeader}>
              <Text style={styles.recentTitle}>Recent</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
          {recentBills.map((bill) => (
            <RecentBillCard key={bill.id} item={bill} />
          ))}

          </View>
        </View>

        </ScrollView>

    </View>
    </ImageBackground>
  );
};

export default PaymentHomeScreen;
