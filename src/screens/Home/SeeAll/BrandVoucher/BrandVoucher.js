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
import { App_Primary_color, white } from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IMG from '../../../../assets/Images';

const BrandsVouchersScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('Featured');

    const brands = [
        {
            id: '1',
            name: 'Spotify',
            cashback: '3%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
            bgColor: '#1DB954',
        },
        {
            id: '2',
            name: 'Amazon',
            cashback: '5%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
            bgColor: '#232F3E',
        },
        {
            id: '3',
            name: 'Uber',
            cashback: '4%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
            bgColor: '#000000',
        },
        {
            id: '4',
            name: 'Netflix',
            cashback: '2%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
            bgColor: '#E50914',
        },
        {
            id: '5',
            name: 'Nike',
            cashback: '6%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
            bgColor: '#000000',
        },
        {
            id: '6',
            name: 'Flipkart',
            cashback: '8%',
            logo: 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg',
            bgColor: '#2874F0',
        },
        {
            id: '7',
            name: 'Domino\'s',
            cashback: '7%',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg',
            bgColor: '#0078AE',
        },
        {
            id: '8',
            name: 'Myntra',
            cashback: '5%',
            logo: 'https://constant.myntassets.com/web/assets/img/MyntraWebSprite_27_01_2021.png',
            bgColor: '#FF3F6C',
        },
    ];

    const BrandCard = ({ item }) => (
        <TouchableOpacity
            style={styles.brandCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('VoucherDetailsScreen', { brand: item })}
        >
            <View style={styles.brandLeft}>
                <View style={[styles.brandLogo, { backgroundColor: '#F5F5F5' }]}>
                    <Image
                        source={{ uri: item.logo }}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.brandName}>{item.name}</Text>
            </View>
            <Text style={styles.cashbackText}>{item.cashback}</Text>
        </TouchableOpacity>
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
        tabsContainer: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 12,
            gap: 10,
            backgroundColor: white,
            marginHorizontal: 16,
            marginTop: 5,
            marginBottom: 12,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
        },
        tabButton: {
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 6,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        tabButtonActive: {
            backgroundColor: '#E8E3F5',
        },
        tabText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#666',
        },
        tabTextActive: {
            color: App_Primary_color,
        },
        filterButton: {
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 6,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        filterText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#666',
        },
        contentSection: {
            backgroundColor: white,
            marginHorizontal: 16,
            borderRadius: 10,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
            marginBottom: 100,
        },
        sectionTitle: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 12,
        },
        brandCard: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
        },
        brandLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            flex: 1,
        },
        brandLogo: {
            width: 40,
            height: 40,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        logoImage: {
            width: 32,
            height: 32,
        },
        brandName: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
        },
        cashbackText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#4CAF50',
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

                        <Text style={styles.headerTitle}>Brand & Vouchers</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        selectedTab === 'Featured' && styles.tabButtonActive,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setSelectedTab('Featured')}
                >
                    <Ionicons
                        name="star"
                        size={14}
                        color={selectedTab === 'Featured' ? App_Primary_color : '#666'}
                    />
                    <Text
                        style={[
                            styles.tabText,
                            selectedTab === 'Featured' && styles.tabTextActive,
                        ]}
                    >
                        Featured
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    activeOpacity={0.7}
                >
                    <MaterialCommunityIcons name="filter-variant" size={14} color="#666" />
                    <Text style={styles.filterText}>Filter</Text>
                    <Ionicons name="chevron-down" size={12} color="#666" />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentSection}>
                    <Text style={styles.sectionTitle}>
                        Now Select Flat 5% cashback merchant
                    </Text>

                    {brands.map((brand) => (
                        <BrandCard key={brand.id} item={brand} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default BrandsVouchersScreen;