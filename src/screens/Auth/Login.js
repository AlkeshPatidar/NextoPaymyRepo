


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
    bottom:step === 1? 30:10,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
      //  paddingVertical: 20,
    // paddingTop: 10,
    // paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: App_Primary_color,
    borderRadius: 25,
    height: 45,
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
              <View style={{ gap: 6 }}>
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
                        height: 48,
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



export default Login;