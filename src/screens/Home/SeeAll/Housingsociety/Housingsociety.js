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

const HousingSocietyPayment = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [societyId, setSocietyId] = useState('');
    const [flatNumber, setFlatNumber] = useState('');
    const [selectedBillers, setSelectedBillers] = useState([]);

    const billers = [
        { id: '1', name: 'Aquaguard India service solutions' },
        { id: '2', name: 'Aquaguard India service C Solutions' },
    ];

    // Step 1: Working Society
    const renderStep1 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Working society ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="#999"
                        value={societyId}
                        onChangeText={setSocietyId}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Reference</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="#999"
                    />
                </View>

                <TouchableOpacity
                    style={styles.continueButton}
                    activeOpacity={0.8}
                    onPress={() => setCurrentStep(2)}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 2: Hosuing Society (with typo as in screenshot)
    const renderStep2 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Hosuing ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="#999"
                        value={societyId}
                        onChangeText={setSocietyId}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Reference</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="#999"
                    />
                </View>

                <TouchableOpacity
                    style={styles.continueButton}
                    activeOpacity={0.8}
                    onPress={() => setCurrentStep(3)}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 3: Select Provider
    const renderStep3 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.providerCard}>
                <Text style={styles.providerTitle}>Select Provider</Text>
                
                {billers.map((biller) => {
                    const isSelected = selectedBillers.includes(biller.id);
                    return (
                        <TouchableOpacity
                            key={biller.id}
                            style={styles.providerItem}
                            activeOpacity={0.7}
                            onPress={() => {
                                if (isSelected) {
                                    setSelectedBillers(selectedBillers.filter(id => id !== biller.id));
                                } else {
                                    setSelectedBillers([...selectedBillers, biller.id]);
                                }
                            }}
                        >
                            <View style={styles.providerLeft}>
                                <View style={styles.radioOuter}>
                                    {isSelected && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.providerName}>{biller.name}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#999" />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );

    // Step 4: Swaasth Vihaardhaara
    const renderStep4 = () => (
        <View style={styles.stepContainer}>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Swaasth Vihaardhaara</Text>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder=""
                            placeholderTextColor="#999"
                            value={flatNumber}
                            onChangeText={setFlatNumber}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Flat no</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="#999"
                    />
                </View>
            </View>
        </View>
    );

    const getHeaderTitle = () => {
        switch(currentStep) {
            case 1: return 'Working Society';
            case 2: return 'Hosuing Society';
            case 3: return 'Select Provider';
            case 4: return 'Swaasth Vihaardhaara';
            default: return 'Housing Society';
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E8E3F5',
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
            paddingTop: 10,
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
        providerCard: {
            backgroundColor: white,
            borderRadius: 10,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3,
        },
        providerTitle: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 16,
        },
        inputContainer: {
            marginBottom: 20,
        },
        inputLabel: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: '#666',
            marginBottom: 8,
        },
        input: {
            backgroundColor: white,
            borderRadius: 6,
            paddingHorizontal: 14,
            paddingVertical: 12,
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            borderWidth: 1,
            borderColor: '#D0D0D0',
        },
        inputWithIcon: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        continueButton: {
            backgroundColor: App_Primary_color,
            paddingVertical: 13,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 10,
        },
        continueButtonText: {
            fontSize: 15,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
        },
        providerItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F0',
        },
        providerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            flex: 1,
        },
        radioOuter: {
            width: 18,
            height: 18,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: '#D0D0D0',
            justifyContent: 'center',
            alignItems: 'center',
        },
        radioInner: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: App_Primary_color,
        },
        providerName: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#1A1A1A',
            flex: 1,
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

                        <Text style={styles.headerTitle}>{getHeaderTitle()}</Text>
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
                {currentStep === 4 && renderStep4()}
            </ScrollView>
        </View>
    );
};

export default HousingSocietyPayment;