// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   ScrollView,
//   Pressable,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import {
//   App_Primary_color,
//   dark33,
//   dark55,
//   darkMode25,
//   white,
// } from '../../common/Colors/colors';
// import { useSelector } from 'react-redux';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width, height } = Dimensions.get('window');

// const FilterModal = ({ visible, onClose, users, selectedUsers, onApplyFilter, onReset }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const [slideAnim] = useState(new Animated.Value(width));
//   const [tempSelectedUsers, setTempSelectedUsers] = useState([]);

//   useEffect(() => {
//     if (visible) {
//       setTempSelectedUsers(selectedUsers);
//       Animated.spring(slideAnim, {
//         toValue: 0,
//         useNativeDriver: true,
//         tension: 65,
//         friction: 10,
//       }).start();
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: width,
//         duration: 250,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [visible]);

//   const toggleUser = (userName) => {
//     if (tempSelectedUsers.includes(userName)) {
//       setTempSelectedUsers(tempSelectedUsers.filter(u => u !== userName));
//     } else {
//       setTempSelectedUsers([...tempSelectedUsers, userName]);
//     }
//   };

//   const handleApply = () => {
//     onApplyFilter(tempSelectedUsers);
//     onClose();
//   };

//   const handleReset = () => {
//     setTempSelectedUsers([]);
//     onReset();
//   };

//   const CustomCheckbox = ({ checked, onPress, label }) => (
//     <TouchableOpacity
//       style={styles.checkboxContainer}
//       activeOpacity={0.7}
//       onPress={onPress}
//     >
//       <View style={[
//         styles.checkbox,
//         {
//           backgroundColor: checked
//             ? App_Primary_color
//             : (isDarkMode ? darkMode25 : white),
//           borderColor: checked
//             ? App_Primary_color
//             : (isDarkMode ? dark55 : '#DDD'),
//         }
//       ]}>
//         {checked && (
//           <MaterialCommunityIcons
//             name="check"
//             size={16}
//             color={white}
//           />
//         )}
//       </View>
//       <Text style={[
//         styles.checkboxLabel,
//         { color: isDarkMode ? white : '#000' }
//       ]}>
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );

//   if (!visible) return null;

//   return (
//     <Modal
//       transparent
//       visible={true}
//       animationType="none"
//       onRequestClose={onClose}
//     >
//       <Pressable style={styles.overlay} onPress={onClose}>
//         <Animated.View
//           style={[
//             styles.modalContainer,
//             {
//               backgroundColor: isDarkMode ? dark33 : white,
//               transform: [{ translateX: slideAnim }],
//             },
//           ]}
//           onStartShouldSetResponder={() => true}
//         >
//           {/* Header */}
//           <View style={[
//             styles.header,
//             { borderBottomColor: isDarkMode ? dark55 : '#F0F0F0' }
//           ]}>
//             <Text style={[
//               styles.headerTitle,
//               { color: isDarkMode ? white : '#000' }
//             ]}>
//               Filter
//             </Text>
//             <TouchableOpacity
//               onPress={onClose}
//               style={styles.closeButton}
//               activeOpacity={0.7}
//             >
//               <Ionicons
//                 name="close"
//                 size={24}
//                 color={isDarkMode ? white : '#000'}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Content */}
//           <ScrollView
//             style={styles.content}
//             showsVerticalScrollIndicator={false}
//           >
//             {/* Users Section */}
//             <View style={styles.section}>
//               <View style={styles.sectionHeader}>
//                 <Text style={[
//                   styles.sectionTitle,
//                   { color: isDarkMode ? white : '#000' }
//                 ]}>
//                   Users
//                 </Text>
//                 <View style={[
//                   styles.countBadge,
//                   { backgroundColor: App_Primary_color + '20' }
//                 ]}>
//                   <Text style={[
//                     styles.countText,
//                     { color: App_Primary_color }
//                   ]}>
//                     {tempSelectedUsers.length}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.usersList}>
//                 {users.map((user, index) => (
//                   <CustomCheckbox
//                     key={index}
//                     checked={tempSelectedUsers.includes(user)}
//                     onPress={() => toggleUser(user)}
//                     label={user}
//                   />
//                 ))}
//               </View>
//             </View>

         
           
//           </ScrollView>

//           {/* Footer Buttons */}
//           <View style={[
//             styles.footer,
//             { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }
//           ]}>
//             <TouchableOpacity
//               style={[
//                 styles.resetButton,
//                 {
//                   backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//                   borderColor: isDarkMode ? dark55 : '#DDD',
//                 }
//               ]}
//               activeOpacity={0.7}
//               onPress={handleReset}
//             >
//               <Text style={[
//                 styles.resetButtonText,
//                 { color: isDarkMode ? white : '#000' }
//               ]}>
//                 Reset
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.applyButton}
//               activeOpacity={0.8}
//               onPress={handleApply}
//             >
//               <Text style={styles.applyButtonText}>Apply</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </Pressable>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     position: 'absolute',
//     right: 0,
//     width: width,
//     height: height,
//     shadowColor: '#000',
//     shadowOffset: { width: -2, height: 0 },
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingBottom: 15,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   closeButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   section: {
//     paddingVertical: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   countBadge: {
//     marginLeft: 8,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   countText: {
//     fontSize: 12,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   usersList: {
//     gap: 4,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   checkbox: {
//     width: 22,
//     height: 22,
//     borderRadius: 6,
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   checkboxLabel: {
//     fontSize: 14,
//     fontFamily: FONTS_FAMILY.Poppins_Regular,
//     flex: 1,
//   },
//   footer: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderTopWidth: 1,
//     gap: 12,
//     bottom:40
//   },
//   resetButton: {
//     flex: 1,
//     paddingVertical: 8,
//     borderRadius: 12,
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   resetButtonText: {
//     fontSize: 14,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//   },
//   applyButton: {
//     flex: 1,
//     paddingVertical: 8,
//     borderRadius: 12,
//     backgroundColor: App_Primary_color,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: App_Primary_color,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   applyButtonText: {
//     fontSize: 14,
//     fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     color: white,
//   },
// });

// export default FilterModal;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  dark55,
  darkMode25,
  white,
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const FilterModal = ({ 
  visible, 
  onClose, 
  users, 
  selectedUsers, 
  truckTypes = [],
  selectedTruckTypes = [],
  onApplyFilter, 
  onReset 
}) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [slideAnim] = useState(new Animated.Value(width));
  const [tempSelectedUsers, setTempSelectedUsers] = useState([]);
  const [tempSelectedTruckTypes, setTempSelectedTruckTypes] = useState([]);
  const [activeTab, setActiveTab] = useState('users'); // 'users' or 'truckType'

  useEffect(() => {
    if (visible) {
      setTempSelectedUsers(selectedUsers);
      setTempSelectedTruckTypes(selectedTruckTypes);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 10,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const toggleUser = (userName) => {
    if (tempSelectedUsers.includes(userName)) {
      setTempSelectedUsers(tempSelectedUsers.filter(u => u !== userName));
    } else {
      setTempSelectedUsers([...tempSelectedUsers, userName]);
    }
  };

  const toggleTruckType = (truckType) => {
    if (tempSelectedTruckTypes.includes(truckType)) {
      setTempSelectedTruckTypes(tempSelectedTruckTypes.filter(t => t !== truckType));
    } else {
      setTempSelectedTruckTypes([...tempSelectedTruckTypes, truckType]);
    }
  };

  const handleApply = () => {
    onApplyFilter({
      users: tempSelectedUsers,
      truckTypes: tempSelectedTruckTypes
    });
    onClose();
  };

  const handleReset = () => {
    setTempSelectedUsers([]);
    setTempSelectedTruckTypes([]);
    onReset();
  };

  const CustomCheckbox = ({ checked, onPress, label }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[
        styles.checkbox,
        {
          backgroundColor: checked
            ? App_Primary_color
            : (isDarkMode ? darkMode25 : white),
          borderColor: checked
            ? App_Primary_color
            : (isDarkMode ? dark55 : '#DDD'),
        }
      ]}>
        {checked && (
          <MaterialCommunityIcons
            name="check"
            size={16}
            color={white}
          />
        )}
      </View>
      <Text style={[
        styles.checkboxLabel,
        { color: isDarkMode ? white : '#000' }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              backgroundColor: isDarkMode ? dark33 : white,
              transform: [{ translateX: slideAnim }],
            },
          ]}
          onStartShouldSetResponder={() => true}
        >
          {/* Header */}
          <View style={[
            styles.header,
            { borderBottomColor: isDarkMode ? dark55 : '#F0F0F0' }
          ]}>
            <Text style={[
              styles.headerTitle,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Filter
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <Ionicons
                name="close"
                size={24}
                color={isDarkMode ? white : '#000'}
              />
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'users' && styles.activeTab,
                { borderBottomColor: activeTab === 'users' ? App_Primary_color : 'transparent' }
              ]}
              onPress={() => setActiveTab('users')}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.tabText,
                { color: activeTab === 'users' ? App_Primary_color : (isDarkMode ? '#999' : '#666') }
              ]}>
                Users
              </Text>
              {tempSelectedUsers.length > 0 && (
                <View style={[
                  styles.tabBadge,
                  { backgroundColor: App_Primary_color }
                ]}>
                  <Text style={styles.tabBadgeText}>
                    {tempSelectedUsers.length}
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'truckType' && styles.activeTab,
                { borderBottomColor: activeTab === 'truckType' ? App_Primary_color : 'transparent' }
              ]}
              onPress={() => setActiveTab('truckType')}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.tabText,
                { color: activeTab === 'truckType' ? App_Primary_color : (isDarkMode ? '#999' : '#666') }
              ]}>
                Truck type
              </Text>
              {tempSelectedTruckTypes.length > 0 && (
                <View style={[
                  styles.tabBadge,
                  { backgroundColor: App_Primary_color }
                ]}>
                  <Text style={styles.tabBadgeText}>
                    {tempSelectedTruckTypes.length}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {activeTab === 'users' ? (
              /* Users Section */
              <View style={styles.section}>
                <View style={styles.usersList}>
                  {users.map((user, index) => (
                    <CustomCheckbox
                      key={index}
                      checked={tempSelectedUsers.includes(user)}
                      onPress={() => toggleUser(user)}
                      label={user}
                    />
                  ))}
                </View>
              </View>
            ) : (
              /* Truck Types Section */
              <View style={styles.section}>
                <View style={styles.usersList}>
                  {truckTypes.map((truckType, index) => (
                    <CustomCheckbox
                      key={index}
                      checked={tempSelectedTruckTypes.includes(truckType)}
                      onPress={() => toggleTruckType(truckType)}
                      label={truckType}
                    />
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          {/* Footer Buttons */}
          <View style={[
            styles.footer,
            { borderTopColor: isDarkMode ? dark55 : '#F0F0F0' }
          ]}>
            <TouchableOpacity
              style={[
                styles.resetButton,
                {
                  backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
                  borderColor: isDarkMode ? dark55 : '#DDD',
                }
              ]}
              activeOpacity={0.7}
              onPress={handleReset}
            >
              <Text style={[
                styles.resetButtonText,
                { color: isDarkMode ? white : '#000' }
              ]}>
                Reset
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applyButton}
              activeOpacity={0.8}
              onPress={handleApply}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    right: 0,
    width: width,
    height: height,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    // paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 4,
    borderBottomWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  activeTab: {
    // Border color set inline
  },
  tabText: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  tabBadge: {
    minWidth: 18,
    height: 15,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  tabBadgeText: {
    color: white,
    fontSize: 10,
    fontFamily: FONTS_FAMILY.Poppins_Bold,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    paddingVertical: 20,
  },
  usersList: {
    gap: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxLabel: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    gap: 12,
    bottom: 40,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  applyButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: App_Primary_color,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: App_Primary_color,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  applyButtonText: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    color: white,
  },
});

export default FilterModal;