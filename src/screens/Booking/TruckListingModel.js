// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Modal,
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

// const TruckListingModal = ({ visible, onClose, navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);

//   const trucks = [
//     {
//       id: 1,
//       name: 'Mini SW',
//       type: 'Closed',
//       capacity: '1 Ton',
//       distance: '8 km',
//       time: '45 mins',
//       price: '₹148',
//       image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',
//     },
//     {
//       id: 2,
//       name: '407',
//       type: 'TATA',
//       capacity: '2.5 Ton',
//       distance: '15 km',
//       time: '1 hr 20 mins',
//       price: '₹1593',
//       image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&h=300&fit=crop',
//     },
//     {
//       id: 3,
//       name: '2 Wheeler',
//       type: 'Bike',
//       capacity: '50 kg',
//       distance: '5 km',
//       time: '25 mins',
//       price: '₹25',
//       image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop',
//     },
//     {
//       id: 4,
//       name: '3 Wheeler',
//       type: 'Auto',
//       capacity: '500 kg',
//       distance: '8 km',
//       time: '35 mins',
//       price: '₹299',
//       image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop',
//     },
//     {
//       id: 5,
//       name: 'Tata Ace',
//       type: 'Pickup',
//       capacity: '750 kg',
//       distance: '12 km',
//       time: '50 mins',
//       price: '₹803',
//       image: 'https://images.unsplash.com/photo-1622184150096-47c9d87b3677?w=400&h=300&fit=crop',
//     },
//   ];

//   const handleTruckSelect = (truck) => {
//     onClose();
//     navigation.navigate('CreateBookingScreen', { selectedTruck: truck });
//   };

//   const TruckCard = ({ truck }) => (
//     <TouchableOpacity
//       style={[
//         styles.truckCard,
//         { backgroundColor: isDarkMode ? dark33 : white }
//       ]}
//       activeOpacity={0.7}
//       onPress={() => handleTruckSelect(truck)}
//     >
//       <View style={styles.truckImageContainer}>
//         <Image
//           source={{ uri: truck.image }}
//           style={styles.truckImage}
//           resizeMode="cover"
//         />
//       </View>

//       <View style={styles.truckDetails}>
//         <View style={styles.truckHeader}>
//           <Text style={[
//             styles.truckName,
//             { color: isDarkMode ? white : '#000' }
//           ]}>
//             {truck.name}
//           </Text>
//           {truck.type && (
//             <View style={[
//               styles.typeBadge,
//               { backgroundColor: App_Primary_color + '20' }
//             ]}>
//               <Text style={[
//                 styles.typeBadgeText,
//                 { color: App_Primary_color }
//               ]}>
//                 {truck.type}
//               </Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.truckInfo}>
//           <View style={styles.infoItem}>
//             <MaterialCommunityIcons
//               name="weight-kilogram"
//               size={14}
//               color={isDarkMode ? '#999' : '#666'}
//             />
//             <Text style={[
//               styles.infoText,
//               { color: isDarkMode ? '#999' : '#666' }
//             ]}>
//               {truck.capacity}
//             </Text>
//           </View>

//           <View style={styles.infoDivider} />

//           <View style={styles.infoItem}>
//             <Ionicons
//               name="time-outline"
//               size={14}
//               color={isDarkMode ? '#999' : '#666'}
//             />
//             <Text style={[
//               styles.infoText,
//               { color: isDarkMode ? '#999' : '#666' }
//             ]}>
//               {truck.time}
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.priceContainer}>
//         <Text style={[
//           styles.priceText,
//           { color: isDarkMode ? white : '#000' }
//         ]}>
//           {truck.price}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <Modal
//       visible={visible}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={[
//           styles.modalContent,
//           { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
//         ]}>
//           {/* Modal Header */}
//           <View style={[
//             styles.modalHeader,
//             { backgroundColor: isDarkMode ? dark33 : white }
//           ]}>
//             <Text style={[
//               styles.modalTitle,
//               { color: isDarkMode ? white : '#000' }
//             ]}>
//               Select Vehicle
//             </Text>
//             <TouchableOpacity
//               style={styles.closeButton}
//               activeOpacity={0.7}
//               onPress={onClose}
//             >
//               <Ionicons
//                 name="close"
//                 size={28}
//                 color={isDarkMode ? white : '#000'}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Trucks List */}
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.scrollContent}
//           >
//             {trucks.map((truck) => (
//               <TruckCard key={truck.id} truck={truck} />
//             ))}
//             <View style={{ height: 20 }} />
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//   },
//   modalContent: {
//     height: '85%',
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     overflow: 'hidden',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingTop: 20,
//     paddingBottom: 16,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   closeButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scrollContent: {
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   truckCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   truckImageContainer: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginRight: 12,
//     backgroundColor: '#F0F0F0',
//   },
//   truckImage: {
//     width: '100%',
//     height: '100%',
//   },
//   truckDetails: {
//     flex: 1,
//   },
//   truckHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     gap: 8,
//   },
//   truckName: {
//     fontSize: 14,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   typeBadge: {
//     paddingHorizontal: 5,
//     paddingVertical: 2,
//     borderRadius: 4,
//   },
//   typeBadgeText: {
//     fontSize: 8,
//     fontFamily: FONTS_FAMILY.Poppins_Medium,
//   },
//   truckInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   infoText: {
//     fontSize: 12,
//     fontFamily: FONTS_FAMILY.Poppins_Regular,
//   },
//   infoDivider: {
//     width: 1,
//     height: 12,
//     backgroundColor: '#DDD',
//   },
//   priceContainer: {
//     alignItems: 'flex-end',
//     marginLeft: 12,
//   },
//   priceText: {
//     fontSize: 16,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
// });

// export default TruckListingModal;



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

const TruckListingGridModal = ({ visible, onClose, navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const trucks = [
    // Open Body Trucks (Small & Medium)
    {
      id: 1,
      name: 'Bolero Pickup',
      category: 'Open Body',
      capacity: '1.5 Ton',
      price: '₹800-1200/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 2,
      name: '14ft Eicher',
      category: 'Open Body',
      capacity: '7 Ton',
      price: '₹3000-4500/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 3,
      name: '19ft Eicher',
      category: 'Open Body',
      capacity: '9 Ton',
      price: '₹4500-6000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 4,
      name: '22ft Eicher',
      category: 'Open Body',
      capacity: '12 Ton',
      price: '₹6000-8000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 5,
      name: '22ft Eicher',
      category: 'Open Body',
      capacity: '15 Ton',
      price: '₹7000-9000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },

    // Containers (Secure Cargo)
    {
      id: 6,
      name: '20ft Container',
      category: 'Container',
      capacity: '8 Ton',
      price: '₹8000-12000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 7,
      name: '32ft Container',
      category: 'Container',
      capacity: '15 Ton',
      price: '₹12000-18000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 8,
      name: '32ft MXL Container',
      category: 'Container',
      capacity: '18 Ton',
      price: '₹15000-22000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 9,
      name: '32ft MXL Container',
      category: 'Container',
      capacity: '20 Ton',
      price: '₹18000-25000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },

    // Heavy Duty Multi-Axle Trucks
    {
      id: 10,
      name: '10 Wheel Truck',
      category: 'Heavy Duty',
      capacity: '16 Ton',
      price: '₹10000-15000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 11,
      name: '12 Wheel Truck',
      category: 'Heavy Duty',
      capacity: '20 Ton',
      price: '₹15000-20000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 12,
      name: '14 Wheel Truck',
      category: 'Heavy Duty',
      capacity: '25 Ton',
      price: '₹18000-25000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 13,
      name: '16 Wheel Truck',
      category: 'Heavy Duty',
      capacity: '28 Ton',
      price: '₹20000-28000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },

    // Specialized & Heavy Cargo
    {
      id: 14,
      name: '40ft Trailer',
      category: 'Specialized',
      capacity: '30 Ton',
      price: '₹25000-35000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
    {
      id: 15,
      name: '32ft ODC Truck',
      category: 'Heavy Cargo',
      capacity: '40 Ton',
      price: '₹35000-50000/trip',
      image: 'https://cms.eichertrucksandbuses.com/uploads/truck/img/13e282d44d277f7041167efa8263452d.png',
    },
  ];

  const handleTruckSelect = (truck) => {
    onClose();
    navigation.navigate('CreateBookingScreen', { selectedTruck: truck });
  };

  const TruckCard = ({ truck }) => {
    const isTooltipActive = activeTooltip === truck.id;

    return (
      <View style={styles.truckCardWrapper}>
        <TouchableOpacity
          style={[
            styles.truckCard,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}
          activeOpacity={0.7}
          onPress={() => handleTruckSelect(truck)}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: truck.image }}
              style={styles.truckImage}
              resizeMode="cover"
            />
            
            {/* Info Icon */}
            <TouchableOpacity
              style={styles.infoButton}
              activeOpacity={0.9}
              onPressIn={() => setActiveTooltip(truck.id)}
              onPressOut={() => setActiveTooltip(null)}
            >
              <Ionicons name="information-circle" size={20} color={App_Primary_color} />
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.truckName,
              { color: isDarkMode ? white : '#000' }
            ]}
            numberOfLines={2}
          >
            {truck.name}
          </Text>
        </TouchableOpacity>

        {/* Tooltip */}
        {isTooltipActive && (
          <View
            style={[
              styles.tooltip,
              { backgroundColor: isDarkMode ? dark55 : '#333' }
            ]}
          >
            <View style={styles.tooltipRow}>
              <Ionicons name="cube-outline" size={14} color={white} />
              <Text style={styles.tooltipText}>{truck.capacity}</Text>
            </View>
            <View style={styles.tooltipRow}>
              <Ionicons name="cash-outline" size={14} color={white} />
              <Text style={styles.tooltipText}>{truck.price}</Text>
            </View>
            <View style={styles.tooltipArrow} />
          </View>
        )}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
          ]}
        >
          {/* Modal Header */}
          <View
            style={[
              styles.modalHeader,
              { backgroundColor: isDarkMode ? dark33 : white }
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                { color: isDarkMode ? white : '#000' }
              ]}
            >
              Select Vehicle Type
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

          {/* Trucks Grid */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Open Body Section */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDarkMode ? white : '#000' }
              ]}
            >
              Open Body Trucks (Small & Medium)
            </Text>
            <View style={styles.grid}>
              {trucks.slice(0, 5).map((truck) => (
                <TruckCard key={truck.id} truck={truck} />
              ))}
            </View>

            {/* Containers Section */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDarkMode ? white : '#000' }
              ]}
            >
              Containers (Secure Cargo)
            </Text>
            <View style={styles.grid}>
              {trucks.slice(5, 9).map((truck) => (
                <TruckCard key={truck.id} truck={truck} />
              ))}
            </View>

            {/* Heavy Duty Section */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDarkMode ? white : '#000' }
              ]}
            >
              Heavy Duty Multi-Axle
            </Text>
            <View style={styles.grid}>
              {trucks.slice(9, 13).map((truck) => (
                <TruckCard key={truck.id} truck={truck} />
              ))}
            </View>

            {/* Specialized Section */}
            <Text
              style={[
                styles.sectionTitle,
                { color: isDarkMode ? white : '#000' }
              ]}
            >
              Specialized & Heavy Cargo
            </Text>
            <View style={styles.grid}>
              {trucks.slice(13, 15).map((truck) => (
                <TruckCard key={truck.id} truck={truck} />
              ))}
            </View>

            <View style={{ height: 30 }} />
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
    height: '90%',
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
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginBottom: 12,
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  truckCardWrapper: {
    width: '31%',
    position: 'relative',
  },
  truckCard: {
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 6,
    backgroundColor: '#F0F0F0',
    position: 'relative',
  },
  truckImage: {
    width: '100%',
    height: '100%',
  },
  infoButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  truckName: {
    fontSize: 11,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
    textAlign: 'center',
    minHeight: 32,
  },
  tooltip: {
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    borderRadius: 8,
    padding: 8,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tooltipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  tooltipText: {
    fontSize: 10,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    color: white,
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -6,
    left: '50%',
    marginLeft: -6,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#333',
  },
});

export default TruckListingGridModal