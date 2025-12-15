import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TruckListingScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  // Truck data with online images
  const trucks = [
    {
      id: 1,
      name: 'Mini SW',
      type: 'Closed',
      capacity: '1 Ton',
      distance: '8 km',
      time: '45 mins',
      price: '₹148',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: '407',
      type: 'TATA',
      capacity: '2.5 Ton',
      distance: '15 km',
      time: '1 hr 20 mins',
      price: '₹1593',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: '2 Wheeler',
      type: 'Bike',
      capacity: '50 kg',
      distance: '5 km',
      time: '25 mins',
      price: '₹25',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: '3 Wheeler',
      type: 'Auto',
      capacity: '500 kg',
      distance: '8 km',
      time: '35 mins',
      price: '₹299',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Tata Ace',
      type: 'Pickup',
      capacity: '750 kg',
      distance: '12 km',
      time: '50 mins',
      price: '₹803',
      image: 'https://images.unsplash.com/photo-1622184150096-47c9d87b3677?w=400&h=300&fit=crop',
    },
  ];

  const TruckCard = ({ truck }) => (
    <TouchableOpacity
      style={[
        styles.truckCard,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('CreateBookingScreen', { selectedTruck: truck })}
    >
      {/* Left: Truck Image */}
      <View style={styles.truckImageContainer}>
        <Image
          source={{ uri: truck.image }}
          style={styles.truckImage}
          resizeMode="cover"
        />
      </View>

      {/* Middle: Truck Details */}
      <View style={styles.truckDetails}>
        <View style={styles.truckHeader}>
          <Text style={[
            styles.truckName,
            { color: isDarkMode ? white : '#000' }
          ]}>
            {truck.name}
          </Text>
          {truck.type && (
            <View style={[
              styles.typeBadge,
              { backgroundColor: App_Primary_color + '20' }
            ]}>
              <Text style={[
                styles.typeBadgeText,
                { color: App_Primary_color }
              ]}>
                {truck.type}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.truckInfo}>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="weight-kilogram"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {truck.capacity}
            </Text>
          </View>

          {/* <View style={styles.infoDivider} /> */}

          {/* <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {truck.distance}
            </Text>
          </View> */}

          <View style={styles.infoDivider} />

          <View style={styles.infoItem}>
            <Ionicons
              name="time-outline"
              size={14}
              color={isDarkMode ? '#999' : '#666'}
            />
            <Text style={[
              styles.infoText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              {truck.time}
            </Text>
          </View>
        </View>
      </View>

      {/* Right: Price */}
      <View style={styles.priceContainer}>
        <Text style={[
          styles.priceText,
          { color: isDarkMode ? white : '#000' }
        ]}>
          {truck.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? dark33 : white}
      />

      {/* Header */}
      <View style={[
        styles.header,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}>
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
        <Text style={[
          styles.headerTitle,
          { color: isDarkMode ? white : '#000' }
        ]}>
          Select Vehicle
        </Text>
        <View style={styles.headerRight} />
      </View>

      {/* Route Info Card */}
      {/* <View style={[
        styles.routeCard,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}>
        <View style={styles.routeRow}>
          <View style={styles.routePoint}>
            <View style={[styles.dotGreen]} />
            <Text style={[
              styles.routeText,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Mumbai
            </Text>
          </View>

          <View style={styles.routeArrow}>
            <View style={[
              styles.routeLine,
              { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }
            ]} />
            <Ionicons
              name="arrow-forward"
              size={16}
              color={isDarkMode ? '#999' : '#666'}
            />
          </View>

          <View style={styles.routePoint}>
            <View style={[styles.dotRed]} />
            <Text style={[
              styles.routeText,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Surat
            </Text>
          </View>
        </View>

        <View style={styles.loadInfo}>
          <View style={styles.loadItem}>
            <MaterialCommunityIcons
              name="package-variant"
              size={16}
              color={App_Primary_color}
            />
            <Text style={[
              styles.loadText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              Furniture
            </Text>
          </View>
          <View style={[
            styles.loadDivider,
            { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }
          ]} />
          <View style={styles.loadItem}>
            <MaterialCommunityIcons
              name="weight"
              size={16}
              color={App_Primary_color}
            />
            <Text style={[
              styles.loadText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}>
              18 MT
            </Text>
          </View>
        </View>
      </View> */}

      {/* Trucks List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* <Text style={[
          styles.sectionTitle,
          { color: isDarkMode ? white : '#000' }
        ]}>
          Select Vehicle Type
        </Text> */}

        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginLeft: 12,
  },
  headerRight: {
    width: 40,
  },
  routeCard: {
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dotGreen: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  dotRed: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: App_Primary_color,
  },
  routeText: {
    fontSize: 15,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  routeArrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  routeLine: {
    flex: 1,
    height: 1,
    marginRight: 4,
  },
  loadInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  loadText: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
  },
  loadDivider: {
    width: 1,
    height: 16,
  },
  scrollContent: {
    paddingHorizontal: 10,
    marginTop:20
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginBottom: 12,
  },
  truckCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  truckImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#F0F0F0',
  },
  truckImage: {
    width: '100%',
    height: '100%',
  },
  truckDetails: {
    flex: 1,
  },
  truckHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  truckName: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  typeBadge: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typeBadgeText: {
    fontSize: 8,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
  },
  truckInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
  },
  infoDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#DDD',
  },
  priceContainer: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  priceText: {
    fontSize: 16,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
});

export default TruckListingScreen