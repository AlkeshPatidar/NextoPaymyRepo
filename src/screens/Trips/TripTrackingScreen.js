import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    dark33,
    darkMode25,
    white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TrackingScreen = ({ navigation, route }) => {
    const { isDarkMode } = useSelector(state => state.theme);

    // Get tracking data from route params or use default
    const trackingData = route?.params?.trackingData || {
        from: 'Bhiwandi',
        to: 'Panipat',
        status: 'On time',
        eta: '10-Dec',
        totalDistance: '1480 km',
        remainingDistance: '100 km',
        currentLocation: 'Bhagan Toll Plaza, 10-Dec 0:12',
        driver: '9650886512',
        ewayExpiry: '13-Dec-25',
        lastTracked: '08-Dec 21:34',
        lastLocation: '07-Dec 23:44, Bhagan Toll Plaza',
        route: [
            {
                id: 1,
                name: 'Panipat',
                time: 'Reaching on 10-Dec 00:12',
                status: 'On time',
                type: 'destination'
            },
            {
                id: 2,
                name: 'Ochadi',
                time: '07-Dec 07:05',
                type: 'checkpoint'
            },
            {
                id: 3,
                name: 'Nayagaon',
                time: '07-Dec 05:35',
                type: 'checkpoint'
            },
            {
                id: 4,
                name: 'Piplyamandi',
                time: '07-Dec 04:12',
                type: 'checkpoint'
            },
            {
                id: 5,
                name: 'Bhiwandi',
                time: 'Loaded on 06-Dec 23:00',
                type: 'origin'
            }
        ]
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
        },
        header: {
            backgroundColor: isDarkMode ? dark33 : white,
            paddingTop: 50,
            paddingBottom: 16,
            paddingHorizontal: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
        },
        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        backButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
        },
        headerTitle: {
            fontSize: 18,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        scrollContent: {
            paddingBottom: 30,
        },
        mapContainer: {
            height: 150,
            backgroundColor: isDarkMode ? dark33 : '#E0E0E0',
            position: 'relative',
        },
        mapPlaceholder: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        shareButton: {
            position: 'absolute',
            right: 16,
            bottom: 16,
            width: 38,
            height: 38,
            borderRadius: 24,
            backgroundColor: white,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
        },
        routeHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: isDarkMode ? dark33 : white,
        },
        routeLocations: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        locationDot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginRight: 8,
        },
        locationText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        arrow: {
            fontSize: 16,
            color: isDarkMode ? '#999' : '#666',
            marginHorizontal: 12,
        },
        infoContainer: {
            backgroundColor: isDarkMode ? dark33 : white,
            paddingHorizontal: 16,
            // paddingVertical: 12,
        },
        infoRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: 8,
        },
        infoLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        statusText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#4CAF50',
            marginRight: 8,
        },
        etaText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        distanceText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
        },
        currentLocationRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 4,
        },
        blueDot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#2196F3',
            marginRight: 8,
        },
        currentLocationText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
        },
        divider: {
            height: 1,
            backgroundColor: isDarkMode ? '#333' : '#E0E0E0',
            marginVertical: 12,
        },
        detailRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
        },
        detailLabel: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        detailValue: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        lastTrackedText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
            marginBottom: 4,
        },
        lastLocationText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        timelineContainer: {
            backgroundColor: isDarkMode ? dark33 : white,
            marginTop: 8,
            paddingHorizontal: 16,
            paddingVertical: 16,
        },
        timelineItem: {
            flexDirection: 'row',
            marginBottom: 24,
        },
        timelineIconContainer: {
            alignItems: 'center',
            marginRight: 12,
            width: 40,
        },
        timelineIcon: {
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
        },
        destinationFlag: {
            fontSize: 20,
        },
        originFlag: {
            fontSize: 20,
        },
        timelineLine: {
            width: 2,
            flex: 1,
            backgroundColor: '#2196F3',
            marginTop: 4,
        },
        timelineDot: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: '#2196F3',
        },
        timelineContent: {
            flex: 1,
            paddingTop: 4,
        },
        timelineName: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 2,
        },
        timelineTime: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        onTimeText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#4CAF50',
            marginLeft: 4,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? dark33 : white}
            />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color={isDarkMode ? white : '#000'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Tracking</Text>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Map Container */}
                <View style={styles.mapContainer}>
                    {/* Placeholder for map - Replace with your map image or component */}
                    <Image
                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC52U-Qyk1jL5ibkQOQVMxnXjGNnhrJ-yIwA&s'}} // Add your map image here
                        style={styles.mapPlaceholder}
                    />
                    <TouchableOpacity style={styles.shareButton}>
                        <Ionicons name="share-social" size={24} color="#2196F3" />
                    </TouchableOpacity>
                </View>

                {/* Route Header */}
                <View style={styles.routeHeader}>
                    <View style={styles.routeLocations}>
                        <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
                        <Text style={styles.locationText}>{trackingData.from}</Text>
                        <Text style={styles.arrow}>→</Text>
                        <View style={[styles.locationDot, { backgroundColor: '#FF5252' }]} />
                        <Text style={styles.locationText}>{trackingData.to}</Text>
                    </View>
                </View>

                {/* Info Container */}
                <View style={styles.infoContainer}>
                    {/* Status and Distance Row */}
                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <Text style={styles.statusText}>{trackingData.status}</Text>
                            <Text style={styles.etaText}>| ETA : {trackingData.eta}</Text>
                        </View>
                        <Text style={styles.distanceText}>Total : {trackingData.totalDistance}</Text>
                    </View>

                    {/* Current Location */}
                    <View style={styles.currentLocationRow}>
                        <View style={styles.blueDot} />
                        <Text style={styles.currentLocationText}>{trackingData.currentLocation}</Text>
                        <Text style={[styles.distanceText, { marginLeft: 'auto' }]}>
                            Remaining: {trackingData.remainingDistance}
                        </Text>
                    </View>

                    <View style={styles.divider} />

                    {/* Driver and E-Way Expiry */}
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>DRIVER:</Text>
                        <Text style={styles.detailLabel}>E-WAY EXPIRY:</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailValue}>{trackingData.driver}</Text>
                        <Text style={styles.detailValue}>{trackingData.ewayExpiry}</Text>
                    </View>

                    <View style={styles.divider} />

                    {/* Last Tracked */}
                    <Text style={styles.lastTrackedText}>
                        Last tracked: {trackingData.lastTracked}
                    </Text>
                    <Text style={styles.lastLocationText}>
                        Last Location: {trackingData.lastLocation}
                    </Text>
                </View>

                {/* Timeline */}
                <View style={styles.timelineContainer}>
                    {trackingData.route.map((item, index) => (
                        <View key={item.id} style={styles.timelineItem}>
                            {/* Timeline Icon/Line */}
                            <View style={styles.timelineIconContainer}>
                                {item.type === 'destination' ? (
                                    <>
                                        <View style={styles.timelineIcon}>
                                            <Text style={styles.destinationFlag}>🚩</Text>
                                        </View>
                                    </>
                                ) : item.type === 'origin' ? (
                                    <View style={styles.timelineIcon}>
                                        <Text style={styles.originFlag}>🚩</Text>
                                    </View>
                                ) : (
                                    <>
                                        <View style={styles.timelineDot} />
                                        {index < trackingData.route.length - 1 && (
                                            <View style={styles.timelineLine} />
                                        )}
                                    </>
                                )}
                            </View>

                            {/* Timeline Content */}
                            <View style={styles.timelineContent}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.timelineName}>{item.name}</Text>
                                    {item.status && (
                                        <Text style={styles.onTimeText}>({item.status})</Text>
                                    )}
                                </View>
                                <Text style={styles.timelineTime}>{item.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default TrackingScreen;