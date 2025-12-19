import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, dark33, dark55, darkMode25, white } from '../../common/Colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import IMG from '../../assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languages = [
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
  },
  {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
  },
];

const LanguageSelection = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.theme);
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const titleSlide = useRef(new Animated.Value(-30)).current;
  const cardFade = useRef(new Animated.Value(0)).current;
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
      Animated.timing(cardFade, {
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

  const checkLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        // Language already selected, navigate to onboarding
        navigation.replace('Onboarding');
      }
    } catch (error) {
      console.log('Error checking language:', error);
    }
  };

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
  };

  const handleContinue = async () => {
    try {
      // Save selected language to AsyncStorage
      await AsyncStorage.setItem('selectedLanguage', selectedLanguage);
      
      // You can also dispatch to Redux if needed
      // dispatch(setLanguage(selectedLanguage));
      
      // Navigate to Onboarding screen
      navigation.navigate('Onboarding');
    } catch (error) {
      console.log('Error saving language:', error);
    }
  };

  const floatingTranslate = floatingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? darkMode25 : '#ffffff' }]}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkMode ? darkMode25 : '#ffffff'} 
      />

      <View style={styles.content}>
        {/* App Logo */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: titleSlide }],
            },
          ]}
        >
          <Image
            source={IMG.AppLogo}
            style={styles.logo}
          />
        </Animated.View>

        {/* Title Section */}
        <Animated.View
          style={[
            styles.titleContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={[styles.title, { color: isDarkMode ? white : '#000' }]}>
            Choose Your Language
          </Text>
          <Text style={[styles.subtitle, { color: isDarkMode ? '#999' : '#666' }]}>
            Select your preferred language to continue
          </Text>
        </Animated.View>

        {/* Language Cards */}
        <Animated.View
          style={[
            styles.languagesContainer,
            {
              opacity: cardFade,
            },
          ]}
        >
          {languages.map((language, index) => (
            <Animated.View
              key={language.id}
              style={{
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 50],
                      outputRange: [0, 50 + index * 20],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                style={[
                  styles.languageCard,
                  {
                    backgroundColor: isDarkMode ? dark33 : '#F2F2F3',
                    borderWidth: selectedLanguage === language.id ? 2 : 1,
                    borderColor: selectedLanguage === language.id 
                      ? App_Primary_color 
                      : isDarkMode ? dark55 : '#E0E0E0',
                  },
                ]}
                onPress={() => handleLanguageSelect(language.id)}
                activeOpacity={0.7}
              >
                <View style={styles.languageContent}>
                  {/* <Text style={styles.flag}>{language.flag}</Text> */}
                  <View style={styles.languageTextContainer}>
                    <Text style={[
                      styles.languageName,
                      { color: isDarkMode ? white : '#333' }
                    ]}>
                      {language.name}
                    </Text>
                    <Text style={[
                      styles.nativeName,
                      { color: isDarkMode ? '#999' : '#666' }
                    ]}>
                      {language.nativeName}
                    </Text>
                  </View>
                </View>

                {selectedLanguage === language.id && (
                  <View style={styles.checkmarkContainer}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            </Animated.View>
          ))}
        </Animated.View>

        {/* Decorative Element */}
        <Animated.View
          style={[
            styles.decorativeCircle,
            {
              transform: [{ translateY: floatingTranslate }],
            },
          ]}
        />
      </View>

      {/* Continue Button */}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: isDarkMode ? darkMode25 : '#ffffff',
            borderTopColor: isDarkMode ? dark55 : '#f0f0f0',
            transform: [{ scale: buttonScale }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    // justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    height: 45,
    width: 200,
  },
  titleContainer: {
    // marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  fontFamily:FONTS_FAMILY.Poppins_SemiBold,
    color: '#000',
    marginBottom: 8,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
  },
  languagesContainer: {
    gap: 20,
    marginTop: 30,
  },
  languageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F3',
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  flag: {
    fontSize: 40,
    marginRight: 16,
  },
  languageTextContainer: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  nativeName: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS_FAMILY.Poppins_Regular,
  },
  checkmarkContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: App_Primary_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  decorativeCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: App_Primary_color,
    opacity: 0.05,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: App_Primary_color,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
});

export default LanguageSelection;