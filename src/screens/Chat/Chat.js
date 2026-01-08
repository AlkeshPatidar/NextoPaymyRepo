// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TextInput,
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
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const ChatScreen = ({ navigation, route }) => {
//   const { isDarkMode } = useSelector(state => state.theme);
//   const scrollViewRef = useRef();
//   const [message, setMessage] = useState('');

//   // Mock chat data
//   const [chatMessages] = useState([
//     {
//       id: '1',
//       type: 'booking-header',
//       bookingId: '6745901',
//       vehicleNumber: 'KA567476',
//       vehicleType: 'MXL',
//       price: '18000',
//       ton: '7',
//       materialType: 'Furniture',
//       driver: '7038215559',
//       confirmedBy: 'V',
//       date: '26th November 2025',
//     },
//     {
//       id: '2',
//       type: 'message',
//       sender: 'Cloudtruck',
//       time: '11:33 AM',
//       title: 'Loading Memo:',
//       content: '#6745901 Pandharpur - Pune 32 Ft MXL - KA567476',
//       hasDownload: true,
//       downloadText: 'Download now',
//       date: '26th November 2025',
//     },
//     {
//       id: '3',
//       type: 'truck-available',
//       sender: 'Cloudtruck',
//       time: '06:23 PM',
//       bookingId: '6853917',
//       route: 'Hyderabad - Hindupur',
//       vehicleType: '32 Ft MXL',
//       vehicleNumber: 'TN88AY4627',
//       price: '39600',
//       ton: '19',
//       materialType: 'Carton Box',
//       driver: '6382887114',
//       hasConfirmButton: true,
//       date: '2nd December 2025',
//     },
//   ]);

//   useEffect(() => {
//     // Scroll to bottom when component mounts
//     setTimeout(() => {
//       scrollViewRef.current?.scrollToEnd({ animated: true });
//     }, 100);
//   }, []);

//   const BookingHeader = ({ data }) => (
//     <View style={[styles.bookingHeader, { backgroundColor: isDarkMode ? dark33 : white }]}>
//       <Text style={[styles.vehicleTitle, { color: isDarkMode ? white : '#000' }]}>
//         {data.vehicleType} - {data.vehicleNumber}
//       </Text>
      
//       <View style={styles.bookingDetailRow}>
//         <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//           Price:{' '}
//         </Text>
//         <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//           {data.price} Ton: {data.ton}
//         </Text>
//       </View>

//       <View style={styles.bookingDetailRow}>
//         <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//           Material Type:{' '}
//         </Text>
//         <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//           {data.materialType}
//         </Text>
//       </View>

//       <View style={styles.bookingDetailRow}>
//         <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//           Driver:{' '}
//         </Text>
//         <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//           {data.driver}
//         </Text>
//       </View>

//       <View style={styles.divider} />

//       <View style={styles.confirmedContainer}>
//         <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
//         <Text style={styles.confirmedText}>
//           Booking confirmed by {data.confirmedBy}
//         </Text>
//       </View>
//     </View>
//   );

//   const MessageCard = ({ data }) => (
//     <View style={styles.messageContainer}>
//       {data.date && (
//         <View style={styles.dateContainer}>
//           <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
//             {data.date}
//           </Text>
//         </View>
//       )}
      
//       <View style={[styles.messageCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.messageHeader}>
//           <View style={styles.senderInfo}>
//             <View style={styles.senderAvatar}>
//               <MaterialCommunityIcons name="truck-fast" size={20} color={App_Primary_color} />
//             </View>
//             <View>
//               <Text style={[styles.senderName, { color: isDarkMode ? white : '#000' }]}>
//                 {data.sender}
//               </Text>
//               <Text style={[styles.messageTime, { color: isDarkMode ? '#999' : '#666' }]}>
//                 {data.time}
//               </Text>
//             </View>
//           </View>
//         </View>

//         {data.title && (
//           <Text style={[styles.messageTitle, { color: isDarkMode ? white : '#000' }]}>
//             {data.title}
//           </Text>
//         )}

//         <Text style={[styles.messageContent, { color: isDarkMode ? white : '#000' }]}>
//           {data.content}
//         </Text>

//         {data.hasDownload && (
//           <TouchableOpacity style={styles.downloadContainer} activeOpacity={0.7}>
//             <Text style={[styles.downloadLabel, { color: isDarkMode ? white : '#000' }]}>
//               PDF:{' '}
//             </Text>
//             <Ionicons name="link" size={16} color={App_Primary_color} />
//             <Text style={styles.downloadText}>{data.downloadText}</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );

//   const TruckAvailableCard = ({ data }) => (
//     <View style={styles.messageContainer}>
//       {data.date && (
//         <View style={styles.dateContainer}>
//           <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
//             {data.date}
//           </Text>
//         </View>
//       )}
      
//       <View style={[styles.messageCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
//         <View style={styles.messageHeader}>
//           <View style={styles.senderInfo}>
//             <View style={styles.senderAvatar}>
//               <MaterialCommunityIcons name="truck-fast" size={20} color={App_Primary_color} />
//             </View>
//             <View>
//               <Text style={[styles.senderName, { color: isDarkMode ? white : '#000' }]}>
//                 {data.sender}
//               </Text>
//               <Text style={[styles.messageTime, { color: isDarkMode ? '#999' : '#666' }]}>
//                 {data.time}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <Text style={[styles.truckAvailableTitle, { color: isDarkMode ? white : '#000' }]}>
//           Truck Available
//         </Text>

//         <Text style={[styles.truckDetails, { color: isDarkMode ? white : '#000' }]}>
//           #{data.bookingId} {data.route} {data.vehicleType} - {data.vehicleNumber}
//         </Text>

//         <View style={styles.truckInfoRow}>
//           <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//             Price:{' '}
//           </Text>
//           <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//             {data.price} Ton: {data.ton}
//           </Text>
//         </View>

//         <View style={styles.truckInfoRow}>
//           <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//             Material Type:{' '}
//           </Text>
//           <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//             {data.materialType}
//           </Text>
//         </View>

//         <View style={styles.truckInfoRow}>
//           <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
//             Driver:{' '}
//           </Text>
//           <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
//             {data.driver}
//           </Text>
//         </View>

//         {data.hasConfirmButton && (
//           <TouchableOpacity 
//             style={styles.confirmButton}
//             activeOpacity={0.8}
//           >
//             <MaterialCommunityIcons name="truck-check" size={20} color={App_Primary_color} />
//             <Text style={styles.confirmButtonText}>Confirm booking</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );

//   const renderMessage = (item) => {
//     switch (item.type) {
//       case 'booking-header':
//         return <BookingHeader key={item.id} data={item} />;
//       case 'message':
//         return <MessageCard key={item.id} data={item} />;
//       case 'truck-available':
//         return <TruckAvailableCard key={item.id} data={item} />;
//       default:
//         return null;
//     }
//   };

//   const handleSend = () => {
//     if (message.trim()) {
//       console.log('Sending message:', message);
//       setMessage('');
//     }
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//     },
//     header: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       paddingTop: 30,
//       paddingBottom: 10,
//       paddingHorizontal: 10,
//       flexDirection: 'row',
//       alignItems: 'center',
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 5,
//     },
//     backButton: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginRight: 12,
//     },
//     headerTitle: {
//       fontSize: 18,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: isDarkMode ? white : '#000',
//       flex: 1,
//     },
//     scrollContent: {
//       paddingHorizontal: 10,
//       paddingTop: 20,
//       paddingBottom: 20,
//     },
//     bookingHeader: {
//       padding: 10,
//       borderRadius: 12,
//       marginBottom: 16,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//     },
//     vehicleTitle: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginBottom: 0,
//     },
//     bookingDetailRow: {
//       flexDirection: 'row',
//       marginBottom: 8,
//     },
//     bookingLabel: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     bookingValue: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     divider: {
//       height: 1,
//       backgroundColor: isDarkMode ? dark55 : '#E0E0E0',
//       marginVertical: 12,
//     },
//     confirmedContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 6,
//     },
//     confirmedText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: '#4CAF50',
//     },
//     messageContainer: {
//       marginBottom: 10,
//     },
//     dateContainer: {
//       alignItems: 'center',
//       marginBottom: 12,
//     },
//     dateText: {
//       fontSize: 12,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     messageCard: {
//       padding: 10,
//       borderRadius: 12,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 3,
//     },
//     messageHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 12,
//     },
//     senderInfo: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 10,
//     },
//     senderAvatar: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: App_Primary_color + '20',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     senderName: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     messageTime: {
//       fontSize: 11,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     messageTitle: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginBottom: 8,
//     },
//     messageContent: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       lineHeight: 20,
//     },
//     downloadContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginTop: 12,
//       gap: 4,
//     },
//     downloadLabel: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//     },
//     downloadText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//       color: App_Primary_color,
//     },
//     truckAvailableTitle: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       marginBottom: 8,
//     },
//     truckDetails: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       lineHeight: 20,
//       marginBottom: 12,
//     },
//     truckInfoRow: {
//       flexDirection: 'row',
//       marginBottom: 8,
//     },
//     confirmButton: {
//       backgroundColor: '#E3F2FD',
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 12,
//       borderRadius: 10,
//       marginTop: 12,
//       gap: 8,
//     },
//     confirmButtonText: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: App_Primary_color,
//     },
//     inputContainer: {
//       backgroundColor: isDarkMode ? dark33 : white,
//       // paddingHorizontal: 20,
//       paddingVertical: 6,
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 12,
//       borderTopWidth: 1,
//       borderTopColor: isDarkMode ? dark55 : '#E0E0E0',
//       marginBottom:30

//     },
//     attachButton: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     inputWrapper: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
//       borderRadius: 20,
//       // paddingHorizontal: 16,
//       paddingVertical: 8,
//     },
//     input: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? white : '#000',
//       maxHeight: 100,
//     },
//     sendButton: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: App_Primary_color,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   });

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' :'padding'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
//     >
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={isDarkMode ? dark33 : white}
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           activeOpacity={0.7}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons
//             name="arrow-back"
//             size={24}
//             color={isDarkMode ? white : '#000'}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Chat</Text>
//       </View>

//       {/* Messages */}
//       <ScrollView
//         ref={scrollViewRef}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {chatMessages.map((item) => renderMessage(item))}
//            {/* Input Area */}
//       <View style={styles.inputContainer}>
//         <TouchableOpacity style={styles.attachButton} activeOpacity={0.7}>
//           <Ionicons
//             name="attach"
//             size={24}
//             color={isDarkMode ? white : '#000'}
//           />
//         </TouchableOpacity>
        
//         <View style={styles.inputWrapper}>
//           <TextInput
//             style={styles.input}
//             placeholder="Type a message..."
//             placeholderTextColor={isDarkMode ? '#666' : '#999'}
//             value={message}
//             onChangeText={setMessage}
//             multiline
//           />
//         </View>

//         <TouchableOpacity
//           style={styles.sendButton}
//           activeOpacity={0.7}
//           onPress={handleSend}
//         >
//           <Ionicons name="send" size={20} color={white} />
//         </TouchableOpacity>
//       </View>
//       <View style={{height:50}}/>
//       </ScrollView>

   
//     </KeyboardAvoidingView>
//   );
// };

// export default ChatScreen;

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard
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
import useKeyboardStatus from '../../utils/KeyBoardHook'

const ChatScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const scrollViewRef = useRef();
  const [message, setMessage] = useState('');
  const {isKeyboardOpen}=useKeyboardStatus()

  // Mock chat data
  const [chatMessages] = useState([
    {
      id: '1',
      type: 'booking-header',
      bookingId: '6745901',
      vehicleNumber: 'KA567476',
      vehicleType: 'MXL',
      price: '18000',
      ton: '7',
      materialType: 'Furniture',
      driver: '7038215559',
      confirmedBy: 'V',
      date: '26th November 2025',
    },
    {
      id: '2',
      type: 'message',
      sender: 'Cloudtruck',
      time: '11:33 AM',
      title: 'Loading Memo:',
      content: '#6745901 Pandharpur - Pune 32 Ft MXL - KA567476',
      hasDownload: true,
      downloadText: 'Download now',
      date: '26th November 2025',
    },
    {
      id: '3',
      type: 'truck-available',
      sender: 'Cloudtruck',
      time: '06:23 PM',
      bookingId: '6853917',
      route: 'Hyderabad - Hindupur',
      vehicleType: '32 Ft MXL',
      vehicleNumber: 'TN88AY4627',
      price: '39600',
      ton: '19',
      materialType: 'Carton Box',
      driver: '6382887114',
      hasConfirmButton: true,
      date: '2nd December 2025',
    },
  ]);

  useEffect(() => {
    // Scroll to bottom when component mounts
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, []);

  const BookingHeader = ({ data }) => (
    <View style={[styles.bookingHeader, { backgroundColor: isDarkMode ? dark33 : white }]}>
      <Text style={[styles.vehicleTitle, { color: isDarkMode ? white : '#000' }]}>
        {data.vehicleType} - {data.vehicleNumber}
      </Text>
      
      <View style={styles.bookingDetailRow}>
        <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
          Price:{' '}
        </Text>
        <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
          {data.price} Ton: {data.ton}
        </Text>
      </View>

      <View style={styles.bookingDetailRow}>
        <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
          Material Type:{' '}
        </Text>
        <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
          {data.materialType}
        </Text>
      </View>

      <View style={styles.bookingDetailRow}>
        <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
          Driver:{' '}
        </Text>
        <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
          {data.driver}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.confirmedContainer}>
        <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
        <Text style={styles.confirmedText}>
          Booking confirmed by {data.confirmedBy}
        </Text>
      </View>
    </View>
  );

  const MessageCard = ({ data }) => (
    <View style={styles.messageContainer}>
      {data.date && (
        <View style={styles.dateContainer}>
          <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
            {data.date}
          </Text>
        </View>
      )}
      
      <View style={[styles.messageCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
        <View style={styles.messageHeader}>
          <View style={styles.senderInfo}>
            <View style={styles.senderAvatar}>
              <MaterialCommunityIcons name="truck-fast" size={20} color={App_Primary_color} />
            </View>
            <View>
              <Text style={[styles.senderName, { color: isDarkMode ? white : '#000' }]}>
                {data.sender}
              </Text>
              <Text style={[styles.messageTime, { color: isDarkMode ? '#999' : '#666' }]}>
                {data.time}
              </Text>
            </View>
          </View>
        </View>

        {data.title && (
          <Text style={[styles.messageTitle, { color: isDarkMode ? white : '#000' }]}>
            {data.title}
          </Text>
        )}

        <Text style={[styles.messageContent, { color: isDarkMode ? white : '#000' }]}>
          {data.content}
        </Text>

        {data.hasDownload && (
          <TouchableOpacity style={styles.downloadContainer} activeOpacity={0.7}>
            <Text style={[styles.downloadLabel, { color: isDarkMode ? white : '#000' }]}>
              PDF:{' '}
            </Text>
            <Ionicons name="link" size={16} color={App_Primary_color} />
            <Text style={styles.downloadText}>{data.downloadText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const TruckAvailableCard = ({ data }) => (
    <View style={styles.messageContainer}>
      {data.date && (
        <View style={styles.dateContainer}>
          <Text style={[styles.dateText, { color: isDarkMode ? '#999' : '#666' }]}>
            {data.date}
          </Text>
        </View>
      )}
      
      <View style={[styles.messageCard, { backgroundColor: isDarkMode ? dark33 : white }]}>
        <View style={styles.messageHeader}>
          <View style={styles.senderInfo}>
            <View style={styles.senderAvatar}>
              <MaterialCommunityIcons name="truck-fast" size={20} color={App_Primary_color} />
            </View>
            <View>
              <Text style={[styles.senderName, { color: isDarkMode ? white : '#000' }]}>
                {data.sender}
              </Text>
              <Text style={[styles.messageTime, { color: isDarkMode ? '#999' : '#666' }]}>
                {data.time}
              </Text>
            </View>
          </View>
        </View>

        <Text style={[styles.truckAvailableTitle, { color: isDarkMode ? white : '#000' }]}>
          Truck Available
        </Text>

        <Text style={[styles.truckDetails, { color: isDarkMode ? white : '#000' }]}>
          #{data.bookingId} {data.route} {data.vehicleType} - {data.vehicleNumber}
        </Text>

        <View style={styles.truckInfoRow}>
          <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
            Price:{' '}
          </Text>
          <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
            {data.price} Ton: {data.ton}
          </Text>
        </View>

        <View style={styles.truckInfoRow}>
          <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
            Material Type:{' '}
          </Text>
          <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
            {data.materialType}
          </Text>
        </View>

        <View style={styles.truckInfoRow}>
          <Text style={[styles.bookingLabel, { color: isDarkMode ? white : '#000' }]}>
            Driver:{' '}
          </Text>
          <Text style={[styles.bookingValue, { color: isDarkMode ? white : '#000' }]}>
            {data.driver}
          </Text>
        </View>

        {data.hasConfirmButton && (
          <TouchableOpacity 
            style={styles.confirmButton}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="truck-check" size={20} color={App_Primary_color} />
            <Text style={styles.confirmButtonText}>Confirm booking</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderMessage = (item) => {
    switch (item.type) {
      case 'booking-header':
        return <BookingHeader key={item.id} data={item} />;
      case 'message':
        return <MessageCard key={item.id} data={item} />;
      case 'truck-available':
        return <TruckAvailableCard key={item.id} data={item} />;
      default:
        return null;
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 50,
      paddingBottom: 10,
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
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 10,
      paddingTop: 20,
      paddingBottom: 20,
    },
    bookingHeader: {
      padding: 10,
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    vehicleTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginBottom: 0,
    },
    bookingDetailRow: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    bookingLabel: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    bookingValue: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    divider: {
      height: 1,
      backgroundColor: isDarkMode ? dark55 : '#E0E0E0',
      marginVertical: 12,
    },
    confirmedContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    confirmedText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#4CAF50',
    },
    messageContainer: {
      marginBottom: 10,
    },
    dateContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },
    dateText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    messageCard: {
      padding: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    messageHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    senderInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    senderAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: App_Primary_color + '20',
      justifyContent: 'center',
      alignItems: 'center',
    },
    senderName: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    messageTime: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    messageTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginBottom: 8,
    },
    messageContent: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      lineHeight: 20,
    },
    downloadContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
      gap: 4,
    },
    downloadLabel: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    downloadText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
    },
    truckAvailableTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      marginBottom: 8,
    },
    truckDetails: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      lineHeight: 20,
      marginBottom: 12,
    },
    truckInfoRow: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    confirmButton: {
      backgroundColor: '#E3F2FD',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 12,
      gap: 8,
    },
    confirmButtonText: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
    },
    inputContainer: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingHorizontal: 10,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? dark55 : '#E0E0E0',
      justifyContent:'center',
      bottom: 30,

    },
    attachButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputWrapper: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 8,
      maxHeight: 100,
      // justifyContent:'center'
    },
    input: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? white : '#000',
    },
    sendButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
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
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDarkMode ? white : '#000'}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

      {/* Messages ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {chatMessages.map((item) => renderMessage(item))}
      </ScrollView>

      {/* Input Area - Fixed at bottom */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton} activeOpacity={0.7}>
          <Ionicons
            name="attach"
            size={24}
            color={isDarkMode ? white : '#000'}
          />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor={isDarkMode ? '#666' : '#999'}
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>

        <TouchableOpacity
          style={styles.sendButton}
          activeOpacity={0.7}
          onPress={handleSend}
        >
          <Ionicons name="send" size={20} color={white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;