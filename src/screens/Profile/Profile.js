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
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import IMG from '../../assets/Images';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);

  const policies = [
    { id: 1, title: ' Policies', icon: 'shield-checkmark-outline', navigation:'PoliciesScreen' },
    // { id: 2, title: 'Terms & Conditions', icon: 'document-text-outline' },
    // { id: 3, title: 'Refund Policy', icon: 'cash-outline' },
    // { id: 4, title: 'About Us', icon: 'information-circle-outline' },
    // { id: 5, title: 'Contact Us', icon: 'call-outline' },
    // { id: 6, title: 'Help & Support', icon: 'help-circle-outline' },
  ];

  const PolicyCard = ({ item }) => (
    <TouchableOpacity
      style={styles.policyCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate(item.navigation, { policy: item.title })}
    >
      <View style={styles.policyLeft}>
        <View style={styles.policyIconContainer}>
          <Ionicons name={item.icon} size={22} color="#6B4CE6" />
        </View>
        <Text style={styles.policyTitle}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e2dfee',
    },
    headerGradient: {
      paddingTop: 35,
      paddingBottom: 50,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      marginHorizontal: 10,
    },
    editButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileSection: {
      alignItems: 'center',
      marginTop: -100,
      paddingHorizontal: 20,
      zIndex:100000
    },
    profileImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: white,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginBottom: 15,
      position: 'relative',
      marginTop: 100
    },
    profileImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: '#E0E0E0',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'

    },
    cameraButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: App_Primary_color,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: white,
    },
    personalDetailsCard: {
      backgroundColor: white,
      borderRadius: 9,
      padding: 16,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      marginHorizontal: 10,
    },
    cardHeader: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom: 12,
      gap: 8
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
    },
    editIconButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#F5F3FF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailRow: {
      marginBottom: 8,
    },
    detailLabel: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      marginBottom: 2,
    },
    detailValue: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
    qrCodeContainer: {
      alignItems: 'center',
      // marginTop: 10,
    },
    qrCode: {
      width: 80,
      height: 80,
      backgroundColor: '#E0E0E0',
      borderRadius: 8,
      alignItems: 'center',
    },
    paymentMethodsCard: {
      backgroundColor: white,
      borderRadius: 9,
      padding: 16,
      marginTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      marginHorizontal: 10,
    },
    paymentRow: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 12,
    },
    paymentCard: {
      flex: 1,
      backgroundColor: '#F5F3FF',
      borderRadius: 12,
      padding: 12,
      alignItems: 'center',
    },
    paymentType: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
      marginBottom: 4,
    },
    cardNumber: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#999',
      marginBottom: 8,
    },
    upiId: {
      fontSize: 10,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: App_Primary_color,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      backgroundColor: white,
      borderWidth: 1.5,
      borderColor: App_Primary_color,
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 16,
    },
    addButtonText: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
    },
    paymentSettingsCard: {
      backgroundColor: white,
      borderRadius: 9,
      padding: 16,
      marginTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
      marginHorizontal: 10,
    },
    settingsRow: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 12,
    },
    settingCard: {
      flex: 1,
      borderWidth: 1.5,
      borderColor: '#E0E0E0',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      borderStyle: 'dashed',
    },
    settingIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#F5F3FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    settingTitle: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
      textAlign: 'center',
    },
    policiesSection: {
      marginTop: 15,
      marginHorizontal: 20,
      marginBottom: 30,
    },
    policiesTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#1A1A1A',
      marginBottom: 12,
    },
    policyCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: white,
      padding: 14,
      borderRadius: 9,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    policyLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    policyIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#F5F3FF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    policyTitle: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6B4CE6" />

      {/* Header with Gradient */}
      {/* <LinearGradient
        colors={[App_Primary_color, App_Primary_color, '#E5D1FB']}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      > */}
        {/* <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={white} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('EditProfileScreen')}
          >
            <Ionicons name="create-outline" size={22} color={white} />
          </TouchableOpacity>
        </View> */}
      {/* </LinearGradient> */}

      <ImageBackground
      source={IMG.HeaderBg}
      style={{height:100,paddingTop:35,paddingHorizontal:20, }}
      ></ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Image Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Ionicons name="person" size={50} color="#999" />
            </View>
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7}>
              <Ionicons name="camera" size={16} color={white} />
            </TouchableOpacity>
          </View>


        </View>

        {/* Personal Details Card */}
        <View style={styles.personalDetailsCard}>
          <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
            <View>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Personal Details</Text>
                <TouchableOpacity style={styles.editIconButton} activeOpacity={0.7}
                onPress={()=>navigation.navigate('EditProfileScreen')}
                >
                  <Ionicons name="create-outline" size={16} color="#6B4CE6" />
                </TouchableOpacity>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailValue}>Wade Warren</Text>
                <Text style={styles.detailLabel}>(704) 555-0127</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.qrCodeContainer}
            onPress={()=>navigation.navigate('MyQRScreen')}
            >
              <View style={styles.qrCode}>
                {/* QR Code Image */}
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-XfloVOFHoB2WGQ5PlckGPhjjsqcCO1I-A&s'}}
                style={{width:'100%',height:'100%'}}
                />
                <Text style={{...styles.detailValue, bottom:10}}>My QR</Text>
              </View>
            </TouchableOpacity>
          </View>




        </View>

        {/* Payment Methods Card */}
        <View style={styles.paymentMethodsCard}>
          <Text style={styles.cardTitle}>Payment Methods</Text>

          <View style={styles.paymentRow}>
            {/* Debit Card */}
            <View style={styles.paymentCard}>
              <Text style={styles.paymentType}>Debit Card</Text>
              <Text style={styles.cardNumber}>**** **** **** 1234</Text>
              <View style={styles.addButton}>
                <Ionicons name="add" size={16} color="#6B4CE6" />
                <Text style={styles.addButtonText}>ADD</Text>
              </View>
            </View>

            {/* UPI */}
            <View style={styles.paymentCard}>
              <Text style={styles.paymentType}>UPI</Text>
              <Text style={styles.upiId}>xyz@paytm@paytm</Text>
              <View style={styles.addButton}>
                <Ionicons name="add" size={16} color="#6B4CE6" />
                <Text style={styles.addButtonText}>ADD</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Settings Card */}
        <View style={styles.paymentSettingsCard}>
          <Text style={styles.cardTitle}>Payment Settings</Text>

          <View style={styles.settingsRow}>
            {/* My Wallet */}
            <TouchableOpacity
              style={styles.settingCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('MyWalletScreen')}
            >
              <View style={styles.settingIcon}>
                <Ionicons name="wallet-outline" size={24} color="#6B4CE6" />
              </View>
              <Text style={styles.settingTitle}>My Wallet</Text>
            </TouchableOpacity>

            {/* Manage Bank Account */}
            <TouchableOpacity
              style={styles.settingCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ManageBankScreen')}
            >
              <View style={styles.settingIcon}>
                <Ionicons name="person-outline" size={24} color="#6B4CE6" />
              </View>
              <Text style={styles.settingTitle}>Manage Bank Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Policies Section */}
        <View style={styles.policiesSection}>
          <Text style={styles.policiesTitle}>More Information</Text>
          {policies.map((policy) => (
            <PolicyCard key={policy.id} item={policy} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;