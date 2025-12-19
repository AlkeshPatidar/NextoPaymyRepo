import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    white
} from '../../common/Colors/colors';

const PaymentDetailsModal = ({navigation, visible, onClose, isDarkMode, paymentData }) => {
    // Default payment data
    const defaultData = {
        payable: '₹62600',
        freight: '₹62600',
        payment: '₹56340',
        paymentGateway: 'MMT/IMPS/534212030923/IMPSTX',
        paymentDate: '08-Dec-25',
        bank: 'Aatmara/IDFC bank',
        totalPayable: '₹62600',
        totalPaid: '₹56340',
        balance: '₹6260'
    };

    const data = paymentData || defaultData;

    const styles = StyleSheet.create({
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
        },
        modalContainer: {
            backgroundColor: isDarkMode ? dark33 : white,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 20,
            paddingBottom: 30,
            // maxHeight: '80%',
        },
        modalHandle: {
            width: 40,
            height: 4,
            backgroundColor: isDarkMode ? '#444' : '#DDD',
            borderRadius: 2,
            alignSelf: 'center',
            marginTop: 12,
            marginBottom: 20,
        },
        modalContent: {
            paddingHorizontal: 20,
        },
        headerTitle: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 20,
        },
        sectionRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: isDarkMode ? '#333' : '#F0F0F0',
        },
        sectionTitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: isDarkMode ? white : '#000',
        },
        sectionValue: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        paymentSection: {
            marginTop: 10,
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: isDarkMode ? '#333' : '#F0F0F0',
        },
        paymentTitle: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 15,
        },
        paymentGatewayContainer: {
            marginBottom: 20,
        },
        paymentGatewayText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
            // marginBottom: 2,
        },
        paymentDateText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
            textAlign: 'right',
        },
        bankText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        summaryContainer: {
            backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F5F5',
            borderRadius: 12,
            padding: 8,
            marginTop: 20,
            marginBottom: 20,
        },
        summaryRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        summaryItem: {
            flex: 1,
            alignItems: 'center',
        },
        summaryLabel: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
            marginBottom: 4,
        },
        summaryValue: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        payButton: {
            backgroundColor: App_Primary_color,
            borderRadius: 20,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        payButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
        },
        paymentGatewayRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 4,
        },
    });

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={onClose}
                pointerEvents="box-none"
            >
                <View 
                    onStartShouldSetResponder={() => true}
                    style={{ width: '100%' }}
                >
                    <View style={styles.modalContainer}>
                        {/* Handle */}
                        <View style={styles.modalHandle} />

                        <ScrollView 
                            showsVerticalScrollIndicator={false}
                            style={styles.modalContent}
                        >
                            {/* Header */}
                            <Text style={styles.headerTitle}>Payment details</Text>

                            {/* Payable Section */}
                            <View style={styles.sectionRow}>
                                <Text style={styles.sectionTitle}>Payable</Text>
                                <Text style={styles.sectionValue}>{data.payable}</Text>
                            </View>

                            {/* Freight */}
                            <View style={styles.sectionRow}>
                                <Text style={styles.sectionTitle}>Freight</Text>
                                <Text style={styles.sectionValue}>{data.freight}</Text>
                            </View>

                            {/* Payment Section */}
                            <View style={styles.paymentSection}>
                                <View style={styles.sectionRow}>
                                    <Text style={styles.paymentTitle}>Payment</Text>
                                    <Text style={styles.sectionValue}>{data.payment}</Text>
                                </View>

                                <View style={styles.paymentGatewayContainer}>
                                    <View style={styles.paymentGatewayRow}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.paymentGatewayText}>
                                                Payment Gateway
                                            </Text>
                                            <Text style={styles.paymentGatewayText}>
                                                {data.paymentGateway}
                                            </Text>
                                            <Text style={styles.bankText}>
                                                {data.bank}
                                            </Text>
                                        </View>
                                        <Text style={styles.paymentDateText}>
                                            {data.paymentDate}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Summary Box */}
                            <View style={styles.summaryContainer}>
                                <View style={styles.summaryRow}>
                                    <View style={styles.summaryItem}>
                                        <Text style={styles.summaryLabel}>PAYABLE</Text>
                                        <Text style={styles.summaryValue}>{data.totalPayable}</Text>
                                    </View>
                                    <View style={styles.summaryItem}>
                                        <Text style={styles.summaryLabel}>PAID</Text>
                                        <Text style={styles.summaryValue}>{data.totalPaid}</Text>
                                    </View>
                                    <View style={styles.summaryItem}>
                                        <Text style={styles.summaryLabel}>BALANCE</Text>
                                        <Text style={styles.summaryValue}>{data.balance}</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Pay Button */}
                            <TouchableOpacity 
                                style={styles.payButton}
                                onPress={() => {
                                    // Handle payment action
                                    // console.log('Pay button pressed');
                                    navigation.navigate('PaymentScreen')
                                    onClose();
                                }}
                            >
                                <Text style={styles.payButtonText}>Pay {data.balance}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default PaymentDetailsModal;