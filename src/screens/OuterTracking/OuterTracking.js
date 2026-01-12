import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
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
import Feather from 'react-native-vector-icons/Feather';

const TrackingHubScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [walletBalance] = useState('45,300');

  // Recent activity data
  const recentActivities = [
    { id: '1', title: 'Trips Trip', subtitle: 'Trip 3', status: 'completed' },
    { id: '2', title: 'Tried Meerut', subtitle: '20/25', status: 'ongoing' },
    { id: '3', title: 'Shaded Duksh', subtitle: '15639', status: 'pending' },
    { id: '4', title: 'Tire ide Post', subtitle: '1027', status: 'completed' },
  ];

  const TrackingOptionCard = ({ icon, title, onPress }) => (
    <TouchableOpacity
      style={styles.trackingOption}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.trackingIconContainer, { backgroundColor: isDarkMode ? dark55 : '#E3F2FD' }]}>
        {icon}
      </View>
      <Text style={[styles.trackingOptionText, { color: isDarkMode ? '#999' : '#666' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const PricingToolCard = ({ icon, title, subtitle, color, onPress }) => (
    <TouchableOpacity
      style={[styles.pricingToolCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.pricingIconContainer, { backgroundColor: color + '20' }]}>
        {icon}
      </View>
      <View style={styles.pricingToolContent}>
        <Text style={[styles.pricingToolTitle, { color: isDarkMode ? white : '#000' }]}>
          {title}
        </Text>
        <Text style={[styles.pricingToolSubtitle, { color: isDarkMode ? '#999' : '#666' }]}>
          {subtitle}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={15}
        color={isDarkMode ? '#999' : '#666'}
      />
    </TouchableOpacity>
  );

  const ActivityCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.activityCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('TripDetails', { tripId: item.id })}
    >
      <View style={styles.activityContent}>
        <Text style={[styles.activityTitle, { color: isDarkMode ? white : '#000' }]}>
          {item.title}
        </Text>
        <Text style={[styles.activitySubtitle, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.subtitle}
        </Text>
      </View>
      <View style={[
        styles.activityStatusDot,
        {
          backgroundColor:
            item.status === 'completed' ? '#4CAF50' :
            item.status === 'ongoing' ? '#FF9800' : '#2196F3'
        }
      ]} />
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: App_Primary_color,
      paddingTop: 30,
      paddingBottom: 10,
      paddingHorizontal: 10,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
     backButton: {
          width: 35,
          height: 35,
          borderRadius: 20,
          backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
          justifyContent: 'center',
          alignItems: 'center',
        //   marginRight: 12,
        },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    logo: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
    settingsButton: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pageTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: white,
    //   marginBottom: 15,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 40,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#000',
    },
    scrollContent: {
      paddingBottom: 100,
    },
    walletSection: {
      marginHorizontal: 10,
      marginTop: 10,
    },
    walletCard: {
      backgroundColor: '#2c4688ff',
      borderRadius: 16,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    walletHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    //   marginBottom: 10,
    },
    walletIconContainer: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    walletTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: white,
    },
    walletRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    walletBalanceContainer: {
      flex: 1,
    },
    walletLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: 'rgba(255,255,255,0.8)',
    //   marginBottom: 4,
    },
    walletBalance: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: white,
    },
    addCashButton: {
      backgroundColor: white,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    addCashText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
      marginLeft: 6,
    },
    trackingSection: {
      marginTop: 10,
      paddingHorizontal: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 10,
    },
    trackingOptionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 15,
    },
    trackingOption: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'white',
      padding:5,
      borderRadius:4,
      elevation:3
    },
    trackingIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      borderWidth: 2,
      borderColor: App_Primary_color,
    },
    trackingOptionText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      textAlign: 'center',
    },
    pricingSection: {
      marginTop: 15,
      paddingHorizontal: 10,
    },
    pricingToolCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    pricingIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    pricingToolContent: {
      flex: 1,
    },
    pricingToolTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginBottom: 2,
    },
    pricingToolSubtitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    activitySection: {
      marginTop: 15,
      paddingHorizontal: 10,
    },
    activityCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 12,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    activityContent: {
      flex: 1,
    },
    activityTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginBottom: 3,
    },
    activitySubtitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    activityStatusDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    fab: {
      position: 'absolute',
      bottom: 80,
      alignSelf: 'center',
      width: 140,
      height: 56,
      borderRadius: 28,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      gap: 8,
    },
    fabText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: white,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={App_Primary_color}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
           <TouchableOpacity 
                     style={styles.backButton}
                     activeOpacity={0.7}
                     onPress={() => navigation.goBack()}
                   >
                     <Ionicons 
                       name="arrow-back" 
                       size={20} 
                       color={isDarkMode ? white : '#000'} 
                     />
                   </TouchableOpacity>
        <Text style={styles.pageTitle}>Tracking Hub</Text>

          <TouchableOpacity
            style={styles.settingsButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Settings')}
          >
            <Ionicons name="settings-outline" size={24} color={white} />
          </TouchableOpacity>
        </View>


        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search trip ID or truck number"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Wallet Section */}
        <View style={styles.walletSection}>
          <View style={styles.walletCard}>
            <View style={styles.walletHeader}>
              <View style={styles.walletIconContainer}>
                <FontAwesome5 name="wallet" size={20} color={white} />
              </View>
              <Text style={styles.walletTitle}>Wallet</Text>
            </View>
            <View style={styles.walletRow}>
              <View style={styles.walletBalanceContainer}>
                <Text style={styles.walletLabel}>Wallet Balance</Text>
                <Text style={styles.walletBalance}>₹{walletBalance}</Text>
              </View>
              <TouchableOpacity
                style={styles.addCashButton}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AddMoney')}
              >
                <Ionicons name="add-circle" size={18} color={App_Primary_color} />
                <Text style={styles.addCashText}>Add Cash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Live Tracking Options */}
        <View style={styles.trackingSection}>
          <Text style={styles.sectionTitle}>Live Tracking Options</Text>
          <View style={styles.trackingOptionsRow}>
            <TrackingOptionCard
              icon={<MaterialCommunityIcons name="truck-delivery" size={17} color={App_Primary_color} />}
              title="Shipment"
              onPress={() => navigation.navigate('ShipmentTracking')}
            />
            <TrackingOptionCard
              icon={<MaterialCommunityIcons name="radio-tower" size={17} color={App_Primary_color} />}
              title="FASTag"
              onPress={() => navigation.navigate('FASTagTracking')}
            />
            <TrackingOptionCard
              icon={<Ionicons name="phone-portrait-outline" size={17} color={App_Primary_color} />}
              title="App GPS"
              onPress={() => navigation.navigate('GPSTracking')}
            />
          </View>
        </View>

        {/* Pricing Tools */}
        <View style={styles.pricingSection}>
          <Text style={styles.sectionTitle}>Pricing Tools</Text>
          <PricingToolCard
            icon={<FontAwesome5 name="calculator" size={22} color="#FF9800" />}
            title="Freight Calculator"
            subtitle="Calculate shipping costs"
            color="#FF9800"
            onPress={() => navigation.navigate('FreightCalculator')}
          />
          <PricingToolCard
            icon={<MaterialCommunityIcons name="chart-line" size={24} color="#4CAF50" />}
            title="Market Rates"
            subtitle="View current market prices"
            color="#4CAF50"
            onPress={() => navigation.navigate('MarketRates')}
          />
          <PricingToolCard
            icon={<Ionicons name="document-text-outline" size={24} color="#2196F3" />}
            title="Rate History"
            subtitle="View past rate trends"
            color="#2196F3"
            onPress={() => navigation.navigate('RateHistory')}
          />
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {recentActivities.map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
   
    </View>
  );
};

export default TrackingHubScreen;