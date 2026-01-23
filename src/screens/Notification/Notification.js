import React from 'react';
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
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, white } from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IMG from '../../assets/Images';

const BillNotificationsScreen = ({ navigation }) => {
    const notifications = [
        {
            id: '1',
            company: 'Aiynar Vidyut Vitron Nagam Ltd.',
            category: 'Electricity',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF9800',
        },
        {
            id: '2',
            company: 'Airtel Digital TV',
            category: 'DTH',
            date: '12/01/2025',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Airtel_logo.svg/2560px-Airtel_logo.svg.png',
            logoColor: '#E31837',
        },
        {
            id: '3',
            company: 'Indane Gas (Indian Oil )',
            category: 'Gas',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF5722',
        },
        {
            id: '4',
            company: 'Aiynar Vidyut Vitron Nagam Ltd.',
            category: 'Electricity',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF9800',
        },
        {
            id: '5',
            company: 'Airtel Digital TV',
            category: 'DTH',
            date: '12/01/2025',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Airtel_logo.svg/2560px-Airtel_logo.svg.png',
            logoColor: '#E31837',
        },
        {
            id: '6',
            company: 'Indane Gas (Indian Oil )',
            category: 'Gas',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF5722',
        },
        {
            id: '7',
            company: 'Aiynar Vidyut Vitron Nagam Ltd.',
            category: 'Electricity',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF9800',
        },
        {
            id: '8',
            company: 'Airtel Digital TV',
            category: 'DTH',
            date: '12/01/2025',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Airtel_logo.svg/2560px-Airtel_logo.svg.png',
            logoColor: '#E31837',
        },
        {
            id: '9',
            company: 'Indane Gas (Indian Oil )',
            category: 'Gas',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF5722',
        },
        {
            id: '10',
            company: 'Aiynar Vidyut Vitron Nagam Ltd.',
            category: 'Electricity',
            date: '12/01/2025',
            logo: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
            logoColor: '#FF9800',
        },
        {
            id: '11',
            company: 'Airtel Digital TV',
            category: 'DTH',
            date: '12/01/2025',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Airtel_logo.svg/2560px-Airtel_logo.svg.png',
            logoColor: '#E31837',
        },
    ];

    const NotificationCard = ({ item }) => (
        <View style={styles.notificationCard}>
            <View style={styles.cardLeft}>
                <View style={[styles.logoContainer, { backgroundColor: item.logoColor + '20' }]}>
                    <View style={[styles.logoInner, { backgroundColor: item.logoColor }]}>
                        <Text style={styles.logoText}>
                            {item.category === 'Electricity' ? '⚡' : 
                             item.category === 'DTH' ? '📡' : '🔥'}
                        </Text>
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.companyName} numberOfLines={1}>
                        {item.company}
                    </Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.7}
                onPress={() => {}}
            >
                <Ionicons name="trash-outline" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F3FF',
        },
        headerBg: {
            height: 90,
            paddingTop: 35,
        },
        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
        },
        headerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            flex: 1,
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
            color: App_Primary_color,
        },
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        scrollContent: {
            paddingBottom: 20,
        },
        notificationCard: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: white,
            paddingHorizontal: 10,
            paddingVertical: 9,
            marginHorizontal: 10,
            // marginTop: 10,
            // borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
        },
        cardLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            gap: 12,
        },
        logoContainer: {
            width: 48,
            height: 48,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoInner: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoText: {
            fontSize: 20,
        },
        cardInfo: {
            flex: 1,
        },
        companyName: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
            marginBottom: 2,
        },
        dateText: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
        },
        deleteButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

            {/* Header */}
            <ImageBackground source={IMG.HeaderBg} style={styles.headerBg}>
                <View style={styles.headerContent}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Bill Notifications</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Notifications List */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {notifications.map((notification) => (
                    <NotificationCard key={notification.id} item={notification} />
                ))}
            </ScrollView>
        </View>
    );
};

export default BillNotificationsScreen;