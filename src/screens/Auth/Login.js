

// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Modal,
//   FlatList,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Animated,
//   Easing,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import { App_Primary_color, dark33, dark55, darkMode25, white } from '../../common/Colors/colors';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomInputField from '../../components/wrapper/CustomInput';
// import useLoader from '../../utils/LoaderHook';
// import { inValidEmail, inValidPassword } from '../../utils/CheckValidation';
// import { ToastMsg } from '../../utils/helperFunctions';
// import urls from '../../config/urls';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { apiPost, getItem, setItem } from '../../utils/Apis';
// import { setUser } from '../../redux/reducer/user';
// import CustomText from '../../components/TextComponent';
// import { showToast } from '../../components/Tooltips/SuccessToolTip';

// // Country data with flags
// const countries = [
//   { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
//   { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
//   { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
//   { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
//   { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
//   { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
// ];

// const Login = ({ navigation }) => {
//   const [loginMethod, setLoginMethod] = useState('mobile');
//   const [selectedCountry, setSelectedCountry] = useState(countries[2]);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [showCountryPicker, setShowCountryPicker] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { showLoader, hideLoader } = useLoader();
//   const dispatch = useDispatch();
//   const { isDarkMode } = useSelector(state => state.theme);

//   // Animation values
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(50)).current;
//   const titleSlide = useRef(new Animated.Value(-30)).current;
//   const tabSlide = useRef(new Animated.Value(30)).current;
//   const inputFade = useRef(new Animated.Value(0)).current;
//   const buttonScale = useRef(new Animated.Value(0.8)).current;
//   const floatingAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Initial entrance animations
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//         easing: Easing.out(Easing.cubic),
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//         easing: Easing.out(Easing.back(1.2)),
//       }),
//       Animated.timing(titleSlide, {
//         toValue: 0,
//         duration: 600,
//         delay: 200,
//         useNativeDriver: true,
//         easing: Easing.out(Easing.cubic),
//       }),
//       Animated.timing(tabSlide, {
//         toValue: 0,
//         duration: 700,
//         delay: 300,
//         useNativeDriver: true,
//         easing: Easing.out(Easing.cubic),
//       }),
//       Animated.timing(inputFade, {
//         toValue: 1,
//         duration: 800,
//         delay: 400,
//         useNativeDriver: true,
//       }),
//       Animated.spring(buttonScale, {
//         toValue: 1,
//         delay: 500,
//         friction: 4,
//         tension: 40,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Continuous floating animation
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(floatingAnim, {
//           toValue: 1,
//           duration: 2000,
//           easing: Easing.inOut(Easing.sin),
//           useNativeDriver: true,
//         }),
//         Animated.timing(floatingAnim, {
//           toValue: 0,
//           duration: 2000,
//           easing: Easing.inOut(Easing.sin),
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setShowCountryPicker(false);
//   };

//   const handleTabSwitch = (method) => {
//     // Animate tab switch
//     Animated.sequence([
//       Animated.timing(inputFade, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(inputFade, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       }),
//     ]).start();
    
//     setLoginMethod(method);
//   };

//   const onSubmit = async () => {
//     if (loginMethod === 'email') {
//       const emailError = inValidEmail(email);
//       if (emailError) {
//         ToastMsg(emailError);
//         return;
//       }
//       const passwordError = inValidPassword(password);
//       if (passwordError) {
//         ToastMsg(passwordError);
//         return;
//       }
//       try {
//         showLoader();
//         const data = { email: email, password: password };
//         const response = await apiPost(urls?.login, data);
//         console.log('response Of Login', response);

//         if (response?.statusCode === 200) {
//           if (response?.data?.token) {
//             await setItem('token', response?.data?.token);
//             const token = await getItem('token');
//             if (token) {
//               dispatch(setUser(JSON.stringify(response?.data?.user)));
//               navigation.replace('Tab');
//             }
//           }
//           // ToastMsg(response?.message);
//           showToast('Welcome back! Let’s get your groceries delivered.', 'success', 3000);
//           hideLoader();
//         }
//       } catch (error) {
//         hideLoader();
//         if (error?.message) {
//           ToastMsg(error?.message);
//           console.log('++++++++++++==', error);
//         } else {
//           ToastMsg('Network Error');
//         }
//       }
//     } else {
//       if (!phoneNumber.trim()) {
//         ToastMsg('Please enter phone number');
//         return;
//       }
//       const passwordError = inValidPassword(password);
//       if (passwordError) {
//         ToastMsg(passwordError);
//         return;
//       }
//       try {
//         showLoader();
//         const data = { 
//           email: phoneNumber.toString(), 
//           password: password 
//         };
//         const response = await apiPost(urls?.login, data);
        
//         if (response?.statusCode === 200) {
//           if (response?.data?.token) {
//             await setItem('token', response?.data?.token);
//             const token = await getItem('token');
//             if (token) {
//               dispatch(setUser(JSON.stringify(response?.data?.user)));
//               navigation.replace('Tab');
//             }
//           }
//           // ToastMsg(response?.message);
//           showToast('Welcome back! Let’s get your groceries delivered.', 'success', 3000);

//           hideLoader();
//         }
//       } catch (error) {
//         hideLoader();
//         if (error?.message) {
//           ToastMsg(error?.message);
//         } else {
//           ToastMsg('Network Error');
//         }
//       }
//     }
//   };

//   const renderCountryItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.countryItem}
//       onPress={() => handleCountrySelect(item)}
//     >
//       <Text style={styles.countryFlag}>{item.flag}</Text>
//       <Text style={styles.countryName}>{item.name}</Text>
//       <Text style={styles.countryCode}>{item.dialCode}</Text>
//     </TouchableOpacity>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#ffffff',
//     },
//     header: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       paddingTop: 50,
//       paddingBottom: 20,
//     },
//     scrollViewContainer: {
//       flexGrow: 1,
//     },
//     content: {
//       flex: 1,
//       paddingHorizontal: 20,
//       paddingTop: 20,
//       marginTop: 150,
//       paddingBottom: 100,
//     },
//     title: {
//       fontSize: 20,
//       fontFamily: FONTS_FAMILY.Poppins_Bold,
//       color: isDarkMode ? white : '#000',
//       marginBottom: 8,
//     },
//     subtitle: {
//       fontSize: 13,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? 'white' : '#666',
//       lineHeight: 24,
//       marginBottom: 20,
//     },
//     tabContainer: {
//       flexDirection: 'row',
//       backgroundColor: isDarkMode ? dark55 : '#F2F2F3',
//       borderRadius: 12,
//       padding: 4,
//       marginBottom: 30,
//     },
//     tab: {
//       flex: 1,
//       paddingVertical: 12,
//       alignItems: 'center',
//       borderRadius: 8,
//     },
//     activeTab: {
//       backgroundColor: App_Primary_color,
//     },
//     inactiveTab: {
//       backgroundColor: 'transparent',
//     },
//     tabText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Medium,
//     },
//     activeTabText: {
//       color: white,
//     },
//     inactiveTabText: {
//       color: isDarkMode ? white : '#666',
//     },
//     inputLabel: {
//       fontSize: 16,
//       color: isDarkMode ? 'white' : '#666',
//       marginBottom: 12,
//       fontWeight: '500',
//     },
//     phoneInputContainer: {
//       flexDirection: 'row',
//       borderColor: '#ddd',
//       borderRadius: 8,
//       backgroundColor: isDarkMode ? dark33 : '#fff',
//       marginBottom: 20,
//       height: 50,
//       gap: 10,
//     },
//     countrySelector: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 5,
//       borderRightColor: '#ddd',
//       minWidth: 100,
//       backgroundColor:isDarkMode?dark33: '#F2F2F3',
//       borderRadius: 8,
//     },
//     countryFlag: {
//       fontSize: 20,
//       marginRight: 8,
//     },
//     dialCode: {
//       fontSize: 15,
//       color: isDarkMode ? white : '#333',
//       marginRight: 8,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     dropdownArrow: {
//       fontSize: 10,
//       color: '#666',
//     },
//     phoneInput: {
//       flex: 1,
//       paddingHorizontal: 20,
//       fontSize: 15,
//       color: isDarkMode ? white : '#333',
//       backgroundColor:isDarkMode?dark33: '#F2F2F3',
//       borderRadius: 8,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//     },
//     buttonContainer: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: isDarkMode ? darkMode25 : '#ffffff',
//       paddingHorizontal: 20,
//       paddingVertical: 20,
//       paddingBottom: 70,
//     },
//     continueButton: {
//       backgroundColor: App_Primary_color,
//       borderRadius: 25,
//       height: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     continueButtonText: {
//       color: '#ffffff',
//       fontSize: 16,
//       fontWeight: '600',
//     },
//     modalContainer: {
//       flex: 1,
//       backgroundColor: isDarkMode ? darkMode25 : '#fff',
//     },
//     modalHeader: {
//       flexDirection: 'row',
//       justifyContent: 'flex-end',
//       paddingHorizontal: 20,
//       paddingVertical: 15,
//       borderBottomWidth: 1,
//       borderBottomColor: '#eee',
//     },
//     modalCloseButton: {
//       padding: 5,
//     },
//     modalCloseText: {
//       fontSize: 16,
//       color: '#4A90E2',
//       fontWeight: '600',
//     },
//     countryList: {
//       flex: 1,
//     },
//     countryItem: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       paddingVertical: 15,
//       borderBottomWidth: 1,
//       borderBottomColor: '#f0f0f0',
//     },
//     countryName: {
//       flex: 1,
//       fontSize: 16,
//       color: isDarkMode ? white : '#333',
//       marginLeft: 12,
//     },
//     countryCode: {
//       fontSize: 16,
//       color: '#666',
//     },
//     loginRedirect: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       bottom: 20,
//     },
//     loginText: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_Regular,
//       color: isDarkMode ? 'white' : '#666',
//     },
//     loginLink: {
//       fontSize: 14,
//       fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//       color: App_Primary_color,
//       marginLeft: 4,
//     },
//   });

//   const floatingTranslate = floatingAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, -10],
//   });

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <StatusBar barStyle={isDarkMode ? 'light-content' : "dark-content"} backgroundColor={isDarkMode ? darkMode25 : "#ffffff"} />

//       <ScrollView
//         contentContainerStyle={styles.scrollViewContainer}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Content with Animations */}
//         <Animated.View 
//           style={[
//             styles.content,
//             {
//               opacity: fadeAnim,
//               transform: [{ translateY: slideAnim }],
//             }
//           ]}
//         >
//           <Animated.View
//             style={{
//               transform: [{ translateY: titleSlide }],
//             }}
//           >
//             <Text style={styles.title}>Get started</Text>
//             <Text style={styles.subtitle}>
//               You can log in or make an account if you're new
//             </Text>
//           </Animated.View>

//           {/* Tab Selector with Animation */}
//           <Animated.View
//             style={{
//               transform: [{ translateY: tabSlide }],
//             }}
//           >
//             <View style={styles.tabContainer}>
//               <TouchableOpacity
//                 style={[styles.tab, loginMethod === 'mobile' ? styles.activeTab : styles.inactiveTab]}
//                 onPress={() => handleTabSwitch('mobile')}
//                 activeOpacity={0.7}
//               >
//                 <Text style={[styles.tabText, loginMethod === 'mobile' ? styles.activeTabText : styles.inactiveTabText]}>
//                   Via Mobile
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.tab, loginMethod === 'email' ? styles.activeTab : styles.inactiveTab]}
//                 onPress={() => handleTabSwitch('email')}
//                 activeOpacity={0.7}
//               >
//                 <Text style={[styles.tabText, loginMethod === 'email' ? styles.activeTabText : styles.inactiveTabText]}>
//                   Via Email
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Animated.View>

//           {/* Conditional Input Fields with Fade Animation */}
//           <Animated.View
//             style={{
//               opacity: inputFade,
//             }}
//           >
//             {loginMethod === 'email' ? (
//               <View style={{ gap: 10 }}>
//                 <CustomInputField
//                   label={'Email'}
//                   placeholder={'Enter email'}
//                   onChangeText={setEmail}
//                   value={email}
//                 />

//                 <CustomInputField
//                   label={'Password'}
//                   placeholder={'Enter Password'}
//                   icon={<AntDesign name={'eye'} color={isDarkMode ? white : 'black'} size={20} />}
//                   onChangeText={setPassword}
//                   value={password}
//                   secureTextEntry={true}
//                   isPassword
//                 />
//                 <TouchableOpacity
//                   style={{ alignSelf: 'flex-end' }}
//                   onPress={() => navigation.navigate('ForgotPassword')}
//                   activeOpacity={0.7}
//                 >
//                   <CustomText style={{
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                     color: App_Primary_color
//                   }}>
//                     Forgot Password
//                   </CustomText>
//                 </TouchableOpacity>
//               </View>
//             ) : (
//               <View style={{ gap: 10 }}>
//                 <Text style={styles.inputLabel}>Phone Number</Text>
//                 <View style={styles.phoneInputContainer}>
//                   <TouchableOpacity
//                     style={styles.countrySelector}
//                     onPress={() => setShowCountryPicker(true)}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.countryFlag}>{selectedCountry.flag}</Text>
//                     <Text style={styles.dialCode}>{selectedCountry.dialCode}</Text>
//                     <Text style={styles.dropdownArrow}>▼</Text>
//                   </TouchableOpacity>

//                   <TextInput
//                     style={styles.phoneInput}
//                     placeholder="Enter phone number"
//                     placeholderTextColor={isDarkMode ? '#999' : '#999'}
//                     keyboardType="phone-pad"
//                     value={phoneNumber}
//                     onChangeText={setPhoneNumber}
//                   />
//                 </View>

//                 <CustomInputField
//                   label={'Password'}
//                   placeholder={'Enter Password'}
//                   icon={<AntDesign name={'eye'} color={isDarkMode ? white : 'black'} size={20} />}
//                   onChangeText={setPassword}
//                   value={password}
//                   secureTextEntry={true}
//                   isPassword
//                 />
//                 <TouchableOpacity
//                   style={{ alignSelf: 'flex-end' }}
//                   onPress={() => navigation.navigate('ForgotPassword')}
//                   activeOpacity={0.7}
//                 >
//                   <CustomText style={{
//                     fontFamily: FONTS_FAMILY.Poppins_Regular,
//                     color: App_Primary_color
//                   }}>
//                     Forgot Password
//                   </CustomText>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </Animated.View>
//         </Animated.View>
//       </ScrollView>

//       {/* Continue Button with Scale Animation */}
//       <Animated.View 
//         style={[
//           styles.buttonContainer,
//           {
//             transform: [
//               { scale: buttonScale },
//               { translateY: floatingTranslate }
//             ],
//           }
//         ]}
//       >
//         <TouchableOpacity
//           style={styles.continueButton}
//           onPress={() => onSubmit()}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.continueButtonText}>Continue</Text>
//         </TouchableOpacity>
//       </Animated.View>

//       <Animated.View 
//         style={[
//           styles.loginRedirect,
//           {
//             opacity: fadeAnim,
//           }
//         ]}
//       >
//         <Text style={styles.loginText}>Don't have an account?</Text>
//         <TouchableOpacity 
//           onPress={() => navigation.navigate('Signup')}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.loginLink}>Sign up</Text>
//         </TouchableOpacity>
//       </Animated.View>

//       {/* Country Picker Modal */}
//       <Modal
//         visible={showCountryPicker}
//         animationType="slide"
//         presentationStyle="pageSheet"
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalHeader}>
//             <TouchableOpacity
//               style={styles.modalCloseButton}
//               onPress={() => setShowCountryPicker(false)}
//               activeOpacity={0.7}
//             >
//               <Text style={styles.modalCloseText}>Done</Text>
//             </TouchableOpacity>
//           </View>

//           <FlatList
//             data={countries}
//             renderItem={renderCountryItem}
//             keyExtractor={(item) => item.code}
//             style={styles.countryList}
//           />
//         </View>
//       </Modal>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Modal,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, dark33, dark55, darkMode25, white } from '../../common/Colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import IMG from '../../assets/Images';

// Country data with flags
const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
];

const Login = ({ navigation }) => {
  const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP
  const [selectedCountry, setSelectedCountry] = useState(countries[2]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [otpError, setOtpError] = useState('');
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.theme);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const titleSlide = useRef(new Animated.Value(-30)).current;
  const inputFade = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0.8)).current;
  const floatingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Initial entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.2)),
      }),
      Animated.timing(titleSlide, {
        toValue: 0,
        duration: 600,
        delay: 200,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(inputFade, {
        toValue: 1,
        duration: 800,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        delay: 500,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatingAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Reset animation when step changes
  useEffect(() => {
    Animated.sequence([
      Animated.timing(inputFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(inputFade, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [step]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryPicker(false);
  };

  const validatePhoneNumber = (number) => {
    if (!number.trim()) {
      return 'Please enter phone number';
    }
    if (number.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (!/^\d+$/.test(number)) {
      return 'Phone number must contain only digits';
    }
    return '';
  };

  const validateOTP = (otpValue) => {
    if (!otpValue || otpValue.length < 4) {
      return 'Please enter complete 4-digit OTP';
    }
    // if (otpValue !== '1234') {
    //   return 'Invalid OTP. Please enter correct OTP (1234)';
    // }
    return '';
  };

  const handleContinue = () => {
    if (step === 1) {
      const error = validatePhoneNumber(phoneNumber);
      if (error) {
        setPhoneError(error);
        return;
      }
      setPhoneError('');
      setStep(2);
    } else {
      const error = validateOTP(otp);
      if (error) {
        setOtpError(error);
        return;
      }
      setOtpError('');
      // Success - navigate to next screen
      navigation.replace('Signup');
    }
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <Text style={[styles.countryName, { color: isDarkMode ? white : '#333' }]}>{item.name}</Text>
      <Text style={styles.countryCode}>{item.dialCode}</Text>
    </TouchableOpacity>
  );

  const floatingTranslate = floatingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : "dark-content"} backgroundColor={isDarkMode ? darkMode25 : "#ffffff"} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Image source={IMG.AppLogo}
        style={{
          height:45,
          width:200,
          alignSelf:'center',
          marginTop:90,
        }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 150 ,}}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 30 }}>
              <Text style={styles.title}>
                {step === 1 ? 'Get started' : 'Verify OTP'}
              </Text>
              <Text style={styles.subtitle}>
                {step === 1 
                  ? 'You can log in or make an account if you\'re new'
                  : `We've sent a 4-digit OTP to ${selectedCountry.dialCode} ${phoneNumber}`
                }
              </Text>
            </View>

            {step === 1 ? (
              <View style={{ gap: 10 }}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <View style={styles.phoneInputContainer}>
                  <TouchableOpacity
                    style={styles.countrySelector}
                    onPress={() => setShowCountryPicker(true)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.countryFlag}>{selectedCountry.flag}</Text>
                    <Text style={styles.dialCode}>{selectedCountry.dialCode}</Text>
                    <Text style={styles.dropdownArrow}>▼</Text>
                  </TouchableOpacity>

                  <TextInput
                    style={styles.phoneInput}
                    placeholder="Enter phone number"
                    placeholderTextColor={isDarkMode ? '#999' : '#999'}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={(text) => {
                      setPhoneNumber(text);
                      if (phoneError) setPhoneError('');
                    }}
                  />
                </View>
                {phoneError ? (
                  <Text style={styles.errorText}>{phoneError}</Text>
                ) : null}
              </View>
            ) : (
              <View style={{ gap: 10 }}>
                <Text style={styles.inputLabel}>Enter OTP</Text>
                <View style={styles.otpContainer}>
                  <OtpInput
                    numberOfDigits={4}
                    focusColor={App_Primary_color}
                    focusStickBlinkingDuration={500}
                    onTextChange={(text) => {
                      setOtp(text);
                      if (otpError) setOtpError('');
                    }}
                    theme={{
                      containerStyle: { gap: 15 },
                      pinCodeContainerStyle: {
                        backgroundColor: isDarkMode ? dark33 : '#F2F2F3',
                        borderRadius: 12,
                        height: 50,
                        width: 60,
                        borderWidth: 2,
                        borderColor: isDarkMode ? dark55 : '#ddd',
                      },
                      pinCodeTextStyle: {
                        color: isDarkMode ? white : '#333',
                        fontSize: 20,
                       fontFamily:FONTS_FAMILY.Poppins_Medium,
                      },
                      focusStickStyle: {
                        backgroundColor: App_Primary_color,
                        height: 30,
                      },
                      focusedPinCodeContainerStyle: {
                        borderColor: App_Primary_color,
                      },
                    }}
                  />
                </View>
                {otpError ? (
                  <Text style={styles.errorText}>{otpError}</Text>
                ) : null}

                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>Didn't receive OTP?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Resend OTP');
                    }}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.resendLink}>Resend</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setStep(1);
                    setOtp('');
                    setOtpError('');
                  }}
                  activeOpacity={0.7}
                  style={styles.changeNumberButton}
                >
                  <Text style={styles.changeNumberText}>Change Phone Number</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>
              {step === 1 ? 'Send OTP' : 'Verify & Continue'}
            </Text>
          </TouchableOpacity>

          {/* <View style={styles.loginRedirect}>
            <Text style={styles.loginText}>Don't have an account?</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Signup')}
              activeOpacity={0.7}
            >
              <Text style={styles.loginLink}>Sign up</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </KeyboardAvoidingView>

      {/* Country Picker Modal */}
      <Modal
        visible={showCountryPicker}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowCountryPicker(false)}
              activeOpacity={0.7}
            >
              <Text style={styles.modalCloseText}>Done</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={countries}
            renderItem={renderCountryItem}
            keyExtractor={(item) => item.code}
            style={styles.countryList}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '500',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 8,
    height: 56,
    gap: 10,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    minWidth: 100,
    backgroundColor: '#F2F2F3',
    borderRadius: 8,
  },
  countryFlag: {
    fontSize: 24,
    marginRight: 8,
  },
  dialCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
    fontWeight: '500',
  },
  dropdownArrow: {
    fontSize: 10,
    color: '#666',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F2F2F3',
    borderRadius: 8,
  },
  otpContainer: {
    // marginTop: 10,
    // marginBottom: 8,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 13,
    marginTop: 4,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    fontSize: 14,
    color: App_Primary_color,
    marginLeft: 4,
    fontWeight: '600',
  },
  changeNumberButton: {
    alignSelf: 'center',
    // marginTop: 15,
  },
  changeNumberText: {
    fontSize: 14,
    color: App_Primary_color,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 10,
    // paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: App_Primary_color,
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalCloseButton: {
    padding: 5,
  },
  modalCloseText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
  },
  countryList: {
    flex: 1,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  countryName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  countryCode: {
    fontSize: 16,
    color: '#666',
  },
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: App_Primary_color,
    marginLeft: 4,
    fontWeight: '600',
  },
});

export default Login;