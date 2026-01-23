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
  dark33,
  white
} from '../../../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IMG from '../../../../assets/Images';

const AllContacts = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [searchQuery, setSearchQuery] = useState('');

  const recentRecharges = [
    {
      id: 1,
      name: 'Anne Vineet',
      number: '+91-888-3456',
      time: '05:25 am',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Umit Roy',
      number: '+91-888-3456',
      time: '12:36 pm',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
  ];

  const allContacts = [
    {
      id: 1,
      name: 'Ashlen Carder',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 2,
      name: 'Cristofer Culhane',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 3,
      name: 'Emerson Stanton',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 4,
      name: 'Haylie Dias',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    {
      id: 5,
      name: 'Kadin Lipshutz',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 6,
      name: 'Rayna McKinney',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 7,
      name: 'Ryan Rosser',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 8,
      name: 'Tiana Arcand',
      number: '+91-888-3456',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
  ];

  const RecentRechargeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.recentCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('SelectRechargePlanScreen', { contact: item })}
    >
      <View style={styles.recentLeft}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.recentInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactNumber}>{item.number}</Text>
        </View>
      </View>
      <Text style={styles.timeText}>{item.time}</Text>
    </TouchableOpacity>
  );

  const ContactCard = ({ item }) => (
    <TouchableOpacity
      style={styles.contactCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('PostpaidBillScreen', { contact: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
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
      marginBottom: 15,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
      flex: 1,
      marginLeft: 15,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 48,
      marginHorizontal: 20,
      marginBottom: 10,
    },
    searchIcon: {
      marginRight: 12,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#1A1A1A',
    },
    scrollContent: {
      paddingBottom: 100,
    },
    sectionContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
      backgroundColor:'white',
      margin:10,
      padding:10,
      elevation:2,
        borderRadius:8,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 12,
    },
    recentCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: white,
      padding: 12,
    //   borderRadius: 12,
    //   marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    recentLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 12,
      backgroundColor: '#E0E0E0',
    },
    recentInfo: {
      flex: 1,
    },
    contactName: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 2,
    },
    contactNumber: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    timeText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
    },
    contactCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      padding: 12,
    //   borderRadius: 12,
    //   marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    contactInfo: {
      flex: 1,
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

          <Text style={styles.headerTitle}>Postpaid Bill</Text>
        </View>
      </ImageBackground>
      
      <View style={{ height: 3, width: '100%', backgroundColor: App_Primary_color, bottom: 10 }} />

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
          placeholder="Search contact name..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      

        {/* All Contacts Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>All Contacts</Text>
          {allContacts.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllContacts;