

// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   Animated,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import {
//   App_Primary_color,
//   dark33,
//   dark55,
//   darkMode25,
//   white
// } from '../../common/Colors/colors';
// import { useSelector } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FilterModal from '../Home/FilterModel';

// const TripScreen = ({ navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Ongoing');
//   const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     users: [],
//     truckTypes: [],
//   });

//   // Mock data with Ongoing trips having tracking info
//   const [allTrips] = useState([
//     {
//       id: '6912255',
//       vehicleNumber: 'HR55AU8862 (SXL)',
//       date: '06-Dec-25',
//       material: 'Carton box / FMCG',
//       weight: '9 Ton',
//       distance: '1480 KM',
//       from: 'Bhiwandi',
//       to: 'Panipat',
//       amount: '₹62600',
//       status: 'Ongoing',
//       user: 'santosh - 8817517412',
//       truckType: '32 FEET MULTI AXLE',
//       trackingStatus: 'Ontime',
//       eta: '10-Dec',
//       lastUpdate: 'Bhagan Toll Plaza, 07-Dec 23:12',
//       totalDistance: '1480 KM',
//       remainingDistance: '100 KM',
//       progress: 0.93, // 93% complete
//     },
//     {
//       id: '6912256',
//       vehicleNumber: 'GJ789012 (XYZ)',
//       date: '05-Dec-25',
//       material: 'Textiles',
//       weight: '12 Ton',
//       distance: '450 KM',
//       from: 'Ahmedabad',
//       to: 'Delhi',
//       amount: '₹35000',
//       status: 'Ongoing',
//       user: '7471160664',
//       truckType: '32 FEET MULTI AXLE',
//       trackingStatus: 'Intransit',
//       eta: '08-Dec',
//       lastUpdate: 'Jaipur Bypass, 06-Dec 14:30',
//       totalDistance: '450 KM',
//       remainingDistance: '180 KM',
//       progress: 0.6,
//     },
//     {
//       id: '6745902',
//       vehicleNumber: 'MH123456 (ABC)',
//       date: '25-Nov-25',
//       material: 'Electronics',
//       weight: '5 Ton',
//       distance: '363 KM',
//       from: 'Mumbai',
//       to: 'Surat',
//       amount: '₹22000',
//       status: 'POD Pending',
//       user: 'sant - 9665623512',
//       truckType: '20 FEET OPEN',
//     },
//     {
//       id: '6745904',
//       vehicleNumber: 'RJ456789 (PQR)',
//       date: '24-Nov-25',
//       material: 'Machinery',
//       weight: '15 Ton',
//       distance: '520 KM',
//       from: 'Jaipur',
//       to: 'Pune',
//       amount: '₹42000',
//       status: 'POD Pending',
//       user: 'patel - 7471140664',
//       truckType: '20 FEET OPEN',
//     },
//     {
//       id: '6745901',
//       vehicleNumber: 'KA567476 (MXL)',
//       date: '26-Nov-25',
//       material: 'Furniture',
//       weight: '7 Ton',
//       distance: '195 KM',
//       from: 'Pandharpur',
//       to: 'Pune',
//       amount: '₹18000',
//       status: 'Delivered',
//       user: 'santosh - 8817517412',
//       truckType: '32 FEET MULTI AXLE',
//     },
//     {
//       id: '6745905',
//       vehicleNumber: 'UP234567 (LMN)',
//       date: '23-Nov-25',
//       material: 'Food Items',
//       weight: '8 Ton',
//       distance: '280 KM',
//       from: 'Lucknow',
//       to: 'Kanpur',
//       amount: '₹16000',
//       status: 'Delivered',
//       user: 'Rohit Patel - 8815717413',
//       truckType: '20 FEET CONTAINER',
//     },
//   ]);

//   // Extract unique values for filters
//   const uniqueUsers = [...new Set(allTrips.map(item => item.user))];
//   const uniqueTruckTypes = [...new Set(allTrips.map(item => item.truckType))];

//   // Get tab counts
//   const getTabCount = (status) => {
//     return allTrips.filter(trip => trip.status === status).length;
//   };

//   // Filter trips based on search, tab, and filters
//   const getFilteredTrips = () => {
//     let filtered = allTrips;

//     // Filter by tab
//     filtered = filtered.filter(trip => trip.status === selectedTab);

//     // Filter by search
//     if (searchQuery.trim()) {
//       filtered = filtered.filter(trip => 
//         trip.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         trip.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         trip.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         trip.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by selected filters
//     if (selectedFilters.users.length > 0) {
//       filtered = filtered.filter(trip => selectedFilters.users.includes(trip.user));
//     }

//     if (selectedFilters.truckTypes.length > 0) {
//       filtered = filtered.filter(trip => selectedFilters.truckTypes.includes(trip.truckType));
//     }

//     return filtered;
//   };

//   const filteredTrips = getFilteredTrips();

//   // Handle filter apply
//   const handleApplyFilter = (filters) => {
//     setSelectedFilters(filters);
//     setIsFilterModalVisible(false);
//   };

//   // Handle filter reset
//   const handleResetFilter = () => {
//     setSelectedFilters({
//       users: [],
//       truckTypes: [],
//     });
//   };

//   // Get active filter count
//   const getActiveFilterCount = () => {
//     return selectedFilters.users.length + selectedFilters.truckTypes.length;
//   };

//   // Blinking Dot Component
//   const BlinkingDot = () => {
//     const opacity = useRef(new Animated.Value(1)).current;

//     useEffect(() => {
//       const blink = Animated.loop(
//         Animated.sequence([
//           Animated.timing(opacity, {
//             toValue: 0.2,
//             duration: 800,
//             useNativeDriver: true,
//           }),
//           Animated.timing(opacity, {
//             toValue: 1,
//             duration: 800,
//             useNativeDriver: true,
//           }),
//         ])
//       );
//       blink.start();

//       return () => blink.stop();
//     }, []);

//     return (
//       <Animated.View
//         style={[
//           styles.blinkingDot,
//           {
//             opacity,
//             backgroundColor: 'green',
//           },
//         ]}
//       />
//     );
//   };

//   const OngoingTripCard = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//       activeOpacity={0.7}
//       onPress={() => navigation.navigate('TripDetailScreen')}
//     >
//       {/* Header Row */}
//       <View style={styles.cardHeader}>
//         <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
//           #{item.id}
//         </Text>
//         <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
//           {item.vehicleNumber}
//         </Text>
//             <View style={styles.amountContainer}>
//         <Text style={styles.amountText}>{item.amount}</Text>
//       </View>
//         <Text style={[
//           styles.trackingStatus,
//           { color: item.trackingStatus === 'Ontime' ? '#4CAF50' : '#999' }
//         ]}>
//           {item.trackingStatus}
//         </Text>
//       </View>

//       {/* Date and Details Row */}
//       <View style={styles.detailsRow}>
//         <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.date}
//         </Text>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.material}
//         </Text>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.weight}
//         </Text>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.distance}
//         </Text>
//       </View>

//       {/* From Location */}
//       <View style={styles.locationRow}>
//         <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
//         <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//           {item.from}
//         </Text>
//       </View>

//       {/* To Location */}
//       <View style={styles.locationRow}>
//         <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
//         <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//           {item.to}
//         </Text>
//       </View>

//       {/* Tracking Info */}
//       <View style={styles.trackingContainer}>
//         <View style={styles.trackingRow}>
//           <Text style={[styles.trackingLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//             {item.trackingStatus} | ETA: {'12-Dec'}
//           </Text>
//           <Text style={[styles.trackingDistance, { color: isDarkMode ? white : '#000' }]}>
//             Total: {item.totalDistance}
//           </Text>
//         </View>
//         <View style={styles.trackingRow}>
//           <View style={styles.lastUpdateRow}>
//             <BlinkingDot />
//             <Text style={[styles.lastUpdateText, { color: isDarkMode ? '#999' : '#666' }]}>
//               {'Delhi toll Plaza 08-Dec-23:00'}
//             </Text>
//           </View>
//           <Text style={[styles.remainingDistance, { color: isDarkMode ? '#999' : '#666' }]}>
//             Remaining: {'100km'}
//           </Text>
//         </View>
//       </View>

//       {/* Progress Bar */}
//       <View style={[styles.progressBarContainer, { backgroundColor: isDarkMode ? darkMode25 : '#E0E0E0' }]}>
//         <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]}>
//           <View style={styles.progressDots}>
//             {[...Array(5)].map((_, index) => (
//               <View 
//                 key={index} 
//                 style={[
//                   styles.progressDot,
//                   { backgroundColor: index < (item.progress * 5) ? white : 'white' }
//                 ]} 
//               />
//             ))}
//           </View>
//         </View>
//       </View>
//         <View style={styles.truckIconContainer}>
//           <FontAwesome5 name="truck-moving" size={10} color={App_Primary_color} />
//         </View>

//       {/* Amount - Bottom Right */}

//     </TouchableOpacity>
//   );

//   const RegularTripCard = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//       activeOpacity={0.7}
//       onPress={() => navigation.navigate('TripDetailScreen')}
//     >
//       {/* Header Row */}
//       <View style={styles.cardHeader}>
//         <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
//           #{item.id}
//         </Text>
//         <Text style={[styles.statusBadge, { 
//           backgroundColor: item.status === 'Delivered' ? '#E8F5E9' : '#E3F2FD',
//           color: item.status === 'Delivered' ? '#4CAF50' : '#2196F3',
//         }]}>
//           {item.status}
//         </Text>
//       </View>

//       {/* Vehicle and Date */}
//       <View style={styles.cardRow}>
//         <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
//           {item.vehicleNumber}
//         </Text>
//         <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.date}
//         </Text>
//       </View>

//       {/* Details Row */}
//       <View style={styles.detailsRow}>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.material}
//         </Text>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.weight}
//         </Text>
//         <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
//           {item.distance}
//         </Text>
//       </View>

//       {/* From Location */}
//       <View style={styles.locationRow}>
//         <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
//         <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//           {item.from}
//         </Text>
//       </View>

//       {/* To Location */}
//       <View style={styles.locationRow}>
//         <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
//         <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//           {item.to}
//         </Text>
//       </View>

//       {/* Amount - Bottom Right */}
//       <View style={styles.amountContainer}>
//         <Text style={styles.amountText}>{item.amount}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//     },
//     header: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingTop: 30,
//       paddingBottom: 10,
//       paddingHorizontal: 10,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 5,
//     },
//     topRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 16,
//     },
//     backButton: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginRight: 12,
//     },
//     searchContainer: {
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       borderRadius: 10,
//       paddingHorizontal: 12,
//       height: 44,
//     },
//     searchInput: {
//       flex: 1,
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? white : '#000',
//       marginLeft: 8,
//     },
//     tabsContainer: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     tab: {
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       borderRadius: 20,
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//     },
//     activeTab: {
//       backgroundColor: App_Primary_color,
//     },
//     inactiveTab: {
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//     },
//     tabText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     activeTabText: {
//       color: white,
//     },
//     inactiveTabText: {
//       color: isDarkMode ? '#999' : '#666',
//     },
//     tabBadge: {
//       minWidth: 20,
//       height: 20,
//       borderRadius: 10,
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingHorizontal: 6,
//     },
//     activeTabBadge: {
//       backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     },
//     inactiveTabBadge: {
//       backgroundColor: isDarkMode ? dark33 : '#E0E0E0',
//     },
//     tabBadgeText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     contentContainer: {
//       flex: 1,
//     },
//     scrollContent: {
//       paddingBottom: 100,
//     },
//     topBar: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 10,
//       paddingVertical: 10,
//     },
//     resultCount: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? white : '#000',
//     },
//     filterButton: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       borderRadius: 8,
//       backgroundColor: isDarkMode ? dark33 : white,
//       position: 'relative',
//     },
//     filterButtonText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? white : '#000',
//     },
//     filterBadge: {
//       position: 'absolute',
//       top: -4,
//       right: -4,
//       backgroundColor: App_Primary_color,
//       width: 18,
//       height: 18,
//       borderRadius: 9,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     filterBadgeText: {
//       color: white,
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//     },
//     tripsContainer: {
//       paddingHorizontal: 10,
//     },
//     tripCard: {
//       padding: 10,
//       borderRadius: 4,
//       marginBottom: 10,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//       position: 'relative',
//     },
//     cardHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       // marginBottom: 3,
//     },
//     tripId: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     trackingStatus: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     statusBadge: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       paddingHorizontal: 10,
//       paddingVertical: 4,
//       borderRadius: 12,
//     },
//     cardRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 2,
//     },
//     vehicleNumber: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     dateText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     detailsRow: {
//       flexDirection: 'row',
//       gap: 8,
//       marginBottom: 3,
//     },
//     detailText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     locationRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 2,
//     },
//     locationDot: {
//       width: 8,
//       height: 8,
//       borderRadius: 4,
//       marginRight: 8,
//     },
//     locationText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     trackingContainer: {
//       marginTop: 8,
//       marginBottom: 5,
//     },
//     trackingRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 4,
//     },
//     trackingLabel: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     trackingDistance: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     lastUpdateRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//     },
//     blinkingDot: {
//       width: 9,
//       height: 9,
//       borderRadius: 4,
//     },
//     lastUpdateText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     remainingDistance: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     progressBarContainer: {
//       height: 8,
//       borderRadius: 16,
//       overflow: 'hidden',
//       position: 'relative',
//       zIndex:-200000
//       // marginBottom: 12,
//     },
//     progressBar: {
//       height: '100%',
//       backgroundColor: App_Primary_color,
//       borderRadius: 16,
//       justifyContent: 'center',
//       paddingHorizontal: 8,
//     },
//     progressDots: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     progressDot: {
//       width: 5,
//       height: 5,
//       borderRadius: 4,
//       borderWidth: 1,
//       borderColor: white,
//     },
//     truckIconContainer: {
//       position: 'absolute',
//       right: 10,
//       bottom:5,
//       // top: -2,
//       width: 20,
//       height: 20,
//       borderRadius: 14,
//       backgroundColor: '#F1F1F1',
//       justifyContent: 'center',
//       alignItems: 'center',
//       elevation:3,
//       zIndex:1000
//     },
//     amountContainer: {
//       // position: 'absolute',
//       // bottom: 12,
//       // right: 12,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       paddingHorizontal: 10,
//       paddingVertical: 6,
//       borderRadius: 8,
//     },
//     amountText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: App_Primary_color,
//     },
//     emptyContainer: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 60,
//     },
//     emptyText: {
//       fontSize: 16,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//       marginTop: 16,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={isDarkMode ? dark33 : white}
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         {/* Search Bar */}
//         <View style={styles.topRow}>
//           <TouchableOpacity
//             style={styles.backButton}
//             activeOpacity={0.7}
//             onPress={() => navigation.goBack()}
//           >
//             <Ionicons
//               name="arrow-back"
//               size={24}
//               color={isDarkMode ? white : '#000'}
//             />
//           </TouchableOpacity>
//           <View style={styles.searchContainer}>
//             <Ionicons
//               name="search"
//               size={20}
//               color={isDarkMode ? '#999' : '#666'}
//             />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search trip id or city"
//               placeholderTextColor={isDarkMode ? '#666' : '#999'}
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>
//         </View>

//         {/* Tabs */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.tabsContainer}
//         >
//           <TouchableOpacity
//             style={[
//               styles.tab,
//               selectedTab === 'Ongoing' ? styles.activeTab : styles.inactiveTab,
//             ]}
//             activeOpacity={0.7}
//             onPress={() => setSelectedTab('Ongoing')}
//           >
//             <View
//               style={[
//                 styles.tabBadge,
//                 selectedTab === 'Ongoing' ? styles.activeTabBadge : styles.inactiveTabBadge,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.tabBadgeText,
//                   {
//                     color: selectedTab === 'Ongoing' ? white : (isDarkMode ? white : '#000'),
//                   },
//                 ]}
//               >
//                 {getTabCount('Ongoing')}
//               </Text>
//             </View>
//             <Text
//               style={[
//                 styles.tabText,
//                 selectedTab === 'Ongoing' ? styles.activeTabText : styles.inactiveTabText,
//               ]}
//             >
//               In-Transit
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.tab,
//               selectedTab === 'POD Pending' ? styles.activeTab : styles.inactiveTab,
//             ]}
//             activeOpacity={0.7}
//             onPress={() => setSelectedTab('POD Pending')}
//           >
//             <View
//               style={[
//                 styles.tabBadge,
//                 selectedTab === 'POD Pending' ? styles.activeTabBadge : styles.inactiveTabBadge,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.tabBadgeText,
//                   {
//                     color: selectedTab === 'POD Pending' ? white : (isDarkMode ? white : '#000'),
//                   },
//                 ]}
//               >
//                 {getTabCount('POD Pending')}
//               </Text>
//             </View>
//             <Text
//               style={[
//                 styles.tabText,
//                 selectedTab === 'POD Pending' ? styles.activeTabText : styles.inactiveTabText,
//               ]}
//             >
//               POD Pending
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[
//               styles.tab,
//               selectedTab === 'Delivered' ? styles.activeTab : styles.inactiveTab,
//             ]}
//             activeOpacity={0.7}
//             onPress={() => setSelectedTab('Delivered')}
//           >
//             <View
//               style={[
//                 styles.tabBadge,
//                 selectedTab === 'Delivered' ? styles.activeTabBadge : styles.inactiveTabBadge,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.tabBadgeText,
//                   {
//                     color: selectedTab === 'Delivered' ? white : (isDarkMode ? white : '#000'),
//                   },
//                 ]}
//               >
//                 {getTabCount('Delivered')}
//               </Text>
//             </View>
//             <Text
//               style={[
//                 styles.tabText,
//                 selectedTab === 'Delivered' ? styles.activeTabText : styles.inactiveTabText,
//               ]}
//             >
//               Delivered
//             </Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>

//       {/* Content */}
//       <View style={styles.contentContainer}>
//         {/* Top Bar */}
//         <View style={styles.topBar}>
//           <Text style={styles.resultCount}>
//             {filteredTrips.length} {filteredTrips.length === 1 ? 'Trip' : 'Trips'}
//           </Text>
//           <TouchableOpacity
//             style={styles.filterButton}
//             activeOpacity={0.7}
//             onPress={() => setIsFilterModalVisible(true)}
//           >
//             <Ionicons
//               name="options-outline"
//               size={18}
//               color={isDarkMode ? white : '#000'}
//             />
//             <Text style={styles.filterButtonText}>Filter</Text>
//             {getActiveFilterCount() > 0 && (
//               <View style={styles.filterBadge}>
//                 <Text style={styles.filterBadgeText}>
//                   {getActiveFilterCount()}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Trips List */}
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.scrollContent}
//         >
//           <View style={styles.tripsContainer}>
//             {filteredTrips.length > 0 ? (
//               filteredTrips.map((item) => (
//                 selectedTab === 'Ongoing' ? (
//                   <OngoingTripCard key={item.id} item={item} />
//                 ) : (
//                   <RegularTripCard key={item.id} item={item} />
//                 )
//               ))
//             ) : (
//               <View style={styles.emptyContainer}>
//                 <Ionicons
//                   name="search-outline"
//                   size={64}
//                   color={isDarkMode ? '#666' : '#CCC'}
//                 />
//                 <Text style={styles.emptyText}>
//                   No trips found
//                 </Text>
//               </View>
//             )}
//           </View>
//         </ScrollView>
//       </View>

//       {/* Filter Modal */}
//       <FilterModal
//         visible={isFilterModalVisible}
//         onClose={() => setIsFilterModalVisible(false)}
//         users={uniqueUsers}
//         selectedUsers={selectedFilters.users}
//         truckTypes={uniqueTruckTypes}
//         selectedTruckTypes={selectedFilters.truckTypes}
//         onApplyFilter={handleApplyFilter}
//         onReset={handleResetFilter}
//       />
//     </View>
//   );
// };

// export default TripScreen;


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Animated,
  Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  black,
  dark33,
  dark55,
  darkMode25,
  white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FilterModal from '../Home/FilterModel';
import Row from '../../components/wrapper/row';
import IMG from '../../assets/Images';

const TripScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Ongoing');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    users: [],
    truckTypes: [],
  });
  const [showPodPendingOnly, setShowPodPendingOnly] = useState(false);

  const [allTrips] = useState([
    {
      id: '6912255',
      vehicleNumber: 'HR55AU8862 (SXL)',
      date: '06-Dec-25',
      material: 'Carton box / FMCG',
      weight: '9 Ton',
      distance: '1480 KM',
      from: 'Bhiwandi',
      to: 'Panipat',
      amount: '₹62600',
      status: 'Ongoing',
      user: 'santosh - 8817517412',
      truckType: '32 FEET MULTI AXLE',
      trackingStatus: 'Ontime',
      eta: '10-Dec',
      lastUpdate: 'Bhagan Toll Plaza, 07-Dec 23:12',
      totalDistance: '1480 KM',
      remainingDistance: '100 KM',
      progress: 0.7,
    },
    {
      id: '6912256',
      vehicleNumber: 'GJ789012 (XYZ)',
      date: '05-Dec-25',
      material: 'Textiles',
      weight: '12 Ton',
      distance: '450 KM',
      from: 'Ahmedabad',
      to: 'Delhi',
      amount: '₹35000',
      status: 'Ongoing',
      user: '7471160664',
      truckType: '32 FEET MULTI AXLE',
      trackingStatus: 'Intransit',
      eta: '08-Dec',
      lastUpdate: 'Jaipur Bypass, 06-Dec 14:30',
      totalDistance: '450 KM',
      remainingDistance: '180 KM',
      progress: 0.6,
    },
    {
      id: '6745902',
      vehicleNumber: 'MH123456 (ABC)',
      date: '25-Nov-25',
      material: 'Electronics',
      weight: '5 Ton',
      distance: '363 KM',
      from: 'Mumbai',
      to: 'Surat',
      amount: '₹22000',
      status: 'POD Pending',
      user: 'sant - 9665623512',
      truckType: '20 FEET OPEN',
    },
    {
      id: '6745904',
      vehicleNumber: 'RJ456789 (PQR)',
      date: '24-Nov-25',
      material: 'Machinery',
      weight: '15 Ton',
      distance: '520 KM',
      from: 'Jaipur',
      to: 'Pune',
      amount: '₹42000',
      status: 'POD Pending',
      user: 'patel - 7471140664',
      truckType: '20 FEET OPEN',
    },
    {
      id: '6745901',
      vehicleNumber: 'KA567476 (MXL)',
      date: '26-Nov-25',
      material: 'Furniture',
      weight: '7 Ton',
      distance: '195 KM',
      from: 'Pandharpur',
      to: 'Pune',
      amount: '₹18000',
      status: 'Delivered',
      user: 'santosh - 8817517412',
      truckType: '32 FEET MULTI AXLE',
      podStatus: 'pending',
    },
    {
      id: '6745905',
      vehicleNumber: 'UP234567 (LMN)',
      date: '23-Nov-25',
      material: 'Food Items',
      weight: '8 Ton',
      distance: '280 KM',
      from: 'Lucknow',
      to: 'Kanpur',
      amount: '₹16000',
      status: 'Delivered',
      user: 'Rohit Patel - 8815717413',
      truckType: '20 FEET CONTAINER',
      podStatus: 'completed',
    },
    {
      id: '6745906',
      vehicleNumber: 'DL345678 (STR)',
      date: '22-Nov-25',
      material: 'Steel',
      weight: '10 Ton',
      distance: '320 KM',
      from: 'Delhi',
      to: 'Jaipur',
      amount: '₹28000',
      status: 'Delivered',
      user: 'sant - 9665623512',
      truckType: '32 FEET MULTI AXLE',
      podStatus: 'pending',
    },
  ]);

  const uniqueUsers = [...new Set(allTrips.map(item => item.user))];
  const uniqueTruckTypes = [...new Set(allTrips.map(item => item.truckType))];

  const getTabCount = (status) => {
    return allTrips.filter(trip => trip.status === status).length;
  };

  const getFilteredTrips = () => {
    let filtered = allTrips;
    filtered = filtered.filter(trip => trip.status === selectedTab);

    if (selectedTab === 'Delivered' && showPodPendingOnly) {
      filtered = filtered.filter(trip => trip.podStatus === 'pending');
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(trip =>
        trip.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilters.users.length > 0) {
      filtered = filtered.filter(trip => selectedFilters.users.includes(trip.user));
    }

    if (selectedFilters.truckTypes.length > 0) {
      filtered = filtered.filter(trip => selectedFilters.truckTypes.includes(trip.truckType));
    }

    return filtered;
  };

  const filteredTrips = getFilteredTrips();

  const handleApplyFilter = (filters) => {
    setSelectedFilters(filters);
    setIsFilterModalVisible(false);
  };

  const handleResetFilter = () => {
    setSelectedFilters({
      users: [],
      truckTypes: [],
    });
  };

  const getActiveFilterCount = () => {
    let count = selectedFilters.users.length + selectedFilters.truckTypes.length;
    if (selectedTab === 'Delivered' && showPodPendingOnly) {
      count += 1;
    }
    return count;
  };

  useEffect(() => {
    if (selectedTab !== 'Delivered') {
      setShowPodPendingOnly(false);
    }
  }, [selectedTab]);

  const BlinkingDot = () => {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      const blink = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0.2,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      );
      blink.start();
      return () => blink.stop();
    }, []);

    return (
      <Animated.View
        style={[
          styles.blinkingDot,
          { opacity, backgroundColor: 'green' },
        ]}
      />
    );
  };

  const OngoingTripCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('TripDetailScreen')}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
          #{item.id}
        </Text>
        <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
          {item.vehicleNumber}
        </Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{item.amount}</Text>
        </View>
        <Text style={[
          styles.trackingStatus,
          { color: item.trackingStatus === 'Ontime' ? '#4CAF50' : '#999' }
        ]}>
          {item.trackingStatus}
        </Text>
      </View>

      <View style={styles.detailsRow}>
        <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.date}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.material}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.weight}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.distance}
        </Text>
      </View>

      <Row style={{ gap: 30 }}>
        <View style={styles.locationRow}>
          <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
            {item.from}
          </Text>
        </View>
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {'----->'}
        </Text>
        <View style={styles.locationRow}>
          <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
          <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
            {item.to}
          </Text>
        </View>
      </Row>


      <View style={styles.trackingContainer}>
        <View style={styles.trackingRow}>
          <Text style={[styles.trackingLabel, { color: isDarkMode ? '#999' : '#666' }]}>
            {item.trackingStatus} | ETA: {'12-Dec'}
          </Text>
          <Text style={[styles.trackingDistance, { color: isDarkMode ? white : '#000' }]}>
            Total: {item.totalDistance}
          </Text>
        </View>
        <View style={styles.trackingRow}>
          <View style={styles.lastUpdateRow}>
            <BlinkingDot />
            <Text style={[styles.lastUpdateText, { color: isDarkMode ? '#999' : '#666' }]}>
              {'Delhi toll Plaza 08-Dec-23:00'}
            </Text>
          </View>
          <Text style={[styles.remainingDistance, { color: isDarkMode ? '#999' : '#666' }]}>
            Remaining: {'100km'}
          </Text>
        </View>
      </View>

      <View style={[styles.progressBarContainer, { backgroundColor: isDarkMode ? darkMode25 : '#E0E0E0' }]}>
        <View style={[styles.progressBar, { width: `100%` }]}>
          <View style={styles.progressDots}>
            {[...Array(5)].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressDot,
                  { backgroundColor: index < (item.progress) ? white : 'white' }
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.truckIconContainer}>
        {/* <FontAwesome5 name="truck-moving" size={13} color={'white'} /> */}
        <Image
          source={IMG.truckTop}
          style={{ width: 35, height: 39, resizeMode: 'contain', }}
        />
      </View>
    </TouchableOpacity>
  );

  const RegularTripCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('TripDetailScreen')}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
          #{item.id}
        </Text>
        <Text style={[styles.statusBadge, {
          backgroundColor: item.status === 'Delivered' ? '#E8F5E9' : '#E3F2FD',
          color: item.status === 'Delivered' ? '#4CAF50' : '#2196F3',
        }]}>
          {item.status}
        </Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
          {item.vehicleNumber}
        </Text>
        <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.date}
        </Text>
      </View>

      <View style={styles.detailsRow}>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.material}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.weight}
        </Text>
        <Text style={[styles.detailText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.distance}
        </Text>
      </View>

      <Row style={{ gap: 10 }}>

        <View style={styles.locationRow}>
          <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
            {item.from}
          </Text>
        </View>
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {'------->'}
        </Text>
        <View style={styles.locationRow}>
          <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
          <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
            {item.to}
          </Text>
        </View>
      </Row>


      {selectedTab === 'Delivered' && item.podStatus && (
        <View style={styles.podBadgeContainer}>
          <Text style={[styles.podBadge, {
            backgroundColor: item.podStatus === 'pending' ? '#FFF3E0' : '#E8F5E9',
            color: item.podStatus === 'pending' ? '#FF9800' : '#4CAF50',
          }]}>
            POD {item.podStatus === 'pending' ? 'Pending' : 'Completed'}
          </Text>
        </View>
      )}

      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 30,
      paddingBottom: 10,
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
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
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      borderRadius: 10,
      paddingHorizontal: 12,
      height: 44,
    },
    searchInput: {
      flex: 1,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? white : '#000',
      marginLeft: 8,
    },
    tabsContainer: {
      flexDirection: 'row',
      gap: 12,
      // justifyContent:'space-between',
      // width:'100%'
      flex: 1,
    },
    tab: {
      paddingHorizontal: 30,
      flex: 1,
      paddingVertical: 5,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    activeTab: {
      backgroundColor: App_Primary_color,
    },
    inactiveTab: {
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    tabText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    activeTabText: {
      color: white,
    },
    inactiveTabText: {
      color: isDarkMode ? '#999' : '#666',
    },
    tabBadge: {
      minWidth: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
    activeTabBadge: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    inactiveTabBadge: {
      backgroundColor: isDarkMode ? dark33 : '#E0E0E0',
    },
    tabBadgeText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    contentContainer: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 100,
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    resultCount: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    filterButtonsRow: {
      flexDirection: 'row',
      gap: 8,
    },
    filterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      backgroundColor: isDarkMode ? dark33 : white,
      position: 'relative',
    },
    podFilterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 8,
      // borderWidth: 1,
    },
    podFilterActive: {
      backgroundColor: App_Primary_color,
      borderColor: App_Primary_color,
    },
    podFilterInactive: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderColor: isDarkMode ? '#666' : '#E0E0E0',
    },
    filterButtonText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    podFilterText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    podFilterTextActive: {
      color: white,
    },
    podFilterTextInactive: {
      color: isDarkMode ? white : '#000',
    },
    filterBadge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: App_Primary_color,
      width: 18,
      height: 18,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterBadgeText: {
      color: white,
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    tripsContainer: {
      paddingHorizontal: 10,
    },
    tripCard: {
      padding: 10,
      borderRadius: 4,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      position: 'relative',
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tripId: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    trackingStatus: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    statusBadge: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 2,
    },
    vehicleNumber: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    dateText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    detailsRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 3,
    },
    detailText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2,
    },
    locationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 8,
    },
    locationText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    trackingContainer: {
      marginTop: 8,
      marginBottom: 5,
    },
    trackingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    trackingLabel: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    trackingDistance: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    lastUpdateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    blinkingDot: {
      width: 9,
      height: 9,
      borderRadius: 4,
    },
    lastUpdateText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    remainingDistance: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    progressBarContainer: {
      height: 16,
      borderRadius: 5,
      overflow: 'hidden',
      position: 'relative',
      zIndex: -200000,
    },
    progressBar: {
      height: '100%',
      backgroundColor: App_Primary_color,
      borderRadius: 5,
      justifyContent: 'center',
      paddingHorizontal: 5,
    },
    progressDots: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    progressDot: {
      width: 20,
      height: 3,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: white,
    },
    truckIconContainer: {
      position: 'absolute',
      right: 120,
      alignSelf: 'center',
      bottom: 8,
      width: 20,
      height: 20,
      borderRadius: 14,
      // backgroundColor: '#F1F1F1',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      zIndex: 1000,
    },
    podBadgeContainer: {
      marginTop: 6,
      marginBottom: 6,
    },
    podBadge: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
    amountContainer: {
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
    },
    amountText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 60,
    },
    emptyText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginTop: 16,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? dark33 : white}
      />

      <View style={styles.header}>
        <View style={styles.topRow}>
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
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color={isDarkMode ? '#999' : '#666'}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search trip id or city"
              placeholderTextColor={isDarkMode ? '#666' : '#999'}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'Ongoing' ? styles.activeTab : styles.inactiveTab,
            ]}
            activeOpacity={0.7}
            onPress={() => setSelectedTab('Ongoing')}
          >
            <View
              style={[
                styles.tabBadge,
                selectedTab === 'Ongoing' ? styles.activeTabBadge : styles.inactiveTabBadge,
              ]}
            >
              <Text
                style={[
                  styles.tabBadgeText,
                  {
                    color: selectedTab === 'Ongoing' ? white : (isDarkMode ? white : '#000'),
                  },
                ]}
              >
                {getTabCount('Ongoing')}
              </Text>
            </View>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Ongoing' ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              In-Transit
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'POD Pending' ? styles.activeTab : styles.inactiveTab,
            ]}
            activeOpacity={0.7}
            onPress={() => setSelectedTab('POD Pending')}
          >
            <View
              style={[
                styles.tabBadge,
                selectedTab === 'POD Pending' ? styles.activeTabBadge : styles.inactiveTabBadge,
              ]}
            >
              <Text
                style={[
                  styles.tabBadgeText,
                  {
                    color: selectedTab === 'POD Pending' ? white : (isDarkMode ? white : '#000'),
                  },
                ]}
              >
                {getTabCount('POD Pending')}
              </Text>
            </View>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'POD Pending' ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              POD Pending
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'Delivered' ? styles.activeTab : styles.inactiveTab,
            ]}
            activeOpacity={0.7}
            onPress={() => setSelectedTab('Delivered')}
          >
            <View
              style={[
                styles.tabBadge,
                selectedTab === 'Delivered' ? styles.activeTabBadge : styles.inactiveTabBadge,
              ]}
            >
              <Text
                style={[
                  styles.tabBadgeText,
                  {
                    color: selectedTab === 'Delivered' ? white : (isDarkMode ? white : '#000'),
                  },
                ]}
              >
                {getTabCount('Delivered')}
              </Text>
            </View>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Delivered' ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              Delivered
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.topBar}>
          <Text style={styles.resultCount}>
            {filteredTrips.length} {filteredTrips.length === 1 ? 'Trip' : 'Trips'}
          </Text>
          <View style={styles.filterButtonsRow}>
            {selectedTab === 'Delivered' && (
              <TouchableOpacity
                style={[
                  styles.podFilterButton,
                  showPodPendingOnly ? styles.podFilterActive : styles.podFilterInactive,
                ]}
                activeOpacity={0.7}
                onPress={() => setShowPodPendingOnly(!showPodPendingOnly)}
              >
                <Ionicons
                  name="document-text-outline"
                  size={16}
                  color={showPodPendingOnly ? white : (isDarkMode ? white : '#000')}
                />
                <Text style={[
                  styles.podFilterText,
                  showPodPendingOnly ? styles.podFilterTextActive : styles.podFilterTextInactive,
                ]}>
                  POD Pending
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.filterButton}
              activeOpacity={0.7}
              onPress={() => setIsFilterModalVisible(true)}
            >
              <Ionicons
                name="options-outline"
                size={18}
                color={isDarkMode ? white : '#000'}
              />
              <Text style={styles.filterButtonText}>Filter</Text>
              {getActiveFilterCount() > 0 && (
                <View style={styles.filterBadge}>
                  <Text style={styles.filterBadgeText}>
                    {getActiveFilterCount()}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.tripsContainer}>
            {filteredTrips.length > 0 ? (
              filteredTrips.map((item) => (
                selectedTab === 'Ongoing' ? (
                  <OngoingTripCard key={item.id} item={item} />
                ) : (
                  <RegularTripCard key={item.id} item={item} />
                )
              ))
            ) : (
              <View style={styles.emptyContainer}>
                <Ionicons
                  name="search-outline"
                  size={64}
                  color={isDarkMode ? '#666' : '#CCC'}
                />
                <Text style={styles.emptyText}>
                  No trips found
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        users={uniqueUsers}
        selectedUsers={selectedFilters.users}
        truckTypes={uniqueTruckTypes}
        selectedTruckTypes={selectedFilters.truckTypes}
        onApplyFilter={handleApplyFilter}
        onReset={handleResetFilter}
      />
    </View>
  );
};

export default TripScreen;