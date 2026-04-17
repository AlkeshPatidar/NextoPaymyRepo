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

const IntroducingScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        gstPan: '',
        panNumber: '',
        businessBankName: '',
        businessCategory: '',
        ifscCode: '',
        branch: '',
        bankAccountNumber: '',
        name: '',
    });

    // Step Indicator Component
    const StepIndicator = () => (
        <View style={styles.stepIndicatorContainer}>
            <View style={styles.stepRow}>
                {/* Step 1 */}
                <View style={styles.stepItem}>
                    <View style={[
                        styles.stepCircle,
                        currentStep >= 1 && styles.stepCircleActive
                    ]}>
                        {currentStep > 1 ? (
                            <Ionicons name="checkmark" size={18} color={white} />
                        ) : (
                            <View style={styles.stepDot} />
                        )}
                    </View>
                    <Text style={[
                        styles.stepLabel,
                        currentStep >= 1 && styles.stepLabelActive
                    ]}>
                        Business Details
                    </Text>
                </View>

                {/* Line 1 */}
                <View style={[
                    styles.stepLine,
                    currentStep > 1 && styles.stepLineActive
                ]} />

                {/* Step 2 */}
                <View style={styles.stepItem}>
                    <View style={[
                        styles.stepCircle,
                        currentStep >= 2 && styles.stepCircleActive
                    ]}>
                        {currentStep > 2 ? (
                            <Ionicons name="checkmark" size={18} color={white} />
                        ) : (
                            <View style={currentStep >= 2 && styles.stepDot} />
                        )}
                    </View>
                    <Text style={[
                        styles.stepLabel,
                        currentStep >= 2 && styles.stepLabelActive
                    ]}>
                        Bank {'\n'} Details
                    </Text>
                </View>

                {/* Line 2 */}
                <View style={[
                    styles.stepLine,
                    currentStep > 2 && styles.stepLineActive
                ]} />

                {/* Step 3 */}
                <View style={styles.stepItem}>
                    <View style={[
                        styles.stepCircle,
                        currentStep >= 3 && styles.stepCircleActive
                    ]}>
                        <View style={currentStep >= 3 && styles.stepDot} />
                    </View>
                    <Text style={[
                        styles.stepLabel,
                        currentStep >= 3 && styles.stepLabelActive
                    ]}>
                        Personal Details
                    </Text>
                </View>
            </View>
        </View>
    );

    // Step 1 - Business Details
    const renderStep1 = () => (
        <View style={styles.stepContent}>

            <View style={styles.formContainer}>
            <View style={styles.sectionHeader}>
                <Ionicons name="chevron-back" size={18} color="#333" />
                <Text style={styles.sectionTitle}>Register your business details</Text>
            </View>
            <StepIndicator/>
                <Text style={styles.formHeading}>Business Details</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>GSTIN/PAN</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="PAN Number"
                        placeholderTextColor="#999"
                        value={formData.gstPan}
                        onChangeText={(text) => setFormData({ ...formData, gstPan: text })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Enter your business name</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Business Bank Account"
                        placeholderTextColor="#999"
                        value={formData.businessBankName}
                        onChangeText={(text) => setFormData({ ...formData, businessBankName: text })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Category</Text>
                    <TouchableOpacity style={styles.dropdownInput}>
                        <Text style={styles.dropdownPlaceholder}>
                            {formData.businessCategory || 'Choose category'}
                        </Text>
                        <Ionicons name="chevron-down" size={20} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => setCurrentStep(2)}
            >
                <Text style={styles.nextButtonText}>Next</Text>
                <Ionicons name="arrow-forward" size={20} color={white} />
            </TouchableOpacity>
        </View>
    );

    // Step 2 - Bank Details
    const renderStep2 = () => (
        <View style={styles.stepContent}>
           


            <View style={styles.formContainer}>
                 <View style={styles.sectionHeader}>
                <Ionicons name="chevron-back" size={18} color="#333" />
                <Text style={styles.sectionTitle}>Register your business details</Text>
            </View>
            <StepIndicator/>

                <View style={styles.businessDetailsHeader}>
                    <Text style={styles.formHeading}>Business Details</Text>
                    <View style={styles.verifiedBadge}>
                        <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                </View>

                {/* Purple Card */}
                <View style={styles.purpleCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardIconContainer}>
                            <Text style={styles.cardIconText}>N</Text>
                        </View>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>Nextlomart Private Limited</Text>
                            <Text style={styles.cardSubtitle}>NEXTLOMART123</Text>
                        </View>
                    </View>
                    <View style={styles.cardDivider} />
                    <View style={styles.cardAddress}>
                        <Text style={styles.cardAddressText}>
                            F/H-2-607, G-1, Rajni Shalin Nagar, Nimish Nagar Ajmer Road, Jaipur, Rajasthan, 302006
                        </Text>
                    </View>
                </View>

                {/* Bank Details Form */}
                <Text style={styles.formHeading}>Bank Details</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>IFSC Code*</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="BRANCH - JAIPUR YPS MANSAROVER"
                        placeholderTextColor="#4CAF50"
                        value={formData.ifscCode}
                        onChangeText={(text) => setFormData({ ...formData, ifscCode: text })}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Bank Account Number</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Business Bank Account Number"
                        placeholderTextColor="#999"
                        keyboardType="number-pad"
                        value={formData.bankAccountNumber}
                        onChangeText={(text) => setFormData({ ...formData, bankAccountNumber: text })}
                    />
                </View>
            </View>

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

    // Step 3 - Personal Details
    const renderStep3 = () => (
        <View style={styles.stepContent}>

            <View style={styles.formContainer}>
            <View style={styles.sectionHeader}>
                <Ionicons name="chevron-back" size={18} color="#333" />
                <Text style={styles.sectionTitle}>Register your business details</Text>
            </View>
            <StepIndicator/>

                <View style={styles.businessDetailsHeader}>
                    <Text style={styles.formHeading}>Business Details</Text>
                    <View style={styles.verifiedBadge}>
                        <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                </View>

                {/* Purple Card */}
                <View style={styles.purpleCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardIconContainer}>
                            <Text style={styles.cardIconText}>N</Text>
                        </View>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>Nextlomart Private Limited</Text>
                            <Text style={styles.cardSubtitle}>NEXTLOMART123</Text>
                        </View>
                    </View>
                    <View style={styles.cardDivider} />
                    <View style={styles.cardAddress}>
                        <Text style={styles.cardAddressText}>
                            F/H-2-607, G-1, Rajni Shalin Nagar, Nimish Nagar Ajmer Road, Jaipur, Rajasthan, 302006
                        </Text>
                    </View>
                </View>

                {/* Bank Account Card */}
                <View style={styles.bankAccountCard}>
                    <View style={styles.bankCardRow}>
                        <View>
                            <Text style={styles.bankCardLabel}>Bank Account</Text>
                            <Text style={styles.bankCardTitle}>NEXTLOMART PRIVATE LIMITED</Text>
                        </View>
                        <View style={styles.verifiedBadge}>
                            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                            <Text style={styles.verifiedText}>Verified</Text>
                        </View>
                    </View>
                    <View style={styles.bankCardDetails}>
                        <View style={styles.bankCardDetailItem}>
                            <Text style={styles.bankCardDetailLabel}>Bank Name</Text>
                            <Text style={styles.bankCardDetailValue}>THE BANK OF INDIA</Text>
                        </View>
                        <View style={styles.bankCardDetailItem}>
                            <Text style={styles.bankCardDetailLabel}>Account Number</Text>
                            <Text style={styles.bankCardDetailValue}>000000825479727</Text>
                        </View>
                    </View>
                </View>

                {/* Personal Details */}
                <Text style={styles.formHeading}>Personal Details</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Name*</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter name as on your Aadhar card"
                        placeholderTextColor="#999"
                        value={formData.name}
                        onChangeText={(text) => setFormData({ ...formData, name: text })}
                    />
                </View>

                <View style={styles.uploadContainer}>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Ionicons name="cloud-upload-outline" size={24} color={App_Primary_color} />
                        <Text style={styles.uploadText}>Upload Aadhar Card</Text>
                    </TouchableOpacity>
                </View>
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
                        // Handle submission
                        console.log('Form Submitted', formData);
                    }}
                >
                    <Text style={styles.nextButtonText}>Submit</Text>
                    <Ionicons name="checkmark" size={20} color={white} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

            {/* Header - Same as Notification Screen */}
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

            {/* Main Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}
            >
            {/* <StepIndicator /> */}

                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E4F3',
    },
    // Header Styles (Same as Notification Screen)
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

    // Step Indicator Styles
    stepIndicatorContainer: {
        // backgroundColor: white,
        paddingVertical: 20,
        paddingHorizontal: 0,
        // marginHorizontal: 15,
        // marginTop: 15,
        borderRadius: 12,
        // elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    stepRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stepItem: {
        alignItems: 'center',
        flex: 1,
    },
    stepCircle: {
        width: 30,
        height: 30,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#DDD',
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepCircleActive: {
        borderColor: App_Primary_color,
        backgroundColor: App_Primary_color,
    },
    stepDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: white,
    },
    stepLabel: {
        fontSize: 10,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: '#999',
        textAlign: 'center',
    },
    stepLabelActive: {
        color: '#333',
    },
    stepLine: {
        height: 2,
        flex: 0.5,
        backgroundColor: '#DDD',
        // marginHorizontal: 5,
        marginBottom: 30,
    },
    stepLineActive: {
        backgroundColor: App_Primary_color,
    },

    // Content Styles
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    stepContent: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        // marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: '#333',
    },

    // Form Container
    formContainer: {
        backgroundColor: white,
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    formHeading: {
        fontSize: 13,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: '#333',
        marginBottom: 15,
    },
    businessDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    verifiedText: {
        fontSize: 11,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: '#4CAF50',
    },

    // Input Styles
    inputGroup: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 11,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: '#666',
        marginBottom: 6,
    },
    textInput: {
        // backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 12,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: '#333',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
    dropdownInput: {
        // backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
    dropdownPlaceholder: {
        fontSize: 12,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: '#999',
    },

    // Purple Card Styles
    purpleCard: {
        backgroundColor: App_Primary_color,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 10,
    },
    cardIconContainer: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIconText: {
        fontSize: 22,
        fontFamily: FONTS_FAMILY.Poppins_Bold,
        color: App_Primary_color,
    },
    cardTitleContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 13,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: white,
        marginBottom: 2,
    },
    cardSubtitle: {
        fontSize: 11,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: white,
        opacity: 0.9,
    },
    cardDivider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginVertical: 10,
    },
    cardAddress: {
        paddingHorizontal: 5,
    },
    cardAddressText: {
        fontSize: 11,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: white,
        lineHeight: 16,
    },

    // Bank Account Card
    bankAccountCard: {
        backgroundColor: App_Primary_color,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    bankCardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    bankCardLabel: {
        fontSize: 10,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: white,
        opacity: 0.8,
        marginBottom: 4,
    },
    bankCardTitle: {
        fontSize: 13,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: white,
    },
    bankCardDetails: {
        flexDirection: 'row',
        gap: 20,
    },
    bankCardDetailItem: {
        flex: 1,
    },
    bankCardDetailLabel: {
        fontSize: 10,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: white,
        opacity: 0.8,
        marginBottom: 4,
    },
    bankCardDetailValue: {
        fontSize: 11,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: white,
    },

    // Upload Container
    uploadContainer: {
        marginTop: 10,
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#F5F3FF',
        borderRadius: 8,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: App_Primary_color,
        borderStyle: 'dashed',
    },
    uploadText: {
        fontSize: 12,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: App_Primary_color,
    },

    // Button Styles
    nextButton: {
        backgroundColor: App_Primary_color,
        borderRadius: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flex:0.5
    },
    nextButtonText: {
        fontSize: 14,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: white,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
    backButton: {
        flex: 0.7,
        backgroundColor: white,
        borderRadius: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderWidth: 2,
        borderColor: App_Primary_color,
    },
    backButtonText: {
        fontSize: 14,
        fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        color: App_Primary_color,
    },
});

export default IntroducingScreen;