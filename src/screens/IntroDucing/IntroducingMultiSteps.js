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
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, white } from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IMG from '../../assets/Images';

const IntroducingMultiSteps = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedBusinessType, setSelectedBusinessType] = useState('');
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        mobileNumber: '',
        email: '',
        gstNumber: '',
        panNumber: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        branchName: '',
    });

    const renderStepIndicator = () => (
        <View style={styles.stepIndicatorContainer}>
            <View style={styles.stepIndicator}>
                <View style={[styles.stepCircle, currentStep >= 1 && styles.stepCircleActive]}>
                    {currentStep > 1 ? (
                        <Ionicons name="checkmark" size={16} color={white} />
                    ) : (
                        <View style={styles.stepCircleInner} />
                    )}
                </View>
                <View style={[styles.stepLine, currentStep > 1 && styles.stepLineActive]} />
                <View style={[styles.stepCircle, currentStep >= 2 && styles.stepCircleActive]}>
                    {currentStep > 2 ? (
                        <Ionicons name="checkmark" size={16} color={white} />
                    ) : (
                        <View style={styles.stepCircleInner} />
                    )}
                </View>
                <View style={[styles.stepLine, currentStep > 2 && styles.stepLineActive]} />
                <View style={[styles.stepCircle, currentStep >= 3 && styles.stepCircleActive]}>
                    <View style={styles.stepCircleInner} />
                </View>
            </View>
        </View>
    );

    const renderStep1 = () => (
        <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Register your business details</Text>
            
            <View style={styles.businessTypeContainer}>
                <TouchableOpacity
                    style={[
                        styles.businessTypeCard,
                        selectedBusinessType === 'individual' && styles.businessTypeCardActive
                    ]}
                    onPress={() => setSelectedBusinessType('individual')}
                >
                    <View style={[
                        styles.radioOuter,
                        selectedBusinessType === 'individual' && styles.radioOuterActive
                    ]}>
                        {selectedBusinessType === 'individual' && (
                            <View style={styles.radioInner} />
                        )}
                    </View>
                    <Text style={styles.businessTypeText}>Individual</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.businessTypeCard,
                        selectedBusinessType === 'company' && styles.businessTypeCardActive
                    ]}
                    onPress={() => setSelectedBusinessType('company')}
                >
                    <View style={[
                        styles.radioOuter,
                        selectedBusinessType === 'company' && styles.radioOuterActive
                    ]}>
                        {selectedBusinessType === 'company' && (
                            <View style={styles.radioInner} />
                        )}
                    </View>
                    <Text style={styles.businessTypeText}>Company</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>BUSINESS NAME</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter business name"
                    placeholderTextColor="#999"
                    value={formData.businessName}
                    onChangeText={(text) => setFormData({...formData, businessName: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>OWNER NAME</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter owner name"
                    placeholderTextColor="#999"
                    value={formData.ownerName}
                    onChangeText={(text) => setFormData({...formData, ownerName: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>MOBILE NUMBER</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChangeText={(text) => setFormData({...formData, mobileNumber: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>EMAIL (OPTIONAL)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(text) => setFormData({...formData, email: text})}
                />
            </View>

            <Text style={styles.noteText}>
                * Enter your correct contact number and email address for OTP verification
            </Text>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => setCurrentStep(2)}
            >
                <Text style={styles.nextButtonText}>Next</Text>
                <Ionicons name="arrow-forward" size={20} color={white} />
            </TouchableOpacity>
        </View>
    );

    const renderStep2 = () => (
        <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Register your business details</Text>

            <View style={styles.cardSection}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardIconContainer}>
                            <Text style={styles.cardIcon}>N</Text>
                        </View>
                        <Text style={styles.cardTitle}>Welcome to Nextlopay Limited</Text>
                    </View>
                    <Text style={styles.cardDescription}>
                        First Login? Go to More option and Update your MPIN to start transaction
                    </Text>
                    <Text style={styles.cardDescription}>
                        मुख्य स्क्रीन पर अधिक का विकल्प में जाकर अपना MPIN अपडेट करें
                    </Text>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>GST Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter GST number"
                    placeholderTextColor="#999"
                    value={formData.gstNumber}
                    onChangeText={(text) => setFormData({...formData, gstNumber: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>PAN Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter PAN number"
                    placeholderTextColor="#999"
                    maxLength={10}
                    value={formData.panNumber}
                    onChangeText={(text) => setFormData({...formData, panNumber: text})}
                />
            </View>

            <Text style={styles.noteText}>
                * Aadhaar card & PAN Mandatory for KYC purpose
            </Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => setCurrentStep(1)}
                >
                    <Ionicons name="arrow-back" size={20} color={App_Primary_color} />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => setCurrentStep(3)}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                    <Ionicons name="arrow-forward" size={20} color={white} />
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderStep3 = () => (
        <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Register your business details</Text>

            <View style={styles.cardSection}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardIconContainer}>
                            <Text style={styles.cardIcon}>N</Text>
                        </View>
                        <Text style={styles.cardTitle}>Welcome to Nextlopay Limited</Text>
                    </View>
                    <Text style={styles.cardDescription}>
                        First Login? Go to More option and Update your MPIN to start transaction
                    </Text>
                    <Text style={styles.cardDescription}>
                        मुख्य स्क्रीन पर अधिक का विकल्प में जाकर अपना MPIN अपडेट करें
                    </Text>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Bank Account</Text>
            </View>

            <View style={styles.bankAccountCard}>
                <Text style={styles.bankAccountTitle}>MERCHANT PRIVATE LIMITED</Text>
                <Text style={styles.bankAccountNumber}>XXXX XXXX XXXX 1234</Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Bank Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter bank name"
                    placeholderTextColor="#999"
                    value={formData.bankName}
                    onChangeText={(text) => setFormData({...formData, bankName: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Account Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter account number"
                    placeholderTextColor="#999"
                    keyboardType="number-pad"
                    value={formData.accountNumber}
                    onChangeText={(text) => setFormData({...formData, accountNumber: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>IFSC Code</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter IFSC code"
                    placeholderTextColor="#999"
                    value={formData.ifscCode}
                    onChangeText={(text) => setFormData({...formData, ifscCode: text})}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Branch Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter branch name"
                    placeholderTextColor="#999"
                    value={formData.branchName}
                    onChangeText={(text) => setFormData({...formData, branchName: text})}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.checkbox}>
                    <Ionicons name="checkmark" size={16} color={white} />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    I agree to all the Terms and Conditions and Privacy policy
                </Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => setCurrentStep(2)}
                >
                    <Ionicons name="arrow-back" size={20} color={App_Primary_color} />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                        // Handle final submission
                    }}
                >
                    <Text style={styles.nextButtonText}>Submit</Text>
                    <Ionicons name="checkmark" size={20} color={white} />
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
        backButtonHeader: {
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
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        stepIndicatorContainer: {
            paddingVertical: 20,
            paddingHorizontal: 20,
        },
        stepIndicator: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        stepCircle: {
            width: 32,
            height: 32,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: '#DDD',
            backgroundColor: white,
            justifyContent: 'center',
            alignItems: 'center',
        },
        stepCircleActive: {
            borderColor: App_Primary_color,
            backgroundColor: App_Primary_color,
        },
        stepCircleInner: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: App_Primary_color,
        },
        stepLine: {
            width: 80,
            height: 2,
            backgroundColor: '#DDD',
        },
        stepLineActive: {
            backgroundColor: App_Primary_color,
        },
        scrollContent: {
            paddingBottom: 30,
        },
        stepContent: {
            paddingHorizontal: 20,
        },
        stepTitle: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 20,
        },
        businessTypeContainer: {
            flexDirection: 'row',
            gap: 12,
            marginBottom: 25,
        },
        businessTypeCard: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            backgroundColor: white,
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#E0E0E0',
        },
        businessTypeCardActive: {
            borderColor: App_Primary_color,
            backgroundColor: '#F5F3FF',
        },
        radioOuter: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
        },
        radioOuterActive: {
            borderColor: App_Primary_color,
        },
        radioInner: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: App_Primary_color,
        },
        businessTypeText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#1A1A1A',
        },
        formGroup: {
            marginBottom: 18,
        },
        label: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#666',
            marginBottom: 8,
            letterSpacing: 0.5,
        },
        input: {
            backgroundColor: white,
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12,
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            borderWidth: 1,
            borderColor: '#E0E0E0',
        },
        noteText: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
            marginTop: 5,
            marginBottom: 25,
        },
        nextButton: {
            backgroundColor: App_Primary_color,
            borderRadius: 8,
            paddingVertical: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
        },
        nextButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
        },
        cardSection: {
            marginBottom: 25,
        },
        card: {
            backgroundColor: App_Primary_color,
            borderRadius: 12,
            padding: 15,
        },
        cardHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            marginBottom: 12,
        },
        cardIconContainer: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: white,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardIcon: {
            fontSize: 20,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            color: App_Primary_color,
        },
        cardTitle: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
            flex: 1,
        },
        cardDescription: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: white,
            lineHeight: 16,
            marginBottom: 4,
        },
        buttonRow: {
            flexDirection: 'row',
            gap: 12,
            marginTop: 25,
        },
        backButton: {
            flex: 1,
            backgroundColor: white,
            borderRadius: 8,
            paddingVertical: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            borderWidth: 1,
            borderColor: App_Primary_color,
        },
        backButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: App_Primary_color,
        },
        bankAccountCard: {
            backgroundColor: App_Primary_color,
            borderRadius: 8,
            padding: 15,
            marginBottom: 20,
        },
        bankAccountTitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
            marginBottom: 5,
        },
        bankAccountNumber: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: white,
            letterSpacing: 1,
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            marginTop: 10,
            marginBottom: 15,
        },
        checkbox: {
            width: 20,
            height: 20,
            borderRadius: 4,
            backgroundColor: App_Primary_color,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
        },
        checkboxText: {
            flex: 1,
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            lineHeight: 16,
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
                            style={styles.backButtonHeader}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Introducing</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Step Indicator */}
            {renderStepIndicator()}

            {/* Main Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
            </ScrollView>
        </View>
    );
};

export default IntroducingMultiSteps;