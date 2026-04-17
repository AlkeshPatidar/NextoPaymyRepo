import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IMG from '../../assets/Images';

const OfferDetailScreen = ({ navigation, route }) => {
    const { isDarkMode } = useSelector(state => state.theme);
    const [isExpanded, setIsExpanded] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F3FF',
        },
        scrollContent: {
            paddingBottom: 100,
        },
        illustrationContainer: {
            backgroundColor: '#E8F0F2',
            paddingVertical: 40,
            paddingHorizontal: 20,
            alignItems: 'center',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
        },
        illustration: {
            width: '100%',
            height: 220,
            resizeMode: 'contain',
        },
        voucherCard: {
            backgroundColor: white,
            marginHorizontal: 20,
            marginTop: -30,
            borderRadius: 9,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 8,
            alignItems: 'center',
        },
        voucherTitle: {
            fontSize: 20,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            //   marginBottom: 8,
            textAlign: 'center',
        },
        voucherSubtitle: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
            marginBottom: 20,
            textAlign: 'center',
        },
        claimButton: {
            backgroundColor: App_Primary_color,
            width: '80%',
            paddingVertical: 8,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 12,
            shadowColor: '#6B4CE6',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
        },
        claimButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: white,
        },
        giftNowButton: {
            backgroundColor: white,
            width: '80%',
            paddingVertical: 8,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 2,
            borderColor: App_Primary_color,
        },
        giftNowButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: App_Primary_color,
        },
        moreDetailsCard: {
            backgroundColor: white,
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 9,
            padding: 18,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        moreDetailsHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        moreDetailsTitle: {
            fontSize: 18,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
        },
        expandIcon: {
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: '#F5F3FF',
            justifyContent: 'center',
            alignItems: 'center',
        },
        detailRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        detailIcon: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: '#F5F3FF',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 16,
        },
        detailText: {
            flex: 1,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
            //   lineHeight: 20,
        },
        expandedContent: {
            marginTop: 12,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
        },
        expandedText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            lineHeight: 20,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8F0F2" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Illustration Section */}
                <Image
                    source={IMG.offerDetailBanner}
                    style={styles.illustration}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        top: 40,
                        left: 20,
                    }}
                >
                    <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                </TouchableOpacity>

                {/* Voucher Card */}
                <View style={styles.voucherCard}>
                    <Text style={styles.voucherTitle}>Gift Voucher</Text>
                    <Text style={styles.voucherSubtitle}>
                        on purchase of gift voucher with NextoPay
                    </Text>

                    <TouchableOpacity
                        style={styles.claimButton}
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Text style={styles.claimButtonText}>Claim Offer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.giftNowButton}
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Text style={styles.giftNowButtonText}>GIFT NOW</Text>
                    </TouchableOpacity>
                </View>

                {/* More Details Card */}
                <View style={styles.moreDetailsCard}>
                    <TouchableOpacity
                        style={styles.moreDetailsHeader}
                        activeOpacity={0.7}
                        onPress={() => setIsExpanded(!isExpanded)}
                    >
                        <Text style={styles.moreDetailsTitle}>More Details</Text>
                        <View style={styles.expandIcon}>
                            <Ionicons
                                name={isExpanded ? "chevron-up" : "chevron-down"}
                                size={20}
                                color={App_Primary_color}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Expires On */}
                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Ionicons name="calendar-outline" size={20} color={'black'} />
                        </View>
                        <Text style={styles.detailText}>
                            Expires on 31 may 2022, 11:59 PM
                        </Text>
                    </View>

                    {/* Offer Details */}
                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Ionicons name="alert-circle-outline" size={20} color={'black'} />
                        </View>
                        <Text style={styles.detailText}>Offer Details</Text>
                    </View>

                    {/* Expanded Content */}
                    {isExpanded && (
                        <View style={styles.expandedContent}>
                            <Text style={styles.expandedText}>
                                • This offer is valid only on gift voucher purchases through NextoPay.{'\n\n'}
                                • Cashback will be credited within 24-48 hours of successful transaction.{'\n\n'}
                                • Terms and conditions apply.{'\n\n'}
                                • Offer cannot be combined with other promotions.{'\n\n'}
                                • NextoPay reserves the right to modify or cancel this offer at any time.
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default OfferDetailScreen;