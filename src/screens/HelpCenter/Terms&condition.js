import React, { useState } from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// ============= TERMS AND CONDITIONS SCREEN =============
 const TermsAndConditionsScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [expandedId, setExpandedId] = useState(null);

  const termsData = [
    {
      id: '1',
      title: 'Acceptance of Terms',
      icon: 'checkmark-circle',
      content: 'By accessing and using Cloud Trucking mobile application and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Cloud Trucking reserves the right to modify these terms at any time without prior notice.',
    },
    {
      id: '2',
      title: 'User Registration & Account',
      icon: 'person-circle',
      content: 'You must register for an account to access our services. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for safeguarding your password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.',
    },
    {
      id: '3',
      title: 'Service Usage',
      icon: 'cube',
      content: 'Cloud Trucking provides a platform for booking truck transportation services. We act as an intermediary between customers and transport service providers. The actual transportation service is provided by independent third-party truck operators. We do not own or operate the trucks and are not responsible for the actions of the transport providers.',
    },
    {
      id: '4',
      title: 'Booking & Payment Terms',
      icon: 'card',
      content: 'All bookings are subject to availability and confirmation. Prices quoted are indicative and may vary based on distance, vehicle type, and additional services. Payment terms will be specified at the time of booking. For credit terms, prior approval and verification are required. All payments must be made as per agreed terms. Late payments may attract interest charges.',
    },
    {
      id: '5',
      title: 'Cancellation & Refund Policy',
      icon: 'close-circle',
      content: 'Cancellations made before truck assignment are free of charge. Cancellations after truck assignment but before loading will incur 20% cancellation charges. Cancellations after loading will incur 50% cancellation charges. No refunds will be provided after dispatch. Refunds, if applicable, will be processed within 7-10 working days.',
    },
    {
      id: '6',
      title: 'Liability & Insurance',
      icon: 'shield-checkmark',
      content: 'Cloud Trucking provides basic transit insurance coverage for goods in transit. The maximum liability is limited to the declared value of goods or invoice value, whichever is lower. We are not liable for consequential damages, loss of profit, or indirect losses. For high-value goods, customers are advised to purchase additional insurance coverage.',
    },
    {
      id: '7',
      title: 'User Responsibilities',
      icon: 'clipboard',
      content: 'Users must provide accurate information about the goods being transported including weight, dimensions, and nature of goods. Prohibited items including hazardous materials, illegal goods, and restricted items cannot be transported. Users must provide all necessary documentation including invoices, e-way bills, and permits. False or misleading information may result in account suspension.',
    },
    {
      id: '8',
      title: 'Prohibited Activities',
      icon: 'ban',
      content: 'Users are prohibited from: Using the service for illegal purposes, transporting prohibited or restricted items, providing false information, attempting to circumvent payment systems, harassing or abusing service providers, reverse engineering or copying the application, using automated systems to access the service without permission.',
    },
    {
      id: '9',
      title: 'Intellectual Property Rights',
      icon: 'lock-closed',
      content: 'All content, features, and functionality of Cloud Trucking including but not limited to text, graphics, logos, icons, images, audio clips, and software are the exclusive property of Cloud Trucking and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.',
    },
    {
      id: '10',
      title: 'Data Privacy & Security',
      icon: 'eye-off',
      content: 'We collect and process personal data in accordance with our Privacy Policy. Your data will be used for providing services, improving user experience, and compliance with legal obligations. We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure. We do not sell or share your personal data with third parties for marketing purposes.',
    },
    {
      id: '11',
      title: 'Dispute Resolution',
      icon: 'people',
      content: 'Any disputes arising from the use of our services will be resolved through mutual discussion and negotiation. If a resolution cannot be reached, the matter will be referred to arbitration as per the Arbitration and Conciliation Act. The arbitration will be conducted in English and the venue will be Bhopal, Madhya Pradesh, India.',
    },
    {
      id: '12',
      title: 'Force Majeure',
      icon: 'alert-circle',
      content: 'Cloud Trucking shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control including natural disasters, wars, strikes, government actions, pandemics, or network failures. In such events, our obligations will be suspended for the duration of the force majeure event.',
    },
    {
      id: '13',
      title: 'Limitation of Liability',
      icon: 'information-circle',
      content: 'Cloud Trucking\'s total liability for any claims arising out of or related to these terms or the services shall not exceed the amount paid by you for the specific booking. We are not liable for indirect, incidental, special, consequential, or punitive damages including loss of profits, data, or goodwill.',
    },
    {
      id: '14',
      title: 'Governing Law & Jurisdiction',
      icon: 'hammer',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of India. Any legal action or proceeding arising under these terms will be brought exclusively in the courts located in Bhopal, Madhya Pradesh, India, and you hereby irrevocably consent to the personal jurisdiction and venue therein.',
    },
    {
      id: '15',
      title: 'Contact Information',
      icon: 'mail',
      content: 'For any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at:\n\nEmail: support@cloudtrucking.com\nPhone: +91 1800-123-4567\nAddress: Cloud Trucking Pvt. Ltd., Bhopal, Madhya Pradesh, India\n\nOur support team is available 24/7 to assist you.',
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
      paddingBottom: 16,
      paddingHorizontal: 20,
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
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 100,
    },
    lastUpdated: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 12,
      padding: 14,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    lastUpdatedIcon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '15',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    lastUpdatedText: {
      flex: 1,
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 18,
    },
    termCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      marginBottom: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    termHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    termIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '15',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    termTitleContainer: {
      flex: 1,
    },
    termNumber: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
      marginBottom: 2,
    },
    termTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      lineHeight: 20,
    },
    expandIconContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    },
    termContentContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? dark55 : '#F0F0F0',
    },
    termContent: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 22,
      marginTop: 12,
    },
    footerNote: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginTop: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    footerNoteTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 8,
    },
    footerNoteText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkMode ? dark33 : white} 
      />

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
          <Text style={styles.headerTitle}>Terms & Conditions</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.lastUpdated}>
          <View style={styles.lastUpdatedIcon}>
            <MaterialIcons 
              name="update" 
              size={20} 
              color={App_Primary_color} 
            />
          </View>
          <Text style={styles.lastUpdatedText}>
            Last Updated: November 28, 2025{'\n'}
            Please read these terms carefully before using our services.
          </Text>
        </View>

        {termsData.map((term, index) => (
          <TouchableOpacity
            key={term.id}
            style={styles.termCard}
            activeOpacity={0.7}
            onPress={() => setExpandedId(expandedId === term.id ? null : term.id)}
          >
            <View style={styles.termHeader}>
              <View style={styles.termIconContainer}>
                <Ionicons 
                  name={term.icon} 
                  size={22} 
                  color={App_Primary_color} 
                />
              </View>
              
              <View style={styles.termTitleContainer}>
                <Text style={styles.termNumber}>Section {index + 1}</Text>
                <Text style={styles.termTitle}>{term.title}</Text>
              </View>

              <View style={styles.expandIconContainer}>
                <Ionicons 
                  name={expandedId === term.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={isDarkMode ? white : '#000'} 
                />
              </View>
            </View>
            
            {expandedId === term.id && (
              <View style={styles.termContentContainer}>
                <Text style={styles.termContent}>{term.content}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteTitle}>Important Notice</Text>
          <Text style={styles.footerNoteText}>
            By using Cloud Trucking services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using our services immediately.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionsScreen