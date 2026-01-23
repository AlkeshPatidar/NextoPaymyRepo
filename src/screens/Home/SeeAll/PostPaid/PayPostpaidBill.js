import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
    App_Primary_color,
    white
} from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IMG from '../../../../assets/Images';

const PayPostpaidBill = ({ navigation, route }) => {
    const userInfo = {
        name: 'Arlene McCoy',
        mobile: '+919 1989-665',
    };

    const amount = '₹500';

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E8E3F5',
        },
        headerBg: {
            height: 90,
            paddingTop: 35,
        },
        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 15,
            gap: 20,
        },
        backButton: {
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTitle: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#4A3A7A',
            flex: 1,
        },
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        scrollContent: {
            paddingHorizontal: 16,
            paddingTop: 10,
            paddingBottom: 30,
            flex: 1,
        },
        userCard: {
            backgroundColor: white,
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
        },
        userInfoRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
        },
        userAvatar: {
            width: 45,
            height: 45,
            borderRadius: 22.5,
            marginRight: 12,
        },
        userInfo: {
            flex: 1,
        },
        userName: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 2,
        },
        userMobile: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
        },
        amountContainer: {
            paddingTop: 8,
            backgroundColor: '#F6F6F6',
            padding: 8,
            borderRadius: 8,
        },
        amountText: {
            fontSize: 20,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
        },
        bottomSection: {
            paddingHorizontal: 16,
            paddingBottom: 30,
        },
        secureText: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            textAlign: 'center',
            marginBottom: 12,
        },
        proceedButton: {
            backgroundColor: App_Primary_color,
            marginHorizontal: 50,
            alignItems: 'center',
            paddingVertical: 14,
            borderRadius: 10,
            shadowColor: App_Primary_color,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
        },
        proceedButtonText: {
            color: white,
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8E3F5" />

            {/* Header with Background Image */}
            <ImageBackground
                source={IMG.HeaderBg}
                style={styles.headerBg}
            >
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Pay Ajmer Vidyut Vitran ....</Text>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            <ScrollView
                style={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* User Info and Amount Card */}
                <View style={styles.userCard}>
                    <View style={styles.userInfoRow}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
                            style={styles.userAvatar}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{userInfo.name}</Text>
                            <Text style={styles.userMobile}>{userInfo.mobile}</Text>
                        </View>
                    </View>
                    <Text style={{ ...styles.userMobile, borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#E0E0E0' }}>{'Email'}    {'Email id'}</Text>


                    <View style={styles.amountContainer}>
                        <Text style={styles.amountText}>{amount}</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Section with Secure Text and Proceed Button */}
            <View style={styles.bottomSection}>
                <Text style={styles.secureText}>
                    This payment is secured by Nextopay
                </Text>
                <TouchableOpacity
                    style={styles.proceedButton}
                    activeOpacity={0.8}
                    onPress={() => {
                        // Handle proceed action
                        console.log('Proceeding with payment');
                    }}
                >
                    <Text style={styles.proceedButtonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PayPostpaidBill;