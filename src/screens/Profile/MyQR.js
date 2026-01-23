import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  white
} from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import IMG from '../../assets/Images';

const MyQRScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e2dfee',
    },
    headerGradient: {
      paddingTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: white,
      flex: 1,
      textAlign: 'center',
      marginRight: 40,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 40,
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 25,
    },
    logo: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#6B4CE6',
      marginRight: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoIcon: {
      fontSize: 36,
      color: white,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    logoText: {
      fontSize: 36,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#1A1A1A',
    },
    paymentMethodsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 25,
      gap: 40,
    },
    paymentMethodItem: {
      alignItems: 'center',
    },
    bhimText: {
      fontSize: 32,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#FF6B35',
      letterSpacing: 2,
    },
    upiText: {
      fontSize: 32,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: '#FF6B35',
      letterSpacing: 2,
    },
    paymentSubtext: {
      fontSize: 8,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    qrCodeCard: {
      backgroundColor: white,
      borderRadius: 16,
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 5,
      marginBottom: 35,
    },
    qrCodeImage: {
      width: 280,
      height: 280,
      backgroundColor: '#fff',
    },
    payWithText: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 30,
      letterSpacing: 2,
    },
    appsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 25,
      paddingHorizontal: 20,
      maxWidth: 400,
    },
    appItem: {
      alignItems: 'center',
      width: 90,
    },
    appLogoContainer: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: white,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    appName: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#666',
      textAlign: 'center',
    },
  });

  return (
    <ImageBackground source={IMG.Qrscreen}
    style={{flex:1}}
    >

    </ImageBackground>
  );
};

export default MyQRScreen;