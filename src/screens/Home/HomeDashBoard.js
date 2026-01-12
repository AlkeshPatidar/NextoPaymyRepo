


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   FlatList,
//   RefreshControl,
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
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Feather from 'react-native-vector-icons/Feather';
// import Row from '../../components/wrapper/row';
// import FilterModal from './FilterModel';
// import CustomText from '../../components/TextComponent';

// const HomeScreen = ({ navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [refreshing, setRefreshing] = useState(false);
//   const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   // Mock data - Replace with API calls
//   const [dashboardData, setDashboardData] = useState({
//     ongoingShipments: 12,
//     completedShipments: 145,
//     pendingPayments: '₹2,45,000',
//   });

//   const [allBookings, setAllBookings] = useState([
//     {
//       id: '1',
//       truckType: '32 FEET MULTI AXLE',
//       material: 'Furniture',
//       weight: '18 Ton',
//       distance: '363 KM',
//       driverName: 'Brajesh Kumar Sah',
//       time: '5 h',
//       status: 'Expired',
//       from: 'Mumbai',
//       user: 'Rahul',
//       to: 'Surat',
//     },
//     {
//       id: '2',
//       truckType: '20 FEET OPEN',
//       material: 'Furniture',
//       weight: '7 Ton',
//       distance: '791 KM',
//       driverName: 'Adnan Hussain K',
//       time: '5 h',
//       status: 'Expired',
//       from: 'Indore',
//       user: 'Sri',
//       to: 'Lucknow',
//     },
//     {
//       id: '3',
//       truckType: '20 FEET OPEN',
//       material: 'Furniture',
//       weight: '9 Ton',
//       distance: '295 KM',
//       driverName: 'Mohammed Shafee R',
//       time: '18 h',
//       status: 'Expired',
//       from: 'Kolkata',
//       to: 'Jamshedpur',
//       user: 'Mangal',
//     },
//     {
//       id: '4',
//       truckType: '32 FEET MULTI AXLE',
//       material: 'Furniture',
//       weight: '7 Ton',
//       distance: '195 KM',
//       driverName: 'Ashiya Memon',
//       time: '19 h',
//       status: 'Expired',
//       from: 'Pandharpur',
//       user: 'Madhav',
//       to: 'Pune',
//     },
//   ]);

//   const [recentBookings, setRecentBookings] = useState([]);

//   useEffect(() => {
//     // Initially show all bookings
//     setRecentBookings(allBookings);
//   }, []);

//   // Extract unique users from all bookings
//   const uniqueUsers = [...new Set(allBookings.map(item => item.user))];

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     // Simulate API call
//     setTimeout(() => {
//       setRefreshing(false);
//       console.log('Data refreshed');
//     }, 1500);
//   }, []);

//   // Apply filter
//   const handleApplyFilter = (users) => {
//     setSelectedUsers(users);
//     if (users.length === 0) {
//       setRecentBookings(allBookings);
//     } else {
//       const filtered = allBookings.filter(item => users.includes(item.user));
//       setRecentBookings(filtered);
//     }
//   };

//   // Reset filter
//   const handleResetFilter = () => {
//     setSelectedUsers([]);
//     setRecentBookings(allBookings);
//     setIsFilterModalVisible(false);
//   };

//   // Handle view all / filter button click
//   const handleFilterClick = () => {
//     if (selectedUsers.length > 0) {
//       // Clear filter
//       handleResetFilter();
//     } else {
//       // Open filter modal
//       setIsFilterModalVisible(true);
//     }
//   };

//   const StatCard = ({ icon, iconBg, title, value, onPress }) => (
//     <TouchableOpacity
//       style={[styles.statCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//       activeOpacity={0.7}
//       onPress={onPress}
//     >
//       <View style={[styles.iconContainer, { backgroundColor: iconBg + '20' }]}>
//         {icon}
//       </View>
//       <Text style={[styles.statTitle, { color: isDarkMode ? '#999' : '#666' }]}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );

//   const BookingCard = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.bookingCard, { backgroundColor: isDarkMode ? dark33 : white }]}
//       activeOpacity={0.7}
//       onPress={() => console.log('Booking clicked:', item.id)}
//     >
//       {/* Header Row - Truck Type, Driver Name, Time */}
//       <View style={styles.cardHeaderRow}>
//         <Text style={[styles.truckTypeText, { color: isDarkMode ? white : '#000' }]}>
//           {item.truckType}
//         </Text>
//         <View style={styles.rightInfo}>
//           <Text style={[styles.driverName, { color: isDarkMode ? '#999' : '#666' }]}>
//             {item.driverName}
//           </Text>
//           <Text style={[styles.timeText, { color: isDarkMode ? '#999' : '#666' }]}>
//             {item.time}
//           </Text>
//         </View>
//       </View>

//       {/* Material, Weight, Distance Row */}
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

//       {/* Status Badge - Bottom Right */}
//       {item.status && (
//         <View style={styles.statusBadgeContainer}>
//           <Ionicons name="time-outline" size={14} color="#FF3B30" />
//           <Text style={styles.statusText}>{item.status}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//     },
//     header: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingTop: 40,
//       paddingBottom: 5,
//       paddingHorizontal: 20,
//       borderBottomLeftRadius: 24,
//       borderBottomRightRadius: 24,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 5,
//     },
//     headerTop: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       // marginBottom: 10,
//     },
//     greeting: {
//       fontSize: 16,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     userName: {
//       fontSize: 18,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: isDarkMode ? white : '#000',
//       marginTop: 4,
//     },
//     notificationButton: {
//       width: 44,
//       height: 44,
//       borderRadius: 22,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     notificationBadge: {
//       position: 'absolute',
//       top: 8,
//       right: 8,
//       width: 8,
//       height: 8,
//       borderRadius: 4,
//       backgroundColor: '#FF3B30',
//     },
//     createBookingButton: {
//       backgroundColor: App_Primary_color,
//       borderRadius: 10,
//       paddingVertical: 5,
//       alignItems: 'center',
//       justifyContent: 'center',
//       shadowColor: App_Primary_color,
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.3,
//       shadowRadius: 8,
//       elevation: 8,
//       alignSelf: 'center',
//       paddingHorizontal: 8
//     },
//     createBookingText: {
//       color: white,
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginLeft: 8,
//     },
//     scrollContent: {
//       paddingBottom: 100,
//     },
//     statsContainer: {
//       flexDirection: 'row',
//       paddingHorizontal: 10,
//       paddingTop: 10,
//       gap: 12,
//     },
//     statCard: {
//       flex: 1,
//       padding: 5,
//       borderRadius: 16,
//       alignItems: 'center',
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//     },
//     iconContainer: {
//       width: 48,
//       height: 48,
//       borderRadius: 24,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 5,
//     },
//     statValue: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//     },
//     statTitle: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       textAlign: 'center',
//     },
//     sectionContainer: {
//       marginTop: 18,
//       paddingHorizontal: 10,
//     },
//     sectionHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 7,
//     },
//     sectionTitle: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//     },
//     viewAllButton: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       position: 'relative',
//     },
//     viewAllText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: App_Primary_color,
//       marginRight: 4,
//     },
//     filterBadge: {
//       position: 'absolute',
//       top: -4,
//       right: -4,
//       backgroundColor: App_Primary_color,
//       width: 16,
//       height: 16,
//       borderRadius: 8,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     filterBadgeText: {
//       color: white,
//       fontSize: 9,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//     },
//     bookingCard: {
//       padding: 10,
//       borderRadius: 6,
//       marginBottom: 12,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//       position: 'relative',
//     },
//     cardHeaderRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 0,
//     },
//     truckTypeText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       flex: 1,
//     },
//     rightInfo: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 8,
//     },
//     driverName: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     timeText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     detailsRow: {
//       flexDirection: 'row',
//       gap: 8,
//       // marginBottom: 10,
//     },
//     detailText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     locationRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 3,
//     },
//     locationDot: {
//       width: 8,
//       height: 8,
//       borderRadius: 4,
//       marginRight: 8,
//     },
//     locationText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     statusBadgeContainer: {
//       position: 'absolute',
//       bottom: 12,
//       right: 12,
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: '#FFEBEE',
//       paddingHorizontal: 8,
//       paddingVertical: 4,
//       borderRadius: 10,
//       gap: 4,
//     },
//     statusText: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: '#FF3B30',
//     },
//     emptyContainer: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 40,
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
//         <View style={styles.headerTop}>
//           <View>
//             <Text style={styles.greeting}>Hello,</Text>
//             <Text style={styles.userName}>Rahul Kumar</Text>
//           </View>
//           <Row style={{
//             gap: 10
//           }}>
//             <TouchableOpacity
//               style={styles.createBookingButton}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate('CreateBookingScreen')}
//             >
//               {/* <Ionicons name="add-circle" size={24} color={white} /> */}
//               <CustomText style={{
//                 color:'white',
//                 fontFamily:FONTS_FAMILY.Poppins_Medium,
//                 fontSize:14
//               }}>Book</CustomText>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.notificationButton}
//               activeOpacity={0.7}
//               onPress={() => navigation.navigate('NotificationCenter')}
//             >
//               <Ionicons
//                 name="notifications-outline"
//                 size={24}
//                 color={isDarkMode ? white : '#000'}
//               />
//               <View style={styles.notificationBadge} />
//             </TouchableOpacity>
//           </Row>
//         </View>
//       </View>
//           {/* Stats Cards */}
//         <View style={styles.statsContainer}>
//           <StatCard
//             icon={<MaterialCommunityIcons name="truck-delivery" size={24} color="#FF9800" />}
//             iconBg="#FF9800"
//             title="Insurance"
//             onPress={() => navigation.navigate('OngoingShipments')}
//           />
//           <StatCard
//             icon={<Feather name="check-circle" size={24} color="#4CAF50" />}
//             iconBg="#4CAF50"
//             title="Tracking"
//             onPress={() => navigation.navigate('CompletedShipments')}
//           />
//           <StatCard
//             icon={<FontAwesome5 name="rupee-sign" size={20} color="#2196F3" />}
//             iconBg="#2196F3"
//             title="Booking"
//             onPress={() => navigation.navigate('Payments')}
//           />
//         </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       >


//         {/* Recent Bookings Section */}
//         <View style={styles.sectionContainer}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Recent Bookings</Text>
//             <TouchableOpacity
//               style={styles.viewAllButton}
//               activeOpacity={0.7}
//               onPress={handleFilterClick}
//             >
//               {selectedUsers.length > 0 ? (
//                 <>
//                   <Text style={styles.viewAllText}>Clear Filter</Text>
//                   <Ionicons name="close-circle" size={18} color={App_Primary_color} />
//                 </>
//               ) : (
//                 <>
//                   <Ionicons name="filter" size={18} color={App_Primary_color} />
//                   {selectedUsers.length > 0 && (
//                     <View style={styles.filterBadge}>
//                       <Text style={styles.filterBadgeText}>
//                         {selectedUsers.length}
//                       </Text>
//                     </View>
//                   )}
//                 </>
//               )}
//             </TouchableOpacity>
//           </View>

//           {recentBookings.length > 0 ? (
//             recentBookings.map((item) => (
//               <BookingCard key={item.id} item={item} />
//             ))
//           ) : (
//             <View style={styles.emptyContainer}>
//               <MaterialCommunityIcons
//                 name="truck-outline"
//                 size={64}
//                 color={isDarkMode ? '#666' : '#CCC'}
//               />
//               <Text style={styles.emptyText}>
//                 {selectedUsers.length > 0 
//                   ? 'No bookings found for selected users' 
//                   : 'No bookings yet'}
//               </Text>
//             </View>
//           )}
//         </View>
//       </ScrollView>

//       {/* Filter Modal */}
//       <FilterModal
//         visible={isFilterModalVisible}
//         onClose={() => setIsFilterModalVisible(false)}
//         users={uniqueUsers}
//         selectedUsers={selectedUsers}
//         onApplyFilter={handleApplyFilter}
//         onReset={handleResetFilter}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  RefreshControl,
  Image,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Row from '../../components/wrapper/row';
import FilterModal from './FilterModel';
import CustomText from '../../components/TextComponent';
import IMG from '../../assets/Images';
import { positionStyle } from 'react-native-flash-message';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [refreshing, setRefreshing] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTruckTypes, setSelectedTruckTypes] = useState([]);

  // Mock data - Replace with API calls
  const [dashboardData, setDashboardData] = useState({
    ongoingShipments: 12,
    completedShipments: 145,
    pendingPayments: '₹2,45,000',
  });

  const [allBookings, setAllBookings] = useState([
    {
      id: '1',
      truckType: '32 FEET MULTI AXLE',
      material: 'Furniture',
      weight: '18 Ton',
      distance: '363 KM',
      driverName: 'Brajesh Kumar Sah',
      time: '5 h',
      status: 'Expired',
      from: 'Mumbai',
      user: 'Rahul',
      to: 'Surat',
    },
    {
      id: '2',
      truckType: '20 FEET OPEN',
      material: 'Furniture',
      weight: '7 Ton',
      distance: '791 KM',
      driverName: 'Adnan Hussain K',
      time: '5 h',
      status: 'Expired',
      from: 'Indore',
      user: 'Sri',
      to: 'Lucknow',
    },
    {
      id: '3',
      truckType: '20 FEET OPEN',
      material: 'Furniture',
      weight: '9 Ton',
      distance: '295 KM',
      driverName: 'Mohammed Shafee R',
      time: '18 h',
      status: 'Expired',
      from: 'Kolkata',
      to: 'Jamshedpur',
      user: 'Mangal',
    },
    {
      id: '4',
      truckType: '32 FEET MULTI AXLE',
      material: 'Furniture',
      weight: '7 Ton',
      distance: '195 KM',
      driverName: 'Ashiya Memon',
      time: '19 h',
      status: 'Expired',
      from: 'Pandharpur',
      user: 'Madhav',
      to: 'Pune',
    },
  ]);

  const [recentBookings, setRecentBookings] = useState([]);

  // Truck types list
  const truckTypesList = [
    '32 Feet Single Axle',
    '32 Feet Single Axle High Cube',
    '32 Feet Multi Axle',
    '32 Feet Multi Axle High Cube',
    '32 Feet Triple Axle',
    '20 Feet Closed',
    '22 Feet Closed',
    '24 Feet Closed',
    '17 Feet Open',
    '20 Feet Open',
    '22 Feet Open',
    '24 Feet Open',
    '10 Whl Open',
    '12 Whl Open',
    '14 Whl Open',
    '16 Whl Open',
    '18 Whl Open',
  ];

  useEffect(() => {
    // Initially show all bookings
    setRecentBookings(allBookings);
  }, []);

  // Extract unique users from all bookings
  const uniqueUsers = [...new Set(allBookings.map(item => item.user))];

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
      console.log('Data refreshed');
    }, 1500);
  }, []);

  // Apply filter
  const handleApplyFilter = ({ users, truckTypes }) => {
    setSelectedUsers(users);
    setSelectedTruckTypes(truckTypes);

    let filtered = allBookings;

    // Filter by users
    if (users.length > 0) {
      filtered = filtered.filter(item => users.includes(item.user));
    }

    // Filter by truck types
    if (truckTypes.length > 0) {
      filtered = filtered.filter(item => truckTypes.includes(item.truckType));
    }

    setRecentBookings(filtered);
  };

  // Reset filter
  const handleResetFilter = () => {
    setSelectedUsers([]);
    setSelectedTruckTypes([]);
    setRecentBookings(allBookings);
    setIsFilterModalVisible(false);
  };

  // Handle view all / filter button click
  const handleFilterClick = () => {
    if (selectedUsers.length > 0 || selectedTruckTypes.length > 0) {
      // Clear filter
      handleResetFilter();
    } else {
      // Open filter modal
      setIsFilterModalVisible(true);
    }
  };

  // Get total filter count
  const getTotalFilterCount = () => {
    return selectedUsers.length + selectedTruckTypes.length;
  };

  const StatCard = ({ icon, iconBg, title, value, onPress }) => (
    <TouchableOpacity
      style={[styles.statCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBg + '20' }]}>
        {icon}
      </View>
      <Text style={[styles.statTitle, { color: isDarkMode ? '#999' : '#666' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const BookingCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.bookingCard, { backgroundColor: isDarkMode ? dark33 : white }]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('BookingDetailScreen')}
    >
      {/* Header Row - Truck Type, Driver Name, Time */}
      <View style={styles.cardHeaderRow}>
        <Text style={[styles.truckTypeText, { color: isDarkMode ? white : '#000' }]}>
          {item.truckType}
        </Text>
        <View style={styles.rightInfo}>
          <Text style={[styles.driverName, { color: isDarkMode ? '#999' : '#666' }]}>
            {item.driverName}
          </Text>
          <Text style={[styles.timeText, { color: isDarkMode ? '#999' : '#666' }]}>
            {item.time}
          </Text>
        </View>
      </View>

      {/* Material, Weight, Distance Row */}
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

      {/* Status Badge - Bottom Right */}
      {item.status && (
        <View style={styles.statusBadgeContainer}>
          <Ionicons name="time-outline" size={14} color="#FF3B30" />
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 35,
      paddingBottom: 5,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      height: 90,
      justifyContent: 'center'
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greeting: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
    },
    userName: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
      bottom: 5,
    },
    notificationButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationBadge: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#FF3B30',
    },
    createBookingButton: {
      backgroundColor: App_Primary_color,
      borderRadius: 10,
      paddingVertical: 7,
      // alignItems: 'center',
      // justifyContent: 'center',
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
      alignSelf: 'center',
      paddingHorizontal: 20,
      position: 'absolute',
      bottom: 100,
      right: 20
    },
    createBookingText: {
      color: white,
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginLeft: 8,
    },
    scrollContent: {
      paddingBottom: 130,
      // marginTop: 10
    },
    statsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 10,
      gap: 12,
    },
    statCard: {
      flex: 1,
      padding: 4,
      borderRadius: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
    },
    statValue: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    statTitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      textAlign: 'center',
    },
    sectionContainer: {
      marginTop: 10,
      paddingHorizontal: 10,
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
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom: 7,
      paddingHorizontal: 10,
      paddingTop: 25
    },
    sectionTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    viewAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    viewAllText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
      marginRight: 4,
    },
    filterBadge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: App_Primary_color,
      minWidth: 16,
      height: 16,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 4,
    },
    filterBadgeText: {
      color: white,
      fontSize: 9,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    bookingCard: {
      padding: 10,
      borderRadius: 6,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      position: 'relative',
    },
    cardHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 0,
    },
    truckTypeText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      flex: 1,
    },
    rightInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    driverName: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    timeText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    detailsRow: {
      flexDirection: 'row',
      gap: 8,
    },
    detailText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
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
    statusBadgeContainer: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFEBEE',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 10,
      gap: 4,
    },
    statusText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#FF3B30',
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 40,
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
        <View style={styles.headerTop}>
          {/* <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>Rahul Kumar</Text>
          </View> */}
          {/* Entypo */}
          {/* <Entypo
          name='wallet'
          size={25}
          color={App_Primary_color}
          /> */}
          <Image source={IMG.AppLogo}
            style={{ height: 120, width: 120, position: 'absolute', left: 0 }}
            resizeMode='contain'
          />

          <Row style={{
            gap: 10,
            position: 'absolute',
            right: 0
          }}>

            <TouchableOpacity
              style={styles.notificationButton}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('NotificationCenter')}
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color={isDarkMode ? white : '#000'}
              />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </Row>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatCard
          icon={<MaterialCommunityIcons name="truck-delivery" size={24} color="#FF9800" />}
          iconBg="#FF9800"
          title="Insurance"
          onPress={() => navigation.navigate('OngoingShipments')}
        />
        <StatCard
          icon={<Feather name="check-circle" size={24} color="#4CAF50" />}
          iconBg="#4CAF50"
          title="Tracking"
          onPress={() => navigation.navigate('TrackingHubScreen')}
        />
        <StatCard
          icon={<FontAwesome5 name="rupee-sign" size={20} color="#2196F3" />}
          iconBg="#2196F3"
          title="Rates"
          onPress={() => navigation.navigate('RatesScreen')}
        />
      </View>

      <Image source={{ uri: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={{ width: '100%', height: 120, alignSelf: 'center', marginTop: 10, }}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Bookings</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          activeOpacity={0.7}
          onPress={handleFilterClick}
        >
          {(selectedUsers.length > 0 || selectedTruckTypes.length > 0) ? (
            <>
              <Text style={styles.viewAllText}>Clear Filter</Text>
              <Ionicons name="close-circle" size={18} color={App_Primary_color} />
            </>
          ) : (
            <>
              {/* <Ionicons name="filter" size={18} color={App_Primary_color} /> */}
              <TouchableOpacity
                style={styles.filterButton}
                activeOpacity={0.7}
                onPress={() => handleFilterClick()}
              >
                <Ionicons
                  name="options-outline"
                  size={18}
                  color={isDarkMode ? white : '#000'}
                />
                <Text style={styles.filterButtonText}>Filter</Text>

              </TouchableOpacity>
              {getTotalFilterCount() > 0 && (
                <View style={styles.filterBadge}>
                  <Text style={styles.filterBadgeText}>
                    {getTotalFilterCount()}
                  </Text>
                </View>
              )}
            </>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Recent Bookings Section */}
        <View style={styles.sectionContainer}>


          {recentBookings.length > 0 ? (
            recentBookings.map((item) => (
              <BookingCard key={item.id} item={item} />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <MaterialCommunityIcons
                name="truck-outline"
                size={64}
                color={isDarkMode ? '#666' : '#CCC'}
              />
              <Text style={styles.emptyText}>
                {getTotalFilterCount() > 0
                  ? 'No bookings found with selected filters'
                  : 'No bookings yet'}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        users={uniqueUsers}
        selectedUsers={selectedUsers}
        truckTypes={truckTypesList}
        selectedTruckTypes={selectedTruckTypes}
        onApplyFilter={handleApplyFilter}
        onReset={handleResetFilter}
      />
      {/* <TouchableOpacity
        style={styles.createBookingButton}
        activeOpacity={0.8}
        // onPress={() => navigation.navigate('CreateBookingScreen')}
        onPress={() => navigation.navigate('TruckListingScreen')}

      >
        <CustomText style={{
          color: 'white',
          fontFamily: FONTS_FAMILY.Poppins_Medium,
          fontSize: 16
        }}>Book</CustomText>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
