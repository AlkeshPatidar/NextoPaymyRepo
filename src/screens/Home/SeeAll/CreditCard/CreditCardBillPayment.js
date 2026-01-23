import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
    ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../../../assets/Fonts';
import { App_Primary_color, white } from '../../../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IMG from '../../../../assets/Images';

const CreditCardBillPayment = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [cardNumber, setCardNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [viewAmount, setViewAmount] = useState(false);

    // Step 1: Link Credit Card
    const renderStep1 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Link Your Credit Card</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Credit Card Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter 16-digit card number"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        maxLength={16}
                        value={cardNumber}
                        onChangeText={setCardNumber}
                    />
                </View>

                <TouchableOpacity
                    style={[styles.confirmButton, !cardNumber && styles.confirmButtonDisabled]}
                    activeOpacity={0.8}
                    disabled={!cardNumber}
                    onPress={() => setCurrentStep(2)}
                >
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 2: Add Card Details
    const renderStep2 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Add New Credit Card</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Credit Card Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter card number"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={cardNumber}
                        editable={false}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Mobile Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter mobile number"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>

                <View style={styles.errorBox}>
                    <Ionicons name="close-circle" size={16} color="#FF3B30" />
                    <Text style={styles.errorText}>Enter correct card number</Text>
                </View>

                <TouchableOpacity
                    style={styles.confirmButton}
                    activeOpacity={0.8}
                    onPress={() => setCurrentStep(3)}
                >
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 3: Pay Bill
    const renderStep3 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Pay Credit Card Bill</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Credit Card Number</Text>
                    <TextInput
                        style={styles.input}
                        value={`XXXXXXXXXXXX${cardNumber.slice(-4)}`}
                        editable={false}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.toggleRow}>
                        <Text style={styles.inputLabel}>View amount</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setViewAmount(!viewAmount)}
                        >
                            <View style={[styles.toggleTrack, viewAmount && styles.toggleTrackActive]}>
                                <View style={[styles.toggleThumb, viewAmount && styles.toggleThumbActive]} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {viewAmount && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter amount"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={setAmount}
                        />
                    </View>
                )}

                <TouchableOpacity
                    style={styles.confirmButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('PaymentScreen', {
                        type: 'Credit Card Bill',
                        amount: amount,
                        cardNumber: cardNumber
                    })}
                >
                    <Text style={styles.confirmButtonText}>Proceed to Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F3FF',
        },
        headerBg: {
            height: 90,
            paddingTop: 35,
        },
        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
        },
        headerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            flex: 1,
        },
        backButton: {
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTitle: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: App_Primary_color,
        },
        logoBox: {
            backgroundColor: '#FF9500',
            borderRadius: 6,
            padding: 6,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoText: {
            color: white,
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
        },
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        stepContainer: {
            flex: 1,
            padding: 16,
            paddingTop: 0,
        },
        card: {
            backgroundColor: white,
            borderRadius: 10,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3,
        },
        cardTitle: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 20,
        },
        inputContainer: {
            marginBottom: 16,
        },
        inputLabel: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#666',
            marginBottom: 8,
        },
        input: {
            backgroundColor: '#F8F8F8',
            borderRadius: 8,
            paddingHorizontal: 14,
            paddingVertical: 12,
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            borderWidth: 1,
            borderColor: '#E8E8E8',
        },
        errorBox: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF5F5',
            padding: 10,
            borderRadius: 6,
            marginBottom: 16,
            gap: 8,
            borderWidth: 1,
            borderColor: '#FFDDDD',
        },
        errorText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#FF3B30',
        },
        toggleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        toggleTrack: {
            width: 44,
            height: 24,
            borderRadius: 12,
            backgroundColor: '#E0E0E0',
            justifyContent: 'center',
            padding: 2,
        },
        toggleTrackActive: {
            backgroundColor: App_Primary_color,
        },
        toggleThumb: {
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: white,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
        },
        toggleThumbActive: {
            alignSelf: 'flex-end',
        },
        confirmButton: {
            backgroundColor: App_Primary_color,
            paddingVertical: 13,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 8,
        },
        confirmButtonDisabled: {
            backgroundColor: '#D0D0D0',
        },
        confirmButtonText: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

            {/* Header */}
            <ImageBackground source={IMG.HeaderBg} style={styles.headerBg}>
                <View style={styles.headerContent}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={() => {
                                if (currentStep > 1) {
                                    setCurrentStep(currentStep - 1);
                                } else {
                                    navigation.goBack();
                                }
                            }}
                        >
                            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>
                            {currentStep === 1 && 'Add New Credit Card'}
                            {currentStep === 2 && 'Add New Credit Card'}
                            {currentStep === 3 && 'Pay Credit Card Bill'}
                        </Text>
                    </View>

                    <View style={styles.logoBox}>
                        <Text style={styles.logoText}>B</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
            </ScrollView>
        </View>
    );
};

export default CreditCardBillPayment;