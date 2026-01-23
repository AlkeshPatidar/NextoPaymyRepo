import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  white
} from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e2dfee',
    },
    header: {
      backgroundColor: '#e2dfee',
      paddingTop: 35,
      paddingBottom: 20,
      paddingHorizontal: 16,
      borderBottomWidth: 3,
      borderBottomColor: App_Primary_color,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: '#4A3A7A',
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingTop: 30,
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    //   backgroundColor: white,
      borderRadius: 10,
      paddingHorizontal: 16,
    //   paddingVertical: 14,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
    //   elevation: 2,
    borderBottomWidth:1,
    },
    icon: {
      marginRight: 12,
    },
    input: {
      flex: 1,
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: '#1A1A1A',
    },
    inputPlaceholder: {
      color: '#999',
    },
    updateButton: {
      backgroundColor: App_Primary_color,
      borderRadius: 10,
      paddingVertical: 16,
      alignItems: 'center',
      marginTop: 0,
      marginHorizontal: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      bottom: 40,
    },
    updateButtonText: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: white,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e2dfee" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={20} color={App_Primary_color} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Details</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#999" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#999"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="E-mail address"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Update Button */}
      <TouchableOpacity
        style={styles.updateButton}
        activeOpacity={0.8}
        onPress={() => {
          // Handle update logic
          console.log('Update Changes');
          navigation.goBack();
        }}
      >
        <Text style={styles.updateButtonText}>Update Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;