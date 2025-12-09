// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
//     StatusBar,
//     ScrollView,
//     FlatList,
//     RefreshControl,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import {
//     App_Primary_color,
//     dark33,
//     dark55,
//     darkMode25,
//     white
// } from '../../common/Colors/colors';
// import { useSelector } from 'react-redux';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Feather from 'react-native-vector-icons/Feather';
// import SpaceBetweenRow from '../../components/wrapper/spacebetween';

// const TripsScreen = ({ navigation }) => {
//     const { isDarkMode } = useSelector(state => state.theme);
//     const [activeTab, setActiveTab] = useState('ongoing');
//     const [activePODTab, setActivePODTab] = useState('pending');
//     const [refreshing, setRefreshing] = useState(false);

//     // Mock data for ongoing trips
//     const ongoingTrips = [
//         {
//             id: '1',
//             bookingId: 'BK001234',
//             from: 'Mumbai',
//             to: 'Delhi',
//             truckNumber: 'MH 02 AB 1234',
//             driverName: 'Rajesh Kumar',
//             driverPhone: '+91 98765 43210',
//             truckType: '32ft MXL',
//             status: 'In Transit',
//             startDate: '24 Nov, 2025',
//             expectedDelivery: '26 Nov, 2025',
//             amount: '₹45,000',
//             distance: '1,425 km',
//             progress: 65,
//             currentLocation: 'Jaipur',
//             statusColor: '#FF9800',
//         },
//         {
//             id: '2',
//             bookingId: 'BK001232',
//             from: 'Pune',
//             to: 'Hyderabad',
//             truckNumber: 'MH 14 CD 5678',
//             driverName: 'Suresh Patil',
//             driverPhone: '+91 98765 43211',
//             truckType: '24ft MXL',
//             status: 'Loading',
//             startDate: '23 Nov, 2025',
//             expectedDelivery: '25 Nov, 2025',
//             amount: '₹35,000',
//             distance: '565 km',
//             progress: 10,
//             currentLocation: 'Pune',
//             statusColor: '#2196F3',
//         },
//     ];

//     // Mock data for completed trips
//     const completedTrips = [
//         {
//             id: '1',
//             bookingId: 'BK001233',
//             from: 'Bangalore',
//             to: 'Chennai',
//             truckNumber: 'KA 05 EF 9012',
//             driverName: 'Mahesh Reddy',
//             truckType: '20ft SXL',
//             status: 'Delivered',
//             completedDate: '23 Nov, 2025',
//             amount: '₹28,000',
//             distance: '346 km',
//             statusColor: '#4CAF50',
//             rating: 4.5,
//         },
//         {
//             id: '2',
//             bookingId: 'BK001230',
//             from: 'Kolkata',
//             to: 'Patna',
//             truckNumber: 'WB 01 GH 3456',
//             driverName: 'Amit Singh',
//             truckType: '19ft MXL',
//             status: 'Delivered',
//             completedDate: '21 Nov, 2025',
//             amount: '₹22,000',
//             distance: '584 km',
//             statusColor: '#4CAF50',
//             rating: 5.0,
//         },
//     ];

//     // Mock data for POD (Proof of Delivery)
//     const podPending = [
//         {
//             id: '1',
//             bookingId: 'BK001229',
//             from: 'Ahmedabad',
//             to: 'Mumbai',
//             truckType: '32ft MXL',
//             deliveredDate: '20 Nov, 2025',
//             amount: '₹32,000',
//             status: 'POD Pending',
//             statusColor: '#FF9800',
//             daysOverdue: 4,
//                   truckNumber: 'MH 02 AB 1234',
//             driverName: 'Rajesh Kumar',
//         },
//         {
//             id: '2',
//             bookingId: 'BK001225',
//             from: 'Surat',
//             to: 'Pune',
//             truckType: '24ft SXL',
//             deliveredDate: '18 Nov, 2025',
//             amount: '₹26,000',
//             status: 'POD Pending',
//             statusColor: '#FF9800',
//             daysOverdue: 6,
//              truckNumber: 'MH 02 AB 1234',
//             driverName: 'Rajesh Kumar',
//         },
//     ];

//     const podReceived = [
//         {
//             id: '1',
//             bookingId: 'BK001228',
//             from: 'Delhi',
//             to: 'Jaipur',
//             truckType: '20ft MXL',
//             deliveredDate: '19 Nov, 2025',
//             receivedDate: '20 Nov, 2025',
//             amount: '₹18,000',
//             status: 'POD Received',
//             statusColor: '#4CAF50',
//             documentType: 'Digital',
//         },
//         {
//             id: '2',
//             bookingId: 'BK001224',
//             from: 'Chennai',
//             to: 'Bangalore',
//             truckType: '14ft SXL',
//             deliveredDate: '17 Nov, 2025',
//             receivedDate: '18 Nov, 2025',
//             amount: '₹15,000',
//             status: 'POD Received',
//             statusColor: '#4CAF50',
//             documentType: 'Physical',
//         },
//     ];

//     const onRefresh = React.useCallback(() => {
//         setRefreshing(true);
//         setTimeout(() => {
//             setRefreshing(false);
//         }, 1500);
//     }, []);

//     const OngoingTripCard = ({ item }) => (
//         <TouchableOpacity
//             style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//             activeOpacity={0.7}
//             onPress={() => console.log('Trip clicked:', item.bookingId)}
//         >
//             <View style={styles.cardHeader}>
//                 <View style={styles.bookingIdContainer}>
//                     <Text style={[styles.bookingId, { color: isDarkMode ? white : '#000' }]}>
//                         {item.bookingId}
//                     </Text>
//                     <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '20' }]}>
//                         <View style={[styles.statusDot, { backgroundColor: item.statusColor }]} />
//                         <Text style={[styles.statusText, { color: item.statusColor }]}>
//                             {item.status}
//                         </Text>
//                     </View>
//                 </View>
//                 <Text style={[styles.amount, { color: App_Primary_color }]}>
//                     {item.amount}
//                 </Text>
//             </View>

//             <View style={styles.routeContainer}>
//                 <SpaceBetweenRow style={{}}>
//                     <View style={styles.locationContainer}>
//                         <View style={styles.locationDot} />
//                         <View style={{ flex: 1, }}>
//                             <Text style={[styles.locationLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                                 From
//                             </Text>
//                             <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                                 {item.from}
//                             </Text>
//                         </View>
//                     </View>

//                     <View style={styles.routeLine}>
//                         <View style={styles.dashedLine} />
//                         <MaterialCommunityIcons
//                             name="truck-fast"
//                             size={20}
//                             color={App_Primary_color}
//                         />
//                     </View>

//                     <View style={styles.locationContainer}>
//                         <View style={[styles.locationDot, { backgroundColor: App_Primary_color }]} />
//                         <View style={{ flex: 1 }}>
//                             <Text style={[styles.locationLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                                 To
//                             </Text>
//                             <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                                 {item.to}
//                             </Text>
//                         </View>
//                     </View>
//                 </SpaceBetweenRow>
//             </View>

//             {/* Progress Bar */}
//             <View style={styles.progressSection}>
//                 <View style={styles.progressHeader}>
//                     <Text style={[styles.progressLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                         Progress
//                     </Text>
//                     <Text style={[styles.progressPercentage, { color: App_Primary_color }]}>
//                         {item.progress}%
//                     </Text>
//                 </View>
//                 <View style={[styles.progressBar, { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }]}>
//                     <View
//                         style={[styles.progressFill, { width: `${item.progress}%`, backgroundColor: App_Primary_color }]}
//                     />
//                 </View>
//                 <Text style={[styles.currentLocation, { color: isDarkMode ? '#999' : '#666' }]}>
//                     Current: {item.currentLocation}
//                 </Text>
//             </View>

//             {/* Trip Details */}
//             <View style={styles.detailsRow}>
//                 <View style={styles.detailItem}>
//                     <Ionicons name="calendar-outline" size={16} color={isDarkMode ? '#999' : '#666'} />
//                     <View style={{ marginLeft: 6 }}>
//                         <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                             Expected Delivery
//                         </Text>
//                         <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
//                             {item.expectedDelivery}
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={styles.detailItem}>
//                     <FontAwesome5 name="road" size={14} color={isDarkMode ? '#999' : '#666'} />
//                     <View style={{ marginLeft: 8 }}>
//                         <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                             Distance
//                         </Text>
//                         <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
//                             {item.distance}
//                         </Text>
//                     </View>
//                 </View>
//             </View>

//             {/* Driver Info */}
//             <View style={[styles.driverSection, { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }]}>
//                 <View style={styles.driverInfo}>
//                     <View style={styles.driverAvatar}>
//                         <FontAwesome5 name="user" size={16} color={App_Primary_color} />
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         <Text style={[styles.driverName, { color: isDarkMode ? white : '#000' }]}>
//                             {item.driverName}
//                         </Text>
//                         <Text style={[styles.truckNumber, { color: isDarkMode ? '#999' : '#666' }]}>
//                             {item.truckNumber} • {item.truckType}
//                         </Text>
//                     </View>
//                 </View>
//                 <TouchableOpacity
//                     style={styles.callButton}
//                     activeOpacity={0.7}
//                     onPress={() => console.log('Call driver:', item.driverPhone)}
//                 >
//                     <Ionicons name="call" size={20} color={white} />
//                 </TouchableOpacity>
//             </View>
//         </TouchableOpacity>
//     );

//     const CompletedTripCard = ({ item }) => (
//         <TouchableOpacity
//             style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//             activeOpacity={0.7}
//             onPress={() => console.log('Completed trip:', item.bookingId)}
//         >
//             <View style={styles.cardHeader}>
//                 <View style={styles.bookingIdContainer}>
//                     <Text style={[styles.bookingId, { color: isDarkMode ? white : '#000' }]}>
//                         {item.bookingId}
//                     </Text>
//                     <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '20' }]}>
//                         <Feather name="check-circle" size={12} color={item.statusColor} />
//                         <Text style={[styles.statusText, { color: item.statusColor, marginLeft: 4 }]}>
//                             {item.status}
//                         </Text>
//                     </View>
//                 </View>
//                 <Text style={[styles.amount, { color: App_Primary_color }]}>
//                     {item.amount}
//                 </Text>
//             </View>
//             <SpaceBetweenRow style={{
//                 marginBottom: 6
//             }}>


//                 {/* <View style={styles.routeContainer}> */}
//                 <View style={styles.locationContainer}>
//                     <View style={styles.locationDot} />
//                     <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                         {item.from}
//                     </Text>
//                 </View>

//                 <View style={styles.routeLine}>
//                     <View style={styles.dashedLine} />
//                     <Feather name="arrow-right" size={20} color={App_Primary_color} />
//                 </View>

//                 <View style={styles.locationContainer}>
//                     <View style={[styles.locationDot, { backgroundColor: App_Primary_color }]} />
//                     <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                         {item.to}
//                     </Text>
//                 </View>
//                 {/* </View> */}
//             </SpaceBetweenRow>

//             <View style={styles.completedDetailsRow}>
//                 <View style={styles.completedDetail}>
//                     <Ionicons name="calendar-outline" size={14} color={isDarkMode ? '#999' : '#666'} />
//                     <Text style={[styles.completedDetailText, { color: isDarkMode ? '#999' : '#666' }]}>
//                         {item.completedDate}
//                     </Text>
//                 </View>
//                 <View style={styles.completedDetail}>
//                     <FontAwesome5 name="road" size={12} color={isDarkMode ? '#999' : '#666'} />
//                     <Text style={[styles.completedDetailText, { color: isDarkMode ? '#999' : '#666' }]}>
//                         {item.distance}
//                     </Text>
//                 </View>
//                 <View style={styles.completedDetail}>
//                     <FontAwesome5 name="truck" size={12} color={isDarkMode ? '#999' : '#666'} />
//                     <Text style={[styles.completedDetailText, { color: isDarkMode ? '#999' : '#666' }]}>
//                         {item.truckType}
//                     </Text>
//                 </View>
//             </View>

//             {/* Rating */}
//             <View style={[styles.ratingSection, { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }]}>
//                 <View style={styles.ratingContainer}>
//                     <Ionicons name="star" size={16} color="#FFB800" />
//                     <Text style={[styles.ratingText, { color: isDarkMode ? white : '#000' }]}>
//                         {item.rating}
//                     </Text>
//                 </View>
//                 <TouchableOpacity
//                     style={styles.viewDetailsButton}
//                     activeOpacity={0.7}
//                 >
//                     <Text style={styles.viewDetailsText}>View Details</Text>
//                     <Feather name="chevron-right" size={16} color={App_Primary_color} />
//                 </TouchableOpacity>
//             </View>
//         </TouchableOpacity>
//     );

//     const PODCard = ({ item, isPending }) => (
//         <TouchableOpacity
//             style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//             activeOpacity={0.7}
//             onPress={() => console.log('POD clicked:', item.bookingId)}
//         >
//             <View style={styles.cardHeader}>
//                 <View style={styles.bookingIdContainer}>
//                     <Text style={[styles.bookingId, { color: isDarkMode ? white : '#000' }]}>
//                         {item.bookingId}
//                     </Text>
//                     <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '20' }]}>
//                         <View style={[styles.statusDot, { backgroundColor: item.statusColor }]} />
//                         <Text style={[styles.statusText, { color: item.statusColor }]}>
//                             {item.status}
//                         </Text>
//                     </View>
//                 </View>
//                 <Text style={[styles.amount, { color: App_Primary_color }]}>
//                     {item.amount}
//                 </Text>
//             </View>

//             {/* <View style={styles.routeContainer}> */}
//             <SpaceBetweenRow style={{
//                 marginBottom: 5
//             }}>

//                 <View style={styles.locationContainer}>
//                     <View style={styles.locationDot} />
//                     <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                         {item.from}
//                     </Text>
//                 </View>

//                 <View style={styles.routeLine}>
//                     <View style={styles.dashedLine} />
//                     <Feather name="arrow-right" size={20} color={App_Primary_color} />
//                 </View>

//                 <View style={styles.locationContainer}>
//                     <View style={[styles.locationDot, { backgroundColor: App_Primary_color }]} />
//                     <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]} numberOfLines={1}>
//                         {item.to}
//                     </Text>
//                 </View>
//                 {/* </View> */}
//             </SpaceBetweenRow>


//             <View style={styles.podDetailsSection}>
//                 <View style={styles.podDetailRow}>
//                     <Text style={[styles.podLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                         Delivered Date
//                     </Text>
//                     <Text style={[styles.podValue, { color: isDarkMode ? white : '#000' }]}>
//                         {item.deliveredDate}
//                     </Text>
//                 </View>

//                 {isPending ? (
//                     <View style={styles.podDetailRow}>
//                         <Text style={[styles.podLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                             Overdue
//                         </Text>
//                         <Text style={[styles.podValue, { color: '#FF3B30' }]}>
//                             {item.daysOverdue} days
//                         </Text>
//                     </View>
//                 ) : (
//                     <>
//                         <View style={styles.podDetailRow}>
//                             <Text style={[styles.podLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                                 Received Date
//                             </Text>
//                             <Text style={[styles.podValue, { color: isDarkMode ? white : '#000' }]}>
//                                 {item.receivedDate}
//                             </Text>
//                         </View>
//                         <View style={styles.podDetailRow}>
//                             <Text style={[styles.podLabel, { color: isDarkMode ? '#999' : '#666' }]}>
//                                 Document Type
//                             </Text>
//                             <Text style={[styles.podValue, { color: App_Primary_color }]}>
//                                 {item.documentType}
//                             </Text>
//                         </View>
//                     </>
//                 )}
//             </View>

//             {/* {isPending && (
//                 <TouchableOpacity
//                     style={styles.uploadPODButton}
//                     activeOpacity={0.8}
//                 >
//                     <Ionicons name="cloud-upload-outline" size={20} color={white} />
//                     <Text style={styles.uploadPODText}>Upload POD</Text>
//                 </TouchableOpacity>
//             )} */}
//             {
//                 isPending &&
//                    <View style={[styles.driverSection, { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }]}>
//                 <View style={styles.driverInfo}>
//                     <View style={styles.driverAvatar}>
//                         <FontAwesome5 name="user" size={16} color={App_Primary_color} />
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         <Text style={[styles.driverName, { color: isDarkMode ? white : '#000' }]}>
//                             {item?.driverName}
//                         </Text>
//                         <Text style={[styles.truckNumber, { color: isDarkMode ? '#999' : '#666' }]}>
//                             {item?.truckNumber} • {item?.truckType}
//                         </Text>
//                     </View>
//                 </View>
//                 <TouchableOpacity
//                     style={styles.callButton}
//                     activeOpacity={0.7}
//                     onPress={() => console.log('Call driver:', item.driverPhone)}
//                 >
//                     <Ionicons name="call" size={20} color={white} />
//                 </TouchableOpacity>
//             </View>
//             }

//             {!isPending && (
//                 <TouchableOpacity
//                     style={styles.viewPODButton}
//                     activeOpacity={0.7}
//                 >
//                     <Feather name="file-text" size={18} color={App_Primary_color} />
//                     <Text style={styles.viewPODText}>Download POD Document</Text>
//                 </TouchableOpacity>
//             )}
//         </TouchableOpacity>
//     );

//     const renderContent = () => {
//         if (activeTab === 'ongoing') {
//             return ongoingTrips.length > 0 ? (
//                 ongoingTrips.map((item) => <OngoingTripCard key={item.id} item={item} />)
//             ) : (
//                 <View style={styles.emptyContainer}>
//                     <MaterialCommunityIcons
//                         name="truck-outline"
//                         size={64}
//                         color={isDarkMode ? '#666' : '#CCC'}
//                     />
//                     <Text style={[styles.emptyText, { color: isDarkMode ? '#999' : '#666' }]}>
//                         No ongoing trips
//                     </Text>
//                 </View>
//             );
//         } else if (activeTab === 'completed') {
//             return completedTrips.length > 0 ? (
//                 completedTrips.map((item) => <CompletedTripCard key={item.id} item={item} />)
//             ) : (
//                 <View style={styles.emptyContainer}>
//                     <Feather name="check-circle" size={64} color={isDarkMode ? '#666' : '#CCC'} />
//                     <Text style={[styles.emptyText, { color: isDarkMode ? '#999' : '#666' }]}>
//                         No completed trips
//                     </Text>
//                 </View>
//             );
//         } else if (activeTab === 'pod') {
//             const podData = activePODTab === 'pending' ? podPending : podReceived;
//             return (
//                 <>
//                     <View style={styles.podTabContainer}>
//                         <TouchableOpacity
//                             style={[
//                                 styles.podTab,
//                                 activePODTab === 'pending' && styles.podTabActive,
//                                 // { backgroundColor: isDarkMode ? dark33 : white }
//                             ]}
//                             activeOpacity={0.7}
//                             onPress={() => setActivePODTab('pending')}
//                         >
//                             <Text style={[
//                                 styles.podTabText,
//                                 { color: activePODTab === 'pending' ? white : (isDarkMode ? '#999' : '#666') },
//                                 activePODTab === 'pending' && { color: white }
//                             ]}>
//                                 Pending
//                             </Text>
//                             {podPending.length > 0 && (
//                                 <View style={styles.podBadge}>
//                                     <Text style={styles.podBadgeText}>{podPending.length}</Text>
//                                 </View>
//                             )}
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             style={[
//                                 styles.podTab,
//                                 activePODTab === 'received' && styles.podTabActive,
//                                 // { backgroundColor: isDarkMode ? dark33 : white }
//                             ]}
//                             activeOpacity={0.7}
//                             onPress={() => setActivePODTab('received')}
//                         >
//                             <Text style={[
//                                 styles.podTabText,
//                                 { color: activePODTab === 'received' ? white : (isDarkMode ? '#999' : '#666') },
//                                 activePODTab === 'received' && { color: white }
//                             ]}>
//                                 Received
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                     {podData.length > 0 ? (
//                         podData.map((item) => (
//                             <PODCard key={item.id} item={item} isPending={activePODTab === 'pending'} />
//                         ))
//                     ) : (
//                         <View style={styles.emptyContainer}>
//                             <Feather name="file-text" size={64} color={isDarkMode ? '#666' : '#CCC'} />
//                             <Text style={[styles.emptyText, { color: isDarkMode ? '#999' : '#666' }]}>
//                                 No {activePODTab} PODs
//                             </Text>
//                         </View>
//                     )}
//                 </>
//             );
//         }
//     };

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//         },
//         header: {
//             backgroundColor: isDarkMode ? dark33 : white,
//             paddingTop: 50,
//             paddingBottom: 20,
//             paddingHorizontal: 20,
//             borderBottomLeftRadius: 24,
//             borderBottomRightRadius: 24,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.1,
//             shadowRadius: 8,
//             elevation: 5,
//         },
//         headerTitle: {
//             fontSize: 24,
//             fontFamily: FONTS_FAMILY.Poppins_Bold,
//             color: isDarkMode ? white : '#000',
//             marginBottom: 16,
//         },
//         tabContainer: {
//             flexDirection: 'row',
//             backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//             borderRadius: 12,
//             padding: 4,
//         },
//         tab: {
//             flex: 1,
//             paddingVertical: 7,
//             alignItems: 'center',
//             borderRadius: 10,
//         },
//         tabActive: {
//             backgroundColor: App_Primary_color,
//         },
//         tabText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//         },
//         scrollContent: {
//             paddingHorizontal: 20,
//             paddingTop: 20,
//             paddingBottom: 100,
//         },
//         tripCard: {
//             padding: 16,
//             borderRadius: 16,
//             marginBottom: 16,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.05,
//             shadowRadius: 8,
//             elevation: 3,
//         },
//         cardHeader: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'flex-start',
//             marginBottom: 16,
//         },
//         bookingIdContainer: {
//             flex: 1,
//         },
//         bookingId: {
//             fontSize: 15,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//             marginBottom: 6,
//         },
//         statusBadge: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             alignSelf: 'flex-start',
//             paddingHorizontal: 10,
//             paddingVertical: 4,
//             borderRadius: 12,
//         },
//         statusDot: {
//             width: 6,
//             height: 6,
//             borderRadius: 3,
//             marginRight: 6,
//         },
//         statusText: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//         },
//         amount: {
//             fontSize: 16,
//             fontFamily: FONTS_FAMILY.Poppins_Bold,
//         },
//         routeContainer: {
//             marginBottom: 16,
//         },
//         locationContainer: {
//             //   flexDirection: 'row',
//             alignItems: 'center',
//             marginVertical: 6,
//         },
//         locationDot: {
//             width: 10,
//             height: 10,
//             borderRadius: 5,
//             backgroundColor: '#999',
//             //   marginRight: 12,
//         },
//         locationLabel: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//             marginBottom: 2,
//             left: 11
//         },
//         locationText: {
//             fontSize: 14,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//             flex: 1,
//         },
//         routeLine: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginLeft: 5,
//             marginVertical: 2,
//         },
//         dashedLine: {
//             width: 50,
//             //   height: 20,
//             borderTopWidth: 1,
//             borderLeftColor: '#999',
//             borderStyle: 'dashed',
//             marginRight: 16,
//         },
//         progressSection: {
//             marginBottom: 16,
//         },
//         progressHeader: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 8,
//         },
//         progressLabel: {
//             fontSize: 12,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//         },
//         progressPercentage: {
//             fontSize: 12,
//             fontFamily: FONTS_FAMILY.Poppins_Bold,
//         },
//         progressBar: {
//             height: 6,
//             borderRadius: 3,
//             overflow: 'hidden',
//             marginBottom: 6,
//         },
//         progressFill: {
//             height: '100%',
//             borderRadius: 3,
//         },
//         currentLocation: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//         },
//         detailsRow: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 16,
//         },
//         detailItem: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             flex: 1,
//         },
//         detailLabel: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//             marginBottom: 2,
//         },
//         detailValue: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         driverSection: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             paddingTop: 16,
//             borderTopWidth: 1,
//         },
//         driverInfo: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             flex: 1,
//         },
//         driverAvatar: {
//             width: 40,
//             height: 40,
//             borderRadius: 20,
//             backgroundColor: App_Primary_color + '20',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginRight: 12,
//         },
//         driverName: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//             marginBottom: 2,
//         },
//         truckNumber: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//         },
//         callButton: {
//             width: 40,
//             height: 40,
//             borderRadius: 20,
//             backgroundColor: App_Primary_color,
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         completedDetailsRow: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginBottom: 16,
//             paddingBottom: 16,
//             borderBottomWidth: 1,
//             borderBottomColor: isDarkMode ? dark55 : '#F0F0F0',
//         },
//         completedDetail: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             gap: 6,
//         },
//         completedDetailText: {
//             fontSize: 12,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//         },
//         ratingSection: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             paddingTop: 12,
//         },
//         ratingContainer: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             gap: 6,
//         },
//         ratingText: {
//             fontSize: 14,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         viewDetailsButton: {
//             flexDirection: 'row',
//             alignItems: 'center',
//         },
//         viewDetailsText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//             color: App_Primary_color,
//             marginRight: 4,
//         },
//         podTabContainer: {
//             flexDirection: 'row',
//             backgroundColor: isDarkMode ? dark33 : white,
//             borderRadius: 12,
//             padding: 4,
//             marginBottom: 20,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 1 },
//             shadowOpacity: 0.05,
//             shadowRadius: 4,
//             elevation: 2,
//         },
//         podTab: {
//             flex: 1,
//             flexDirection: 'row',
//             paddingVertical: 8,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: 10,
//             gap: 6,
//         },
//         podTabActive: {
//             backgroundColor: App_Primary_color,
//         },
//         podTabText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//             //   color: App_Primary_color
//         },
//         podBadge: {
//             backgroundColor: '#FF3B30',
//             paddingHorizontal: 6,
//             paddingVertical: 2,
//             borderRadius: 10,
//             minWidth: 20,
//             alignItems: 'center',
//         },
//         podBadgeText: {
//             color: white,
//             fontSize: 10,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         podDetailsSection: {
//             marginBottom:5,
//         },
//         podDetailRow: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: 10,
//         },
//         podLabel: {
//             fontSize: 12,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//         },
//         podValue: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         uploadPODButton: {
//             backgroundColor: App_Primary_color,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingVertical: 12,
//             borderRadius: 10,
//             gap: 8,
//         },
//         uploadPODText: {
//             color: white,
//             fontSize: 14,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         viewPODButton: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingVertical: 9,
//             borderRadius: 10,
//             borderWidth: 1,
//             borderColor: App_Primary_color,
//             gap: 8,
//         },
//         viewPODText: {
//             color: App_Primary_color,
//             fontSize: 14,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//         },
//         emptyContainer: {
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingVertical: 60,
//         },
//         emptyText: {
//             fontSize: 16,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//             marginTop: 16,
//         },
//     });

//     return (
//         <View style={styles.container}>
//             <StatusBar
//                 barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//                 backgroundColor={isDarkMode ? dark33 : white}
//             />

//             {/* Header */}
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>My Trips</Text>

//                 {/* Main Tabs */}
//                 <View style={styles.tabContainer}>
//                     <TouchableOpacity
//                         style={[styles.tab, activeTab === 'ongoing' && styles.tabActive]}
//                         activeOpacity={0.7}
//                         onPress={() => setActiveTab('ongoing')}
//                     >
//                         <Text style={[
//                             styles.tabText,
//                             { color: activeTab === 'ongoing' ? white : (isDarkMode ? '#999' : '#666') }
//                         ]}>
//                             Ongoing
//                         </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.tab, activeTab === 'completed' && styles.tabActive]}
//                         activeOpacity={0.7}
//                         onPress={() => setActiveTab('completed')}
//                     >
//                         <Text style={[
//                             styles.tabText,
//                             { color: activeTab === 'completed' ? white : (isDarkMode ? '#999' : '#666') }
//                         ]}>
//                             Completed
//                         </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.tab, activeTab === 'pod' && styles.tabActive]}
//                         activeOpacity={0.7}
//                         onPress={() => setActiveTab('pod')}
//                     >
//                         <Text style={[
//                             styles.tabText,
//                             { color: activeTab === 'pod' ? white : (isDarkMode ? '#999' : '#666') }
//                         ]}>
//                             POD
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Content */}
//             <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={styles.scrollContent}
//                 refreshControl={
//                     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//                 }
//             >
//                 {renderContent()}
//             </ScrollView>
//         </View>
//     );
// };

// export default TripsScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   FlatList,
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
// import Row from '../../components/wrapper/row';
// // import TripFilterModal from './TripFilterModal';

// const TripScreen = ({ navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedTab, setSelectedTab] = useState('POD Pending'); // 'Ongoing', 'POD Pending', 'Delivered'
//   const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     users: [],
//     truckTypes: [],
//     periods: [],
//   });

//   // Mock data
//   const [allTrips] = useState([
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
//       id: '6745903',
//       vehicleNumber: 'GJ789012 (XYZ)',
//       date: '24-Nov-25',
//       material: 'Textiles',
//       weight: '12 Ton',
//       distance: '450 KM',
//       from: 'Ahmedabad',
//       to: 'Delhi',
//       amount: '₹35000',
//       status: 'Ongoing',
//       user: '7471160664',
//       truckType: '32 FEET MULTI AXLE',
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
//     {
//       id: '6745906',
//       vehicleNumber: 'HR567890 (STU)',
//       date: '23-Nov-25',
//       material: 'Construction Material',
//       weight: '20 Ton',
//       distance: '650 KM',
//       from: 'Gurgaon',
//       to: 'Chandigarh',
//       amount: '₹48000',
//       status: 'Ongoing',
//       user: 'Airwat - 9678466464',
//       truckType: '32 FEET MULTI AXLE',
//     },
//   ]);

//   // Extract unique values for filters
//   const uniqueUsers = [...new Set(allTrips.map(item => item.user))];
//   const uniqueTruckTypes = [...new Set(allTrips.map(item => item.truckType))];
//   const periods = ['Today', 'Last 7 Days', 'Last 30 Days', 'Custom'];

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
//       periods: [],
//     });
//     setIsFilterModalVisible(false);
//   };

//   // Get active filter count
//   const getActiveFilterCount = () => {
//     return selectedFilters.users.length + selectedFilters.truckTypes.length + selectedFilters.periods.length;
//   };

//   const TripCard = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//       activeOpacity={0.7}
//       onPress={() => console.log('Trip clicked:', item.id)}
//     >
//       {/* Header Row */}
//       <View style={styles.cardHeader}>
//         <Text style={[styles.tripId, { color: isDarkMode ? white : '#000' }]}>
//           #{item.id}
//         </Text>
//         <Text style={[styles.statusBadge, { 
//           backgroundColor: item.status === 'Delivered' ? '#E8F5E9' : 
//                           item.status === 'POD Pending' ? '#E3F2FD' : '#FFF3E0',
//           color: item.status === 'Delivered' ? '#4CAF50' : 
//                  item.status === 'POD Pending' ? '#2196F3' : '#FF9800',
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
//       paddingTop: 50,
//       paddingBottom: 16,
//       paddingHorizontal: 20,
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
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? white : '#000',
//       marginLeft: 8,
//     },
//     tabsContainer: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     tab: {
//       paddingHorizontal: 16,
//       paddingVertical: 8,
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
//       fontSize: 13,
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
//       paddingHorizontal: 20,
//       paddingVertical: 16,
//     },
//     resultCount: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? white : '#000',
//     },
//     filterButton: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//       paddingHorizontal: 12,
//       paddingVertical: 8,
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
//       paddingHorizontal: 20,
//     },
//     tripCard: {
//       padding: 16,
//       borderRadius: 12,
//       marginBottom: 12,
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
//       marginBottom: 8,
//     },
//     tripId: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
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
//       marginBottom: 6,
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
//       marginBottom: 10,
//     },
//     detailText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     locationRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 6,
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
//     amountContainer: {
//       position: 'absolute',
//       bottom: 12,
//       right: 12,
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
//               Ongoing
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
//                 <TripCard key={item.id} item={item} />
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
//       {/* <TripFilterModal
//         visible={isFilterModalVisible}
//         onClose={() => setIsFilterModalVisible(false)}
//         users={uniqueUsers}
//         truckTypes={uniqueTruckTypes}
//         periods={periods}
//         selectedFilters={selectedFilters}
//         onApplyFilter={handleApplyFilter}
//         onReset={handleResetFilter}
//       /> */}
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FilterModal from '../Home/FilterModel';

const TripScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Ongoing');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    users: [],
    truckTypes: [],
  });

  // Mock data with Ongoing trips having tracking info
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
      progress: 0.93, // 93% complete
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
    },
  ]);

  // Extract unique values for filters
  const uniqueUsers = [...new Set(allTrips.map(item => item.user))];
  const uniqueTruckTypes = [...new Set(allTrips.map(item => item.truckType))];

  // Get tab counts
  const getTabCount = (status) => {
    return allTrips.filter(trip => trip.status === status).length;
  };

  // Filter trips based on search, tab, and filters
  const getFilteredTrips = () => {
    let filtered = allTrips;

    // Filter by tab
    filtered = filtered.filter(trip => trip.status === selectedTab);

    // Filter by search
    if (searchQuery.trim()) {
      filtered = filtered.filter(trip => 
        trip.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected filters
    if (selectedFilters.users.length > 0) {
      filtered = filtered.filter(trip => selectedFilters.users.includes(trip.user));
    }

    if (selectedFilters.truckTypes.length > 0) {
      filtered = filtered.filter(trip => selectedFilters.truckTypes.includes(trip.truckType));
    }

    return filtered;
  };

  const filteredTrips = getFilteredTrips();

  // Handle filter apply
  const handleApplyFilter = (filters) => {
    setSelectedFilters(filters);
    setIsFilterModalVisible(false);
  };

  // Handle filter reset
  const handleResetFilter = () => {
    setSelectedFilters({
      users: [],
      truckTypes: [],
    });
  };

  // Get active filter count
  const getActiveFilterCount = () => {
    return selectedFilters.users.length + selectedFilters.truckTypes.length;
  };

  // Blinking Dot Component
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
          {
            opacity,
            backgroundColor: 'green',
          },
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
      {/* Header Row */}
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

      {/* Date and Details Row */}
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

      {/* From Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {item.from}
        </Text>
      </View>

      {/* To Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {item.to}
        </Text>
      </View>

      {/* Tracking Info */}
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

      {/* Progress Bar */}
      <View style={[styles.progressBarContainer, { backgroundColor: isDarkMode ? darkMode25 : '#E0E0E0' }]}>
        <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]}>
          <View style={styles.progressDots}>
            {[...Array(5)].map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.progressDot,
                  { backgroundColor: index < (item.progress * 5) ? white : 'white' }
                ]} 
              />
            ))}
          </View>
        </View>
      </View>
        <View style={styles.truckIconContainer}>
          <FontAwesome5 name="truck-moving" size={10} color={App_Primary_color} />
        </View>

      {/* Amount - Bottom Right */}
  
    </TouchableOpacity>
  );

  const RegularTripCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.tripCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('TripDetailScreen')}
    >
      {/* Header Row */}
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

      {/* Vehicle and Date */}
      <View style={styles.cardRow}>
        <Text style={[styles.vehicleNumber, { color: isDarkMode ? white : '#000' }]}>
          {item.vehicleNumber}
        </Text>
        <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
          {item.date}
        </Text>
      </View>

      {/* Details Row */}
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

      {/* From Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {item.from}
        </Text>
      </View>

      {/* To Location */}
      <View style={styles.locationRow}>
        <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
        <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
          {item.to}
        </Text>
      </View>

      {/* Amount - Bottom Right */}
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
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 20,
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
    },
    tab: {
      paddingHorizontal: 10,
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
    filterButtonText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
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
      // marginBottom: 3,
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
      width: 8,
      height: 8,
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
      height: 8,
      borderRadius: 16,
      overflow: 'hidden',
      position: 'relative',
      zIndex:-200000
      // marginBottom: 12,
    },
    progressBar: {
      height: '100%',
      backgroundColor: App_Primary_color,
      borderRadius: 16,
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
    progressDots: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    progressDot: {
      width: 5,
      height: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: white,
    },
    truckIconContainer: {
      position: 'absolute',
      right: 10,
      bottom:5,
      // top: -2,
      width: 20,
      height: 20,
      borderRadius: 14,
      backgroundColor: '#F1F1F1',
      justifyContent: 'center',
      alignItems: 'center',
      elevation:3,
      zIndex:1000
    },
    amountContainer: {
      // position: 'absolute',
      // bottom: 12,
      // right: 12,
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

      {/* Header */}
      <View style={styles.header}>
        {/* Search Bar */}
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

        {/* Tabs */}
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
              Ongoing
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
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
          </TouchableOpacity>

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

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.resultCount}>
            {filteredTrips.length} {filteredTrips.length === 1 ? 'Trip' : 'Trips'}
          </Text>
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

        {/* Trips List */}
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

      {/* Filter Modal */}
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