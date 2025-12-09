// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
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
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const { width } = Dimensions.get('window');

// const CreateBookingScreen = ({ navigation }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [currentStep, setCurrentStep] = useState(1);
  
//   // Form Data
//   const [formData, setFormData] = useState({
//     // Step 1: Route
//     pickupLocation: '',
//     pickupCity: '',
//     pickupState: '',
//     pickupPincode: '',
//     dropLocation: '',
//     dropCity: '',
//     dropState: '',
//     dropPincode: '',
    
//     // Step 2: Load Details
//     materialType: '',
//     weight: '',
//     weightUnit: 'Tons',
//     loadType: 'Full Load',
    
//     // Step 3: Truck Selection
//     truckCategory: '',
//     truckLength: '',
//     numberOfTrucks: 1,
    
//     // Step 4: Schedule
//     pickupDate: '',
//     pickupTime: '',
//     additionalNotes: '',
//   });

//   const steps = [
//     { id: 1, title: 'Route', icon: 'map-marker' },
//     { id: 2, title: 'Load', icon: 'package-variant' },
//     { id: 3, title: 'Truck', icon: 'truck' },
//     { id: 4, title: 'Schedule', icon: 'calendar' },
//     { id: 5, title: 'Review', icon: 'check-circle' },
//   ];

//   const truckCategories = [
//     { id: 'open', name: 'Open', icon: 'truck-delivery-outline' },
//     { id: 'container', name: 'Container', icon: 'package-variant-closed' },
//     { id: 'trailer', name: 'Trailer', icon: 'truck-trailer' },
//   ];

//   const truckLengths = ['14 ft', '17 ft', '19 ft', '20 ft', '22 ft', '24 ft', '32 ft'];

//   const materialTypes = [
//     'Electronics', 'Furniture', 'Machinery', 'Food Items',
//     'Textiles', 'Chemicals', 'Construction Material', 'Others'
//   ];

//   const updateFormData = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < 5) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     } else {
//       navigation.goBack();
//     }
//   };

//   const handleSubmit = () => {
//     console.log('Booking submitted:', formData);
//     // Navigate to success screen or back to home
//     navigation.navigate('Home');
//   };

//   // Stepper Component
//   const Stepper = () => (
//     <View style={styles.stepperContainer}>
//       {steps.map((step, index) => (
//         <View key={step.id} style={styles.stepWrapper}>
//           <View style={styles.stepItem}>
//             <View style={[
//               styles.stepCircle,
//               {
//                 backgroundColor: currentStep >= step.id 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0'
//               }
//             ]}>
//               {currentStep > step.id ? (
//                 <Ionicons name="checkmark" size={16} color={white} />
//               ) : (
//                 <MaterialCommunityIcons 
//                   name={step.icon} 
//                   size={16} 
//                   color={currentStep >= step.id ? white : '#999'} 
//                 />
//               )}
//             </View>
//             <Text style={[
//               styles.stepTitle,
//               {
//                 color: currentStep >= step.id 
//                   ? (isDarkMode ? white : '#000')
//                   : '#999'
//               }
//             ]}>
//               {step.title}
//             </Text>
//           </View>
//           {index < steps.length - 1 && (
//             <View style={[
//               styles.stepLine,
//               {
//                 backgroundColor: currentStep > step.id 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0'
//               }
//             ]} />
//           )}
//         </View>
//       ))}
//     </View>
//   );

//   // Step 1: Route Details
//   const RouteStep = () => (
//     <View style={styles.stepContent}>
//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000' }]}>
//         Pickup Location
//       </Text>
//       <View style={styles.locationIconContainer}>
//         <MaterialCommunityIcons name="map-marker" size={20} color="#4CAF50" />
//       </View>
      
//       <TextInput
//         style={[styles.input, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//           color: isDarkMode ? white : '#000'
//         }]}
//         placeholder="Pickup Address"
//         placeholderTextColor="#999"
//         value={formData.pickupLocation}
//         onChangeText={(text) => updateFormData('pickupLocation', text)}
//       />
      
//       <View style={styles.rowInputs}>
//         <TextInput
//           style={[styles.inputHalf, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             color: isDarkMode ? white : '#000'
//           }]}
//           placeholder="City"
//           placeholderTextColor="#999"
//           value={formData.pickupCity}
//           onChangeText={(text) => updateFormData('pickupCity', text)}
//         />
//         <TextInput
//           style={[styles.inputHalf, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             color: isDarkMode ? white : '#000'
//           }]}
//           placeholder="State"
//           placeholderTextColor="#999"
//           value={formData.pickupState}
//           onChangeText={(text) => updateFormData('pickupState', text)}
//         />
//       </View>

//       <TextInput
//         style={[styles.input, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//           color: isDarkMode ? white : '#000'
//         }]}
//         placeholder="Pincode"
//         placeholderTextColor="#999"
//         keyboardType="numeric"
//         maxLength={6}
//         value={formData.pickupPincode}
//         onChangeText={(text) => updateFormData('pickupPincode', text)}
//       />

//       <View style={styles.divider} />

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000' }]}>
//         Drop Location
//       </Text>
//       <View style={styles.locationIconContainer}>
//         <MaterialCommunityIcons name="map-marker" size={20} color={App_Primary_color} />
//       </View>
      
//       <TextInput
//         style={[styles.input, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//           color: isDarkMode ? white : '#000'
//         }]}
//         placeholder="Drop Address"
//         placeholderTextColor="#999"
//         value={formData.dropLocation}
//         onChangeText={(text) => updateFormData('dropLocation', text)}
//       />
      
//       <View style={styles.rowInputs}>
//         <TextInput
//           style={[styles.inputHalf, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             color: isDarkMode ? white : '#000'
//           }]}
//           placeholder="City"
//           placeholderTextColor="#999"
//           value={formData.dropCity}
//           onChangeText={(text) => updateFormData('dropCity', text)}
//         />
//         <TextInput
//           style={[styles.inputHalf, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             color: isDarkMode ? white : '#000'
//           }]}
//           placeholder="State"
//           placeholderTextColor="#999"
//           value={formData.dropState}
//           onChangeText={(text) => updateFormData('dropState', text)}
//         />
//       </View>

//       <TextInput
//         style={[styles.input, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//           color: isDarkMode ? white : '#000'
//         }]}
//         placeholder="Pincode"
//         placeholderTextColor="#999"
//         keyboardType="numeric"
//         maxLength={6}
//         value={formData.dropPincode}
//         onChangeText={(text) => updateFormData('dropPincode', text)}
//       />
//     </View>
//   );

//   // Step 2: Load Details
//   const LoadDetailsStep = () => (
//     <View style={styles.stepContent}>
//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000' }]}>
//         Material Type
//       </Text>
      
//       <View style={styles.chipContainer}>
//         {materialTypes.map((type) => (
//           <TouchableOpacity
//             key={type}
//             style={[
//               styles.chip,
//               {
//                 backgroundColor: formData.materialType === type 
//                   ? App_Primary_color + '20' 
//                   : isDarkMode ? dark33 : white,
//                 borderColor: formData.materialType === type 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0',
//               }
//             ]}
//             onPress={() => updateFormData('materialType', type)}
//           >
//             <Text style={[
//               styles.chipText,
//               {
//                 color: formData.materialType === type 
//                   ? App_Primary_color 
//                   : isDarkMode ? white : '#000'
//               }
//             ]}>
//               {type}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 24 }]}>
//         Weight
//       </Text>
      
//       <View style={styles.weightContainer}>
//         <TextInput
//           style={[styles.weightInput, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             color: isDarkMode ? white : '#000'
//           }]}
//           placeholder="Enter weight"
//           placeholderTextColor="#999"
//           keyboardType="numeric"
//           value={formData.weight}
//           onChangeText={(text) => updateFormData('weight', text)}
//         />
        
//         <View style={styles.unitButtons}>
//           {['Tons', 'Kg'].map((unit) => (
//             <TouchableOpacity
//               key={unit}
//               style={[
//                 styles.unitButton,
//                 {
//                   backgroundColor: formData.weightUnit === unit 
//                     ? App_Primary_color 
//                     : isDarkMode ? dark33 : white,
//                   borderColor: isDarkMode ? dark55 : '#E0E0E0',
//                 }
//               ]}
//               onPress={() => updateFormData('weightUnit', unit)}
//             >
//               <Text style={[
//                 styles.unitText,
//                 { color: formData.weightUnit === unit ? white : (isDarkMode ? white : '#000') }
//               ]}>
//                 {unit}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 24 }]}>
//         Load Type
//       </Text>
      
//       <View style={styles.loadTypeContainer}>
//         {['Full Load', 'Part Load'].map((type) => (
//           <TouchableOpacity
//             key={type}
//             style={[
//               styles.loadTypeButton,
//               {
//                 backgroundColor: formData.loadType === type 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark33 : white,
//                 borderColor: formData.loadType === type 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0',
//               }
//             ]}
//             onPress={() => updateFormData('loadType', type)}
//           >
//             <MaterialCommunityIcons 
//               name={type === 'Full Load' ? 'truck' : 'truck-outline'} 
//               size={24} 
//               color={formData.loadType === type ? white : (isDarkMode ? white : '#000')} 
//             />
//             <Text style={[
//               styles.loadTypeText,
//               { color: formData.loadType === type ? white : (isDarkMode ? white : '#000') }
//             ]}>
//               {type}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );

//   // Step 3: Truck Selection
//   const TruckSelectionStep = () => (
//     <View style={styles.stepContent}>
//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000' }]}>
//         Truck Category
//       </Text>
      
//       <View style={styles.truckCategoryContainer}>
//         {truckCategories.map((category) => (
//           <TouchableOpacity
//             key={category.id}
//             style={[
//               styles.truckCategoryCard,
//               {
//                 backgroundColor: formData.truckCategory === category.id 
//                   ? App_Primary_color + '20' 
//                   : isDarkMode ? dark33 : white,
//                 borderColor: formData.truckCategory === category.id 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0',
//               }
//             ]}
//             onPress={() => updateFormData('truckCategory', category.id)}
//           >
//             <MaterialCommunityIcons 
//               name={category.icon} 
//               size={32} 
//               color={formData.truckCategory === category.id ? App_Primary_color : '#999'} 
//             />
//             <Text style={[
//               styles.truckCategoryText,
//               {
//                 color: formData.truckCategory === category.id 
//                   ? App_Primary_color 
//                   : isDarkMode ? white : '#000'
//               }
//             ]}>
//               {category.name}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 24 }]}>
//         Truck Length
//       </Text>
      
//       <View style={styles.chipContainer}>
//         {truckLengths.map((length) => (
//           <TouchableOpacity
//             key={length}
//             style={[
//               styles.chip,
//               {
//                 backgroundColor: formData.truckLength === length 
//                   ? App_Primary_color + '20' 
//                   : isDarkMode ? dark33 : white,
//                 borderColor: formData.truckLength === length 
//                   ? App_Primary_color 
//                   : isDarkMode ? dark55 : '#E0E0E0',
//               }
//             ]}
//             onPress={() => updateFormData('truckLength', length)}
//           >
//             <Text style={[
//               styles.chipText,
//               {
//                 color: formData.truckLength === length 
//                   ? App_Primary_color 
//                   : isDarkMode ? white : '#000'
//               }
//             ]}>
//               {length}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 24 }]}>
//         Number of Trucks
//       </Text>
      
//       <View style={styles.counterContainer}>
//         <TouchableOpacity
//           style={[styles.counterButton, { 
//             backgroundColor: isDarkMode ? dark33 : white,
//             borderColor: isDarkMode ? dark55 : '#E0E0E0',
//           }]}
//           onPress={() => formData.numberOfTrucks > 1 && updateFormData('numberOfTrucks', formData.numberOfTrucks - 1)}
//         >
//           <Feather name="minus" size={20} color={isDarkMode ? white : '#000'} />
//         </TouchableOpacity>
        
//         <View style={[styles.counterValue, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//         }]}>
//           <Text style={[styles.counterText, { color: isDarkMode ? white : '#000' }]}>
//             {formData.numberOfTrucks}
//           </Text>
//         </View>
        
//         <TouchableOpacity
//           style={[styles.counterButton, { 
//             backgroundColor: App_Primary_color,
//           }]}
//           onPress={() => updateFormData('numberOfTrucks', formData.numberOfTrucks + 1)}
//         >
//           <Feather name="plus" size={20} color={white} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   // Step 4: Schedule
//   const ScheduleStep = () => (
//     <View style={styles.stepContent}>
//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000' }]}>
//         Pickup Date
//       </Text>
      
//       <TouchableOpacity
//         style={[styles.dateTimeInput, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//         }]}
//         onPress={() => console.log('Open date picker')}
//       >
//         <MaterialIcons name="date-range" size={20} color={App_Primary_color} />
//         <TextInput
//           style={[styles.dateTimeText, { color: isDarkMode ? white : '#000' }]}
//           placeholder="Select pickup date"
//           placeholderTextColor="#999"
//           value={formData.pickupDate}
//           onChangeText={(text) => updateFormData('pickupDate', text)}
//         />
//       </TouchableOpacity>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 20 }]}>
//         Pickup Time
//       </Text>
      
//       <TouchableOpacity
//         style={[styles.dateTimeInput, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//         }]}
//         onPress={() => console.log('Open time picker')}
//       >
//         <Ionicons name="time-outline" size={20} color={App_Primary_color} />
//         <TextInput
//           style={[styles.dateTimeText, { color: isDarkMode ? white : '#000' }]}
//           placeholder="Select pickup time"
//           placeholderTextColor="#999"
//           value={formData.pickupTime}
//           onChangeText={(text) => updateFormData('pickupTime', text)}
//         />
//       </TouchableOpacity>

//       <Text style={[styles.sectionTitle, { color: isDarkMode ? white : '#000', marginTop: 20 }]}>
//         Additional Notes (Optional)
//       </Text>
      
//       <TextInput
//         style={[styles.notesInput, { 
//           backgroundColor: isDarkMode ? dark33 : white,
//           color: isDarkMode ? white : '#000'
//         }]}
//         placeholder="Add any special instructions..."
//         placeholderTextColor="#999"
//         multiline
//         numberOfLines={4}
//         textAlignVertical="top"
//         value={formData.additionalNotes}
//         onChangeText={(text) => updateFormData('additionalNotes', text)}
//       />
//     </View>
//   );

//   // Step 5: Review & Submit
//   const ReviewStep = () => (
//     <ScrollView style={styles.stepContent} showsVerticalScrollIndicator={false}>
//       <View style={[styles.reviewCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.reviewHeader}>
//           <MaterialCommunityIcons name="map-marker-path" size={24} color={App_Primary_color} />
//           <Text style={[styles.reviewHeaderText, { color: isDarkMode ? white : '#000' }]}>
//             Route Details
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>From:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.pickupCity}, {formData.pickupState} - {formData.pickupPincode}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>To:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.dropCity}, {formData.dropState} - {formData.dropPincode}
//           </Text>
//         </View>
//       </View>

//       <View style={[styles.reviewCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.reviewHeader}>
//           <MaterialCommunityIcons name="package-variant" size={24} color={App_Primary_color} />
//           <Text style={[styles.reviewHeaderText, { color: isDarkMode ? white : '#000' }]}>
//             Load Details
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Material:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.materialType}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Weight:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.weight} {formData.weightUnit}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Load Type:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.loadType}
//           </Text>
//         </View>
//       </View>

//       <View style={[styles.reviewCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.reviewHeader}>
//           <MaterialCommunityIcons name="truck" size={24} color={App_Primary_color} />
//           <Text style={[styles.reviewHeaderText, { color: isDarkMode ? white : '#000' }]}>
//             Truck Details
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Category:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.truckCategory}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Length:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.truckLength}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Quantity:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.numberOfTrucks} Truck(s)
//           </Text>
//         </View>
//       </View>

//       <View style={[styles.reviewCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.reviewHeader}>
//           <MaterialIcons name="schedule" size={24} color={App_Primary_color} />
//           <Text style={[styles.reviewHeaderText, { color: isDarkMode ? white : '#000' }]}>
//             Schedule
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Date:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.pickupDate || 'Not set'}
//           </Text>
//         </View>
//         <View style={styles.reviewRow}>
//           <Text style={[styles.reviewLabel, { color: '#999' }]}>Time:</Text>
//           <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//             {formData.pickupTime || 'Not set'}
//           </Text>
//         </View>
//         {formData.additionalNotes && (
//           <View style={styles.reviewRow}>
//             <Text style={[styles.reviewLabel, { color: '#999' }]}>Notes:</Text>
//             <Text style={[styles.reviewValue, { color: isDarkMode ? white : '#000' }]}>
//               {formData.additionalNotes}
//             </Text>
//           </View>
//         )}
//       </View>

//       <View style={[styles.estimateCard, { backgroundColor: App_Primary_color + '15' }]}>
//         <Text style={[styles.estimateLabel, { color: isDarkMode ? white : '#000' }]}>
//           Estimated Rate
//         </Text>
//         <Text style={[styles.estimateValue, { color: App_Primary_color }]}>
//           ₹45,000 - ₹52,000
//         </Text>
//         <Text style={[styles.estimateNote, { color: '#999' }]}>
//           *Final rate will be confirmed by transporter
//         </Text>
//       </View>

//       <View style={[styles.termsContainer, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <Ionicons name="information-circle-outline" size={20} color={App_Primary_color} />
//         <Text style={[styles.termsText, { color: isDarkMode ? white : '#000' }]}>
//           By submitting, you agree to our Terms & Conditions
//         </Text>
//       </View>
//     </ScrollView>
//   );

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return <RouteStep />;
//       case 2:
//         return <LoadDetailsStep />;
//       case 3:
//         return <TruckSelectionStep />;
//       case 4:
//         return <ScheduleStep />;
//       case 5:
//         return <ReviewStep />;
//       default:
//         return null;
//     }
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//     },
//     header: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingTop: 50,
//       paddingBottom: 20,
//       paddingHorizontal: 20,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 5,
//     },
//     headerTop: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 20,
//     },
//     backButton: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginRight: 16,
//     },
//     headerTitle: {
//       fontSize: 20,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: isDarkMode ? white : '#000',
//       flex: 1,
//     },
//     stepperContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 10,
//     },
//     stepWrapper: {
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     stepItem: {
//       alignItems: 'center',
//     },
//     stepCircle: {
//       width: 36,
//       height: 36,
//       borderRadius: 18,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 6,
//     },
//     stepTitle: {
//       fontSize: 10,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     stepLine: {
//       flex: 1,
//       height: 2,
//       marginHorizontal: 4,
//       marginBottom: 30,
//     },
//     scrollContent: {
//       flex: 1,
//     },
//     stepContent: {
//       flex: 1,
//       padding: 20,
//     },
//     sectionTitle: {
//       fontSize: 16,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginBottom: 12,
//     },
//     locationIconContainer: {
//       marginBottom: 8,
//     },
//     input: {
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       paddingVertical: 14,
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       marginBottom: 12,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     rowInputs: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     inputHalf: {
//       flex: 1,
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       paddingVertical: 14,
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       marginBottom: 12,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     divider: {
//       height: 1,
//       backgroundColor: isDarkMode ? dark55 : '#E0E0E0',
//       marginVertical: 24,
//     },
//     chipContainer: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       gap: 10,
//     },
//     chip: {
//       paddingHorizontal: 16,
//       paddingVertical: 10,
//       borderRadius: 20,
//       borderWidth: 1.5,
//     },
//     chipText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     weightContainer: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     weightInput: {
//       flex: 1,
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       paddingVertical: 14,
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     unitButtons: {
//       flexDirection: 'row',
//       gap: 8,
//     },
//     unitButton: {
//       paddingHorizontal: 20,
//       paddingVertical: 14,
//       borderRadius: 12,
//       borderWidth: 1,
//     },
//     unitText: {
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     loadTypeContainer: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     loadTypeButton: {
//       flex: 1,
//       paddingVertical: 20,
//       borderRadius: 12,
//       alignItems: 'center',
//       borderWidth: 2,
//     },
//     loadTypeText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginTop: 8,
//     },
//     truckCategoryContainer: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     truckCategoryCard: {
//       flex: 1,
//       paddingVertical: 24,
//       borderRadius: 12,
//       alignItems: 'center',
//       borderWidth: 2,
//     },
//     truckCategoryText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginTop: 8,
//     },
//     counterContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: 20,
//       marginTop: 12,
//     },
//     counterButton: {
//       width: 48,
//       height: 48,
//       borderRadius: 24,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderWidth: 1,
//     },
//     counterValue: {
//       width: 80,
//       height: 48,
//       borderRadius: 12,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     counterText: {
//       fontSize: 20,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//     },
//     dateTimeInput: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       paddingVertical: 14,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//       gap: 12,
//     },
//     dateTimeText: {
//       flex: 1,
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     notesInput: {
//       borderRadius: 12,
//       paddingHorizontal: 16,
//       paddingVertical: 14,
//       fontSize: 15,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       borderWidth: 1,
//       borderColor: isDarkMode ? dark55 : '#E0E0E0',
//       minHeight: 120,
//     },
//     reviewCard: {
//       padding: 16,
//       borderRadius: 12,
//       marginBottom: 12,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 1 },
//       shadowOpacity: 0.05,
//       shadowRadius: 4,
//       elevation: 2,
//     },
//     reviewHeader: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 16,
//       paddingBottom: 12,
//       borderBottomWidth: 1,
//       borderBottomColor: isDarkMode ? dark55 : '#E0E0E0',
//     },
//     reviewHeaderText: {
//       fontSize: 16,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginLeft: 12,
//     },
//     reviewRow: {
//       flexDirection: 'row',
//       marginBottom: 10,
//     },
//     reviewLabel: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       width: 100,
//     },
//     reviewValue: {
//       flex: 1,
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     estimateCard: {
//       padding: 20,
//       borderRadius: 12,
//       alignItems: 'center',
//       marginBottom: 12,
//     },
//     estimateLabel: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       marginBottom: 8,
//     },
//     estimateValue: {
//       fontSize: 24,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       marginBottom: 6,
//     },
//     estimateNote: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       fontStyle: 'italic',
//     },
//     termsContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       padding: 16,
//       borderRadius: 12,
//       marginBottom: 80,
//       gap: 12,
//     },
//     termsText: {
//       flex: 1,
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       lineHeight: 18,
//     },
//     footer: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingHorizontal: 20,
//       paddingVertical: 10,
//       paddingBottom: 30,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: -2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 10,
//     },
//     footerButtons: {
//       flexDirection: 'row',
//       gap: 12,
//     },
//     backButtonFooter: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       paddingVertical: 10,
//       borderRadius: 12,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     backButtonText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//     },
//     nextButton: {
//       flex: 1,
//       backgroundColor: App_Primary_color,
//       paddingVertical: 10,
//       borderRadius: 12,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: 8,
//       shadowColor: App_Primary_color,
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.3,
//       shadowRadius: 8,
//       elevation: 8,
//     },
//     nextButtonText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: white,
//     },
//   });

//   return (
//      <>
//     <KeyboardAvoidingView 
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <StatusBar 
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
//         backgroundColor={isDarkMode ? dark33 : white} 
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerTop}>
//           <TouchableOpacity 
//             style={styles.backButton}
//             activeOpacity={0.7}
//             onPress={handleBack}
//           >
//             <Ionicons 
//               name="chevron-back" 
//               size={24} 
//               color={isDarkMode ? white : '#000'} 
//             />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Create Booking</Text>
//         </View>

//         {/* Stepper */}
//         <Stepper />
//       </View>

//       {/* Step Content */}
//       <ScrollView 
//         style={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {renderStepContent()}
//         <View style={{height:100}}/>
//       </ScrollView>

//       {/* Footer with Navigation Buttons */}
    
//     </KeyboardAvoidingView>
//       <View style={styles.footer}>
//         <View style={styles.footerButtons}>
//           <TouchableOpacity 
//             style={styles.backButtonFooter}
//             activeOpacity={0.7}
//             onPress={handleBack}
//           >
//             <Text style={styles.backButtonText}>
//               {currentStep === 1 ? 'Cancel' : 'Back'}
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.nextButton}
//             activeOpacity={0.8}
//             onPress={currentStep === 5 ? handleSubmit : handleNext}
//           >
//             <Text style={styles.nextButtonText}>
//               {currentStep === 5 ? 'Submit Booking' : 'Next'}
//             </Text>
//             {currentStep < 5 && (
//               <Feather name="chevron-right" size={20} color={white} />
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//      </>
//   );
// };

// export default CreateBookingScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
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

const BookTruckScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  // States
  const [fromCity, setFromCity] = useState('Mumbai');
  const [toCity, setToCity] = useState('Surat');
  const [materialType, setMaterialType] = useState('Furniture');
  const [weight, setWeight] = useState('18');
  const [selectedTruckType, setSelectedTruckType] = useState('32 Feet Multi Axle');
  
  // Modal states
  const [showMaterialModal, setShowMaterialModal] = useState(false);
  const [showFromCityModal, setShowFromCityModal] = useState(false);
  const [showToCityModal, setShowToCityModal] = useState(false);

  // Data
  const materialTypes = [
    'Furniture',
    'Electronics',
    'Textiles',
    'Construction Material',
    'Food Items',
    'Machinery',
    'Chemicals',
    'Agricultural Products',
    'Medical Supplies',
    'General Goods',
  ];

  const cities = [
    'Mumbai',
    'Surat',
    'Delhi',
    'Pune',
    'Bangalore',
    'Ahmedabad',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Jaipur',
    'Lucknow',
    'Indore',
    'Nagpur',
    'Vadodara',
    'Rajkot',
  ];

  const openTrucks = [
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

  const closedTrucks = [
    '32 Feet Single Axle',
    '32 Feet Single Axle High Cube',
    '32 Feet Multi Axle',
    '32 Feet Multi Axle High Cube',
    '32 Feet Triple Axle',
    '20 Feet Closed',
    '22 Feet Closed',
    '24 Feet Closed',
  ];

  const handleBook = () => {
    console.log({
      from: fromCity,
      to: toCity,
      materialType,
      weight,
      truckType: selectedTruckType,
    });
    // Navigate to next screen or make API call
  };

  // Reusable Modal Component
  const SelectionModal = ({ visible, onClose, data, selectedValue, onSelect, title }) => (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}
          onStartShouldSetResponder={() => true}
        >
          <View style={[
            styles.modalHeader,
            { borderBottomColor: isDarkMode ? dark55 : '#F0F0F0' }
          ]}>
            <Text style={[
              styles.modalTitle,
              { color: isDarkMode ? white : '#000' }
            ]}>
              {title}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
              <Ionicons name="close" size={24} color={isDarkMode ? white : '#000'} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.modalItem,
                  selectedValue === item && {
                    backgroundColor: App_Primary_color + '15',
                    borderColor: App_Primary_color,
                  }
                ]}
                activeOpacity={0.7}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={[
                  styles.modalItemText,
                  { color: isDarkMode ? white : '#000' },
                  selectedValue === item && { color: App_Primary_color, fontFamily: FONTS_FAMILY.Poppins_SemiBold }
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
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
      marginRight: 12,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    scrollContent: {
      padding: 10,
    },
    card: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 10,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    locationRow: {
      flexDirection: 'row',
      gap: 16,
    },
    locationCard: {
      flex: 1,
    },
    locationLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginBottom: 3,
    },
    locationButton: {
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isDarkMode ? dark55 : '#E0E0E0',
    },
    locationText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    detailsRow: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 10,
    },
    detailCard: {
      flex: 1,
    },
    detailLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      marginBottom: 0,
    },
    materialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isDarkMode ? dark55 : '#E0E0E0',
      gap: 8,
    },
    materialButtonText: {
      flex: 1,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    weightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      paddingHorizontal: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isDarkMode ? dark55 : '#E0E0E0',
    },
    weightInput: {
      flex: 1,
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
      paddingVertical: 10,
    },
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      gap: 8,
    },
    sectionTitleText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    truckGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    truckButton: {
      paddingHorizontal: 13,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: isDarkMode ? dark55 : '#DDD',
      backgroundColor: isDarkMode ? darkMode25 : white,
    },
    truckButtonSelected: {
      backgroundColor: App_Primary_color,
      borderColor: App_Primary_color,
    },
    truckButtonText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: isDarkMode ? white : '#000',
    },
    truckButtonTextSelected: {
      color: white,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    bookButton: {
      backgroundColor: App_Primary_color,
      paddingVertical: 10,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: App_Primary_color,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
      marginTop: 8,
      marginHorizontal:20
    },
    bookButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: white,
    },
    // Modal Styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalContainer: {
      width: '100%',
      maxHeight: '80%',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 10,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
    },
    modalTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    modalCloseButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      maxHeight: 400,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    modalItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 10,
      marginVertical: 4,
      borderWidth: 1,
      borderColor: 'transparent',
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={isDarkMode ? white : '#000'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book truck</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* From/To Card */}
        <View style={styles.card}>
          <View style={styles.locationRow}>
            <View style={styles.locationCard}>
              <Text style={styles.locationLabel}>From</Text>
              <TouchableOpacity
                style={styles.locationButton}
                activeOpacity={0.7}
                onPress={() => setShowFromCityModal(true)}
              >
                <Text style={styles.locationText}>{fromCity}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.locationCard}>
              <Text style={styles.locationLabel}>To</Text>
              <TouchableOpacity
                style={styles.locationButton}
                activeOpacity={0.7}
                onPress={() => setShowToCityModal(true)}
              >
                <Text style={styles.locationText}>{toCity}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Material Type and Weight */}
          <View style={styles.detailsRow}>
            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Material type</Text>
              <TouchableOpacity
                style={styles.materialButton}
                activeOpacity={0.7}
                onPress={() => setShowMaterialModal(true)}
              >
                <MaterialCommunityIcons
                  name="package-variant"
                  size={20}
                  color={isDarkMode ? '#999' : '#666'}
                />
                <Text style={styles.materialButtonText}>{materialType}</Text>
                <Ionicons
                  name="chevron-down"
                  size={18}
                  color={isDarkMode ? '#999' : '#666'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Ton(MT)</Text>
              <View style={styles.weightContainer}>
                <TextInput
                  style={styles.weightInput}
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
                  placeholder="18"
                  placeholderTextColor={isDarkMode ? '#666' : '#999'}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Open Trucks */}
        <View style={styles.card}>
          <View style={styles.sectionTitle}>
            <MaterialCommunityIcons
              name="truck-outline"
              size={20}
              color={isDarkMode ? white : '#000'}
            />
            <Text style={styles.sectionTitleText}>Open</Text>
          </View>
          <View style={styles.truckGrid}>
            {openTrucks.map((truck, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.truckButton,
                  selectedTruckType === truck && styles.truckButtonSelected
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedTruckType(truck)}
              >
                <Text style={[
                  styles.truckButtonText,
                  selectedTruckType === truck && styles.truckButtonTextSelected
                ]}>
                  {truck}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Closed Trucks */}
        <View style={styles.card}>
          <View style={styles.sectionTitle}>
            <MaterialCommunityIcons
              name="truck-cargo-container"
              size={20}
              color={isDarkMode ? white : '#000'}
            />
            <Text style={styles.sectionTitleText}>Closed</Text>
          </View>
          <View style={styles.truckGrid}>
            {closedTrucks.map((truck, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.truckButton,
                  selectedTruckType === truck && styles.truckButtonSelected
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedTruckType(truck)}
              >
                <Text style={[
                  styles.truckButtonText,
                  selectedTruckType === truck && styles.truckButtonTextSelected
                ]}>
                  {truck}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Book Button */}
        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
          onPress={handleBook}
        >
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modals */}
      <SelectionModal
        visible={showMaterialModal}
        onClose={() => setShowMaterialModal(false)}
        data={materialTypes}
        selectedValue={materialType}
        onSelect={setMaterialType}
        title="Select Material Type"
      />

      <SelectionModal
        visible={showFromCityModal}
        onClose={() => setShowFromCityModal(false)}
        data={cities}
        selectedValue={fromCity}
        onSelect={setFromCity}
        title="Select From City"
      />

      <SelectionModal
        visible={showToCityModal}
        onClose={() => setShowToCityModal(false)}
        data={cities}
        selectedValue={toCity}
        onSelect={setToCity}
        title="Select To City"
      />
    </View>
  );
};

export default BookTruckScreen;