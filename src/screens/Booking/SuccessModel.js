// // SuccessModal.js
// import React from 'react';
// import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { App_Primary_color } from '../../common/Colors/colors';

// const SuccessModal = ({ visible, onClose }) => {
//   return (
//     <Modal
//       visible={visible}
//       transparent
//       animationType="fade"
//     >
//       <View style={styles.overlay}>
//         <View style={styles.modalBox}>

//           {/* Tick Icon */}
//           <Icon name="check-circle" size={70} color="#28a745" />

//           {/* Message */}
//           <Text style={styles.title}>Your booking successful</Text>

//           {/* Button */}
//           <TouchableOpacity style={styles.button} onPress={onClose}>
//             <Text style={styles.buttonText}>Back to Home</Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default SuccessModal;

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBox: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     marginTop: 15,
//     marginBottom: 20,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor:App_Primary_color,
//     width: '70%',
//     paddingVertical: 12,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


// SuccessModal.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { App_Primary_color } from '../../common/Colors/colors';
import { FONTS_FAMILY } from '../../assets/Fonts';
import Row from '../../components/wrapper/row';

const SuccessModal = ({ visible, onClose, bookingData }) => {
  // Default booking data if not provided
  const defaultData = {
    bookingNumber: 'BK' + Math.floor(100000 + Math.random() * 900000),
    truckNumber: 'TRK-' + Math.floor(1000 + Math.random() * 9000),
    driverName: 'Rajesh Kumar',
    driverPhone: '+91 98765 43210',
    from: 'Mumbai',
    to: 'Surat',
    materialType: 'Furniture',
    weight: '18 MT',
    estimatedTime: '6-8 hours',
    bookingDate: new Date().toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    }),
  };

  const data = bookingData || defaultData;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={70} color="#28a745" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Booking Successful!</Text>
          <Text style={styles.subtitle}>Your truck has been booked</Text>

          {/* Booking Details */}
          <ScrollView style={styles.detailsContainer} showsVerticalScrollIndicator={false}>
            {/* Booking Number */}
            <View style={styles.detailRow}>
              <View style={styles.detailIconWrapper}>
                <MaterialCommunityIcons name="file-document-outline" size={20} color={App_Primary_color} />
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Booking Number</Text>
                <Text style={styles.detailValue}>{data.bookingNumber}</Text>
              </View>
            </View>

            {/* Truck Number */}
            <View style={styles.detailRow}>
              <View style={styles.detailIconWrapper}>
                <MaterialCommunityIcons name="truck" size={20} color={App_Primary_color} />
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Truck Number</Text>
                <Text style={styles.detailValue}>{data.truckNumber}</Text>
              </View>
            </View>

            {/* Driver Info */}
            <View style={styles.detailRow}>
              <View style={styles.detailIconWrapper}>
                <MaterialCommunityIcons name="account" size={20} color={App_Primary_color} />
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Driver Name</Text>
                <Text style={styles.detailValue}>{data.driverName}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.detailIconWrapper}>
                <MaterialCommunityIcons name="phone" size={20} color={App_Primary_color} />
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Driver Contact</Text>
                <Text style={styles.detailValue}>{data.driverPhone}</Text>
              </View>
            </View>

            {/* Route Info */}
            <View style={styles.routeContainer}>
              <Row style={{gap:20}}>
              <View style={styles.routeRow}>
                <MaterialCommunityIcons name="map-marker" size={20} color="#28a745" />
                <Text style={styles.routeText}>{data.from}</Text>
              </View>
              <View style={styles.routeDivider}>
                <MaterialCommunityIcons name="arrow-down" size={16} color="#999" />
              </View>
              <View style={styles.routeRow}>
                <MaterialCommunityIcons name="map-marker" size={20} color="#dc3545" />
                <Text style={styles.routeText}>{data.to}</Text>
              </View>

              </Row>
            </View>

            {/* Material & Weight */}
            <View style={styles.infoGrid}>
              <View style={styles.infoCard}>
                <MaterialCommunityIcons name="package-variant" size={24} color={App_Primary_color} />
                <Text style={styles.infoLabel}>Material</Text>
                <Text style={styles.infoValue}>{data.materialType}</Text>
              </View>
              <View style={styles.infoCard}>
                <MaterialCommunityIcons name="weight" size={24} color={App_Primary_color} />
                <Text style={styles.infoLabel}>Weight</Text>
                <Text style={styles.infoValue}>{data.weight}</Text>
              </View>
            </View>

            {/* Additional Info */}
            <View style={styles.additionalInfo}>
              <View style={styles.additionalRow}>
                <MaterialCommunityIcons name="clock-outline" size={18} color="#666" />
                <Text style={styles.additionalText}>Est. Time: {data.estimatedTime}</Text>
              </View>
              <View style={styles.additionalRow}>
                <MaterialCommunityIcons name="calendar" size={18} color="#666" />
                <Text style={styles.additionalText}>Date: {data.bookingDate}</Text>
              </View>
            </View>
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity style={styles.secondaryButton} onPress={() => {}}>
              <MaterialCommunityIcons name="file-download-outline" size={20} color={App_Primary_color} />
              <Text style={styles.secondaryButtonText}>Download Receipt</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity style={styles.primaryButton} onPress={onClose}>
              <Text style={styles.primaryButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '90%',
    maxHeight: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS_FAMILY.Poppins_Bold,
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    maxHeight: 350,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(199, 39, 217, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 11,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    color: '#666',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    color: '#333',
  },
  routeContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  routeText: {
    fontSize: 15,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    color: '#333',
  },
  routeDivider: {
    alignItems: 'center',
    marginVertical: 5,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 11,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    color: '#666',
    marginTop: 5,
  },
  infoValue: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    color: '#333',
    marginTop: 2,
  },
  additionalInfo: {
    backgroundColor: '#fff8e1',
    padding: 12,
    borderRadius: 10,
    gap: 8,
  },
  additionalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  additionalText: {
    fontSize: 12,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(199, 39, 217, 0.1)',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  secondaryButtonText: {
    color: App_Primary_color,
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  primaryButton: {
    backgroundColor: App_Primary_color,
    paddingVertical: 12,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
});