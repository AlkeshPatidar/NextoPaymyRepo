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
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import IMG from '../../assets/Images';

const OffersScreen = ({ navigation }) => {
    const { isDarkMode } = useSelector(state => state.theme);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const offers = [
        {
            id: 1,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '5d',
            type: 'red', // red or gold
        },
        {
            id: 2,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '2d',
            type: 'gold',
        },
        {
            id: 3,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '5d',
            type: 'red',
        },
        {
            id: 4,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '2d',
            type: 'gold',
        },
        {
            id: 5,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '5d',
            type: 'red',
        },
        {
            id: 6,
            title: 'Gift Voucher',
            cashback: 'Up to ₹75 Cashback*',
            category: 'Fashion & Cloth',
            days: '2d',
            type: 'gold',
        },
    ];

    const OfferCard = ({ item }) => (
        <TouchableOpacity
            style={styles.offerCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('OfferDetailScreen', { offer: item })}
        >
            <View style={styles.voucherContainer}>
               <Image source={IMG.VoucherImage}
               style={{height:'100%', width:'100%', borderRadius:9}}
               />
            </View>

            {/* Offer Details */}
            <View style={styles.offerDetails}>
                <Text style={styles.offerTitle}>{item.title}</Text>
                <Text style={styles.offerCashback}>{item.cashback}</Text>
                <View style={styles.categoryContainer}>
                    <MaterialCommunityIcons name="tshirt-crew-outline" size={16} color="#999" />
                    <Text style={styles.categoryText}>{item.category}</Text>
                </View>
            </View>

            {/* Days Badge */}
            <View style={styles.daysBadge}>
                <Text style={styles.daysText}>{item.days}</Text>
            </View>
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F3FF',
        },
        headerGradient: {
            paddingTop: 50,
            paddingBottom: 20,
            paddingHorizontal: 20,
        },
        headerContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10
        },
        backButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'rgba(255,255,255,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTitle: {
            fontSize: 20,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: App_Primary_color,
            flex: 1,
            marginLeft: 15,
        },
        menuButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'rgba(255,255,255,0.2)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        filterSection: {
            backgroundColor: white,
            marginHorizontal: 10,
            //   marginTop: -10,
            marginBottom: 15,
            borderRadius: 16,
            padding: 7,
            flexDirection: 'row',
            gap: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
        },
        filterButton: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            backgroundColor: '#F5F3FF',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 12,
        },
        filterButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#85949F',
        },
        offersGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            paddingBottom: 100,
        },
        offerCard: {
            width: '48%',
            backgroundColor: white,
            borderRadius: 9,
            marginBottom: 15,
            marginHorizontal: '1%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
            overflow: 'hidden',
            position: 'relative',
            paddingBottom:20
        },
        voucherContainer: {
            width: '100%',
            aspectRatio: 1.4,
            padding: 8,
        },
        voucherImage: {
            flex: 1,
            borderRadius: 12,
            flexDirection: 'row',
            overflow: 'hidden',
        },
        voucherLeft: {
            flex: 2,
            padding: 12,
            justifyContent: 'space-between',
        },
        logoBox: {
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: white,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#DDD',
        },
        logoText: {
            fontSize: 10,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            color: '#666',
        },
        companyText: {
            fontSize: 8,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            marginTop: 2,
        },
        voucherTitle: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            marginTop: 8,
        },
        voucherWave: {
            marginVertical: 4,
        },
        waveLine: {
            borderBottomWidth: 2,
            borderStyle: 'solid',
            width: '80%',
        },
        voucherDescription: {
            fontSize: 6,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            lineHeight: 8,
        },
        qrCode: {
            alignSelf: 'flex-start',
            marginTop: 4,
        },
        voucherRight: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
        },
        priceLabel: {
            fontSize: 6,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: white,
            transform: [{ rotate: '-90deg' }],
            position: 'absolute',
            top: 15,
        },
        priceSymbol: {
            fontSize: 28,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            color: white,
        },
        priceValue: {
            fontSize: 48,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            color: white,
            lineHeight: 52,
        },
        priceNote: {
            fontSize: 5,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: white,
            transform: [{ rotate: '-90deg' }],
            position: 'absolute',
            bottom: 25,
            width: 100,
            textAlign: 'center',
        },
        offerDetails: {
            padding: 12,
            paddingTop: 8,
        },
        offerTitle: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
            marginBottom: 4,
        },
        offerCashback: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
            marginBottom: 6,
        },
        categoryContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        categoryText: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
        },
        daysBadge: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#5B2D8F40',
            paddingHorizontal: 10,
            paddingVertical: 4,
            // borderRadius: 12,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
        },
        daysText: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#6B4CE6',
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6B4CE6" />

            {/* Header with Gradient
      <LinearGradient
        colors={['#8B5CF6', '#6B4CE6', '#5B3CC6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={white} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Offers</Text>

          <TouchableOpacity
            style={styles.menuButton}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Ionicons name="ellipsis-vertical" size={24} color={white} />
          </TouchableOpacity>
        </View>
      </LinearGradient> */}

            <ImageBackground source={IMG.HeaderBg}
                style={{ height: 90, paddingTop: 35, }}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Offers</Text>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { }}
                    >
                        <Ionicons name="ellipsis-vertical" size={20} color={App_Primary_color} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{height:3, width:'100%', backgroundColor: App_Primary_color, bottom:10}}/>

            {/* Filter Section */}
            <View style={styles.filterSection}>
                <TouchableOpacity
                    style={styles.filterButton}
                    activeOpacity={0.7}
                    onPress={() => { }}
                >
                    <MaterialCommunityIcons name="sort-variant" size={20} color="#6B4CE6" />
                    <Text style={styles.filterButtonText}>Preference</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    activeOpacity={0.7}
                    onPress={() => { }}
                >
                    <Ionicons name="options-outline" size={20} color="#6B4CE6" />
                    <Text style={styles.filterButtonText}>Filter</Text>
                    <Ionicons name="chevron-down" size={16} color="#6B4CE6" />
                </TouchableOpacity>
            </View>

            {/* Offers Grid */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <View style={styles.offersGrid}>
                    {offers.map((offer) => (
                        <OfferCard key={offer.id} item={offer} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default OffersScreen;