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
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
  App_Primary_color,
  white
} from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PayDTHBillScreen = ({ navigation, route }) => {
  const [selectedPayment, setSelectedPayment] = useState('nextopay');
  const [showBillDetails, setShowBillDetails] = useState(true);
  const [cvvDebit, setCvvDebit] = useState('');
  const [cvvCredit1, setCvvCredit1] = useState('');
  const [cvvCredit2, setCvvCredit2] = useState('');

  const billData = {
    provider: 'Airtel Digital TV',
    subscriberId: '130123023976',
    customerName: 'Sanyam Sahalot',
    amount: '241',
    dueDate: '26-May-2022',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e2dfee',
    },
    header: {
      backgroundColor: '#e2dfee',
      paddingTop: 35,
      paddingBottom: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 3,
      borderBottomColor: App_Primary_color,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#4A3A7A',
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 30,
    },
    billCard: {
      backgroundColor: white,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 3,
    },
    providerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },
    providerLogo: {
      width: 35,
      height: 35,
      marginRight: 10,
    },
    providerInfo: {
      flex: 1,
    },
    providerName: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    subscriberId: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    billDetailsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    billDetailsTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    hideButton: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    customerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    customerLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    customerName: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
    },
    amountBox: {
      backgroundColor: '#F9F9F9',
      padding: 14,
      borderRadius: 8,
    },
    amountText: {
      fontSize: 28,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
    },
    dueDate: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#FF3B30',
      marginTop: 4,
    },
    debitFormCard: {
      backgroundColor: white,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 3,
    },
    debitFormTitle: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 16,
    },
    walletOption: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 16,
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },
    walletLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    walletIcon: {
      marginRight: 12,
    },
    walletInfo: {
      flex: 1,
    },
    walletText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#666',
    },
    walletBalance: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    statusBadge: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#34C759',
      marginLeft: 8,
    },
    infoIcon: {
      marginLeft: 8,
    },
    paymentOption: {
      marginBottom: 16,
    },
    paymentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    paymentLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    radioOuter: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    radioOuterSelected: {
      borderColor: App_Primary_color,
    },
    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: App_Primary_color,
    },
    paymentTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      flex: 1,
    },
    paymentAmount: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginLeft: 8,
    },
    cardIcon: {
      marginLeft: 8,
    },
    bankName: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      marginLeft: 30,
      marginBottom: 8,
    },
    rbiNote: {
      backgroundColor: '#F5F3FF',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 6,
      marginLeft: 30,
      marginBottom: 12,
    },
    rbiText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: App_Primary_color,
    },
    cvvInput: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 30,
    },
    cvvLabel: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      marginRight: 10,
    },
    cvvBox: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 6,
      width: 80,
      backgroundColor: white,
    },
    cvvTextInput: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#1A1A1A',
      padding: 0,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e2dfee" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={20} color={App_Primary_color} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pay Aritel Digital TV Bill</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        {/* Bill Details Card */}
        <View style={styles.billCard}>
          <View style={styles.providerHeader}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Airtel_DTH_logo.svg/2560px-Airtel_DTH_logo.svg.png' }}
              style={styles.providerLogo}
              resizeMode="contain"
            />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>{billData.provider}</Text>
              <Text style={styles.subscriberId}>{billData.subscriberId}</Text>
            </View>
          </View>

          <View style={styles.billDetailsHeader}>
            <Text style={styles.billDetailsTitle}>Bill Details</Text>
            <TouchableOpacity onPress={() => setShowBillDetails(!showBillDetails)}>
              <Text style={styles.hideButton}>{showBillDetails ? 'HIDE' : 'SHOW'}</Text>
            </TouchableOpacity>
          </View>

          {showBillDetails && (
            <>
              <View style={styles.customerRow}>
                <Text style={styles.customerLabel}>Customer Name</Text>
                <Text style={styles.customerName}>{billData.customerName}</Text>
              </View>

              <View style={styles.amountBox}>
                <Text style={styles.amountText}>₹{billData.amount}</Text>
                <Text style={styles.dueDate}>Due Date: {billData.dueDate}</Text>
              </View>
            </>
          )}
        </View>

        {/* Debit Form Card */}
        <View style={styles.debitFormCard}>
          <Text style={styles.debitFormTitle}>Debit Form</Text>

          {/* Nextopay Wallet */}
          <TouchableOpacity
            style={styles.walletOption}
            activeOpacity={0.7}
            onPress={() => setSelectedPayment('nextopay')}
          >
            <View style={styles.walletLeft}>
              <MaterialCommunityIcons
                name="wallet"
                size={22}
                color="#999"
                style={styles.walletIcon}
              />
              <View style={styles.walletInfo}>
                <Text style={styles.walletText}>Nextopay wallet ₹ 22</Text>
                <Text style={styles.statusBadge}>Status</Text>
              </View>
            </View>
            <Ionicons name="information-circle-outline" size={18} color="#999" style={styles.infoIcon} />
          </TouchableOpacity>

          {/* Nextopay Account */}
          <TouchableOpacity
            style={styles.paymentOption}
            activeOpacity={0.7}
            onPress={() => setSelectedPayment('nextopay-account')}
          >
            <View style={styles.paymentHeader}>
              <View style={styles.paymentLeft}>
                <View style={[styles.radioOuter, selectedPayment === 'nextopay-account' && styles.radioOuterSelected]}>
                  {selectedPayment === 'nextopay-account' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentTitle}>Nextopay Account</Text>
                <Text style={styles.paymentAmount}>₹10.00</Text>
              </View>
            </View>
            <View style={styles.rbiNote}>
              <Text style={styles.rbiText}>Save cards as per latest RBI quidlines</Text>
            </View>
          </TouchableOpacity>

          {/* Debit Card */}
          <TouchableOpacity
            style={styles.paymentOption}
            activeOpacity={0.7}
            onPress={() => setSelectedPayment('debit-card')}
          >
            <View style={styles.paymentHeader}>
              <View style={styles.paymentLeft}>
                <View style={[styles.radioOuter, selectedPayment === 'debit-card' && styles.radioOuterSelected]}>
                  {selectedPayment === 'debit-card' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentTitle}>Debit Card XX 2074</Text>
                <MaterialCommunityIcons name="credit-card" size={20} color="#EB001B" style={styles.cardIcon} />
              </View>
            </View>
            <Text style={styles.bankName}>HDFC Bank</Text>
            <View style={styles.rbiNote}>
              <Text style={styles.rbiText}>Save cards as per latest RBI quidlines</Text>
            </View>
            <View style={styles.cvvInput}>
              <Text style={styles.cvvLabel}>Enter CVV Number</Text>
              <View style={styles.cvvBox}>
                <TextInput
                  style={styles.cvvTextInput}
                  placeholder=""
                  value={cvvDebit}
                  onChangeText={setCvvDebit}
                  keyboardType="numeric"
                  maxLength={3}
                  secureTextEntry
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Credit Card 1 */}
          <TouchableOpacity
            style={styles.paymentOption}
            activeOpacity={0.7}
            onPress={() => setSelectedPayment('credit-card-1')}
          >
            <View style={styles.paymentHeader}>
              <View style={styles.paymentLeft}>
                <View style={[styles.radioOuter, selectedPayment === 'credit-card-1' && styles.radioOuterSelected]}>
                  {selectedPayment === 'credit-card-1' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentTitle}>Credit Card XX 2002</Text>
                <FontAwesome name="cc-visa" size={20} color="#1A1F71" style={styles.cardIcon} />
              </View>
            </View>
            <Text style={styles.bankName}>ICICI Bank</Text>
            <View style={styles.rbiNote}>
              <Text style={styles.rbiText}>Save cards as per latest RBI quidlines</Text>
            </View>
            <View style={styles.cvvInput}>
              <Text style={styles.cvvLabel}>Enter CVV Number</Text>
              <View style={styles.cvvBox}>
                <TextInput
                  style={styles.cvvTextInput}
                  placeholder=""
                  value={cvvCredit1}
                  onChangeText={setCvvCredit1}
                  keyboardType="numeric"
                  maxLength={3}
                  secureTextEntry
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Credit Card 2 */}
          <TouchableOpacity
            style={styles.paymentOption}
            activeOpacity={0.7}
            onPress={() => setSelectedPayment('credit-card-2')}
          >
            <View style={styles.paymentHeader}>
              <View style={styles.paymentLeft}>
                <View style={[styles.radioOuter, selectedPayment === 'credit-card-2' && styles.radioOuterSelected]}>
                  {selectedPayment === 'credit-card-2' && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.paymentTitle}>Credit Card XX 2117</Text>
                <FontAwesome name="cc-visa" size={20} color="#1A1F71" style={styles.cardIcon} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={{
        backgroundColor:App_Primary_color,
        marginBottom:30,
        marginHorizontal:70,
        marginVertical:10,
        alignItems:'center',
        paddingVertical:10,
        borderRadius:9
      }}>
       <Text style={{color:'white', fontSize:16, fontFamily:FONTS_FAMILY.Poppins_Medium}}>Pay</Text>

      </TouchableOpacity>
      {/* <View style={{height:100}}/> */}
    </View>
  );
};

export default PayDTHBillScreen;