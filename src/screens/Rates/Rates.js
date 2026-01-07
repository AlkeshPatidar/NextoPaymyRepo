// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   ScrollView,
// //   TextInput,
// // } from 'react-native';
// // import { FONTS_FAMILY } from '../../assets/Fonts';
// // import { 
// //   App_Primary_color, 
// //   dark33, 
// //   dark55, 
// //   darkMode25, 
// //   white 
// // } from '../../common/Colors/colors';
// // import { useSelector } from 'react-redux';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// // import Feather from 'react-native-vector-icons/Feather';

// // const RatesScreen = ({ navigation }) => {
// //   const { isDarkMode } = useSelector(state => state.theme);
// //   const [searchFrom, setSearchFrom] = useState('');
// //   const [searchTo, setSearchTo] = useState('');
// //   const [selectedTruckType, setSelectedTruckType] = useState('All');

// //   // Static truck types
// //   const truckTypes = [
// //     { id: 'all', name: 'All', size: '' },
// //     { id: '1', name: '14ft SXL', size: '3.5 Ton' },
// //     { id: '2', name: '17ft SXL', size: '5 Ton' },
// //     { id: '3', name: '19ft MXL', size: '7 Ton' },
// //     { id: '4', name: '20ft SXL', size: '9 Ton' },
// //     { id: '5', name: '24ft MXL', size: '12 Ton' },
// //     { id: '6', name: '32ft MXL', size: '15 Ton' },
// //   ];

// //   // Static rates data
// //   const [ratesData] = useState([
// //     {
// //       id: '1',
// //       from: 'Mumbai',
// //       to: 'Delhi',
// //       distance: '1,450 km',
// //       truckType: '32ft MXL',
// //       baseRate: '₹42,000',
// //       perKmRate: '₹29',
// //       estimatedTime: '24-28 hrs',
// //       trending: true,
// //     },
// //     {
// //       id: '2',
// //       from: 'Mumbai',
// //       to: 'Bangalore',
// //       distance: '980 km',
// //       truckType: '24ft MXL',
// //       baseRate: '₹28,000',
// //       perKmRate: '₹28.5',
// //       estimatedTime: '18-20 hrs',
// //       trending: true,
// //     },
// //     {
// //       id: '3',
// //       from: 'Delhi',
// //       to: 'Kolkata',
// //       distance: '1,470 km',
// //       truckType: '32ft MXL',
// //       baseRate: '₹43,500',
// //       perKmRate: '₹29.5',
// //       estimatedTime: '26-30 hrs',
// //       trending: false,
// //     },
// //     {
// //       id: '4',
// //       from: 'Bangalore',
// //       to: 'Chennai',
// //       distance: '350 km',
// //       truckType: '20ft SXL',
// //       baseRate: '₹12,500',
// //       perKmRate: '₹35.7',
// //       estimatedTime: '6-8 hrs',
// //       trending: true,
// //     },
// //     {
// //       id: '5',
// //       from: 'Pune',
// //       to: 'Hyderabad',
// //       distance: '560 km',
// //       truckType: '24ft MXL',
// //       baseRate: '₹18,000',
// //       perKmRate: '₹32.1',
// //       estimatedTime: '10-12 hrs',
// //       trending: false,
// //     },
// //     {
// //       id: '6',
// //       from: 'Ahmedabad',
// //       to: 'Surat',
// //       distance: '265 km',
// //       truckType: '14ft SXL',
// //       baseRate: '₹8,500',
// //       perKmRate: '₹32',
// //       estimatedTime: '4-5 hrs',
// //       trending: false,
// //     },
// //     {
// //       id: '7',
// //       from: 'Kolkata',
// //       to: 'Patna',
// //       distance: '590 km',
// //       truckType: '19ft MXL',
// //       baseRate: '₹19,500',
// //       perKmRate: '₹33',
// //       estimatedTime: '11-13 hrs',
// //       trending: false,
// //     },
// //     {
// //       id: '8',
// //       from: 'Chennai',
// //       to: 'Coimbatore',
// //       distance: '505 km',
// //       truckType: '17ft SXL',
// //       baseRate: '₹16,000',
// //       perKmRate: '₹31.7',
// //       estimatedTime: '8-10 hrs',
// //       trending: false,
// //     },
// //     {
// //       id: '9',
// //       from: 'Mumbai',
// //       to: 'Pune',
// //       distance: '150 km',
// //       truckType: '14ft SXL',
// //       baseRate: '₹6,500',
// //       perKmRate: '₹43.3',
// //       estimatedTime: '3-4 hrs',
// //       trending: true,
// //     },
// //     {
// //       id: '10',
// //       from: 'Delhi',
// //       to: 'Jaipur',
// //       distance: '280 km',
// //       truckType: '17ft SXL',
// //       baseRate: '₹10,000',
// //       perKmRate: '₹35.7',
// //       estimatedTime: '5-6 hrs',
// //       trending: false,
// //     },
// //   ]);

// //   // Filter rates based on search and truck type
// //   const filteredRates = ratesData.filter(rate => {
// //     const matchesFrom = searchFrom === '' || 
// //       rate.from.toLowerCase().includes(searchFrom.toLowerCase());
// //     const matchesTo = searchTo === '' || 
// //       rate.to.toLowerCase().includes(searchTo.toLowerCase());
// //     const matchesTruckType = selectedTruckType === 'All' || 
// //       rate.truckType === selectedTruckType;
    
// //     return matchesFrom && matchesTo && matchesTruckType;
// //   });

// //   const swapLocations = () => {
// //     const temp = searchFrom;
// //     setSearchFrom(searchTo);
// //     setSearchTo(temp);
// //   };

// //   const TruckTypeChip = ({ item }) => (
// //     <TouchableOpacity
// //       style={[
// //         styles.truckTypeChip,
// //         {
// //           backgroundColor: selectedTruckType === item.name
// //             ? App_Primary_color
// //             : isDarkMode ? dark33 : white,
// //           borderColor: selectedTruckType === item.name
// //             ? App_Primary_color
// //             : isDarkMode ? dark55 : '#E0E0E0',
// //         }
// //       ]}
// //       activeOpacity={0.7}
// //       onPress={() => setSelectedTruckType(item.name)}
// //     >
// //       <Text
// //         style={[
// //           styles.truckTypeText,
// //           {
// //             color: selectedTruckType === item.name
// //               ? white
// //               : isDarkMode ? white : '#000',
// //           }
// //         ]}
// //       >
// //         {item.name}
// //       </Text>
// //       {item.size !== '' && (
// //         <Text
// //           style={[
// //             styles.truckSizeText,
// //             {
// //               color: selectedTruckType === item.name
// //                 ? white
// //                 : isDarkMode ? '#999' : '#666',
// //             }
// //           ]}
// //         >
// //           {item.size}
// //         </Text>
// //       )}
// //     </TouchableOpacity>
// //   );

// //   const RateCard = ({ item }) => (
// //     <TouchableOpacity
// //       style={[styles.rateCard, { backgroundColor: isDarkMode ? dark33 : white }]}
// //       activeOpacity={0.7}
// //       onPress={() => navigation.navigate('BookingDetails', { rate: item })}
// //     >
// //       {item.trending && (
// //         <View style={styles.trendingBadge}>
// //           <Ionicons name="trending-up" size={12} color={white} />
// //           <Text style={styles.trendingText}>Trending</Text>
// //         </View>
// //       )}

// //       <View style={styles.rateHeader}>
// //         <View style={styles.routeInfo}>
// //           <View style={styles.locationRow}>
// //             <View style={styles.fromDot} />
// //             <Text style={[styles.cityText, { color: isDarkMode ? white : '#000' }]}>
// //               {item.from}
// //             </Text>
// //           </View>

// //           <View style={styles.routeArrow}>
// //             <View style={styles.arrowLine} />
// //             <MaterialCommunityIcons 
// //               name="arrow-right" 
// //               size={20} 
// //               color={App_Primary_color} 
// //             />
// //           </View>

// //           <View style={styles.locationRow}>
// //             <View style={[styles.toDot, { backgroundColor: App_Primary_color }]} />
// //             <Text style={[styles.cityText, { color: isDarkMode ? white : '#000' }]}>
// //               {item.to}
// //             </Text>
// //           </View>
// //         </View>

// //         <Text style={[styles.baseRate, { color: App_Primary_color,  }]}>
// //           {item.baseRate}
// //         </Text>
// //       </View>

// //       <View style={[styles.rateDetails, { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }]}>
// //         <View style={styles.detailRow}>
// //           <View style={styles.detailItem}>
// //             <FontAwesome5 name="truck" size={12} color={isDarkMode ? '#999' : '#666'} />
// //             <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
// //               Truck Type
// //             </Text>
// //           </View>
// //           <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
// //             {item.truckType}
// //           </Text>
// //         </View>

// //         <View style={styles.detailRow}>
// //           <View style={styles.detailItem}>
// //             <MaterialCommunityIcons name="map-marker-distance" size={14} color={isDarkMode ? '#999' : '#666'} />
// //             <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
// //               Distance
// //             </Text>
// //           </View>
// //           <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
// //             {item.distance}
// //           </Text>
// //         </View>

// //         <View style={styles.detailRow}>
// //           <View style={styles.detailItem}>
// //             <Ionicons name="speedometer-outline" size={14} color={isDarkMode ? '#999' : '#666'} />
// //             <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
// //               Rate per km
// //             </Text>
// //           </View>
// //           <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
// //             {item.perKmRate}
// //           </Text>
// //         </View>

// //         <View style={styles.detailRow}>
// //           <View style={styles.detailItem}>
// //             <Feather name="clock" size={13} color={isDarkMode ? '#999' : '#666'} />
// //             <Text style={[styles.detailLabel, { color: isDarkMode ? '#999' : '#666' }]}>
// //               Est. Time
// //             </Text>
// //           </View>
// //           <Text style={[styles.detailValue, { color: isDarkMode ? white : '#000' }]}>
// //             {item.estimatedTime}
// //           </Text>
// //         </View>
// //       </View>

// //       <TouchableOpacity 
// //         style={styles.bookNowButton}
// //         activeOpacity={0.8}
// //         onPress={() => navigation.navigate('CreateBookingScreen', { prefilledData: item })}
// //       >
// //         <Text style={styles.bookNowText}>Book Now</Text>
// //         <Feather name="arrow-right" size={16} color={white} />
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
// //     },
// //     header: {
// //       backgroundColor: isDarkMode ? dark33 : white,
// //       paddingTop: 50,
// //       paddingBottom: 20,
// //       paddingHorizontal: 20,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.1,
// //       shadowRadius: 8,
// //       elevation: 5,
// //     },
// //     headerTop: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       marginBottom: 20,
// //     },
// //     backButton: {
// //       width: 40,
// //       height: 40,
// //       borderRadius: 20,
// //       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //     },
// //     headerTitle: {
// //       fontSize: 20,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: isDarkMode ? white : '#000',
// //     },
// //     filterButton: {
// //       width: 40,
// //       height: 40,
// //       borderRadius: 20,
// //       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //     },
// //     searchContainer: {
// //       gap: 12,
// //     },
// //     searchInputContainer: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
// //       borderRadius: 12,
// //       paddingHorizontal: 12,
// //       height: 48,
// //     },
// //     searchInput: {
// //       flex: 1,
// //       fontSize: 14,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: isDarkMode ? white : '#000',
// //       marginLeft: 8,
// //     },
// //     clearButton: {
// //       padding: 4,
// //     },
// //     swapButton: {
// //       width: 36,
// //       height: 36,
// //       borderRadius: 18,
// //       backgroundColor: App_Primary_color,
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       position: 'absolute',
// //       right: 20,
// //       top: 118,
// //       zIndex: 10,
// //       shadowColor: App_Primary_color,
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.3,
// //       shadowRadius: 4,
// //       elevation: 5,
// //     },
// //     truckTypeScrollContainer: {
// //       paddingHorizontal: 20,
// //       paddingVertical: 16,
// //       height:90,
// //       marginBottom:40
// //     },
// //     truckTypeChip: {
// //       paddingHorizontal: 16,
// //       paddingVertical: 8,
// //       borderRadius: 20,
// //       marginRight: 10,
// //       borderWidth: 1,
// //       alignItems: 'center',
// //       minWidth: 80,
// //     //   height:200,
// //     //   zIndex:1000
// //     },
// //     truckTypeText: {
// //       fontSize: 13,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //     },
// //     truckSizeText: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       marginTop: 2,
// //     },
// //     contentContainer: {
// //       paddingHorizontal: 20,
// //       paddingBottom: 100,
// //     //   marginTop:20
// //     },
// //     resultsHeader: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       marginBottom: 16,
// //       marginTop: 8,
// //     },
// //     resultsCount: {
// //       fontSize: 14,
// //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// //       color: isDarkMode ? '#999' : '#666',
// //     },
// //     sortButton: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       paddingHorizontal: 12,
// //       paddingVertical: 6,
// //       borderRadius: 8,
// //       backgroundColor: isDarkMode ? dark33 : white,
// //     },
// //     sortText: {
// //       fontSize: 12,
// //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// //       color: App_Primary_color,
// //       marginRight: 4,
// //     },
// //     rateCard: {
// //       padding: 16,
// //       borderRadius: 16,
// //       marginBottom: 16,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.08,
// //       shadowRadius: 8,
// //       elevation: 4,
// //     },
// //     trendingBadge: {
// //       position: 'absolute',
// //       top: 12,
// //       right: 12,
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       backgroundColor: '#FF9800',
// //       paddingHorizontal: 8,
// //       paddingVertical: 4,
// //       borderRadius: 12,
// //       gap: 4,
// //     },
// //     trendingText: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: white,
// //     },
// //     rateHeader: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'flex-start',
// //       marginBottom: 16,
// //     },
// //     routeInfo: {
// //       flex: 1,
// //       paddingRight: 12,
// //     },
// //     locationRow: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       marginVertical: 4,
// //     },
// //     fromDot: {
// //       width: 8,
// //       height: 8,
// //       borderRadius: 4,
// //       backgroundColor: '#999',
// //       marginRight: 8,
// //     },
// //     toDot: {
// //       width: 8,
// //       height: 8,
// //       borderRadius: 4,
// //       marginRight: 8,
// //     },
// //     cityText: {
// //       fontSize: 15,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //     },
// //     routeArrow: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       marginLeft: 4,
// //       marginVertical: 2,
// //     },
// //     arrowLine: {
// //       width: 1,
// //       height: 16,
// //       backgroundColor: '#999',
// //       marginRight: 8,
// //     },
// //     baseRate: {
// //       fontSize: 16,
// //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// //       marginTop:30
// //     },
// //     rateDetails: {
// //       gap: 10,
// //       marginBottom: 16,
// //       paddingTop: 12,
// //       borderTopWidth: 1,
// //     },
// //     detailRow: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //     },
// //     detailItem: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       gap: 8,
// //     },
// //     detailLabel: {
// //       fontSize: 12,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //     },
// //     detailValue: {
// //       fontSize: 13,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //     },
// //     bookNowButton: {
// //       backgroundColor: App_Primary_color,
// //       borderRadius: 10,
// //       paddingVertical: 12,
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       gap: 8,
// //       shadowColor: App_Primary_color,
// //       shadowOffset: { width: 0, height: 4 },
// //       shadowOpacity: 0.3,
// //       shadowRadius: 8,
// //       elevation: 8,
// //     },
// //     bookNowText: {
// //       color: white,
// //       fontSize: 14,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //     },
// //     emptyContainer: {
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       paddingVertical: 60,
// //     },
// //     emptyText: {
// //       fontSize: 16,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: isDarkMode ? '#999' : '#666',
// //       marginTop: 16,
// //       textAlign: 'center',
// //     },
// //     emptySubText: {
// //       fontSize: 13,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: isDarkMode ? '#666' : '#999',
// //       marginTop: 8,
// //       textAlign: 'center',
// //     },
// //   });

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar 
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
// //         backgroundColor={isDarkMode ? dark33 : white} 
// //       />

// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerTop}>
// //           <TouchableOpacity 
// //             style={styles.backButton}
// //             activeOpacity={0.7}
// //             onPress={() => navigation.goBack()}
// //           >
// //             <Ionicons 
// //               name="arrow-back" 
// //               size={24} 
// //               color={isDarkMode ? white : '#000'} 
// //             />
// //           </TouchableOpacity>
          
// //           <Text style={styles.headerTitle}>Freight Rates</Text>
          
// //           <TouchableOpacity 
// //             style={styles.filterButton}
// //             activeOpacity={0.7}
// //             onPress={() => console.log('Filter pressed')}
// //           >
// //             <Ionicons 
// //               name="options-outline" 
// //               size={24} 
// //               color={isDarkMode ? white : '#000'} 
// //             />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search Inputs */}
// //         <View style={styles.searchContainer}>
// //           <View style={styles.searchInputContainer}>
// //             <Ionicons 
// //               name="location-outline" 
// //               size={20} 
// //               color={isDarkMode ? '#999' : '#666'} 
// //             />
// //             <TextInput
// //               style={styles.searchInput}
// //               placeholder="From (e.g., Mumbai)"
// //               placeholderTextColor={isDarkMode ? '#666' : '#999'}
// //               value={searchFrom}
// //               onChangeText={setSearchFrom}
// //             />
// //             {searchFrom !== '' && (
// //               <TouchableOpacity 
// //                 style={styles.clearButton}
// //                 onPress={() => setSearchFrom('')}
// //               >
// //                 <Ionicons name="close-circle" size={20} color="#999" />
// //               </TouchableOpacity>
// //             )}
// //           </View>

// //           <View style={styles.searchInputContainer}>
// //             <Ionicons 
// //               name="location" 
// //               size={20} 
// //               color={App_Primary_color} 
// //             />
// //             <TextInput
// //               style={styles.searchInput}
// //               placeholder="To (e.g., Delhi)"
// //               placeholderTextColor={isDarkMode ? '#666' : '#999'}
// //               value={searchTo}
// //               onChangeText={setSearchTo}
// //             />
// //             {searchTo !== '' && (
// //               <TouchableOpacity 
// //                 style={styles.clearButton}
// //                 onPress={() => setSearchTo('')}
// //               >
// //                 <Ionicons name="close-circle" size={20} color="#999" />
// //               </TouchableOpacity>
// //             )}
// //           </View>
// //         </View>
// //       </View>

// //       {/* Swap Button */}
// //       <TouchableOpacity 
// //         style={styles.swapButton}
// //         activeOpacity={0.8}
// //         onPress={swapLocations}
// //       >
// //         <MaterialCommunityIcons name="swap-vertical" size={20} color={white} />
// //       </TouchableOpacity>

// //       {/* Truck Type Filter */}
// //       <ScrollView 
// //         horizontal 
// //         showsHorizontalScrollIndicator={false}
// //         contentContainerStyle={styles.truckTypeScrollContainer}
// //       >
// //         {truckTypes.map((item) => (
// //           <TruckTypeChip key={item.id} item={item} />
// //         ))}
// //       </ScrollView>
// // {/* <View style={{height:30}}/> */}
// //       {/* Rates List */}
// //       <ScrollView 
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={styles.contentContainer}
// //       >
// //         <View style={styles.resultsHeader}>
// //           <Text style={styles.resultsCount}>
// //             {filteredRates.length} {filteredRates.length === 1 ? 'route' : 'routes'} available
// //           </Text>
// //           <TouchableOpacity style={styles.sortButton} activeOpacity={0.7}>
// //             <Text style={styles.sortText}>Sort by</Text>
// //             <Feather name="chevron-down" size={16} color={App_Primary_color} />
// //           </TouchableOpacity>
// //         </View>

// //         {filteredRates.length > 0 ? (
// //           filteredRates.map((item) => (
// //             <RateCard key={item.id} item={item} />
// //           ))
// //         ) : (
// //           <View style={styles.emptyContainer}>
// //             <MaterialCommunityIcons 
// //               name="map-marker-off-outline" 
// //               size={64} 
// //               color={isDarkMode ? '#666' : '#CCC'} 
// //             />
// //             <Text style={styles.emptyText}>No rates found</Text>
// //             <Text style={styles.emptySubText}>
// //               Try adjusting your search criteria
// //             </Text>
// //           </View>
// //         )}
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // export default RatesScreen;



// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   Modal,
//   Pressable,
//   Dimensions,
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
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width } = Dimensions.get('window');

// const FreightRateScreen = ({ navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const scrollViewRef = useRef(null);
  
//   // States
//   const [fromCity, setFromCity] = useState('Chennai');
//   const [toCity, setToCity] = useState('Bangalore');
//   const [selectedTruckType, setSelectedTruckType] = useState('32FT MXL');
//   const [selectedPeriod, setSelectedPeriod] = useState('1Y');
//   const [activeTab, setActiveTab] = useState('graph');
  
//   // Modal states
//   const [showFromCityModal, setShowFromCityModal] = useState(false);
//   const [showToCityModal, setShowToCityModal] = useState(false);

//   // Data
//   const cities = [
//     'Chennai',
//     'Bangalore',
//     'Mumbai',
//     'Delhi',
//     'Pune',
//     'Ahmedabad',
//     'Kolkata',
//     'Hyderabad',
//     'Jaipur',
//     'Surat',
//     'Lucknow',
//     'Indore',
//   ];

//   const truckTypes = [
//     { id: '32FT MXL', label: '32FT MXL', subtitle: 'Container' },
//     { id: '32FT SXL', label: '32FT SXL', subtitle: 'Container' },
//     { id: '20-24 FT', label: '20-24 FT', subtitle: 'Container' },
//     { id: '17-24 FT', label: '17-24 FT', subtitle: 'Open' },
//     { id: '10 WHL', label: '10 WHL', subtitle: 'Open' },
//   ];

//   const timePeriods = ['1Y', '6M', '1M'];

//   // Generate sample chart data
//   const generateChartData = () => {
//     const months = ['Nov-24', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov-25'];
//     const data = [28000, 31000, 29500, 32000, 30000, 33500, 31000, 29000, 32500, 30500, 29500];
    
//     return {
//       labels: months,
//       values: data
//     };
//   };

//   const chartData = generateChartData();

//   // Custom Chart Component
//   const CustomLineChart = ({ data, width, height }) => {
//     const padding = 40;
//     const chartWidth = width - padding * 2;
//     const chartHeight = height - padding * 2;
    
//     const maxValue = Math.max(...data.values);
//     const minValue = Math.min(...data.values);
//     const range = maxValue - minValue;
    
//     const getY = (value) => {
//       return chartHeight - ((value - minValue) / range) * chartHeight;
//     };
    
//     const getX = (index) => {
//       return (index / (data.values.length - 1)) * chartWidth;
//     };

//     return (
//       <View style={{ width, height, backgroundColor: isDarkMode ? dark33 : white, borderRadius: 12 }}>
//         {/* Y-axis labels */}
//         <View style={{ position: 'absolute', left: 0, top: padding, height: chartHeight }}>
//           {[0, 1, 2, 3, 4].map((i) => {
//             const value = minValue + (range / 4) * (4 - i);
//             return (
//               <Text
//                 key={i}
//                 style={{
//                   position: 'absolute',
//                   top: (chartHeight / 4) * i - 8,
//                   fontSize: 10,
//                   fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   color: isDarkMode ? '#999' : '#666',
//                 }}
//               >
//                 ₹{Math.round(value / 1000)}K
//               </Text>
//             );
//           })}
//         </View>

//         {/* Chart area */}
//         <View style={{ position: 'absolute', left: padding, top: padding }}>
//           {/* Horizontal grid lines */}
//           {[0, 1, 2, 3, 4].map((i) => (
//             <View
//               key={i}
//               style={{
//                 position: 'absolute',
//                 top: (chartHeight / 4) * i,
//                 width: chartWidth,
//                 height: 1,
//                 backgroundColor: isDarkMode ? dark55 : '#E0E0E0',
//               }}
//             />
//           ))}

//           {/* Chart area with gradient */}
//           <View style={{ width: chartWidth, height: chartHeight }}>
//             {/* Gradient fill under line */}
//             {data.values.map((value, index) => {
//               if (index === data.values.length - 1) return null;
//               const x = getX(index);
//               const y = getY(value);
//               const nextX = getX(index + 1);
//               const fillHeight = chartHeight - y;
              
//               return (
//                 <View
//                   key={`fill-${index}`}
//                   style={{
//                     position: 'absolute',
//                     left: x,
//                     top: y,
//                     width: nextX - x,
//                     height: fillHeight,
//                     backgroundColor: 'rgba(33, 150, 243, 0.15)',
//                   }}
//                 />
//               );
//             })}

//             {/* Line segments */}
//             {data.values.map((value, index) => {
//               if (index === 0) return null;
              
//               const prevValue = data.values[index - 1];
//               const x1 = getX(index - 1);
//               const y1 = getY(prevValue);
//               const x2 = getX(index);
//               const y2 = getY(value);
              
//               const segmentWidth = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//               const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

//               return (
//                 <View
//                   key={index}
//                   style={{
//                     position: 'absolute',
//                     left: x1,
//                     top: y1,
//                     width: segmentWidth,
//                     height: 3,
//                     backgroundColor: '#2196F3',
//                     transform: [{ rotate: `${angle}deg` }],
//                   }}
//                 />
//               );
//             })}

//             {/* Data points */}
//             {data.values.map((value, index) => {
//               const x = getX(index);
//               const y = getY(value);
              
//               return (
//                 <View
//                   key={index}
//                   style={{
//                     position: 'absolute',
//                     left: x - 5,
//                     top: y - 5,
//                     width: 10,
//                     height: 10,
//                     borderRadius: 5,
//                     backgroundColor: '#2196F3',
//                     borderWidth: 2,
//                     borderColor: isDarkMode ? dark33 : white,
//                   }}
//                 />
//               );
//             })}
//           </View>
//         </View>

//         {/* X-axis labels */}
//         <View style={{ position: 'absolute', left: padding, top: padding + chartHeight + 15, width: chartWidth, flexDirection: 'row', justifyContent: 'space-between' }}>
//           {data.labels.map((label, index) => {
//             if (index % 2 !== 0 && index !== data.labels.length - 1) return null;
//             return (
//               <Text
//                 key={index}
//                 style={{
//                   fontSize: 9,
//                   fontFamily: FONTS_FAMILY.Poppins_Regular,
//                   color: isDarkMode ? '#999' : '#666',
//                 }}
//               >
//                 {label}
//               </Text>
//             );
//           })}
//         </View>
//       </View>
//     );
//   };

//   // Rate history data
//   const rateHistory = [
//     {
//       from: 'Madhavaram',
//       to: 'Bangalore',
//       ton: 18,
//       date: '27-Nov-25',
//       truckType: '32 Feet Multi Axle Truck',
//       rate: '₹31300'
//     },
//     {
//       from: 'Chennai',
//       to: 'Bangalore',
//       ton: 15,
//       date: '26-Nov-25',
//       truckType: '32 Feet Multi Axle Truck',
//       rate: '₹29500'
//     },
//     {
//       from: 'Chennai',
//       to: 'Bangalore',
//       ton: 20,
//       date: '25-Nov-25',
//       truckType: '32 Feet Multi Axle Truck',
//       rate: '₹32800'
//     },
//     {
//       from: 'Madhavaram',
//       to: 'Bangalore',
//       ton: 15,
//       date: '24-Nov-25',
//       truckType: '32 Feet Multi Axle Truck',
//       rate: '₹28900'
//     },
//   ];

//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     if (tab === 'history') {
//       setTimeout(() => {
//         scrollViewRef.current?.scrollTo({ y: 550, animated: true });
//       }, 100);
//     } else {
//       scrollViewRef.current?.scrollTo({ y: 0, animated: true });
//     }
//   };

//   // Selection Modal Component
//   const SelectionModal = ({ visible, onClose, data, selectedValue, onSelect, title }) => (
//     <Modal
//       transparent
//       visible={visible}
//       animationType="fade"
//       onRequestClose={onClose}
//     >
//       <Pressable style={styles.modalOverlay} onPress={onClose}>
//         <View
//           style={[
//             styles.modalContainer,
//             { backgroundColor: isDarkMode ? dark33 : white }
//           ]}
//           onStartShouldSetResponder={() => true}
//         >
//           <View style={[
//             styles.modalHeader,
//             { borderBottomColor: isDarkMode ? dark55 : '#F0F0F0' }
//           ]}>
//             <Text style={[
//               styles.modalTitle,
//               { color: isDarkMode ? white : '#000' }
//             ]}>
//               {title}
//             </Text>
//             <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
//               <Ionicons name="close" size={24} color={isDarkMode ? white : '#000'} />
//             </TouchableOpacity>
//           </View>

//           <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.modalItem,
//                   selectedValue === item && {
//                     backgroundColor: App_Primary_color + '15',
//                     borderColor: App_Primary_color,
//                   }
//                 ]}
//                 activeOpacity={0.7}
//                 onPress={() => {
//                   onSelect(item);
//                   onClose();
//                 }}
//               >
//                 <Text style={[
//                   styles.modalItemText,
//                   { color: isDarkMode ? white : '#000' },
//                   selectedValue === item && { 
//                     color: App_Primary_color, 
//                     fontFamily: FONTS_FAMILY.Poppins_SemiBold 
//                   }
//                 ]}>
//                   {item}
//                 </Text>
//                 {selectedValue === item && (
//                   <Ionicons name="checkmark-circle" size={20} color={App_Primary_color} />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>
//       </Pressable>
//     </Modal>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F8F9FA',
//     },
//     header: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingTop: 30,
//       paddingBottom: 0,
//       paddingHorizontal: 10,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 5,
//     },
//     locationSection: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingHorizontal: 10,
//       // paddingBottom: 20,
//     },
//     locationRow: {
//       flexDirection: 'row',
//       gap: 16,
//       marginBottom: 10,
//     },
//     locationCard: {
//       flex: 1,
//     },
//     locationLabel: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? '#999' : '#666',
//       marginBottom: 8,
//     },
//     locationButton: {
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       paddingHorizontal: 10,
//       paddingVertical: 10,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 8,
//     },
//     cityDot: {
//       width: 8,
//       height: 8,
//       borderRadius: 4,
//     },
//     locationText: {
//       flex: 1,
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//     },
//     truckTypesContainer: {
//       flexDirection: 'row',
//       gap: 8,
//     },
//     truckTypeButton: {
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       borderRadius: 8,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//       backgroundColor: isDarkMode ? darkMode25 : white,
//     },
//     truckTypeButtonSelected: {
//       backgroundColor: App_Primary_color,
//       borderColor: App_Primary_color,
//     },
//     truckTypeLabel: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//       textAlign: 'center',
//     },
//     truckTypeLabelSelected: {
//       color: white,
//     },
//     truckTypeSubtitle: {
//       fontSize: 9,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//       textAlign: 'center',
//       // marginTop: 2,
//     },
//     truckTypeSubtitleSelected: {
//       color: 'rgba(255,255,255,0.8)',
//     },
//     scrollContent: {
//       flexGrow: 1,
//     },
//     tabContainer: {
//       flexDirection: 'row',
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingHorizontal: 0,
//       paddingVertical: 6,
//       borderBottomWidth: 1,
//       borderBottomColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     tabButton: {
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 5,
//       gap: 4,
//     },
//     tabText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     tabTextActive: {
//       color: App_Primary_color,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     tabIndicator: {
//       position: 'absolute',
//       bottom: 0,
//       height: 3,
//       backgroundColor: App_Primary_color,
//       borderRadius: 2,
//     },
//     graphSection: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       padding: 10,
//       marginBottom: 12,
//     },
//     periodSelector: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       gap: 20,
//       marginBottom: 16,
//     },
//     periodButton: {
//       paddingHorizontal: 20,
//       paddingVertical: 8,
//     },
//     periodText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     periodTextActive: {
//       color: App_Primary_color,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//     },
//     periodUnderline: {
//       height: 3,
//       backgroundColor: App_Primary_color,
//       borderRadius: 2,
//       marginTop: 4,
//     },
//     statsRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginBottom: 16,
//     },
//     statItem: {
//       alignItems: 'center',
//     },
//     statLabel: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     statValue: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//       marginTop: 2,
//     },
//     chartContainer: {
//       alignItems: 'center',
//       marginVertical: 0,
//     },
//     historySection: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       padding: 10,
//     },
//     historySectionTitle: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//       marginBottom: 16,
//     },
//     historyCard: {
//       backgroundColor: isDarkMode ? darkMode25 : '#F8F9FA',
//       borderRadius: 12,
//       padding: 8,
//       marginBottom: 8,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     historyHeader: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 8,
//     },
//     historyDot: {
//       width: 8,
//       height: 8,
//       borderRadius: 4,
//       marginRight: 6,
//     },
//     historyRoute: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//     },
//     historyTon: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     historyDetails: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       // marginTop: 8,
//     },
//     historyLeft: {
//       flex: 1,
//     },
//     historyDate: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//     },
//     historyTruck: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? '#999' : '#666',
//       marginTop: 2,
//     },
//     historyRate: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: isDarkMode ? white : '#000',
//     },
//     modalOverlay: {
//       flex: 1,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//     },
//     modalContainer: {
//       width: '100%',
//       maxHeight: '70%',
//       borderRadius: 16,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.25,
//       shadowRadius: 12,
//       elevation: 10,
//     },
//     modalHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       paddingVertical: 16,
//       borderBottomWidth: 1,
//     },
//     modalTitle: {
//       fontSize: 18,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     modalCloseButton: {
//       width: 40,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     modalContent: {
//       maxHeight: 400,
//       paddingHorizontal: 16,
//       paddingVertical: 8,
//     },
//     modalItem: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingVertical: 14,
//       paddingHorizontal: 16,
//       borderRadius: 10,
//       marginVertical: 4,
//       borderWidth: 1,
//       borderColor: 'transparent',
//     },
//     modalItemText: {
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={isDarkMode ? dark33 : white}
//       />

//       {/* Header with From/To */}
//       <View style={styles.header}>
//         <View style={styles.locationRow}>
//           <View style={styles.locationCard}>
//             <Text style={styles.locationLabel}>From</Text>
//             <TouchableOpacity
//               style={styles.locationButton}
//               activeOpacity={0.7}
//               onPress={() => setShowFromCityModal(true)}
//             >
//               <View style={[styles.cityDot, { backgroundColor: '#4CAF50' }]} />
//               <Text style={styles.locationText}>{fromCity}</Text>
//               <Ionicons name="chevron-down" size={18} color={isDarkMode ? '#999' : '#666'} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.locationCard}>
//             <Text style={styles.locationLabel}>To</Text>
//             <TouchableOpacity
//               style={styles.locationButton}
//               activeOpacity={0.7}
//               onPress={() => setShowToCityModal(true)}
//             >
//               <View style={[styles.cityDot, { backgroundColor: '#F44336' }]} />
//               <Text style={styles.locationText}>{toCity}</Text>
//               <Ionicons name="chevron-down" size={18} color={isDarkMode ? '#999' : '#666'} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Truck Types */}
//       <View style={styles.locationSection}>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.truckTypesContainer}
//         >
//           {truckTypes.map((truck) => (
//             <TouchableOpacity
//               key={truck.id}
//               style={[
//                 styles.truckTypeButton,
//                 selectedTruckType === truck.id && styles.truckTypeButtonSelected
//               ]}
//               activeOpacity={0.7}
//               onPress={() => setSelectedTruckType(truck.id)}
//             >
//               <Text style={[
//                 styles.truckTypeLabel,
//                 selectedTruckType === truck.id && styles.truckTypeLabelSelected
//               ]}>
//                 {truck.label}
//               </Text>
//               <Text style={[
//                 styles.truckTypeSubtitle,
//                 selectedTruckType === truck.id && styles.truckTypeSubtitleSelected
//               ]}>
//                 {truck.subtitle}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Tab Navigation */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={styles.tabButton}
//           activeOpacity={0.7}
//           onPress={() => handleTabSwitch('graph')}
//         >
//           <MaterialCommunityIcons 
//             name="chart-line" 
//             size={20} 
//             color={activeTab === 'graph' ? App_Primary_color : (isDarkMode ? '#999' : '#666')} 
//           />
//           <Text style={[
//             styles.tabText,
//             activeTab === 'graph' && styles.tabTextActive
//           ]}>
//             Graph
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.tabButton}
//           activeOpacity={0.7}
//           onPress={() => handleTabSwitch('history')}
//         >
//           <MaterialCommunityIcons 
//             name="format-list-bulleted" 
//             size={20} 
//             color={activeTab === 'history' ? App_Primary_color : (isDarkMode ? '#999' : '#666')} 
//           />
//           <Text style={[
//             styles.tabText,
//             activeTab === 'history' && styles.tabTextActive
//           ]}>
//             History
//           </Text>
//         </TouchableOpacity>

//         <Animated.View 
//           style={[
//             styles.tabIndicator,
//             {
//               width: '50%',
//               left: activeTab === 'graph' ? 0 : '50%',
//             }
//           ]} 
//         />
//       </View>

//       {/* Scrollable Content */}
//       <ScrollView
//         ref={scrollViewRef}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Graph Section */}
//         <View style={styles.graphSection}>
//           {/* Period Selector */}
//           <View style={styles.periodSelector}>
//             {timePeriods.map((period) => (
//               <TouchableOpacity
//                 key={period}
//                 style={styles.periodButton}
//                 activeOpacity={0.7}
//                 onPress={() => setSelectedPeriod(period)}
//               >
//                 <Text style={[
//                   styles.periodText,
//                   selectedPeriod === period && styles.periodTextActive
//                 ]}>
//                   {period}
//                 </Text>
//                 {selectedPeriod === period && (
//                   <View style={styles.periodUnderline} />
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Stats */}
//           <View style={styles.statsRow}>
//             <View style={styles.statItem}>
//               <Text style={styles.statLabel}>Ton.15</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statLabel}>Min.</Text>
//               <Text style={styles.statValue}>₹20900</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statLabel}>Max.</Text>
//               <Text style={styles.statValue}>₹33500</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statLabel}>Avg.</Text>
//               <Text style={styles.statValue}>₹28900</Text>
//             </View>
//           </View>

//           {/* Chart */}
//           <View style={styles.chartContainer}>
//             <CustomLineChart
//               data={chartData}
//               width={width - 40}
//               height={240}
//             />
//           </View>
//         </View>

//         {/* Rate History Section */}
//         <View style={styles.historySection}>
//           <Text style={styles.historySectionTitle}>Rate history</Text>

//           {rateHistory.map((item, index) => (
//             <View key={index} style={styles.historyCard}>
//               <View style={styles.historyHeader}>
//                 <View style={[styles.historyDot, { backgroundColor: '#4CAF50' }]} />
//                 <Text style={styles.historyRoute}>{item.from}</Text>
//                 <View style={[styles.historyDot, { backgroundColor: '#F44336', marginLeft: 8 }]} />
//                 <Text style={styles.historyRoute}> {item.to}</Text>
//                 <Text style={styles.historyTon}> - {item.ton} Ton</Text>
//               </View>

//               <View style={styles.historyDetails}>
//                 <View style={styles.historyLeft}>
//                   <Text style={styles.historyDate}>{item.date}</Text>
//                   <Text style={styles.historyTruck}>{item.truckType}</Text>
//                 </View>
//                 <Text style={styles.historyRate}>{item.rate}</Text>
//               </View>
//             </View>
//           ))}
//           <View style={{height:100}}/>
//         </View>
//       </ScrollView>

//       {/* Modals */}
//       <SelectionModal
//         visible={showFromCityModal}
//         onClose={() => setShowFromCityModal(false)}
//         data={cities}
//         selectedValue={fromCity}
//         onSelect={setFromCity}
//         title="Select From City"
//       />

//       <SelectionModal
//         visible={showToCityModal}
//         onClose={() => setShowToCityModal(false)}
//         data={cities}
//         selectedValue={toCity}
//         onSelect={setToCity}
//         title="Select To City"
//       />
//     </View>
//   );
// };

// export default FreightRateScreen;

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Modal,
  Pressable,
  Dimensions,
  TextInput,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SpaceBetweenRow from '../../components/wrapper/spacebetween';
import Row from '../../components/wrapper/row';
import TruckListingModal from '../Booking/TruckListingModel';

const { width } = Dimensions.get('window');

const RatesScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  
  const [fromCity, setFromCity] = useState('Mumbai');
  const [toCity, setToCity] = useState('Delhi');
  const [selectedView, setSelectedView] = useState('rates');
  const [selectedTruckFilter, setSelectedTruckFilter] = useState('All');
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false)

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Ahmedabad',
    'Kolkata', 'Hyderabad', 'Jaipur', 'Surat', 'Lucknow', 'Indore',
  ];

  const truckFilters = ['All', '32FT', '24FT', '20FT', '17FT', 'Open'];

  const ratesData = [
    {
      id: 1,
      from: 'Mumbai',
      to: 'Delhi',
      distance: '1,450 km',
      truckType: '32FT MXL',
      rate: '₹42,000',
      perKm: '₹29/km',
      time: '24-28 hrs',
      rating: 4.5,
      bookings: 156,
    },
    {
      id: 2,
      from: 'Mumbai',
      to: 'Bangalore',
      distance: '980 km',
      truckType: '24FT MXL',
      rate: '₹28,000',
      perKm: '₹28.5/km',
      time: '18-20 hrs',
      rating: 4.3,
      bookings: 98,
    },
    {
      id: 3,
      from: 'Delhi',
      to: 'Kolkata',
      distance: '1,470 km',
      truckType: '32FT SXL',
      rate: '₹43,500',
      perKm: '₹29.5/km',
      time: '26-30 hrs',
      rating: 4.6,
      bookings: 142,
    },
    {
      id: 4,
      from: 'Bangalore',
      to: 'Chennai',
      distance: '350 km',
      truckType: '20FT Open',
      rate: '₹12,500',
      perKm: '₹35.7/km',
      time: '6-8 hrs',
      rating: 4.4,
      bookings: 87,
    },
  ];

  const chartData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [28000, 31000, 29500, 32000, 30000, 33500],
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const CityModal = ({ visible, onClose, data, selectedValue, onSelect, title }) => (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}
          onStartShouldSetResponder={() => true}
        >
          <View style={styles.modalHeader}>
            <Text style={[
              styles.modalTitle,
              { color: isDarkMode ? white : '#000' }
            ]}>
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={isDarkMode ? white : '#000'} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.modalItem,
                  selectedValue === item && {
                    backgroundColor: App_Primary_color + '15',
                  }
                ]}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={[
                  styles.modalItemText,
                  { color: isDarkMode ? white : '#000' },
                  selectedValue === item && { color: App_Primary_color }
                ]}>
                  {item}
                </Text>
                {selectedValue === item && (
                  <Ionicons name="checkmark-circle" size={20} color={App_Primary_color} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );

  const SimpleBarChart = () => {
    const maxValue = Math.max(...chartData.values);
    
    return (
      <View style={styles.chartWrapper}>
        <View style={styles.chartBars}>
          {chartData.values.map((value, index) => {
            const height = (value / maxValue) * 150;
            return (
              <View key={index} style={styles.barContainer}>
                <View style={styles.barValue}>
                  <Text style={[
                    styles.barValueText,
                    { color: isDarkMode ? white : '#000' }
                  ]}>
                    ₹{(value / 1000).toFixed(0)}K
                  </Text>
                </View>
                <View
                  style={[
                    styles.bar,
                    {
                      height,
                      backgroundColor: App_Primary_color,
                    }
                  ]}
                />
                <Text style={[
                  styles.barLabel,
                  { color: isDarkMode ? '#999' : '#666' }
                ]}>
                  {chartData.months[index]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const RateCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.rateCard,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}
      activeOpacity={0.7}
      onPress={()=>setIsModalVisible(true)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.routeContainer}>
          <View style={styles.cityRow}>
            <View style={[styles.dot, { backgroundColor: '#4CAF50' }]} />
            <Text style={[
              styles.cityName,
              { color: isDarkMode ? white : '#000' }
            ]}>
              {item.from}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={App_Primary_color}
            style={{ marginHorizontal: 8 }}
          />
          <View style={styles.cityRow}>
            <View style={[styles.dot, { backgroundColor: '#F44336' }]} />
            <Text style={[
              styles.cityName,
              { color: isDarkMode ? white : '#000' }
            ]}>
              {item.to}
            </Text>
          </View>
        </View>
        {/* <View style={styles.ratingBadge}>
          <Ionicons name="star" size={12} color="#FFB300" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View> */}
  <View style={styles.cardFooter}>
        <Row style={{gap:10}}>
             {/* <Text style={[
            styles.perKmText,
            { color: isDarkMode ? '#999' : '#666' }
          ]}>
            {item.perKm}
          </Text> */}
          <Text style={[
            styles.rateAmount,
            { color: App_Primary_color }
          ]}>
            {item.rate}
          </Text>
       </Row>
        {/* </View> */}
        {/* <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
          <Ionicons name="arrow-forward" size={16} color={white} />
        </TouchableOpacity> */}
      </View>
      </View>

      <View style={[
        styles.cardBody,
        { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }
      ]}>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <FontAwesome5
              name="truck"
              size={12}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoLabel,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {item.truckType}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoLabel,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {item.distance}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons
              name="time-outline"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoLabel,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {item.time}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons
              name="people"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoLabel,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {item.bookings} bookings
            </Text>
          </View>
        </View>
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
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 10,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop:12
    },
    headerTitle: {
      fontSize: 24,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
      marginBottom: 20,
    },
    searchSection: {
      gap: 12,
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      borderRadius: 12,
      paddingHorizontal: 10,
      height: 40,
      borderWidth: 1,
      borderColor: isDarkMode ? dark55 : '#E0E0E0',
      flex:1
    },
    searchIcon: {
      marginRight: 12,
    },
    searchText: {
      flex: 1,
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    swapButton: {
      // position: 'absolute',
      // right: 20,
      // top: 244,
      width: 35,
      height: 35,
      borderRadius: 22,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },
    tabBar: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? dark33 : white,
      paddingHorizontal: 10,
      // paddingVertical: 12,
      gap: 12,
    },
    tabButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      borderRadius: 10,
      gap: 8,
    },
    tabButtonActive: {
      backgroundColor: App_Primary_color,
    },
    tabButtonInactive: {
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    tabText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    tabTextActive: {
      color: white,
    },
    tabTextInactive: {
      color: isDarkMode ? '#999' : '#666',
    },
    filterBar: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: isDarkMode ? dark33 : white,
    },
    filterScroll: {
      flexDirection: 'row',
      gap: 8,
    },
    filterChip: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
      borderWidth: 1,
    },
    filterChipActive: {
      backgroundColor: App_Primary_color,
      borderColor: App_Primary_color,
    },
    filterChipInactive: {
      backgroundColor: 'transparent',
      borderColor: isDarkMode ? dark55 : '#E0E0E0',
    },
    filterChipText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    filterChipTextActive: {
      color: white,
    },
    filterChipTextInactive: {
      color: isDarkMode ? white : '#000',
    },
    content: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 100,
    },
    chartCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 8,
      padding: 10,
      marginBottom: 20,
    },
    chartTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 16,
    },
    chartWrapper: {
      marginTop: 8,
    },
    chartBars: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: 200,
    },
    barContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    barValue: {
      marginBottom: 8,
    },
    barValueText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    bar: {
      width: 24,
      borderRadius: 4,
      marginBottom: 8,
    },
    barLabel: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 16,
      paddingTop: 6,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? dark55 : '#F0F0F0',
    },
    statBox: {
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
    },
    statValue: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
      // marginTop: 4,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    viewAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    viewAllText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
    },
    rateCard: {
      borderRadius: 6,
      padding: 10,
      marginBottom: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom: 12,
    },
    routeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    cityRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    cityName: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    ratingBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF3E0',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
      gap: 4,
    },
    ratingText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#FF9800',
    },
    cardBody: {
      paddingTop: 5,
      borderTopWidth: 1,
      marginBottom: 4,
    },
    infoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 3,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      width: '48%',
    },
    infoLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    cardFooter: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
    },
    rateAmount: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    perKmText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      // marginTop: 2,
    },
    bookButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: App_Primary_color,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 5,
      gap: 6,
    },
    bookButtonText: {
      color: white,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '70%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? dark55 : '#F0F0F0',
    },
    modalTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    modalItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    modalItemText: {
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? dark33 : white}
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDarkMode ? white : '#000'}
          />
        </TouchableOpacity>

        {/* <Text style={styles.headerTitle}>Freight Rates</Text> */}
        <SpaceBetweenRow style={{...styles.searchSection,width: '100%'}}>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => setShowFromModal(true)}
          >
            <View style={styles.searchIcon}>
              <View style={[styles.dot, { backgroundColor: '#4CAF50' }]} />
            </View>
            <Text style={styles.searchText}>{fromCity}</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={isDarkMode ? '#999' : '#666'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => setShowToModal(true)}
          >
            <View style={styles.searchIcon}>
              <View style={[styles.dot, { backgroundColor: '#F44336' }]} />
            </View>
            <Text style={styles.searchText}>{toCity}</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={isDarkMode ? '#999' : '#666'}
            />
          </TouchableOpacity>
           <TouchableOpacity style={styles.swapButton} onPress={swapCities}>
        <MaterialCommunityIcons name="swap-vertical" size={24} color={white} />
      </TouchableOpacity>
        </SpaceBetweenRow>


      </View>

     

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedView === 'rates'
              ? styles.tabButtonActive
              : styles.tabButtonInactive,
          ]}
          onPress={() => setSelectedView('rates')}
        >
          <Ionicons
            name="list"
            size={18}
            color={selectedView === 'rates' ? white : (isDarkMode ? '#999' : '#666')}
          />
          <Text
            style={[
              styles.tabText,
              selectedView === 'rates'
                ? styles.tabTextActive
                : styles.tabTextInactive,
            ]}
          >
            Rates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedView === 'trends'
              ? styles.tabButtonActive
              : styles.tabButtonInactive,
          ]}
          onPress={() => setSelectedView('trends')}
        >
          <MaterialCommunityIcons
            name="chart-line"
            size={18}
            color={selectedView === 'trends' ? white : (isDarkMode ? '#999' : '#666')}
          />
          <Text
            style={[
              styles.tabText,
              selectedView === 'trends'
                ? styles.tabTextActive
                : styles.tabTextInactive,
            ]}
          >
            Trends
          </Text>
        </TouchableOpacity>
      </View>

      {selectedView === 'rates' && (
        <View style={styles.filterBar}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
            {truckFilters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  selectedTruckFilter === filter
                    ? styles.filterChipActive
                    : styles.filterChipInactive,
                ]}
                onPress={() => setSelectedTruckFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    selectedTruckFilter === filter
                      ? styles.filterChipTextActive
                      : styles.filterChipTextInactive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {selectedView === 'trends' ? (
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Price Trends (Last 6 Months)</Text>
            <SimpleBarChart />
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Min</Text>
                <Text style={styles.statValue}>₹28K</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Max</Text>
                <Text style={styles.statValue}>₹33K</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Avg</Text>
                <Text style={styles.statValue}>₹30K</Text>
              </View>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Available Routes</Text>
              {/* <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>Sort</Text>
                <Ionicons name="chevron-down" size={16} color={App_Primary_color} />
              </TouchableOpacity> */}
            </View>

            {ratesData.map((item) => (
              <RateCard key={item.id} item={item} />
            ))}
          </>
        )}
      </ScrollView>

      <CityModal
        visible={showFromModal}
        onClose={() => setShowFromModal(false)}
        data={cities}
        selectedValue={fromCity}
        onSelect={setFromCity}
        title="Select From City"
      />

      <CityModal
        visible={showToModal}
        onClose={() => setShowToModal(false)}
        data={cities}
        selectedValue={toCity}
        onSelect={setToCity}
        title="Select To City"
      />
       <TruckListingModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        navigation={navigation}
      />
    </View>
  );
};

export default RatesScreen;