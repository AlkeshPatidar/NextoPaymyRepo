// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // //   ScrollView,
// // //   TextInput,
// // //   Image,
// // //   ImageBackground,
// // // } from 'react-native';
// // // import { FONTS_FAMILY } from '../../assets/Fonts';
// // // import {
// // //   App_Primary_color,
// // //   dark33,
// // //   white
// // // } from '../../common/Colors/colors';
// // // import { useSelector } from 'react-redux';
// // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // // import IMG from '../../assets/Images';

// // // const SelectRechargePlanScreen = ({ navigation, route }) => {
// // //   const { isDarkMode } = useSelector(state => state.theme);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [selectedTab, setSelectedTab] = useState('Recommended Packs');

// // //   const tabs = ['Recommended Packs', 'Truly Unlimited', 'Online Packs'];

// // //   const rechargePlans = [
// // //     {
// // //       id: 1,
// // //       price: '₹239',
// // //       validity: '28 days',
// // //       data: '1.5 GB/day',
// // //       calls: 'Unlimited',
// // //       sms: '100 SMS/day',
// // //       subscriptions: ['Disney+ Hotstar'],
// // //       popular: false,
// // //     },
// // //     {
// // //       id: 2,
// // //       price: '₹666',
// // //       validity: '77 days',
// // //       data: '1.5 GB/day',
// // //       calls: 'Unlimited',
// // //       sms: '100 SMS/day',
// // //       subscriptions: ['Sony Liv', 'Zee5'],
// // //       popular: true,
// // //     },
// // //   ];

// // //   const PlanCard = ({ item }) => (
// // //     <TouchableOpacity
// // //       style={styles.planCard}
// // //       activeOpacity={0.7}
// // //       onPress={() => navigation.navigate('PaymentScreen', { plan: item })}
// // //     >
// // //       {/* Price and Validity Row */}
// // //       <View style={styles.planHeader}>
// // //         <View style={styles.priceContainer}>
// // //           <Text style={styles.priceText}>{item.price}</Text>
// // //           <View style={styles.validityBadge}>
// // //             <Text style={styles.validityText}>{item.validity}</Text>
// // //           </View>
// // //         </View>
// // //         {item.popular && (
// // //           <View style={styles.popularBadge}>
// // //             <Text style={styles.popularText}>POPULAR</Text>
// // //           </View>
// // //         )}
// // //       </View>

// // //       {/* Plan Details */}
// // //       <View style={styles.planDetails}>
// // //         <View style={styles.detailItem}>
// // //           <MaterialCommunityIcons name="wifi" size={16} color="#666" />
// // //           <Text style={styles.detailText}>Data: {item.data}</Text>
// // //         </View>
// // //         <View style={styles.detailItem}>
// // //           <Ionicons name="call-outline" size={16} color="#666" />
// // //           <Text style={styles.detailText}>{item.calls}</Text>
// // //         </View>
// // //         <View style={styles.detailItem}>
// // //           <MaterialCommunityIcons name="message-text-outline" size={16} color="#666" />
// // //           <Text style={styles.detailText}>{item.sms}</Text>
// // //         </View>
// // //       </View>

// // //       {/* Subscriptions */}
// // //       {item.subscriptions && item.subscriptions.length > 0 && (
// // //         <View style={styles.subscriptionsContainer}>
// // //           {item.subscriptions.map((sub, index) => (
// // //             <View key={index} style={styles.subscriptionBadge}>
// // //               <MaterialCommunityIcons name="play-circle-outline" size={14} color="#6B4CE6" />
// // //               <Text style={styles.subscriptionText}>{sub}</Text>
// // //             </View>
// // //           ))}
// // //         </View>
// // //       )}

// // //       {/* More Link */}
// // //       <TouchableOpacity style={styles.moreLink} activeOpacity={0.7}>
// // //         <Text style={styles.moreLinkText}>MORE</Text>
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

// // //   const styles = StyleSheet.create({
// // //     container: {
// // //       flex: 1,
// // //       backgroundColor: '#F5F3FF',
// // //     },
// // //     headerContent: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'space-between',
// // //       alignItems: 'center',
// // //       paddingHorizontal: 20,
// // //     },
// // //     headerTitle: {
// // //       fontSize: 18,
// // //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// // //       color: App_Primary_color,
// // //       flex: 1,
// // //       marginLeft: 15,
// // //     },
// // //     userInfoCard: {
// // //       backgroundColor: white,
// // //       marginHorizontal: 20,
// // //       marginTop: 10,
// // //       marginBottom: 15,
// // //       borderRadius: 12,
// // //       padding: 14,
// // //       shadowColor: '#000',
// // //       shadowOffset: { width: 0, height: 2 },
// // //       shadowOpacity: 0.05,
// // //       shadowRadius: 8,
// // //       elevation: 3,
// // //     },
// // //     userInfoRow: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       marginBottom: 12,
// // //     },
// // //     userAvatar: {
// // //       width: 40,
// // //       height: 40,
// // //       borderRadius: 20,
// // //       backgroundColor: '#E0E0E0',
// // //       justifyContent: 'center',
// // //       alignItems: 'center',
// // //       marginRight: 12,
// // //     },
// // //     userInfo: {
// // //       flex: 1,
// // //     },
// // //     userName: {
// // //       fontSize: 14,
// // //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// // //       color: '#1A1A1A',
// // //       marginBottom: 2,
// // //     },
// // //     userNumber: {
// // //       fontSize: 12,
// // //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //       color: '#999',
// // //     },
// // //     operatorRow: {
// // //       flexDirection: 'row',
// // //       gap: 10,
// // //     },
// // //     operatorButton: {
// // //       flex: 1,
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       justifyContent: 'space-between',
// // //       backgroundColor: '#F5F3FF',
// // //       paddingVertical: 8,
// // //       paddingHorizontal: 12,
// // //       borderRadius: 8,
// // //       borderWidth: 1,
// // //       borderColor: '#E0E0E0',
// // //     },
// // //     operatorText: {
// // //       fontSize: 12,
// // //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// // //       color: '#666',
// // //     },
// // //     searchContainer: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       backgroundColor: white,
// // //       borderRadius: 12,
// // //       paddingHorizontal: 16,
// // //       height: 45,
// // //       marginHorizontal: 20,
// // //       marginBottom: 15,
// // //       shadowColor: '#000',
// // //       shadowOffset: { width: 0, height: 2 },
// // //       shadowOpacity: 0.05,
// // //       shadowRadius: 8,
// // //       elevation: 2,
// // //     },
// // //     searchIcon: {
// // //       marginRight: 12,
// // //     },
// // //     searchInput: {
// // //       flex: 1,
// // //       fontSize: 13,
// // //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //       color: '#1A1A1A',
// // //     },
// // //     tabsContainer: {
// // //       flexDirection: 'row',
// // //       paddingHorizontal: 20,
// // //       marginBottom: 15,
// // //       gap: 10,
// // //     },
// // //     tabButton: {
// // //       paddingVertical: 8,
// // //       paddingHorizontal: 14,
// // //       borderRadius: 20,
// // //       backgroundColor: white,
// // //       borderWidth: 1,
// // //       borderColor: '#E0E0E0',
// // //     },
// // //     tabButtonActive: {
// // //       backgroundColor: '#6B4CE6',
// // //       borderColor: '#6B4CE6',
// // //     },
// // //     tabText: {
// // //       fontSize: 12,
// // //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// // //       color: '#666',
// // //     },
// // //     tabTextActive: {
// // //       color: white,
// // //     },
// // //     scrollContent: {
// // //       paddingHorizontal: 20,
// // //       paddingBottom: 100,
// // //     },
// // //     planCard: {
// // //       backgroundColor: white,
// // //       borderRadius: 12,
// // //       padding: 16,
// // //       marginBottom: 15,
// // //       shadowColor: '#000',
// // //       shadowOffset: { width: 0, height: 2 },
// // //       shadowOpacity: 0.05,
// // //       shadowRadius: 8,
// // //       elevation: 3,
// // //       position: 'relative',
// // //     },
// // //     planHeader: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'space-between',
// // //       alignItems: 'center',
// // //       marginBottom: 12,
// // //     },
// // //     priceContainer: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       gap: 12,
// // //     },
// // //     priceText: {
// // //       fontSize: 24,
// // //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// // //       color: '#1A1A1A',
// // //     },
// // //     validityBadge: {
// // //       backgroundColor: '#F5F3FF',
// // //       paddingHorizontal: 10,
// // //       paddingVertical: 4,
// // //       borderRadius: 12,
// // //     },
// // //     validityText: {
// // //       fontSize: 11,
// // //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// // //       color: '#6B4CE6',
// // //     },
// // //     popularBadge: {
// // //       backgroundColor: '#FFE5E5',
// // //       paddingHorizontal: 10,
// // //       paddingVertical: 4,
// // //       borderRadius: 12,
// // //     },
// // //     popularText: {
// // //       fontSize: 10,
// // //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// // //       color: '#FF3B30',
// // //     },
// // //     planDetails: {
// // //       marginBottom: 12,
// // //     },
// // //     detailItem: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       gap: 8,
// // //       marginBottom: 6,
// // //     },
// // //     detailText: {
// // //       fontSize: 12,
// // //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// // //       color: '#666',
// // //     },
// // //     subscriptionsContainer: {
// // //       flexDirection: 'row',
// // //       flexWrap: 'wrap',
// // //       gap: 8,
// // //       marginBottom: 12,
// // //     },
// // //     subscriptionBadge: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       gap: 4,
// // //       backgroundColor: '#F5F3FF',
// // //       paddingHorizontal: 10,
// // //       paddingVertical: 4,
// // //       borderRadius: 12,
// // //     },
// // //     subscriptionText: {
// // //       fontSize: 11,
// // //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// // //       color: '#6B4CE6',
// // //     },
// // //     moreLink: {
// // //       alignSelf: 'flex-end',
// // //     },
// // //     moreLinkText: {
// // //       fontSize: 12,
// // //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// // //       color: '#6B4CE6',
// // //     },
// // //   });

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

// // //       {/* Header with Background Image */}
// // //       <ImageBackground
// // //         source={IMG.HeaderBg}
// // //         style={{ height: 90, paddingTop: 35 }}
// // //       >
// // //         <View style={styles.headerContent}>
// // //           <TouchableOpacity
// // //             activeOpacity={0.7}
// // //             onPress={() => navigation.goBack()}
// // //           >
// // //             <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
// // //           </TouchableOpacity>

// // //           <Text style={styles.headerTitle}>Select a recharge plan</Text>
// // //         </View>
// // //       </ImageBackground>

// // //       <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

// // //       {/* User Info Card */}
// // //       <View style={styles.userInfoCard}>
// // //         <View style={styles.userInfoRow}>
// // //           <View style={styles.userAvatar}>
// // //             <Ionicons name="person" size={22} color="#999" />
// // //           </View>
// // //           <View style={styles.userInfo}>
// // //             <Text style={styles.userName}>Arther Howard</Text>
// // //             <Text style={styles.userNumber}>+91-888-000-0000</Text>
// // //           </View>
// // //         </View>

// // //         {/* Operator Selection */}
// // //         <View style={styles.operatorRow}>
// // //           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}>
// // //             <Text style={styles.operatorText}>Line Prepaid</Text>
// // //             <Ionicons name="chevron-down" size={16} color="#666" />
// // //           </TouchableOpacity>

// // //           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}>
// // //             <Text style={styles.operatorText}>Vodafone</Text>
// // //             <Ionicons name="chevron-down" size={16} color="#666" />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       {/* Search Bar */}
// // //       <View style={styles.searchContainer}>
// // //         <Ionicons
// // //           name="search-outline"
// // //           size={20}
// // //           color="#999"
// // //           style={styles.searchIcon}
// // //         />
// // //         <TextInput
// // //           style={styles.searchInput}
// // //           placeholder="Search by talking time/data"
// // //           placeholderTextColor="#999"
// // //           value={searchQuery}
// // //           onChangeText={setSearchQuery}
// // //         />
// // //       </View>

// // //       {/* Tabs */}
// // //       <ScrollView
// // //         horizontal
// // //         showsHorizontalScrollIndicator={false}
// // //         contentContainerStyle={styles.tabsContainer}
// // //       >
// // //         {tabs.map((tab, index) => (
// // //           <TouchableOpacity
// // //             key={index}
// // //             style={[
// // //               styles.tabButton,
// // //               selectedTab === tab && styles.tabButtonActive,
// // //             ]}
// // //             activeOpacity={0.7}
// // //             onPress={() => setSelectedTab(tab)}
// // //           >
// // //             <Text
// // //               style={[
// // //                 styles.tabText,
// // //                 selectedTab === tab && styles.tabTextActive,
// // //               ]}
// // //             >
// // //               {tab}
// // //             </Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>

// // //       {/* Recharge Plans */}
// // //       <ScrollView
// // //         showsVerticalScrollIndicator={false}
// // //         contentContainerStyle={styles.scrollContent}
// // //       >
// // //         {rechargePlans.map((plan) => (
// // //           <PlanCard key={plan.id} item={plan} />
// // //         ))}
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // };

// // // export default SelectRechargePlanScreen;


// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   ScrollView,
// //   TextInput,
// //   Image,
// //   ImageBackground,
// // } from 'react-native';
// // import { FONTS_FAMILY } from '../../assets/Fonts';
// // import {
// //   App_Primary_color,
// //   dark33,
// //   white
// // } from '../../common/Colors/colors';
// // import { useSelector } from 'react-redux';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import IMG from '../../assets/Images';
// // import { PlanDetailsModal, SelectOperatorModal, PaymentModal } from './RechargePlanModel';


// // const SelectRechargePlanScreen = ({ navigation, route }) => {
// //   const { isDarkMode } = useSelector(state => state.theme);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedTab, setSelectedTab] = useState('Recommended Packs');

// //   const tabs = ['Recommended Packs', 'Truly Unlimited', 'Cricket Packs'];
// //   const [showPlanModal, setShowPlanModal] = useState(false);
// // const [showOperatorModal, setShowOperatorModal] = useState(false);
// // const [showPaymentModal, setShowPaymentModal] = useState(false);
// // const [selectedPlan, setSelectedPlan] = useState(null);
// // const [selectedOperator, setSelectedOperator] = useState('');

// //   const rechargePlans = [
// //     {
// //       id: 1,
// //       price: '239',
// //       validity: '28 day',
// //       data: '15 GB per day',
// //       calls: 'Unlimited',
// //       sms: '100/day day',
// //       subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
// //       popular: false,
// //     },
// //     {
// //       id: 2,
// //       price: '666',
// //       validity: '84 day',
// //       data: '15 GB per day',
// //       calls: 'Unlimited',
// //       sms: '100/day day',
// //       subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
// //       popular: false,
// //     },
// //   ];

// //   const PlanCard = ({ item }) => (
// //     <TouchableOpacity
// //       style={styles.planCard}
// //       activeOpacity={0.7}
// //       onPress={() => navigation.navigate('PaymentScreen', { plan: item })}
// //     >
// //       <View style={styles.planRow}>
// //         {/* Left Section */}
// //         <View style={styles.planLeft}>
// //           <View style={styles.priceRow}>
// //             <Text style={styles.rupeeSymbol}>₹</Text>
// //             <Text style={styles.priceText}>{item.price}</Text>
// //           </View>
// //           <View style={styles.divider} />
// //           <View style={styles.planInfo}>
// //             <Text style={styles.infoLabel}>DATA</Text>
// //             <Text style={styles.infoValue}>{item.data}</Text>
// //             <Text style={styles.infoLabel}>Validity</Text>
// //             <Text style={styles.infoValue}>{item.validity}</Text>
// //           </View>
// //         </View>

// //         {/* Middle Section */}
// //         <View style={styles.planMiddle}>
// //           <Text style={styles.validityBadgeText}>Validity{'\n'}{item.validity}</Text>
// //           <View style={styles.divider} />
// //           <View style={styles.detailsSection}>
// //             <Text style={styles.detailItem}>DATA: {item.data.replace('15', '1.5')}</Text>
// //             <Text style={styles.detailItem}>SMS: {item.sms}</Text>
// //             <Text style={styles.detailItem}>Validity: {item.validity}</Text>
            
// //             <View style={styles.benefitsSection}>
// //               <Text style={styles.benefitsTitle}>{item.subscriptions[0]}</Text>
// //               <View style={styles.jioLogoContainer}>
// //                 <View style={styles.jioLogo}>
// //                   <Text style={styles.jioText}>Jio</Text>
// //                 </View>
// //                 <Text style={styles.benefitsText}>{item.subscriptions[1]}</Text>
// //               </View>
// //             </View>
// //           </View>
// //         </View>

// //         {/* Right Arrow */}
// //         <View style={styles.planRight}>
// //           <Ionicons name="chevron-forward" size={20} color="#999" />
// //         </View>
// //       </View>

// //       {/* Bottom Section */}
// //       <View style={styles.planBottom}>
// //         <Text style={styles.subscriptionText}>{item.subscriptions[2]}</Text>
// //         <TouchableOpacity activeOpacity={0.7}>
// //           <Text style={styles.moreText}>MORE</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#F5F3FF',
// //     },
// //     headerContent: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       paddingHorizontal: 20,
// //     },
// //     headerTitle: {
// //       fontSize: 18,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: App_Primary_color,
// //       flex: 1,
// //       marginLeft: 15,
// //     },
// //     userInfoCard: {
// //       backgroundColor: white,
// //       marginHorizontal: 20,
// //       marginTop: 10,
// //       marginBottom: 15,
// //       borderRadius: 12,
// //       padding: 14,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.05,
// //       shadowRadius: 8,
// //       elevation: 3,
// //     },
// //     userInfoRow: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       marginBottom: 12,
// //     },
// //     userAvatar: {
// //       width: 40,
// //       height: 40,
// //       borderRadius: 20,
// //       backgroundColor: '#E0E0E0',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       marginRight: 12,
// //     },
// //     userInfo: {
// //       flex: 1,
// //     },
// //     userName: {
// //       fontSize: 14,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: '#1A1A1A',
// //       marginBottom: 2,
// //     },
// //     userNumber: {
// //       fontSize: 12,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#999',
// //     },
// //     operatorRow: {
// //       flexDirection: 'row',
// //       gap: 10,
// //     },
// //     operatorButton: {
// //       flex: 1,
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       justifyContent: 'space-between',
// //       backgroundColor: '#F5F3FF',
// //       paddingVertical: 8,
// //       paddingHorizontal: 12,
// //       borderRadius: 8,
// //       borderWidth: 1,
// //       borderColor: App_Primary_color,
// //     },
// //     operatorText: {
// //       fontSize: 12,
// //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// //       color: App_Primary_color,
// //     },
// //     searchContainer: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       backgroundColor: white,
// //       borderRadius: 12,
// //       paddingHorizontal: 16,
// //       height: 45,
// //       marginHorizontal: 20,
// //       marginBottom: 15,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.05,
// //       shadowRadius: 8,
// //       elevation: 2,
// //     },
// //     searchIcon: {
// //       marginRight: 12,
// //     },
// //     searchInput: {
// //       flex: 1,
// //       fontSize: 13,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#1A1A1A',
// //     },
// //     tabsContainer: {
// //       flexDirection: 'row',
// //     //   paddingHorizontal: 20,
// //       marginBottom: 25,
// //       gap: 10,
// //       height:30,
// //       backgroundColor: white,
// //       marginHorizontal:20,
// //       borderRadius:5,
// //       alignItems:'center',
// //     },
// //     tabButton: {
// //     //   paddingVertical: 8,
// //       paddingHorizontal: 14,
// //       borderRadius: 20,
// //     //   backgroundColor: white,
// //     //   borderWidth: 1,
// //     //   borderColor: '#E0E0E0',
// //     },
// //     tabButtonActive: {
// //     //   backgroundColor: '#6B4CE6',
// //     //   borderColor: '#6B4CE6',
// //     },
// //     tabText: {
// //       fontSize: 12,
// //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// //       color: '#666',
// //     },
// //     tabTextActive: {
// //       color: App_Primary_color,
// //     },
// //     scrollContent: {
// //       paddingHorizontal: 20,
// //       paddingBottom: 100,
// //     },
// //     planCard: {
// //       backgroundColor: white,
// //       borderRadius: 8,
// //       marginBottom: 12,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.05,
// //       shadowRadius: 8,
// //       elevation: 3,
// //       overflow: 'hidden',
// //     },
// //     planRow: {
// //       flexDirection: 'row',
// //       padding: 12,
// //     },
// //     planLeft: {
// //       width: 85,
// //       alignItems: 'center',
// //       paddingRight: 12,
// //       borderRightWidth: 1,
// //       borderRightColor: '#E0E0E0',
// //     },
// //     priceRow: {
// //       flexDirection: 'row',
// //       alignItems: 'flex-start',
// //       marginBottom: 8,
// //     },
// //     rupeeSymbol: {
// //       fontSize: 14,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: '#1A1A1A',
// //       marginTop: 2,
// //     },
// //     priceText: {
// //       fontSize: 28,
// //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// //       color: '#1A1A1A',
// //     },
// //     divider: {
// //       height: 1,
// //       width: '100%',
// //       backgroundColor: '#E0E0E0',
// //       marginVertical: 8,
// //     },
// //     planInfo: {
// //       alignItems: 'center',
// //     },
// //     infoLabel: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#999',
// //       marginBottom: 2,
// //     },
// //     infoValue: {
// //       fontSize: 11,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: '#1A1A1A',
// //       marginBottom: 6,
// //     },
// //     planMiddle: {
// //       flex: 1,
// //       paddingHorizontal: 12,
// //     },
// //     validityBadgeText: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_Medium,
// //       color: '#666',
// //       marginBottom: 8,
// //     },
// //     detailsSection: {
// //       marginTop: 8,
// //     },
// //     detailItem: {
// //       fontSize: 11,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#666',
// //       marginBottom: 3,
// //     },
// //     benefitsSection: {
// //       marginTop: 8,
// //     },
// //     benefitsTitle: {
// //       fontSize: 11,
// //       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
// //       color: '#1A1A1A',
// //       marginBottom: 4,
// //     },
// //     jioLogoContainer: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       gap: 6,
// //     },
// //     jioLogo: {
// //       backgroundColor: '#0A2885',
// //       width: 26,
// //       height: 26,
// //       borderRadius: 13,
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //     },
// //     jioText: {
// //       fontSize: 9,
// //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// //       color: white,
// //     },
// //     benefitsText: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#666',
// //     },
// //     planRight: {
// //       justifyContent: 'center',
// //       paddingLeft: 8,
// //     },
// //     planBottom: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       paddingHorizontal: 12,
// //       paddingBottom: 12,
// //       paddingTop: 8,
// //       borderTopWidth: 1,
// //       borderTopColor: '#F0F0F0',
// //     },
// //     subscriptionText: {
// //       fontSize: 10,
// //       fontFamily: FONTS_FAMILY.Poppins_Regular,
// //       color: '#666',
// //       flex: 1,
// //     },
// //     moreText: {
// //       fontSize: 11,
// //       fontFamily: FONTS_FAMILY.Poppins_Bold,
// //       color: '#6B4CE6',
// //     },
// //   });

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

// //       {/* Header with Background Image */}
// //       <ImageBackground
// //         source={IMG.HeaderBg}
// //         style={{ height: 90, paddingTop: 35 }}
// //       >
// //         <View style={styles.headerContent}>
// //           <TouchableOpacity
// //             activeOpacity={0.7}
// //             onPress={() => navigation.goBack()}
// //           >
// //             <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
// //           </TouchableOpacity>

// //           <Text style={styles.headerTitle}>Select a recharge plan</Text>
// //         </View>
// //       </ImageBackground>

// //       <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

// //       {/* User Info Card */}
// //       <View style={styles.userInfoCard}>
// //         <View style={styles.userInfoRow}>
// //           <View style={styles.userAvatar}>
// //             <Ionicons name="person" size={22} color="#999" />
// //           </View>
// //           <View style={styles.userInfo}>
// //             <Text style={styles.userName}>Arther Howard</Text>
// //             <Text style={styles.userNumber}>+91-888-000-0000</Text>
// //           </View>
// //         </View>

// //         {/* Operator Selection */}
// //         <View style={styles.operatorRow}>
// //           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}
          
// //           >
// //             <Text style={styles.operatorText}>Line Prepaid</Text>
// //             <Ionicons name="chevron-down" size={16} color="#666" />
// //           </TouchableOpacity>

// //           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}>
// //             <Text style={styles.operatorText}>Rajasthan</Text>
// //             <Ionicons name="chevron-down" size={16} color="#666" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {/* Search Bar */}
// //       <View style={styles.searchContainer}>
// //         <Ionicons
// //           name="search-outline"
// //           size={20}
// //           color="#999"
// //           style={styles.searchIcon}
// //         />
// //         <TextInput
// //           style={styles.searchInput}
// //           placeholder="Search by talking time/data"
// //           placeholderTextColor="#999"
// //           value={searchQuery}
// //           onChangeText={setSearchQuery}
// //         />
// //       </View>

// //       {/* Tabs */}
// //       <ScrollView
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         contentContainerStyle={styles.tabsContainer}
// //       >
// //         {tabs.map((tab, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={[
// //               styles.tabButton,
// //               selectedTab === tab && styles.tabButtonActive,
// //             ]}
// //             activeOpacity={0.7}
// //             onPress={() => setSelectedTab(tab)}
// //           >
// //             <Text
// //               style={[
// //                 styles.tabText,
// //                 selectedTab === tab && styles.tabTextActive,
// //               ]}
// //             >
// //               {tab}
// //             </Text>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>

// //       {/* Recharge Plans */}
// //       <ScrollView
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={styles.scrollContent}
// //       >
// //         {rechargePlans.map((plan) => (
// //           <PlanCard key={plan.id} item={plan} />
// //         ))}
// //       </ScrollView>
// //       <PlanDetailsModal 
// //   visible={showPlanModal}
// //   onClose={() => setShowPlanModal(false)}
// //   plan={selectedPlan}
// //   onContinue={() => {
// //     setShowPlanModal(false);
// //     setShowOperatorModal(true);
// //   }}
// // />

// // <SelectOperatorModal
// //   visible={showOperatorModal}
// //   onClose={() => setShowOperatorModal(false)}
// //   onSelect={(operator) => {
// //     setSelectedOperator(operator);
// //     setShowPaymentModal(true);
// //   }}
// // />

// // <PaymentModal
// //   visible={showPaymentModal}
// //   onClose={() => setShowPaymentModal(false)}
// //   plan={selectedPlan}
// //   operator={selectedOperator}
// // />
// //     </View>
// //   );
// // };

// // export default SelectRechargePlanScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   ImageBackground,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import {
//   App_Primary_color,
//   white
// } from '../../common/Colors/colors';
// import { useSelector } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import IMG from '../../assets/Images';
// import { PlanDetailsModal, SelectOperatorModal, PaymentModal } from './RechargePlanModel';

// const SelectRechargePlanScreen = ({ navigation, route }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Recommended Packs');
  
//   // Modal States
//   const [showPlanModal, setShowPlanModal] = useState(false);
//   const [showOperatorModal, setShowOperatorModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [selectedOperator, setSelectedOperator] = useState('');

//   const tabs = ['Recommended Packs', 'Truly Unlimited', 'Cricket Packs'];

//   const rechargePlans = [
//     {
//       id: 1,
//       price: '239',
//       validity: '28 day',
//       data: '1.5 GB per day',
//       calls: 'Unlimited',
//       sms: '100/day',
//       subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
//       popular: false,
//     },
//     {
//       id: 2,
//       price: '666',
//       validity: '84 day',
//       data: '1.5 GB per day',
//       calls: 'Unlimited',
//       sms: '100/day',
//       subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
//       popular: false,
//     },
//   ];

//   // Handle Plan Card Click - Opens Modal 1
//   const handlePlanClick = (plan) => {
//     setSelectedPlan(plan);
//     setShowPlanModal(true);
//   };

//   // Modal 1 Continue - Opens Modal 2
//   const handlePlanContinue = () => {
//     setShowPlanModal(false);
//     setShowOperatorModal(true);
//   };

//   // Modal 2 Select - Opens Modal 3
//   const handleOperatorSelect = (operator) => {
//     setSelectedOperator(operator);
//     setShowPaymentModal(true);
//   };

//   const PlanCard = ({ item }) => (
//     <TouchableOpacity
//       style={styles.planCard}
//       activeOpacity={0.7}
//       onPress={() => handlePlanClick(item)}
//     >
//       <View style={styles.planRow}>
//         {/* Left Section */}
//         <View style={styles.planLeft}>
//           <View style={styles.priceRow}>
//             <Text style={styles.rupeeSymbol}>₹</Text>
//             <Text style={styles.priceText}>{item.price}</Text>
//           </View>
//           <View style={styles.divider} />
//           <View style={styles.planInfo}>
//             <Text style={styles.infoLabel}>DATA</Text>
//             <Text style={styles.infoValue}>{item.data}</Text>
//             <Text style={styles.infoLabel}>Validity</Text>
//             <Text style={styles.infoValue}>{item.validity}</Text>
//           </View>
//         </View>

//         {/* Middle Section */}
//         <View style={styles.planMiddle}>
//           <Text style={styles.validityBadgeText}>Validity{'\n'}{item.validity}</Text>
//           <View style={styles.divider} />
//           <View style={styles.detailsSection}>
//             <Text style={styles.detailItem}>DATA: {item.data}</Text>
//             <Text style={styles.detailItem}>SMS: {item.sms}</Text>
//             <Text style={styles.detailItem}>Validity: {item.validity}</Text>
            
//             <View style={styles.benefitsSection}>
//               <Text style={styles.benefitsTitle}>{item.subscriptions[0]}</Text>
//               <View style={styles.jioLogoContainer}>
//                 <View style={styles.jioLogo}>
//                   <Text style={styles.jioText}>Jio</Text>
//                 </View>
//                 <Text style={styles.benefitsText}>{item.subscriptions[1]}</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Right Arrow */}
//         <View style={styles.planRight}>
//           <Ionicons name="chevron-forward" size={20} color="#999" />
//         </View>
//       </View>

//       {/* Bottom Section */}
//       <View style={styles.planBottom}>
//         <Text style={styles.subscriptionText}>{item.subscriptions[2]}</Text>
//         <TouchableOpacity activeOpacity={0.7}>
//           <Text style={styles.moreText}>MORE</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F5F3FF',
//     },
//     headerContent: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//     },
//     headerTitle: {
//       fontSize: 18,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: App_Primary_color,
//       flex: 1,
//       marginLeft: 15,
//     },
//     userInfoCard: {
//       backgroundColor: white,
//       marginHorizontal: 20,
//       marginTop: 10,
//       marginBottom: 15,
//       borderRadius: 12,
//       padding: 14,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//     },
//     userInfoRow: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 12,
//     },
//     userAvatar: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: '#E0E0E0',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginRight: 12,
//     },
//     userInfo: {
//       flex: 1,
//     },
//     userName: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: '#1A1A1A',
//       marginBottom: 2,
//     },
//     userNumber: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#999',
//     },
//     operatorRow: {
//       flexDirection: 'row',
//       gap: 10,
//     },
//     operatorButton: {
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       backgroundColor: '#F5F3FF',
//       paddingVertical: 8,
//       paddingHorizontal: 12,
//       borderRadius: 8,
//       borderWidth: 1,
//       borderColor: App_Primary_color,
//     },
//     operatorText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: App_Primary_color,
//     },
//     searchContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: white,
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       height: 45,
//       marginHorizontal: 20,
//       marginBottom: 15,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 2,
//     },
//     searchIcon: {
//       marginRight: 12,
//     },
//     searchInput: {
//       flex: 1,
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#1A1A1A',
//     },
//     tabsContainer: {
//       flexDirection: 'row',
//       marginBottom: 25,
//       gap: 10,
//       height: 30,
//       backgroundColor: white,
//       marginHorizontal: 20,
//       borderRadius: 5,
//       alignItems: 'center',
//     },
//     tabButton: {
//       paddingHorizontal: 14,
//       borderRadius: 20,
//     },
//     tabText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: '#666',
//     },
//     tabTextActive: {
//       color: App_Primary_color,
//     },
//     scrollContent: {
//       paddingHorizontal: 20,
//       paddingBottom: 100,
//     },
//     planCard: {
//       backgroundColor: white,
//       borderRadius: 8,
//       marginBottom: 12,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//       overflow: 'hidden',
//     },
//     planRow: {
//       flexDirection: 'row',
//       padding: 12,
//     },
//     planLeft: {
//       width: 85,
//       alignItems: 'center',
//       paddingRight: 12,
//       borderRightWidth: 1,
//       borderRightColor: '#E0E0E0',
//     },
//     priceRow: {
//       flexDirection: 'row',
//       alignItems: 'flex-start',
//       marginBottom: 8,
//     },
//     rupeeSymbol: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: '#1A1A1A',
//       marginTop: 2,
//     },
//     priceText: {
//       fontSize: 28,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: '#1A1A1A',
//     },
//     divider: {
//       height: 1,
//       width: '100%',
//       backgroundColor: '#E0E0E0',
//       marginVertical: 8,
//     },
//     planInfo: {
//       alignItems: 'center',
//     },
//     infoLabel: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#999',
//       marginBottom: 2,
//     },
//     infoValue: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: '#1A1A1A',
//       marginBottom: 6,
//     },
//     planMiddle: {
//       flex: 1,
//       paddingHorizontal: 12,
//     },
//     validityBadgeText: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: '#666',
//       marginBottom: 8,
//     },
//     detailsSection: {
//       marginTop: 8,
//     },
//     detailItem: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#666',
//       marginBottom: 3,
//     },
//     benefitsSection: {
//       marginTop: 8,
//     },
//     benefitsTitle: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: '#1A1A1A',
//       marginBottom: 4,
//     },
//     jioLogoContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//     },
//     jioLogo: {
//       backgroundColor: '#0A2885',
//       width: 26,
//       height: 26,
//       borderRadius: 13,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     jioText: {
//       fontSize: 9,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: white,
//     },
//     benefitsText: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#666',
//     },
//     planRight: {
//       justifyContent: 'center',
//       paddingLeft: 8,
//     },
//     planBottom: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 12,
//       paddingBottom: 12,
//       paddingTop: 8,
//       borderTopWidth: 1,
//       borderTopColor: '#F0F0F0',
//     },
//     subscriptionText: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: '#666',
//       flex: 1,
//     },
//     moreText: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: '#6B4CE6',
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

//       {/* Header with Background Image */}
//       <ImageBackground
//         source={IMG.HeaderBg}
//         style={{ height: 90, paddingTop: 35 }}
//       >
//         <View style={styles.headerContent}>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => navigation.goBack()}
//           >
//             <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
//           </TouchableOpacity>

//           <Text style={styles.headerTitle}>Select a recharge plan</Text>
//         </View>
//       </ImageBackground>

//       <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

//       {/* User Info Card */}
//       <View style={styles.userInfoCard}>
//         <View style={styles.userInfoRow}>
//           <View style={styles.userAvatar}>
//             <Ionicons name="person" size={22} color="#999" />
//           </View>
//           <View style={styles.userInfo}>
//             <Text style={styles.userName}>Arther Howard</Text>
//             <Text style={styles.userNumber}>+91-888-000-0000</Text>
//           </View>
//         </View>

//         {/* Operator Selection */}
//         <View style={styles.operatorRow}>
//           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}>
//             <Text style={styles.operatorText}>Line Prepaid</Text>
//             <Ionicons name="chevron-down" size={16} color="#666" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.operatorButton} activeOpacity={0.7}>
//             <Text style={styles.operatorText}>Rajasthan</Text>
//             <Ionicons name="chevron-down" size={16} color="#666" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons
//           name="search-outline"
//           size={20}
//           color="#999"
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search by talking time/data"
//           placeholderTextColor="#999"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Tabs */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.tabsContainer}
//       >
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.tabButton}
//             activeOpacity={0.7}
//             onPress={() => setSelectedTab(tab)}
//           >
//             <Text
//               style={[
//                 styles.tabText,
//                 selectedTab === tab && styles.tabTextActive,
//               ]}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Recharge Plans */}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {rechargePlans.map((plan) => (
//           <PlanCard key={plan.id} item={plan} />
//         ))}
//       </ScrollView>

//       {/* Modal 1: Plan Details */}
//       <PlanDetailsModal
//         visible={showPlanModal}
//         onClose={() => setShowPlanModal(false)}
//         plan={selectedPlan}
//         onContinue={handlePlanContinue}
//       />

//       {/* Modal 2: Select Operator */}
//       <SelectOperatorModal
//         visible={showOperatorModal}
//         onClose={() => setShowOperatorModal(false)}
//         onSelect={handleOperatorSelect}
//       />

//       {/* Modal 3: Payment */}
//       <PaymentModal
//         visible={showPaymentModal}
//         onClose={() => setShowPaymentModal(false)}
//         plan={selectedPlan}
//         operator={selectedOperator}
//       />
//     </View>
//   );
// };

// export default SelectRechargePlanScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
  App_Primary_color,
  white
} from '../../../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IMG from '../../../../assets/Images';
import { SelectOperatorModal, PaymentModal } from './RechargePlanModel';

const SelectRechargePlanScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Recommended Packs');
  
  // Modal States
  const [showOperatorModal, setShowOperatorModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState('Vodafone');
  const [selectedState, setSelectedState] = useState('Rajasthan');

  const tabs = ['Recommended Packs', 'Truly Unlimited', 'Cricket Packs'];

  const rechargePlans = [
    {
      id: 1,
      price: '239',
      validity: '28 day',
      data: '1.5 GB per day',
      calls: 'Unlimited',
      sms: '100/day',
      subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
      popular: false,
    },
    {
      id: 2,
      price: '666',
      validity: '84 day',
      data: '1.5 GB per day',
      calls: 'Unlimited',
      sms: '100/day',
      subscriptions: ['Additional Benefits', 'Jio apps', 'Youtube Mobile for 1 year'],
      popular: false,
    },
  ];

  // Handle Plan Card Click - Opens Payment Modal directly
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  // Handle Operator Button Click - Opens Operator Modal
  const handleOperatorButtonClick = () => {
    setShowOperatorModal(true);
  };

  // Modal Operator Select
  const handleOperatorSelect = (operator) => {
    setSelectedOperator(operator);
  };

  const PlanCard = ({ item }) => (
    <TouchableOpacity
      style={styles.planCard}
      activeOpacity={0.7}
      onPress={() => handlePlanClick(item)}
    >
      <View style={styles.planRow}>
        {/* Left Section */}
        <View style={styles.planLeft}>
          <View style={styles.priceRow}>
            <Text style={styles.rupeeSymbol}>₹</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.planInfo}>
            <Text style={styles.infoLabel}>DATA</Text>
            <Text style={styles.infoValue}>{item.data}</Text>
            <Text style={styles.infoLabel}>Validity</Text>
            <Text style={styles.infoValue}>{item.validity}</Text>
          </View>
        </View>

        {/* Middle Section */}
        <View style={styles.planMiddle}>
          <Text style={styles.validityBadgeText}>Validity{'\n'}{item.validity}</Text>
          <View style={styles.divider} />
          <View style={styles.detailsSection}>
            <Text style={styles.detailItem}>DATA: {item.data}</Text>
            <Text style={styles.detailItem}>SMS: {item.sms}</Text>
            <Text style={styles.detailItem}>Validity: {item.validity}</Text>
            
            <View style={styles.benefitsSection}>
              <Text style={styles.benefitsTitle}>{item.subscriptions[0]}</Text>
              <View style={styles.jioLogoContainer}>
                <View style={styles.jioLogo}>
                  <Text style={styles.jioText}>Jio</Text>
                </View>
                <Text style={styles.benefitsText}>{item.subscriptions[1]}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Right Arrow */}
        <View style={styles.planRight}>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.planBottom}>
        <Text style={styles.subscriptionText}>{item.subscriptions[2]}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.moreText}>MORE</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F3FF',
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
      flex: 1,
      marginLeft: 15,
    },
    userInfoCard: {
      backgroundColor: white,
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 12,
      padding: 14,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    userInfoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    userAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 2,
    },
    userNumber: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    operatorRow: {
      flexDirection: 'row',
      gap: 10,
    },
    operatorButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F5F3FF',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: App_Primary_color,
    },
    operatorText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 45,
      marginHorizontal: 20,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    searchIcon: {
      marginRight: 12,
    },
    searchInput: {
      flex: 1,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#1A1A1A',
    },
    tabsContainer: {
      flexDirection: 'row',
      marginBottom: 25,
      gap: 10,
      height: 30,
      backgroundColor: white,
      marginHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    tabButton: {
      paddingHorizontal: 14,
      borderRadius: 20,
    },
    tabText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#666',
    },
    tabTextActive: {
      color: App_Primary_color,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    planCard: {
      backgroundColor: white,
      borderRadius: 8,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      overflow: 'hidden',
    },
    planRow: {
      flexDirection: 'row',
      padding: 12,
    },
    planLeft: {
      width: 85,
      alignItems: 'center',
      paddingRight: 12,
      borderRightWidth: 1,
      borderRightColor: '#E0E0E0',
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    rupeeSymbol: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginTop: 2,
    },
    priceText: {
      fontSize: 28,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
    },
    divider: {
      height: 1,
      width: '100%',
      backgroundColor: '#E0E0E0',
      marginVertical: 8,
    },
    planInfo: {
      alignItems: 'center',
    },
    infoLabel: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      marginBottom: 2,
    },
    infoValue: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 6,
    },
    planMiddle: {
      flex: 1,
      paddingHorizontal: 12,
    },
    validityBadgeText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#666',
      marginBottom: 8,
    },
    detailsSection: {
      marginTop: 8,
    },
    detailItem: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      marginBottom: 3,
    },
    benefitsSection: {
      marginTop: 8,
    },
    benefitsTitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 4,
    },
    jioLogoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    jioLogo: {
      backgroundColor: '#0A2885',
      width: 26,
      height: 26,
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
    },
    jioText: {
      fontSize: 9,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
    },
    benefitsText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
    },
    planRight: {
      justifyContent: 'center',
      paddingLeft: 8,
    },
    planBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingBottom: 12,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor: '#F0F0F0',
    },
    subscriptionText: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#666',
      flex: 1,
    },
    moreText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#6B4CE6',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Header with Background Image */}
      <ImageBackground
        source={IMG.HeaderBg}
        style={{ height: 90, paddingTop: 35 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Select a recharge plan</Text>
        </View>
      </ImageBackground>

      <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

      {/* User Info Card */}
      <View style={styles.userInfoCard}>
        <View style={styles.userInfoRow}>
          <View style={styles.userAvatar}>
            <Ionicons name="person" size={22} color="#999" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Arther Howard</Text>
            <Text style={styles.userNumber}>+91-888-000-0000</Text>
          </View>
        </View>

        {/* Operator Selection Buttons */}
        <View style={styles.operatorRow}>
          {/* Line Prepaid Button - Opens Operator Modal */}
          <TouchableOpacity 
            style={styles.operatorButton} 
            activeOpacity={0.7}
            onPress={handleOperatorButtonClick}
          >
            <Text style={styles.operatorText}>{selectedOperator}</Text>
            <Ionicons name="chevron-down" size={16} color={App_Primary_color} />
          </TouchableOpacity>

          {/* State Selection Button */}
          <TouchableOpacity 
            style={styles.operatorButton} 
            activeOpacity={0.7}
            onPress={() => {
              // Can add state selection modal here if needed
              console.log('State selection');
            }}
          >
            <Text style={styles.operatorText}>{selectedState}</Text>
            <Ionicons name="chevron-down" size={16} color={App_Primary_color} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by talking time/data"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            activeOpacity={0.7}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recharge Plans */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {rechargePlans.map((plan) => (
          <PlanCard key={plan.id} item={plan} />
        ))}
      </ScrollView>

      {/* Select Operator Modal */}
      <SelectOperatorModal
        visible={showOperatorModal}
        onClose={() => setShowOperatorModal(false)}
        onSelect={handleOperatorSelect}
      />

      {/* Payment Modal */}
      <PaymentModal
        visible={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedPlan}
        operator={selectedOperator}
      />
    </View>
  );
};

export default SelectRechargePlanScreen;