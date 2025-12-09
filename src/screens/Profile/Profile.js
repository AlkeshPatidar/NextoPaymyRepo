import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Alert,
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
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  // User data - Replace with API/Redux
  const [userData] = useState({
    name: 'Rahul Kumar',
    email: 'rahul.kumar@example.com',
    phone: '+91 98765 43210',
    companyName: 'Kumar Logistics Pvt Ltd',
    memberSince: 'Jan 23',
    totalBookings: 145,
    profileImage: null, // Add image URL if available
  });

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            // Add logout logic here
            console.log('User logged out');
          }
        }
      ]
    );
  };

  const MenuSection = ({ title, items }) => (
    <View style={styles.menuSection}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? '#999' : '#666' }]}>
        {title}
      </Text>
      <View style={[styles.menuContainer, { backgroundColor: isDarkMode ? dark33 : white }]}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={item.onPress}
            >
              <View style={styles.menuItemLeft}>
                <View style={[styles.iconContainer, { backgroundColor: item.iconBg + '20' }]}>
                  {item.icon}
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={[styles.menuTitle, { color: isDarkMode ? white : '#000' }]}>
                    {item.title}
                  </Text>
                  {item.subtitle && (
                    <Text style={[styles.menuSubtitle, { color: isDarkMode ? '#999' : '#666' }]}>
                      {item.subtitle}
                    </Text>
                  )}
                </View>
              </View>
              <Feather 
                name="chevron-right" 
                size={20} 
                color={isDarkMode ? '#666' : '#999'} 
              />
            </TouchableOpacity>
            {index < items.length - 1 && (
              <View style={[styles.divider, { backgroundColor: isDarkMode ? dark55 : '#F0F0F0' }]} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );

  const accountMenuItems = [
    {
      id: '1',
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      icon: <Feather name="edit-2" size={20} color="#4CAF50" />,
      iconBg: '#4CAF50',
      onPress: () => navigation.navigate('EditProfile'),
    },
    {
      id: '2',
      title: 'Company Information',
      subtitle: userData.companyName,
      icon: <MaterialCommunityIcons name="office-building" size={22} color="#2196F3" />,
      iconBg: '#2196F3',
      onPress: () => navigation.navigate('CompanyInfo'),
    },
    {
      id: '3',
      title: 'Saved Addresses',
      subtitle: 'Manage your pickup & delivery locations',
      icon: <Ionicons name="location" size={22} color="#FF9800" />,
      iconBg: '#FF9800',
      onPress: () => navigation.navigate('SavedAddresses'),
    },
  ];

  const supportMenuItems = [
    {
      id: '1',
      title: 'FAQs',
      subtitle: 'Find answers to common questions',
      icon: <AntDesign name="questioncircleo" size={20} color="#9C27B0" />,
      iconBg: '#9C27B0',
      onPress: () => navigation.navigate('FAQsScreen'),
    },
    {
      id: '2',
      title: 'Call Support',
      subtitle: '24/7 customer support available',
      icon: <Feather name="phone-call" size={20} color="#00BCD4" />,
      iconBg: '#00BCD4',
      onPress: () => {
        // Add call functionality
        // console.log('Calling support...');
         navigation.navigate('CallSupportScreen')
      },
    },
    {
      id: '3',
      title: 'Submit Complaint',
      subtitle: 'Report an issue or complaint',
      icon: <MaterialCommunityIcons name="message-alert" size={22} color="#F44336" />,
      iconBg: '#F44336',
      onPress: () => navigation.navigate('SubmitComplaintScreen'),
    },
  ];

  const legalMenuItems = [
    {
      id: '1',
      title: 'Terms & Conditions',
      subtitle: 'Read our terms of service',
      icon: <Ionicons name="document-text-outline" size={22} color="#607D8B" />,
      iconBg: '#607D8B',
      onPress: () => navigation.navigate('TermsAndConditionsScreen'),
    },
    {
      id: '2',
      title: 'Privacy Policy',
      subtitle: 'How we handle your data',
      icon: <MaterialCommunityIcons name="shield-check" size={22} color="#795548" />,
      iconBg: '#795548',
      onPress: () => navigation.navigate('PrivacyPolicyScreen'),
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 50,
      paddingBottom: 15,
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
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
    },
    settingsButton: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      padding: 10,
      borderRadius: 16,
    },
    avatarContainer: {
      width: 60,
      height: 60,
      borderRadius: 35,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    avatarImage: {
      width: 60,
      height: 60,
      borderRadius: 35,
    },
    avatarText: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      // marginBottom: 4,
    },
    profileEmail: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginBottom: 2,
    },
    profilePhone: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
    },
    statsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 20,
      gap: 12,
    },
    statBox: {
      flex: 1,
      backgroundColor: isDarkMode ? dark33 : white,
      padding: 10,
      borderRadius: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      height:90
    },
    statValue: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: App_Primary_color,
      // marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      textAlign: 'center',
    },
    scrollContent: {
      paddingBottom: 100,
    },
    menuSection: {
      marginBottom: 24,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 8,
    },
    menuContainer: {
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    menuItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    iconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    menuTextContainer: {
      flex: 1,
    },
    menuTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      // marginBottom: 2,
    },
    menuSubtitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    divider: {
      height: 1,
      // marginLeft: 72,
    },
    logoutButton: {
      marginHorizontal: 10,
      // marginTop: 12,
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    logoutText: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#F44336',
      marginLeft: 8,
    },
    versionText: {
      textAlign: 'center',
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#666' : '#999',
      marginTop: 24,
      marginBottom: 12,
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
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity 
            style={styles.settingsButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Settings')}
          >
            <Ionicons 
              name="settings-outline" 
              size={24} 
              color={isDarkMode ? white : '#000'} 
            />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            {userData.profileImage ? (
              <Image 
                source={{ uri: userData.profileImage }} 
                style={styles.avatarImage}
              />
            ) : (
              <Text style={styles.avatarText}>
                {userData.name.split(' ').map(n => n[0]).join('')}
              </Text>
            )}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userData.name}</Text>
            <Text style={styles.profileEmail}>{userData.email}</Text>
            <Text style={styles.profilePhone}>{userData.phone}</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userData.totalBookings}</Text>
          <Text style={styles.statLabel}>Total Bookings</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userData.memberSince}</Text>
          <Text style={styles.statLabel}>Member Since</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Account Section */}
        <MenuSection title="Account" items={accountMenuItems} />

        {/* Support Section */}
        <MenuSection title="Support" items={supportMenuItems} />

        {/* Legal Section */}
        <MenuSection title="Legal" items={legalMenuItems} />

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <MaterialCommunityIcons name="logout" size={22} color="#F44336" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>Version 2.5.0</Text>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;