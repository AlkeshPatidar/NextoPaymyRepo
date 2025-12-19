import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
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

const TruckListingModal = ({ visible, onClose, navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

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

  const handleTruckSelect = (truck) => {
    onClose();
    navigation.navigate('CreateBookingScreen', { selectedTruck: truck });
  };

  const TruckCard = ({ truck }) => (
    <TouchableOpacity
      style={[
        styles.truckCard,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}
      activeOpacity={0.7}
      onPress={() => handleTruckSelect(truck)}
    >
      <View style={styles.truckImageContainer}>
        <Image
          source={{ uri: truck.image }}
          style={styles.truckImage}
          resizeMode="cover"
        />
      </View>

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
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[
          styles.modalContent,
          { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
        ]}>
          {/* Modal Header */}
          <View style={[
            styles.modalHeader,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}>
            <Text style={[
              styles.modalTitle,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Select Vehicle
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.7}
              onPress={onClose}
            >
              <Ionicons
                name="close"
                size={28}
                color={isDarkMode ? white : '#000'}
              />
            </TouchableOpacity>
          </View>

          {/* Trucks List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {trucks.map((truck) => (
              <TruckCard key={truck.id} truck={truck} />
            ))}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '85%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 20,
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

export default TruckListingModal;