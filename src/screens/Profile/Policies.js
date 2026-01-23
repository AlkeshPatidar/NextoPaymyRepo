import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  white
} from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PoliciesScreen = ({ navigation }) => {
  const policies = [
    { 
      id: 1, 
      title: 'About Nextopay', 
      icon: 'information-circle',
      iconType: 'ionicons',
      bgColor: App_Primary_color
    },
    { 
      id: 2, 
      title: 'Grivance', 
      icon: 'file-document-outline',
      iconType: 'material',
      bgColor: '#1A1A1A'
    },
    { 
      id: 3, 
      title: 'Privacy policy', 
      icon: 'file-document-outline',
      iconType: 'material',
      bgColor: '#1A1A1A'
    },
    { 
      id: 4, 
      title: 'Terms & conditions', 
      icon: 'information-circle-outline',
      iconType: 'ionicons',
      bgColor: '#1A1A1A'
    },
    { 
      id: 5, 
      title: 'Open Source Licenses', 
      icon: 'phone-portrait-outline',
      iconType: 'ionicons',
      bgColor: '#1A1A1A'
    },
  ];

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
    policyList: {
      paddingHorizontal: 10,
      paddingTop: 30,
      paddingBottom: 10,
    },
    policyCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      padding: 10,
      borderRadius: 10,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    policyTitle: {
      fontSize: 16,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
      flex: 1,
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

          <Text style={styles.headerTitle}>Policies</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.policyList}
      >
        {policies.map((policy) => (
          <TouchableOpacity
            key={policy.id}
            style={styles.policyCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('PolicyDetailScreen', { policy: policy.title })}
          >
            <View style={[styles.iconContainer, { backgroundColor: policy.bgColor }]}>
              {policy.iconType === 'ionicons' ? (
                <Ionicons name={policy.icon} size={26} color={white} />
              ) : (
                <MaterialCommunityIcons name={policy.icon} size={26} color={white} />
              )}
            </View>
            <Text style={styles.policyTitle}>{policy.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PoliciesScreen;