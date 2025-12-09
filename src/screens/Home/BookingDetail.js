import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
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

const BookingDetailScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  
  // Get booking data from route params
  const booking = route?.params?.booking || {
    id: '6904863',
    truckType: '20 FEET CLOSED',
    material: 'Carton box / FMCG',
    weight: '6 Ton',
    distance: '2010 KM',
    driverName: 'Anjali Singh',
    time: '55 h',
    status: 'Expired',
    from: 'Bhiwandi',
    to: 'Kolkata',
    user: 'Rahul',
  };

  const DetailCard = () => (
    <View style={[styles.detailCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
      {/* Header Row - Truck Type, Driver Name, Time */}
      <View style={styles.cardHeaderRow}>
        <Text style={[styles.truckTypeText, { color: isDarkMode ? white : '#000' }]}>
          {booking.truckType}
        </Text>
        <View style={styles.rightInfo}>
          <Text style={[styles.driverName, { color: isDarkMode ? '#999' : '#666' }]}>
            {booking.driverName}
          </Text>
          <Text style={[styles.timeText, { color: isDarkMode ? '#999' : '#666' }]}>
            {booking.time}
          </Text>
        </View>
      </View>

      {/* Material, Weight, Distance Row */}
      <View style={styles.detailsRow}>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {booking.material}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {booking.weight}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {booking.distance}
        </Text>
      </View>

      {/* From Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {booking.from}
        </Text>
        <Text style={[styles.locationSubText, { color: isDarkMode ? '#666' : '#999' }]}>
          {' '}- {booking.from}
        </Text>
      </View>

      {/* To Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {booking.to}
        </Text>
        <Text style={[styles.locationSubText, { color: isDarkMode ? '#666' : '#999' }]}>
          {' '}- {booking.to}
        </Text>
      </View>

      {/* Status Badge - Bottom Right */}
      {booking.status && (
        <View style={styles.statusBadgeContainer}>
          <Ionicons name="time-outline" size={14} color="#FF3B30" />
          <Text style={styles.statusText}>{booking.status}</Text>
        </View>
      )}
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    headerTextContainer: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    bookingId: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginTop: 2,
    },
    scrollContent: {
      paddingBottom: 120,
    },
    contentContainer: {
      padding: 10,
    },
    detailCard: {
      padding: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      position: 'relative',
    },
    cardHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    truckTypeText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      flex: 1,
    },
    rightInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    driverName: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    timeText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    detailsRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 5,
    },
    detailText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    locationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 8,
    },
    locationText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    locationSubText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    statusBadgeContainer: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFEBEE',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,
      gap: 4,
    },
    statusText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#FF3B30',
    },
    bookButtonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: isDarkMode ? dark33 : white,
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 10,
    },
    bookButton: {
      backgroundColor: App_Primary_color,
      borderRadius: 12,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    bookButtonText: {
      color: white,
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? dark33 : white}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDarkMode ? white : '#000'}
            />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Booking detail</Text>
            <Text style={styles.bookingId}>#{booking.id}</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentContainer}>
          <DetailCard />
        </View>
      </ScrollView>

      {/* Bottom Book Button */}
      <View style={styles.bookButtonContainer}>
        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('CreateBookingScreen');
            // Navigate to booking confirmation or next step
          }}
        >
          <Ionicons name="refresh" size={20} color={white} />
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDetailScreen;