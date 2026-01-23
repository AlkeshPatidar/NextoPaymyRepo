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
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import {
    App_Primary_color,
    white
} from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Row from '../../../../components/wrapper/row';


const BroadbandViewBill = ({ navigation, route }) => {
    const [subscriberId, setSubscriberId] = useState('');
    const providerName = route?.params?.providerName || 'Airtel Digital TV';

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
            fontSize: 18,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#4A3A7A',
        },
        contentContainer: {
            paddingHorizontal: 20,
            paddingTop: 25,
        },
        inputCard: {
            backgroundColor: white,
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        inputLabel: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 10,
        },
        input: {
            // backgroundColor: '#F9F9F9',
            borderRadius: 8,
            paddingHorizontal: 14,
            paddingVertical: 10,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            borderBottomWidth: 1,
            borderColor: '#E0E0E0',
        },
        inputPlaceholder: {
            color: '#999',
        },
        infoCard: {
            backgroundColor: white,
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
        },
        infoText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: 'black',
            // lineHeight: 18,
        },
        confirmButton: {
            backgroundColor: App_Primary_color,
            borderRadius: 10,
            paddingVertical: 10,
            alignItems: 'center',
            marginHorizontal: 60,
            marginTop: 'auto',
            marginBottom: 30,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
        },
        confirmButtonText: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
        },
        confirmButtonDisabled: {
            backgroundColor: '#CCC',
        },
    });

    const handleConfirm = () => {
        if (subscriberId.trim()) {
            // Navigate to plan selection or next screen
            navigation.navigate('PayDTHBillScreen', {
                subscriberId: subscriberId,
                provider: providerName,
            });
        }
    };

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

                    <Text style={styles.headerTitle}>{'ACT Broadband'}</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                      
                <View style={styles.contentContainer}>
                     <View style={styles.infoCard}>
                        <Row style={{gap:10}}>
                             <Ionicons name="document-text" size={20} color={'black'} />
                        <Text style={{...styles.infoText, color:App_Primary_color}}>
                            View Sample Bill          </Text>

                        </Row>
                    </View>
                    {/* Subscriber ID Input Card */}
                    <View style={styles.inputCard}>
                        {/* <Text style={styles.inputLabel}>Subscriber ID</Text> */}
                        <TextInput
                            style={styles.input}
                            placeholder="K Number"
                            placeholderTextColor="#999"
                            value={subscriberId}
                            onChangeText={setSubscriberId}
                            keyboardType="numeric"
                        />
                        <Text style={styles.infoText}>
                         Please enter a valid 12 digit k number
                        </Text>
                    </View>

                    {/* Info Card */}
                    <View style={styles.infoCard}>
                        <Text style={styles.infoText}>
                            Paying this bill allows Nextopay to fetch your current and future bills so that you can view and pay them.            </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Confirm Button */}
            <TouchableOpacity
                style={[
                    styles.confirmButton,
                    !subscriberId.trim() && styles.confirmButtonDisabled,
                ]}
                activeOpacity={0.8}
                onPress={handleConfirm}
                disabled={!subscriberId.trim()}
            >
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BroadbandViewBill;