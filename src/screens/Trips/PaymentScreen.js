import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  darkMode25,
  white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  
  // Get payment data from route params
  const paymentData = route?.params?.paymentData || {
    totalPrice: 62600,
    totalPayable: 6260,
  };

  const [selectedPayment, setSelectedPayment] = useState('total');
  const [customAmount, setCustomAmount] = useState('');

  const paymentMethods = [
    {
      id: 'account',
      icon: 'wallet-outline',
      iconType: 'Ionicons',
      label: 'Account',
      balance: '₹0',
    },
    {
      id: 'netbanking',
      icon: 'bank',
      iconType: 'MaterialCommunityIcons',
      label: 'Net Banking',
    },
    {
      id: 'upi',
      icon: 'qr-code-outline',
      iconType: 'Ionicons',
      label: 'UPI',
    },
    {
      id: 'gpay',
      icon: 'logo-google',
      iconType: 'Ionicons',
      label: 'Google pay',
    },
    {
      id: 'paytm',
      icon: 'wallet',
      iconType: 'MaterialCommunityIcons',
      label: 'Paytm',
    },
    {
      id: 'phonepe',
      icon: 'phone-portrait-outline',
      iconType: 'Ionicons',
      label: 'Phonepe',
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
      paddingBottom: 10,
      paddingHorizontal: 16,
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
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    scrollContent: {
      paddingBottom: 10,
    },
    contentContainer: {
      padding: 16,
    },
    priceCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 12,
      padding: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#444' : '#F0F0F0',
    },
    priceRowLast: {
      borderBottomWidth: 0,
    },
    priceLabel: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    priceValue: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    paymentOptionCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 12,
      padding: 10,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    radioRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioButton: {
      width: 15,
      height: 15,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: App_Primary_color,
      marginRight: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButtonSelected: {
      backgroundColor: App_Primary_color,
    },
    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: white,
    },
    radioLabel: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
      flex: 1,
    },
    radioAmount: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    customAmountInput: {
      backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F6F8',
      borderRadius: 8,
      paddingHorizontal: 14,
      paddingVertical: 10,
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? white : '#000',
    //   marginLeft: 34,
    },
    sectionTitle: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 12,
    },
    paymentMethodCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 12,
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    paymentMethodButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    paymentIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    paymentMethodLabel: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
      flex: 1,
    },
    paymentMethodBalance: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginRight: 8,
    },
  });

  const renderPaymentMethod = (method) => {
    const IconComponent = method.iconType === 'MaterialCommunityIcons' 
      ? MaterialCommunityIcons 
      : Ionicons;

    return (
      <View key={method.id} style={styles.paymentMethodCard}>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          activeOpacity={0.7}
          onPress={() => {
            // Handle payment method selection
            console.log('Selected payment method:', method.id);
          }}
        >
          <View style={styles.paymentIconContainer}>
            <IconComponent
              name={method.icon}
              size={22}
              color={App_Primary_color}
            />
          </View>
          <Text style={styles.paymentMethodLabel}>{method.label}</Text>
          {method.balance && (
            <Text style={styles.paymentMethodBalance}>{method.balance}</Text>
          )}
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDarkMode ? '#999' : '#666'}
          />
        </TouchableOpacity>
      </View>
    );
  };

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
          <Text style={styles.headerTitle}>Payment</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentContainer}>
          {/* Price Details Card */}
          <View style={styles.priceCard}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Total Price</Text>
              <Text style={styles.priceValue}>₹ {paymentData.totalPrice}</Text>
            </View>
            <View style={[styles.priceRow, styles.priceRowLast]}>
              <Text style={styles.priceLabel}>Total payable</Text>
              <Text style={styles.priceValue}>₹ {paymentData.totalPayable}</Text>
            </View>
          </View>

          {/* Payment Amount Options */}
          <View style={styles.paymentOptionCard}>
            {/* Pay Total */}
            <TouchableOpacity
              style={styles.radioRow}
              activeOpacity={0.7}
              onPress={() => setSelectedPayment('total')}
            >
              <View style={[
                styles.radioButton,
                selectedPayment === 'total' && styles.radioButtonSelected
              ]}>
                {selectedPayment === 'total' && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text style={styles.radioLabel}>Pay total</Text>
              <Text style={styles.radioAmount}>₹ {paymentData.totalPayable}</Text>
            </TouchableOpacity>

            {/* Pay Other Amount */}
            <TouchableOpacity
              style={styles.radioRow}
              activeOpacity={0.7}
              onPress={() => setSelectedPayment('custom')}
            >
              <View style={[
                styles.radioButton,
                selectedPayment === 'custom' && styles.radioButtonSelected
              ]}>
                {selectedPayment === 'custom' && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text style={styles.radioLabel}>Pay other amount</Text>
            </TouchableOpacity>

            {/* Custom Amount Input */}
            <TextInput
              style={styles.customAmountInput}
              placeholder="₹0"
              placeholderTextColor={isDarkMode ? '#666' : '#999'}
              keyboardType="numeric"
              value={customAmount}
              onChangeText={setCustomAmount}
              onFocus={() => setSelectedPayment('custom')}
            />
          </View>

          {/* Payment Methods */}
          <Text style={styles.sectionTitle}>Pay with</Text>
          {paymentMethods.map(renderPaymentMethod)}
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;