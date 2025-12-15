

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, dark33, dark55, darkMode25, white } from '../../common/Colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import CustomInputField from '../../components/wrapper/CustomInput';
import { ToastMsg } from '../../utils/helperFunctions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IMG from '../../assets/Images';

// Company Type Dropdown Options
const companyTypes = [
  'Transporter',
  'Logistics Provider',
  'Fleet Owner',
  'Individual Truck Owner',
  'Freight Broker',
  'Other'
];

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [gst, setGst] = useState('');
  const [address, setAddress] = useState('');
  
  // Error states
  const [nameError, setNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [companyTypeError, setCompanyTypeError] = useState('');
  const [gstError, setGstError] = useState('');
  const [addressError, setAddressError] = useState('');

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

  // Validation Functions
  const validateName = (value) => {
    if (!value.trim()) {
      return 'Name is required';
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return 'Name should contain only letters';
    }
    return '';
  };

  const validateCompanyName = (value) => {
    if (!value.trim()) {
      return 'Company name is required';
    }
    if (value.trim().length < 3) {
      return 'Company name must be at least 3 characters';
    }
    return '';
  };

  const validateCompanyType = (value) => {
    if (!value.trim()) {
      return 'Please select company type';
    }
    return '';
  };

  const validateGST = (value) => {
    // GST is optional, so only validate if provided
    if (value.trim() === '') {
      return ''; // No error if empty
    }
    
    // GST format: 2 digits state code + 10 chars PAN + 1 digit entity + 1 alphabet + 1 digit checksum
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    
    if (value.length !== 15) {
      return 'GST number must be 15 characters';
    }
    
    if (!gstRegex.test(value.toUpperCase())) {
      return 'Invalid GST number format';
    }
    
    return '';
  };

  const validateAddress = (value) => {
    if (!value.trim()) {
      return 'Address is required';
    }
    if (value.trim().length < 10) {
      return 'Please enter complete address (min 10 characters)';
    }
    return '';
  };

  const onSubmit = () => {
    // Clear all errors first
    setNameError('');
    setCompanyNameError('');
    setCompanyTypeError('');
    setGstError('');
    setAddressError('');

    // Validate all fields
    const nameErr = validateName(name);
    const companyNameErr = validateCompanyName(companyName);
    const companyTypeErr = validateCompanyType(companyType);
    const gstErr = validateGST(gst);
    const addressErr = validateAddress(address);

    // Set errors
    // if (nameErr) setNameError(nameErr);
    // if (companyNameErr) setCompanyNameError(companyNameErr);
    // if (companyTypeErr) setCompanyTypeError(companyTypeErr);
    if (gstErr) setGstError(gstErr);
    // if (addressErr) setAddressError(addressErr);

    // If any error exists, stop submission
    // if (nameErr || companyNameErr || companyTypeErr || gstErr || addressErr) {
    //   ToastMsg('Please fix all errors before submitting');
    //   return;
    // }

    // All validations passed
    ToastMsg('Profile saved successfully!');
    console.log('Form Data:', {
      name,
      companyName,
      companyType,
      gst: gst || 'Not Provided',
      address
    });

    // Navigate to next screen or dashboard
    navigation.replace('Tab');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#ffffff',
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      // marginTop: 150,
      paddingBottom: 100,
    },
    title: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? 'white' : '#666',
      lineHeight: 24,
      marginBottom: 40,
    },
    inputContainer: {
      gap: 10,
    },
    errorText: {
      color: '#FF3B30',
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      marginTop: -6,
      marginBottom: 6,
      marginLeft: 4,
    },
    optionalLabel: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#999',
      marginTop: -6,
      marginBottom: 6,
      marginLeft: 4,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: isDarkMode ? darkMode25 : '#ffffff',
      paddingHorizontal: 20,
      // paddingVertical: 20,
      // paddingBottom: 40,
    },
    signupButton: {
      backgroundColor: App_Primary_color,
      borderRadius: 25,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom: 16,
    },
    signupButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    },
    loginRedirect: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? 'white' : '#666',
    },
    loginLink: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: App_Primary_color,
      marginLeft: 4,
    },
  });

  const floatingTranslate = floatingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : "dark-content"} 
        backgroundColor={isDarkMode ? darkMode25 : "#ffffff"} 
      />

      <ScrollView 
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Content with Animations */}
        <Image source={IMG.AppLogo}
        style={{
          height:45,
          width:200,
          alignSelf:'center',
          marginTop:90,
        }}
        />
        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          <Animated.View
            style={{
              transform: [{ translateY: titleSlide }],
            }}
          >
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Fill in your business details to get started with truck bookings
            </Text>
          </Animated.View>

          {/* Input Fields with Fade Animation */}
          <Animated.View
            style={[
              styles.inputContainer,
              {
                opacity: inputFade,
              }
            ]}
          >
            {/* Name Field */}
            {/* <CustomInputField
              label={'Name'}
              placeholder={'Enter your full name'}
              onChangeText={(text) => {
                setName(text);
                if (nameError) setNameError('');
              }}
              value={name}
            />
            {nameError ? (
              <Text style={styles.errorText}>{nameError}</Text>
            ) : null} */}

            {/* Company Name Field */}
            {/* <CustomInputField
              label={'Company Name'}
              placeholder={'Enter company name'}
              onChangeText={(text) => {
                setCompanyName(text);
                if (companyNameError) setCompanyNameError('');
              }}
              value={companyName}
            />
            {companyNameError ? (
              <Text style={styles.errorText}>{companyNameError}</Text>
            ) : null} */}

            {/* Company Type Field - You can implement dropdown here */}
            {/* <CustomInputField
              label={'Company Type'}
              placeholder={'Select company type'}
              onChangeText={(text) => {
                setCompanyType(text);
                if (companyTypeError) setCompanyTypeError('');
              }}
              value={companyType}
            />
            {companyTypeError ? (
              <Text style={styles.errorText}>{companyTypeError}</Text>
            ) : null} */}
            {/* <Text style={styles.optionalLabel}>
              e.g., Transporter, Fleet Owner, Logistics Provider
            </Text> */}

            {/* GST Field (Optional) */}
            <CustomInputField
              label={'GST Number'}
              placeholder={'Enter GST number'}
              // onChangeText={(text) => {
              //   setGst(text.toUpperCase());
              //   if (gstError) setGstError('');
              // }}
              // value={gst}
              // maxLength={15}
            />
            {gstError ? (
              <Text style={styles.errorText}>{gstError}</Text>
            ) : null}

            {/* Address Field */}
            {/* <CustomInputField
              label={'Address'}
              placeholder={'Enter complete business address'}
              onChangeText={(text) => {
                setAddress(text);
                if (addressError) setAddressError('');
              }}
              value={address}
              multiline={true}
              numberOfLines={3}
            />
            {addressError ? (
              <Text style={styles.errorText}>{addressError}</Text>
            ) : null} */}
          </Animated.View>
        </Animated.View>
        <View style={{height: 100}}/> 
      </ScrollView>

      {/* Save Profile Button - Fixed at bottom with Animation */}
      <Animated.View 
        style={[
          styles.buttonContainer,
          {
            transform: [
              { scale: buttonScale },
              { translateY: floatingTranslate }
            ],
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.signupButton}
          onPress={onSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.signupButtonText}>Submit</Text>
        </TouchableOpacity>
        
   
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Signup;