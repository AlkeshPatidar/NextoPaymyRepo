import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const NotificationCenter = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Truck', 'Loading', 'Delivery', 'POD', 'Payment'];

  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'truck_assigned',
      title: 'Truck Assigned',
      message: 'Truck #TRK-4523 has been assigned to your shipment #SHP-8901',
      time: '2 minutes ago',
      bookingId: 'BK001234',
      read: false,
      icon: 'truck-fast',
      iconType: 'MaterialCommunityIcons',
      color: '#2196F3',
    },
    {
      id: '2',
      type: 'loaded',
      title: 'Loaded',
      message: 'Your shipment #SHP-8901 has been loaded and is ready for dispatch',
      time: '15 minutes ago',
      bookingId: 'BK001234',
      read: false,
      icon: 'package-variant-closed',
      iconType: 'MaterialCommunityIcons',
      color: '#9C27B0',
    },
    {
      id: '3',
      type: 'delivered',
      title: 'Delivered',
      message: 'Shipment #SHP-8845 has been successfully delivered to the destination',
      time: '1 hour ago',
      bookingId: 'BK001233',
      read: false,
      icon: 'check-circle',
      iconType: 'Feather',
      color: '#4CAF50',
    },
    {
      id: '4',
      type: 'pod_uploaded',
      title: 'POD Uploaded',
      message: 'Proof of Delivery for shipment #SHP-8845 has been uploaded and verified',
      time: '1 hour ago',
      bookingId: 'BK001233',
      read: true,
      icon: 'cloud-upload',
      iconType: 'Feather',
      color: '#00BCD4',
    },
    {
      id: '5',
      type: 'payment_success',
      title: 'Payment Success',
      message: 'Payment of ₹45,000 for shipment #SHP-8845 processed successfully',
      time: '2 hours ago',
      bookingId: 'BK001233',
      read: true,
      icon: 'check-circle',
      iconType: 'FontAwesome5',
      color: '#4CAF50',
    },
    {
      id: '6',
      type: 'payment_failed',
      title: 'Payment Failed',
      message: 'Payment for shipment #SHP-8823 failed. Please retry or update payment method',
      time: '3 hours ago',
      bookingId: 'BK001232',
      read: false,
      icon: 'x-circle',
      iconType: 'Feather',
      color: '#F44336',
    },
    {
      id: '7',
      type: 'truck_assigned',
      title: 'Truck Assigned',
      message: 'Truck #TRK-2341 has been assigned to your shipment #SHP-8912',
      time: '5 hours ago',
      bookingId: 'BK001231',
      read: true,
      icon: 'truck-fast',
      iconType: 'MaterialCommunityIcons',
      color: '#2196F3',
    },
    {
      id: '8',
      type: 'loaded',
      title: 'Loaded',
      message: 'Your shipment #SHP-8912 has been loaded successfully',
      time: '6 hours ago',
      bookingId: 'BK001231',
      read: true,
      icon: 'package-variant-closed',
      iconType: 'MaterialCommunityIcons',
      color: '#9C27B0',
    },
  ]);

  const getFilteredNotifications = () => {
    if (selectedFilter === 'All') return notifications;
    
    const filterMap = {
      'Truck': 'truck_assigned',
      'Loading': 'loaded',
      'Delivery': 'delivered',
      'POD': 'pod_uploaded',
      'Payment': ['payment_success', 'payment_failed'],
    };

    const filterType = filterMap[selectedFilter];
    
    if (Array.isArray(filterType)) {
      return notifications.filter(n => filterType.includes(n.type));
    }
    
    return notifications.filter(n => n.type === filterType);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const renderIcon = (notification) => {
    switch (notification.iconType) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={notification.icon} size={20} color={white} />;
      case 'Feather':
        return <Feather name={notification.icon} size={20} color={white} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={notification.icon} size={18} color={white} />;
      default:
        return <Ionicons name={notification.icon} size={20} color={white} />;
    }
  };

  const NotificationCard = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.notificationCard, 
        { backgroundColor: isDarkMode ? dark33 : white },
        !item.read && { backgroundColor: isDarkMode ? dark55 : '#F0F7FF' }
      ]}
      activeOpacity={0.7}
      onPress={() => console.log('Notification clicked:', item.id)}
    >
      <View style={styles.notificationContent}>
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          {renderIcon(item)}
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={[styles.notificationTitle, { color: isDarkMode ? white : '#000' }]}>
              {item.title}
            </Text>
            {!item.read && <View style={styles.unreadDot} />}
          </View>
          
          <Text 
            style={[styles.notificationMessage, { color: isDarkMode ? '#999' : '#666' }]}
            numberOfLines={2}
          >
            {item.message}
          </Text>
          
          <View style={styles.notificationFooter}>
            <Text style={[styles.timeText, { color: isDarkMode ? '#777' : '#999' }]}>
              {item.time}
            </Text>
            <Text style={[styles.bookingIdText, { color: App_Primary_color }]}>
              {item.bookingId}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerLeft: {
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
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
    },
    notificationBadge: {
      backgroundColor: '#F44336',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },
    badgeText: {
      color: white,
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    filterContainer: {
      paddingVertical: 12,
    },
    filterScrollContent: {
      paddingHorizontal: 20,
      gap: 8,
    },
    filterChip: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      marginRight: 8,
    },
    filterChipActive: {
      backgroundColor: App_Primary_color,
    },
    filterText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? '#999' : '#666',
    },
    filterTextActive: {
      color: white,
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 100,
    },
    notificationCard: {
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    notificationContent: {
      flexDirection: 'row',
    },
    iconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    textContainer: {
      flex: 1,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    notificationTitle: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      flex: 1,
    },
    unreadDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: App_Primary_color,
      marginLeft: 8,
    },
    notificationMessage: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      lineHeight: 20,
      marginBottom: 8,
    },
    notificationFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timeText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    bookingIdText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 60,
    },
    emptyText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginTop: 16,
    },
    emptySubText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#777' : '#999',
      marginTop: 8,
    },
  });

  const filteredNotifications = getFilteredNotifications();

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkMode ? dark33 : white} 
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
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
            <Text style={styles.headerTitle}>Notifications</Text>
          </View>
          
          {unreadCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>{unreadCount} New</Text>
            </View>
          )}
        </View>

        {/* Filter Chips */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
          style={styles.filterContainer}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterChip,
                selectedFilter === filter && styles.filterChipActive
              ]}
              activeOpacity={0.7}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text 
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.filterTextActive
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Notifications List */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((item) => (
            <NotificationCard key={item.id} item={item} />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons 
              name="notifications-off-outline" 
              size={64} 
              color={isDarkMode ? '#666' : '#CCC'} 
            />
            <Text style={styles.emptyText}>No notifications</Text>
            <Text style={styles.emptySubText}>
              You're all caught up!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationCenter;