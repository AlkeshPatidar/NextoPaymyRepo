import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
  App_Primary_color,
  white
} from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ElectricBiller = ({ navigation }) => {
  const [selectedProvider, setSelectedProvider] = useState('');

  const providers = [
    {
      id: 1,
      name: 'Ajmer Vidyut Vitran Nigam Ltd.',
      logo: 'https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg',
    },
    {
      id: 2,
      name: 'BESL Bharatpur Electricity Services Ltd.',
      logo: 'https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg',
    },
    {
      id: 3,
      name: 'Bikaner Electricity Supply Limited (BkESL)',
      logo: 'https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg',
    },
    {
      id: 4,
      name: 'Jaipur Vidyut Vitran Nigam Ltd.',
      logo: 'https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg',
    },
    {
      id: 5,
      name: 'Jodhpur vidyut Vitran Nigam Ltd.',
      logo: 'https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg',
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
    providerList: {
      paddingHorizontal: 20,
      paddingTop: 20,
    //   paddingBottom: 20,
    // backgroundColor:'white',
    // marginHorizontal:30
    },
    providerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: white,
      padding: 4,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      borderBottomWidth:1,
      borderColor:'#F0F0F0',
      gap:7
    //   elevation: 3,
    },
    providerCardSelected: {
      borderWidth: 2,
      borderColor: App_Primary_color,
      backgroundColor: '#F5F3FF',
    },
    logoContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: white,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 14,
      borderWidth: 1,
      borderColor: '#F0F0F0',
    },
    providerLogo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
    providerName: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: '#1A1A1A',
      flex: 1,
    },
    radioOuter: {
      width: 22,
      height: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioOuterSelected: {
      borderColor: App_Primary_color,
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: App_Primary_color,
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

          <Text style={styles.headerTitle}>Electricity</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.providerList}
      >
        <View
        style={{backgroundColor:'white',borderRadius:9,padding:16, elevation:2}}
        >
        {providers.map((provider) => (
          <TouchableOpacity
            key={provider.id}
            style={[
              styles.providerCard,
              selectedProvider === provider.name && styles.providerCardSelected,
            ]}
            activeOpacity={0.7}
            onPress={() => {
              setSelectedProvider(provider.name);
              // Navigate or handle selection
              setTimeout(() => {
                navigation.navigate('EnterBillDetail');
              }, 300);
            }}
          >
            {/* <View style={styles.logoContainer}> */}
              <Image
                source={{ uri:provider.logo }}
                style={styles.providerLogo}
              />
            {/* </View> */}
            <Text style={styles.providerName}>{provider.name}</Text>
            {/* <View
              style={[
                styles.radioOuter,
                selectedProvider === provider.name && styles.radioOuterSelected,
              ]}
            >
              {selectedProvider === provider.name && (
                <View style={styles.radioInner} />
              )}
            </View> */}
          </TouchableOpacity>
        ))}


        </View>
      </ScrollView>
    </View>
  );
};

export default ElectricBiller;