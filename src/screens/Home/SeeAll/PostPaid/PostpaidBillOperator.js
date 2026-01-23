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

const PostpaidBillScreen = ({ navigation, route }) => {
    const [selectedOperator, setSelectedOperator] = useState('airtel');

    const userInfo = {
        name: 'Arlene McCoy',
        mobile: '+919 1989-665',
    };

    const operators = [
        {
            id: 'airtel',
            name: 'Airtel Postpaid',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpM-JwgyHyM9_BBqNoJ2erQ9tJfPXAeC9Wg&s',
            bgColor: '#FF0000',
        },
        {
            id: 'bsnl',
            name: 'BSNL Postpaid',
            logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bsnl-logo-icon.png',
            bgColor: '#FFD700',
        },
        {
            id: 'jio',
            name: 'Jio Postpaid',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xvVNAqzbKEXdVtD7yKdhB5YsHTe-egPbBA&s',
            bgColor: '#0033A0',
        },
        {
            id: 'tata',
            name: 'Tata Tatatreleservices Postpaid - CDMA',
            logo: 'https://smest.in/_next/image?url=https%3A%2F%2Fissuer-master-article-logos.s3.ap-south-1.amazonaws.com%2Ftatacap.png&w=256&q=75',
            bgColor: '#FFFFFF',
        },
        {
            id: 'vi',
            name: 'VI Postpaid',
            logo: 'https://w7.pngwing.com/pngs/939/821/png-transparent-vi%E2%84%A2-vodafone-idea-hd-logo.png',
            bgColor: '#FFFFFF',
        },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E8E3F5',
        },
        header: {
            backgroundColor: '#E8E3F5',
            paddingTop: 35,
            paddingBottom: 16,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        headerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
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
            color: '#1A1A1A',
        },
        notificationIcon: {
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
        },
        scrollContent: {
            paddingHorizontal: 16,
            paddingTop: 10,
            paddingBottom: 30,
        },
        userCard: {
            backgroundColor: white,
            borderRadius: 12,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 3,
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
        operatorCard: {
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
        operatorTitle: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 16,
        },
        operatorOption: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
        },
        operatorOptionLast: {
            borderBottomWidth: 0,
        },
        operatorLogoContainer: {
            width: 45,
            height: 45,
            borderRadius: 22.5,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
            overflow: 'hidden',
        },
        operatorLogo: {
            width: '70%',
            height: '70%',

        },
        operatorName: {
            flex: 1,
            fontSize: 13,
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
            borderColor: '#34C759',
        },
        radioInner: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: '#34C759',
        },
        checkIcon: {
            width: 22,
            height: 22,
            borderRadius: 11,
            backgroundColor: '#34C759',
            justifyContent: 'center',
            alignItems: 'center',
        },
        confirmButton: {
            backgroundColor: App_Primary_color,
            marginHorizontal: 66,
            marginBottom: 30,
            alignItems: 'center',
            paddingVertical: 14,
            borderRadius: 10,
            shadowColor: App_Primary_color,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
        },
        confirmButtonText: {
            color: white,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8E3F5" />

            {/* Header */}
            {/* <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Postpaid Bill</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationIcon}
          activeOpacity={0.7}
        >
          <View style={{
            backgroundColor: '#FF9500',
            borderRadius: 6,
            padding: 6,
          }}>
            <Text style={{
              color: white,
              fontSize: 14,
              fontFamily: FONTS_FAMILY.Poppins_Bold,
            }}>B</Text>
          </View>
        </TouchableOpacity>
      </View> */}
            <ImageBackground
                source={IMG.HeaderBg}
                style={{ height: 90, paddingTop: 35 }}
            >
                <View style={{
                    flexDirection: 'row',
                    //   justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    marginBottom: 15,
                    gap: 30
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Postpaid Bill</Text>
                </View>
            </ImageBackground>
            <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

            <ScrollView
                style={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* User Info Card */}
                <View style={styles.userCard}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
                        style={styles.userAvatar}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{userInfo.name}</Text>
                        <Text style={styles.userMobile}>{userInfo.mobile}</Text>
                    </View>
                </View>

                {/* Select Operator Card */}
                <View style={styles.operatorCard}>
                    <Text style={styles.operatorTitle}>Select your Operator</Text>

                    {operators.map((operator, index) => (
                        <TouchableOpacity
                            key={operator.id}
                            style={[
                                styles.operatorOption,
                                index === operators.length - 1 && styles.operatorOptionLast
                            ]}
                            activeOpacity={0.7}
                            onPress={() => setSelectedOperator(operator.id)}
                        >
                            <View style={[
                                styles.operatorLogoContainer,
                                // { backgroundColor: operator.bgColor }
                            ]}>
                                <Image
                                    source={{ uri: operator.logo }}
                                    style={styles.operatorLogo}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.operatorName}>{operator.name}</Text>
                            {selectedOperator === operator.id ? (
                                <View style={styles.checkIcon}>
                                    <Ionicons name="checkmark" size={14} color={white} />
                                </View>
                            ) : (
                                <View style={styles.radioOuter} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Confirm Button */}
            <TouchableOpacity
                style={styles.confirmButton}
                activeOpacity={0.8}
                onPress={() => {
                    // Handle confirm action
                    console.log('Selected operator:', selectedOperator);
                navigation.navigate('PayPostpaidBill', { operator: selectedOperator })
                }}
            >
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PostpaidBillScreen;