import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    dark55,
    darkMode25,
    white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TripShowMoreModel from './TripShowmoremodel'
import PaymentDetailsModal from './PaymentModel'
import DocumentsModal from './DocumentModel'
import HelpModal from './HelpModel'

const TripDetailScreen = ({ navigation, route }) => {
    const { isDarkMode } = useSelector(state => state.theme);
    const [showTrackingModal, setShowTrackingModal] = useState(false);
    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
    const [isDocumentsModalVisible, setIsDocumentsModalVisible] = useState(false);
    const [showHelpModal, setShowHelpModal] = useState(false);

    const trackingData = {
        status: 'Intransit',
        tat: 'TAT 2d',
        distance: '1480km',
        steps: [
            {
                id: 1,
                title: 'Loading',
                time: '- 23:00',
                status: 'completed'
            },
            {
                id: 2,
                title: 'Intransit',
                time: '07-Dec 00:00',
                status: 'active'
            },
            {
                id: 3,
                title: 'Unloading',
                time: '',
                status: 'pending'
            },
            {
                id: 4,
                title: 'Delivered',
                time: '',
                status: 'pending'
            },
            {
                id: 5,
                title: 'PODVerified',
                time: '',
                status: 'pending'
            }
        ]
    };

    const paymentData = {
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

    // Get trip data from route params
    const trip = route?.params?.trip || {
        id: '6912255',
        vehicleNumber: 'HR55AU8862 (SXL)',
        date: '06-Dec-25',
        material: 'Carton box / FMCG',
        weight: '9 Ton',
        distance: '1480 KM',
        amount: '₹62600',
        status: 'Intransit',
        from: 'Bhiwandi',
        to: 'Panipat',
        trafficAgent: {
            name: 'Anjali Singh',
            languages: 'English, Hindi'
        },
        driver: {
            phone: '9650886512'
        },
        tracking: {
            location: 'Bhagan Toll Plaza',
            time: '07-Dec 23:12',
            status: 'Ontime'
        }
    };

      const documentsData = {
        loadingMemo: {
            title: 'Loading Memo',
            hasDownload: true,
            hasUpload: true,
        },
        lr: {
            title: 'LR',
            fileCount: '1 Files',
            files: [
                {
                    id: 1,
                    name: '6912255_L.jpg',
                    type: 'image'
                }
            ]
        },
        autoELR: {
            title: 'Auto E-LR',
            // status: 'Failed to fetch E-way bill',
            loading: true
        },
        manualELR: {
            title: 'Manual E-LR',
            hasAdd: true
        },
        pod: {
            title: 'POD',
            fileCount: '1 Files',
            files: [
                {
                    id: 1,
                    name: '6912255_POD_20251.jpg',
                    type: 'image'
                }
            ]
        },
        invoice: {
            title: 'Invoice',
            billingAddress: 'AIRWAT LOGISTICS',
            location: 'Ahmedabad',
            fullAddress: 'Shop no 209 Bol gam road Near Cocacola Sanand GIDC SANAND Gujarat -382110',
            hasUpload: true
        }
    };

    const TripCard = () => (
        <View style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
            {/* First Row - ID, Vehicle Number, Status */}
            <View style={styles.cardHeaderRow}>
                <View style={styles.leftInfo}>
                    <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
                        #{trip.id}
                    </Text>
                    <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
                        {trip.vehicleNumber}
                    </Text>
                </View>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{trip.status}</Text>
                    <Text style={[styles.amountText, { color: isDarkMode ? white : '#000' }]}>
                        {trip.amount}
                    </Text>
                </View>
            </View>

            {/* Second Row - Date, Material, Weight, Distance, Amount */}
            <View style={styles.detailsRow}>
                <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
                    {trip.date}
                </Text>
                <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
                    {trip.material}
                </Text>
                <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
                    {trip.weight}
                </Text>
                <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
                    {trip.distance}
                </Text>

            </View>

            {/* From Location */}
            <View style={styles.locationRow}>
                <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
                <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
                    {trip.from}
                </Text>
            </View>

            {/* To Location */}
            <View style={styles.locationRow}>
                <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
                <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
                    {trip.to}
                </Text>
            </View>

            {/* Show More Link */}
            <TouchableOpacity style={styles.showMoreContainer}
                onPress={() => setShowTrackingModal(true)}
            >
                <Text style={styles.showMoreText}>Show more</Text>
            </TouchableOpacity>
        </View>
    );

    const ContactCard = ({ icon, title, subtitle, phone }) => (
        <View style={[styles.contactCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
            <View style={styles.contactLeft}>
                <View style={[styles.avatarCircle, { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }]}>
                    <Ionicons name="person-outline" size={24} color={isDarkMode ? '#999' : '#666'} />
                </View>
                <View style={styles.contactInfo}>
                    <Text style={[styles.contactTitle, { color: isDarkMode ? '#999' : '#666' }]}>
                        {title}
                    </Text>
                    <Text style={[styles.contactName, { color: isDarkMode ? white : '#000' }]}>
                        {subtitle}
                    </Text>
                    {phone && (
                        <Text style={[styles.contactLanguages, { color: isDarkMode ? '#999' : '#666' }]}>
                            Speaks: {phone}
                        </Text>
                    )}
                </View>
            </View>
            <TouchableOpacity style={styles.phoneButton}>
                <Ionicons name="call-outline" size={24} color={isDarkMode ? '#999' : '#666'} />
            </TouchableOpacity>
        </View>
    );

    const QuickActionItem = ({ icon, title, subtitle, onPress }) => (
        <TouchableOpacity
            style={[styles.quickActionItem, { backgroundColor: isDarkMode ? dark33 : white }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.quickActionLeft}>
                <View style={[styles.iconCircle, { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }]}>
                    <Ionicons name={icon} size={24} color={isDarkMode ? '#999' : '#666'} />
                </View>
                <View style={styles.quickActionInfo}>
                    <Text style={[styles.quickActionTitle, { color: isDarkMode ? white : '#000' }]}>
                        {title}
                    </Text>
                    {subtitle && (
                        <Text style={[styles.quickActionSubtitle, { color: isDarkMode ? '#999' : '#666' }]}>
                            {subtitle}
                        </Text>
                    )}
                </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color={isDarkMode ? '#999' : '#666'} />
        </TouchableOpacity>
    );

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
            paddingBottom: 100,
        },
        contentContainer: {
            padding: 10,
        },
        tripCard: {
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        cardHeaderRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            //   marginBottom: 8,
        },
        leftInfo: {
            flex: 1,
        },
        tripId: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            marginBottom: 2,
        },
        vehicleNumber: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        },
        statusBadge: {
            backgroundColor: '#E3F2FD',
            paddingHorizontal: 9,
            paddingVertical: 4,
            borderRadius: 12,
        },
        statusText: {
            fontSize: 10,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#2196F3',
        },
        detailsRow: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
            //   marginBottom: 12,
        },
        detailText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
        },
        amountText: {
            fontSize: 10,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        },
        locationRow: {
            flexDirection: 'row',
            alignItems: 'center',
            //   marginBottom: 5,
        },
        locationDot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            marginRight: 8,
        },
        locationText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
        },
        showMoreContainer: {
            alignSelf: 'flex-end',
            //   marginTop: 8,
        },
        showMoreText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#2196F3',
        },
        contactCard: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            borderRadius: 12,
            marginBottom: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        contactLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },
        avatarCircle: {
            width: 48,
            height: 48,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
        },
        contactInfo: {
            flex: 1,
        },
        contactTitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            //   marginBottom: 2,
        },
        contactName: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            marginBottom: 2,
        },
        contactLanguages: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
        },
        phoneButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sectionTitle: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 12,
            marginTop: 8,
        },
        quickActionItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
            borderRadius: 12,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        quickActionLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },
        iconCircle: {
            width: 48,
            height: 48,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
        },
        quickActionInfo: {
            flex: 1,
        },
        quickActionTitle: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            marginBottom: 2,
        },
        quickActionSubtitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
        },
        payButtonContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: isDarkMode ? dark33 : white,
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 10,
        },
        payButton: {
            backgroundColor: App_Primary_color,
            borderRadius: 12,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#0D47A1',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
        },
        payButtonText: {
            color: white,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
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
                    <Text style={styles.headerTitle}>Trip detail</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.contentContainer}>
                    {/* Trip Card */}
                    <TripCard />

                    {/* Traffic Agent */}
                    <ContactCard
                        icon="person-outline"
                        title="Traffic agent"
                        subtitle={trip.trafficAgent.name}
                        phone={trip.trafficAgent.languages}
                    />

                    {/* Driver */}
                    <ContactCard
                        icon="person-outline"
                        title="Driver"
                        subtitle={trip.driver.phone}
                    />

                    {/* Quick Actions Section */}
                    <Text style={styles.sectionTitle}>Quick actions</Text>

                    <QuickActionItem
                        icon="document-text-outline"
                        title="Payments"
                        onPress={() => { setIsPaymentModalVisible(true) }}
                    />

                    <QuickActionItem
                        icon="document-outline"
                        title="Documents"
                        subtitle="Invoice, E LR, POD"
                        onPress={() => { setIsDocumentsModalVisible(true)}}
                    />

                    <QuickActionItem
                        icon="location-outline"
                        title="Tracking"
                        subtitle={`${trip.tracking.location} | ${trip.tracking.time} | ${trip.tracking.status}`}
                        onPress={() => { navigation.navigate('TrackingScreen')}}
                    />

                    <QuickActionItem
                        icon="help-circle-outline"
                        title="Help"
                        onPress={() => {setShowHelpModal(true) }}
                    />
                </View>
            </ScrollView>

            {/* Bottom Pay Button */}
            <View style={styles.payButtonContainer}>
                <TouchableOpacity
                    style={styles.payButton}
                    activeOpacity={0.8}
                    onPress={() => {
                        // Handle payment
                        navigation.navigate('PaymentScreen')
                    }}
                >
                    <Text style={styles.payButtonText}>Pay ₹6260</Text>
                </TouchableOpacity>
            </View>
            <TripShowMoreModel
                visible={showTrackingModal}
                onClose={() => setShowTrackingModal(false)}
                isDarkMode={isDarkMode}
                trackingData={trackingData}
            />
            <PaymentDetailsModal
                visible={isPaymentModalVisible}
                onClose={() => setIsPaymentModalVisible(false)}
                isDarkMode={isDarkMode}
                paymentData={paymentData} 
                navigation={navigation}
            />

                <DocumentsModal
                visible={isDocumentsModalVisible}
                onClose={() => setIsDocumentsModalVisible(false)}
                isDarkMode={isDarkMode}
                documentsData={documentsData} // Optional: Pass custom data or omit for default
            />
            <HelpModal 
    visible={showHelpModal}
    onClose={() => setShowHelpModal(false)}
    isDarkMode={isDarkMode}
/>
        </View>
    );
};

export default TripDetailScreen;