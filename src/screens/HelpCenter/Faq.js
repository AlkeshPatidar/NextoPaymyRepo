import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Linking,
  TextInput,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

// ============= FAQs SCREEN =============
export const FAQsScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: '1',
      question: 'How do I track my shipment?',
      answer: 'You can track your shipment in real-time by going to the "My Bookings" section and selecting your active booking. You will see live location updates, status, and estimated delivery time.',
    },
    {
      id: '2',
      question: 'What documents are required for booking?',
      answer: 'You need to provide: Invoice copy, E-way bill (if applicable), Packing list, and valid ID proof. All documents can be uploaded directly through the app.',
    },
    {
      id: '3',
      question: 'How is the freight calculated?',
      answer: 'Freight is calculated based on multiple factors including distance, vehicle type, weight, loading/unloading charges, and any additional services requested. You can get an instant quote through our booking section.',
    },
    {
      id: '4',
      question: 'What is POD and when will I receive it?',
      answer: 'POD (Proof of Delivery) is a document confirming successful delivery. It is uploaded by the driver immediately after delivery and you will receive a notification. You can download it from the booking details section.',
    },
    {
      id: '5',
      question: 'What payment methods are accepted?',
      answer: 'We accept multiple payment methods including Credit/Debit Cards, Net Banking, UPI, Wallets, and for registered customers, we also offer credit terms after verification.',
    },
    {
      id: '6',
      question: 'Can I cancel or reschedule my booking?',
      answer: 'Yes, you can cancel or reschedule your booking before the truck is assigned. After assignment, cancellation charges may apply. Please check our cancellation policy in Terms & Conditions.',
    },
    {
      id: '7',
      question: 'What if my shipment is damaged?',
      answer: 'In case of damage, immediately report it through the app with photos. Our insurance team will review and process your claim within 7-10 working days as per the insurance policy.',
    },
    {
      id: '8',
      question: 'How do I update my business details?',
      answer: 'Go to Profile > Business Settings to update your company name, GSTIN, address, and other business information. Changes require verification and may take 24-48 hours to reflect.',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 30,
      paddingBottom: 10,
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
    faqCard: {
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
    faqHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    questionContainer: {
      flex: 1,
      marginRight: 12,
    },
    questionText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      lineHeight: 22,
    },
    iconContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    answerContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? dark55 : '#F0F0F0',
    },
    answerText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 20,
      marginTop: 12,
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
          <Text style={styles.headerTitle}>FAQs</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {faqs.map((faq) => (
          <TouchableOpacity
            key={faq.id}
            style={styles.faqCard}
            activeOpacity={0.7}
            onPress={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
          >
            <View style={styles.faqHeader}>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{faq.question}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Ionicons 
                  name={expandedId === faq.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={isDarkMode ? white : '#000'} 
                />
              </View>
            </View>
            
            {expandedId === faq.id && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{faq.answer}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// ============= CALL SUPPORT SCREEN =============
export const CallSupportScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  const supportContacts = [
    {
      id: '1',
      title: 'Customer Support',
      subtitle: 'For general queries',
      phone: '+91 1800-123-4567',
      icon: 'headset',
      color: '#2196F3',
      available: '24/7 Available',
    },
    {
      id: '2',
      title: 'Booking Support',
      subtitle: 'For booking related issues',
      phone: '+91 98765-43210',
      icon: 'book',
      color: '#4CAF50',
      available: 'Mon-Sat, 9 AM - 6 PM',
    },
    {
      id: '3',
      title: 'Technical Support',
      subtitle: 'For app & technical issues',
      phone: '+91 98765-43211',
      icon: 'settings',
      color: '#FF9800',
      available: '24/7 Available',
    },
    {
      id: '4',
      title: 'Emergency Helpline',
      subtitle: 'For urgent matters',
      phone: '+91 1800-999-8888',
      icon: 'alert-circle',
      color: '#F44336',
      available: '24/7 Available',
    },
  ];

  const handleCall = (phone) => {
    const phoneNumber = phone.replace(/\s/g, '');
    Linking.openURL(`tel:${phoneNumber}`);
  };

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
    infoCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    infoIconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '15',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    infoText: {
      flex: 1,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 20,
    },
    supportCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWrapper: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    textContent: {
      flex: 1,
    },
    cardTitle: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 2,
    },
    cardSubtitle: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginBottom: 6,
    },
    phoneNumber: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
      marginBottom: 4,
    },
    availabilityText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#777' : '#999',
    },
    callButton: {
      width: 40,
      height: 40,
      borderRadius: 24,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
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
          <Text style={styles.headerTitle}>Call Support</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.infoCard}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="information-circle" size={24} color={App_Primary_color} />
          </View>
          <Text style={styles.infoText}>
            Choose the right support line for faster assistance. Our team is here to help you!
          </Text>
        </View>

        {supportContacts.map((contact) => (
          <View key={contact.id} style={styles.supportCard}>
            <View style={styles.cardContent}>
              <View style={[styles.iconWrapper, { backgroundColor: contact.color + '15' }]}>
                <Feather name={contact.icon} size={26} color={contact.color} />
              </View>
              
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>{contact.title}</Text>
                <Text style={styles.cardSubtitle}>{contact.subtitle}</Text>
                <Text style={styles.phoneNumber}>{contact.phone}</Text>
                <Text style={styles.availabilityText}>{contact.available}</Text>
              </View>

              <TouchableOpacity 
                style={styles.callButton}
                activeOpacity={0.7}
                onPress={() => handleCall(contact.phone)}
              >
                <Ionicons name="call" size={20} color={white} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// ============= SUBMIT COMPLAINT SCREEN =============
export const SubmitComplaintScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const categories = [
    { id: '1', label: 'Booking Issue', icon: 'book' },
    { id: '2', label: 'Payment Issue', icon: 'credit-card' },
    { id: '3', label: 'Delivery Delay', icon: 'clock' },
    { id: '4', label: 'Damaged Goods', icon: 'alert-triangle' },
    { id: '5', label: 'Driver Behavior', icon: 'user' },
    { id: '6', label: 'App Issue', icon: 'smartphone' },
    { id: '7', label: 'POD Issue', icon: 'file-text' },
    { id: '8', label: 'Other', icon: 'more-horizontal' },
  ];

  const handleSubmit = () => {
    if (!selectedCategory) {
      Alert.alert('Error', 'Please select a complaint category');
      return;
    }
    if (!subject.trim()) {
      Alert.alert('Error', 'Please enter a subject');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please describe your complaint');
      return;
    }

    // API call logic here
    Alert.alert(
      'Success',
      'Your complaint has been submitted successfully. Ticket ID: #TKT-' + Math.floor(Math.random() * 10000),
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

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
    sectionTitle: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 12,
      marginTop: 8,
    },
    categoriesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -10,
    },
    categoryChip: {
      width: '25%',
      padding: 3,
    },
    categoryButton: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 12,
      padding: 5,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
    //   elevation: 3,
    },
    categoryButtonActive: {
      borderColor: App_Primary_color,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '10',
    },
    categoryIcon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 6,
    },
    categoryIconActive: {
      backgroundColor: App_Primary_color,
    },
    categoryLabel: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? '#999' : '#666',
      textAlign: 'center',
    },
    categoryLabelActive: {
      color: App_Primary_color,
    },
    inputCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    label: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 8,
    },
    optionalText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#777' : '#999',
    },
    input: {
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      borderRadius: 12,
      padding: 12,
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? white : '#000',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    inputFocused: {
      borderColor: App_Primary_color,
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top',
    },
    charCount: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#777' : '#999',
      textAlign: 'right',
      marginTop: 6,
    },
    submitButton: {
      backgroundColor: App_Primary_color,
      borderRadius: 16,
      padding: 16,
      alignItems: 'center',
      marginTop: 8,
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    submitButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: white,
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
          <Text style={styles.headerTitle}>Submit Complaint</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.sectionTitle}>Select Category *</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryChip}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.categoryButtonActive
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedCategory(category.id)}
              >
                <View style={[
                  styles.categoryIcon,
                  selectedCategory === category.id && styles.categoryIconActive
                ]}>
                  <Feather 
                    name={category.icon} 
                    size={18} 
                    color={selectedCategory === category.id ? white : (isDarkMode ? '#999' : '#666')} 
                  />
                </View>
                <Text style={[
                  styles.categoryLabel,
                  selectedCategory === category.id && styles.categoryLabelActive
                ]}>
                  {category.label}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
          Booking ID <Text style={styles.optionalText}>(Optional)</Text>
        </Text>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="e.g. BK001234"
            placeholderTextColor={isDarkMode ? '#666' : '#999'}
            value={bookingId}
            onChangeText={setBookingId}
          />
        </View>

        <Text style={styles.sectionTitle}>Subject *</Text>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="Brief description of your complaint"
            placeholderTextColor={isDarkMode ? '#666' : '#999'}
            value={subject}
            onChangeText={setSubject}
          />
        </View>

        <Text style={styles.sectionTitle}>Description *</Text>
        <View style={styles.inputCard}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your complaint in detail..."
            placeholderTextColor={isDarkMode ? '#666' : '#999'}
            value={description}
            onChangeText={setDescription}
            multiline
            maxLength={500}
          />
          <Text style={styles.charCount}>{description.length}/500</Text>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit Complaint</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};