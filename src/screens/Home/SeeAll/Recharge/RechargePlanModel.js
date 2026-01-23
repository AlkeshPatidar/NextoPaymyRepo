// RechargePlanModals.js - Complete 3 Modals File

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import { App_Primary_color, white } from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ============== MODAL 1: PLAN DETAILS MODAL ==============
export const PlanDetailsModal = ({ visible, onClose, plan, onContinue }) => {
  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '85%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },
    modalTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      padding: 20,
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    priceLeft: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    rupeeSymbol: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginTop: 6,
      marginRight: 4,
    },
    priceValue: {
      fontSize: 40,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
      lineHeight: 48,
    },
    validityBox: {
      backgroundColor: '#F5F3FF',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 8,
      marginTop: 8,
    },
    validityText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
      marginTop: 8,
      marginBottom: 16,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#F5F5F5',
    },
    detailLabel: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
    },
    detailValue: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    benefitsSection: {
      backgroundColor: '#F9F9F9',
      padding: 16,
      borderRadius: 12,
      marginTop: 16,
      marginBottom: 12,
    },
    benefitsTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 12,
    },
    benefitItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    benefitText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      marginLeft: 10,
      flex: 1,
    },
    continueButton: {
      backgroundColor: App_Primary_color,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    continueButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
  });

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>₹{plan?.price}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={22} color="#666" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalContent}>
              {/* Price Section */}
              <View style={styles.priceSection}>
                <View style={styles.priceLeft}>
                  <Text style={styles.rupeeSymbol}>₹</Text>
                  <Text style={styles.priceValue}>{plan?.price}</Text>
                </View>
                <View style={styles.validityBox}>
                  <Text style={styles.validityText}>Validity{'\n'}{plan?.validity}</Text>
                </View>
              </View>

              {/* Details Section */}
              <Text style={styles.sectionTitle}>Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Validity</Text>
                <Text style={styles.detailValue}>{plan?.validity}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Data</Text>
                <Text style={styles.detailValue}>{plan?.data}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Voice</Text>
                <Text style={styles.detailValue}>{plan?.calls}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>SMS</Text>
                <Text style={styles.detailValue}>{plan?.sms}</Text>
              </View>

              {/* Benefits Section */}
              <View style={styles.benefitsSection}>
                <Text style={styles.benefitsTitle}>Additional Benefits</Text>
                {plan?.subscriptions?.map((benefit, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <Ionicons name="checkmark-circle" size={18} color={App_Primary_color} />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// ============== MODAL 2: SELECT OPERATOR MODAL ==============
export const SelectOperatorModal = ({ visible, onClose, onSelect }) => {
  const [selectedOperator, setSelectedOperator] = useState('');

  const operators = [
    { id: 1, name: 'Jio', icon: 'phone-portrait' },
    { id: 2, name: 'Airtel', icon: 'phone-portrait' },
    { id: 3, name: 'Vi (Vodafone Idea)', icon: 'phone-portrait' },
    { id: 4, name: 'BSNL', icon: 'phone-portrait' },
  ];

  const handleConfirm = () => {
    if (selectedOperator) {
      onSelect(selectedOperator);
      onClose();
    }
  };

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '65%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },
    modalTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    operatorsList: {
      paddingVertical: 8,
    },
    operatorItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F5F5F5',
    },
    operatorLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    operatorIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: '#F5F3FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 14,
    },
    operatorName: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    radioOuter: {
      width: 22,
      height: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioOuterSelected: {
      borderColor: App_Primary_color,
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: App_Primary_color,
    },
    confirmButton: {
      backgroundColor: App_Primary_color,
      paddingVertical: 9,
      borderRadius: 12,
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    confirmButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
    confirmButtonDisabled: {
      backgroundColor: '#CCC',
    },
  });

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Operator</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={22} color="#666" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.operatorsList}>
            {operators.map((operator) => (
              <TouchableOpacity
                key={operator.id}
                style={styles.operatorItem}
                activeOpacity={0.7}
                onPress={() => setSelectedOperator(operator.name)}
              >
                <View style={styles.operatorLeft}>
                  {/* <View style={styles.operatorIcon}>
                    <Ionicons name={operator.icon} size={22} color={App_Primary_color} />
                  </View> */}
                  <Text style={styles.operatorName}>{operator.name}</Text>
                </View>
                <View
                  style={[
                    styles.radioOuter,
                    selectedOperator === operator.name && styles.radioOuterSelected,
                  ]}
                >
                  {selectedOperator === operator.name && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={[
              styles.confirmButton,
              !selectedOperator && styles.confirmButtonDisabled,
            ]}
            onPress={handleConfirm}
            disabled={!selectedOperator}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// ============== MODAL 3: PAYMENT MODAL ==============
export const PaymentModal = ({ visible, onClose, plan, operator }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const paymentMethods = [
    { id: 1, name: 'Wallet Balance', icon: 'wallet', iconType: 'material' },
    { id: 2, name: 'Credit / Debit Card', icon: 'credit-card', iconType: 'material' },
    { id: 3, name: 'UPI', icon: 'bank', iconType: 'material' },
  ];

  const handlePayment = () => {
    if (selectedPayment) {
      // Handle payment logic here
      console.log('Processing payment with:', selectedPayment);
      onClose();
    }
  };

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '75%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },
    modalTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      padding: 20,
    },
    summaryBox: {
      backgroundColor: '#F9F9F9',
    //   padding: 18,
      borderRadius: 12,
      marginBottom: 10,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    summaryLabel: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
    },
    summaryValue: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    divider: {
      height: 1,
      backgroundColor: '#E0E0E0',
      marginVertical: 10,
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    totalLabel: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    totalValue: {
      fontSize: 22,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    paymentMethodTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
      marginBottom: 16,
    },
    paymentMethod: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#F9F9F9',
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    paymentMethodSelected: {
      borderColor: App_Primary_color,
      backgroundColor: '#F5F3FF',
    },
    paymentLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paymentIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: white,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 14,
    },
    paymentText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    radioOuter: {
      width: 22,
      height: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioOuterSelected: {
      borderColor: App_Primary_color,
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: App_Primary_color,
    },
    payButton: {
      backgroundColor: App_Primary_color,
      paddingVertical: 10,
      borderRadius: 12,
      alignItems: 'center',
      marginHorizontal: 70,
      marginVertical: 10,
    },
    payButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
    payButtonDisabled: {
      backgroundColor: '#CCC',
    },
  });

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Total Payable</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={22} color="#666" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalContent}>
              {/* Summary Box */}
              <View style={styles.summaryBox}>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Recharge Amount</Text>
                  <Text style={styles.summaryValue}>₹{plan?.price}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Operator</Text>
                  <Text style={styles.summaryValue}>{operator}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Validity</Text>
                  <Text style={styles.summaryValue}>{plan?.validity}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total Payable</Text>
                  <Text style={styles.totalValue}>₹ {plan?.price}</Text>
                </View>
              </View>

              {/* Payment Methods */}
              <Text style={styles.paymentMethodTitle}>Payment Method</Text>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethod,
                    selectedPayment === method.name && styles.paymentMethodSelected,
                  ]}
                  activeOpacity={0.7}
                  onPress={() => setSelectedPayment(method.name)}
                >
                  <View style={styles.paymentLeft}>
                    <View style={styles.paymentIcon}>
                      <MaterialCommunityIcons
                        name={method.icon}
                        size={22}
                        color={App_Primary_color}
                      />
                    </View>
                    <Text style={styles.paymentText}>{method.name}</Text>
                  </View>
                  <View
                    style={[
                      styles.radioOuter,
                      selectedPayment === method.name && styles.radioOuterSelected,
                    ]}
                  >
                    {selectedPayment === method.name && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity
            style={[
              styles.payButton,
              !selectedPayment && styles.payButtonDisabled,
            ]}
            onPress={handlePayment}
            disabled={!selectedPayment}
          >
            <Text style={styles.payButtonText}>Pay ₹ {plan?.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};