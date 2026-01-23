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
    ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
    App_Primary_color,
    white
} from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IMG from '../../../../assets/Images';

const BroadbandProviderScreen = ({ navigation, route }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const providers = [
        {
            id: '1',
            name: 'ACT Broadband',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxK1UkCejtru9tXvnk1WuzMXjW-wx-F8yHw&s',
            type: 'popular',
        },
        {
            id: '2',
            name: 'Airtel Broadband',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFKtxxBz47sWBNQtS8QxxvVfVQJlCA-6GGg&s',
            type: 'popular',
        },
        {
            id: '3',
            name: 'Asianet Broadband',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWlyRv5M7IT45utqlvSMLEGmuh480z2J2Xg&s',
            type: 'popular',
        },
        {
            id: '4',
            name: 'Atria Convergence Technologies Pvt Ltd',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxK1UkCejtru9tXvnk1WuzMXjW-wx-F8yHw&s',
            type: 'popular',
        },
        {
            id: '5',
            name: 'Connect Broadband',
            logo: 'https://cdn-icons-png.flaticon.com/512/7749/7749544.png',
            type: 'popular',
        },
        {
            id: '6',
            name: 'Hathway Broadband/Dataone - Corporate',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ6P2qZwWAQAJRDz7OgYS3CZ9pjsQdxYKVA&s',
            type: 'popular',
        },
        {
            id: '7',
            name: 'MTNL Broadband',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ6P2qZwWAQAJRDz7OgYS3CZ9pjsQdxYKVA&s',
            type: 'popular',
        },
     
    ];

    const popularProviders = providers.filter(p => p.type === 'popular');
    const allProviders = providers;

    const filteredProviders = searchQuery
        ? allProviders.filter(provider =>
            provider.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : allProviders;

    const renderProviderItem = (item) => (
        <TouchableOpacity
            key={item.id}
            style={styles.providerItem}
            activeOpacity={0.7}
            onPress={() => {
                // Navigate to next screen
                navigation.navigate('BroadbandEnterscreen', { providerName: item.name });
            }}
        >
            <Image
                source={{ uri: item.logo }}
                style={styles.providerLogo}
                resizeMode="contain"
            />
            <Text style={styles.providerName}>{item.name}</Text>
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
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
            fontSize: 18,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#4A3A7A',
            flex: 1,
        },
        notificationIcon: {
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        searchContainer: {
            backgroundColor: white,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginHorizontal: 16,
            borderRadius: 6,
            elevation:2
        },
        searchBox: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
        },
        searchIcon: {
            marginRight: 8,
        },
        searchInput: {
            flex: 1,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            padding: 0,
        },
        scrollContent: {
            flex: 1,
        },
        section: {
            backgroundColor: white,
            marginTop: 8,
            paddingVertical: 8,
            marginHorizontal: 16,
            borderRadius: 6,
            elevation:2
        },
        sectionHeader: {
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#F9F9F9',
        },
        sectionTitle: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#666',
        },
        providerItem: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: white,
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
        },
        providerLogo: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 12,
            backgroundColor: '#F0F0F0',
        },
        providerName: {
            flex: 1,
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
            lineHeight: 18,
        },
        emptyState: {
            padding: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        emptyText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
            textAlign: 'center',
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
                    <Text style={styles.headerTitle}>Broadband</Text>
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
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Search Box */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <Ionicons
                        name="search"
                        size={18}
                        color="#999"
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by Provider"
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView
                style={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Popular Section */}
                {searchQuery === '' && (
                    <View style={styles.section}>
                      
                        {popularProviders.map(renderProviderItem)}
                    </View>
                )}

               
            </ScrollView>
        </View>
    );
};

export default BroadbandProviderScreen;