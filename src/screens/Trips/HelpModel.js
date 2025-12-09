import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ToastAndroid,
    Platform,
    Alert,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    white
} from '../../common/Colors/colors';

const HelpModal = ({ visible, onClose, isDarkMode }) => {
    const [selectedIssue, setSelectedIssue] = useState(null);

    const issues = [
        { id: 'delivery', label: 'Delivery' },
        { id: 'pod', label: 'POD' },
        { id: 'payments', label: 'Payments' }
    ];

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            Alert.alert('Success', message);
        }
    };

    const handleRequestCallback = () => {
        if (!selectedIssue) {
            showToast('Please select an issue type');
            return;
        }

        const issueLabel = issues.find(i => i.id === selectedIssue)?.label;
        showToast(`✓ Callback request sent successfully for ${issueLabel} issue. Our team will contact you shortly.`);
        
        // Reset and close after a short delay
        setTimeout(() => {
            setSelectedIssue(null);
            onClose();
        }, 500);
    };

    const styles = StyleSheet.create({
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
        },
        modalContainer: {
            backgroundColor: isDarkMode ? dark33 : white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 10,
        },
        modalHandle: {
            width: 40,
            height: 4,
            backgroundColor: isDarkMode ? '#444' : '#DDD',
            borderRadius: 2,
            alignSelf: 'center',
            marginTop: 12,
            marginBottom: 20,
        },
        modalContent: {
            paddingHorizontal: 20,
        },
        headerTitle: {
            fontSize: 18,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 30,
        },
        issuesContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            gap: 10,
        },
        issueButton: {
            flex: 1,
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 25,
            borderWidth: 1.5,
            borderColor: isDarkMode ? '#444' : '#DDD',
            backgroundColor: isDarkMode ? dark33 : white,
            alignItems: 'center',
            justifyContent: 'center',
        },
        issueButtonSelected: {
            borderColor: App_Primary_color,
            backgroundColor: isDarkMode ? 'rgba(33, 150, 243, 0.1)' : 'rgba(33, 150, 243, 0.05)',
        },
        issueButtonText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: isDarkMode ? '#999' : '#666',
        },
        issueButtonTextSelected: {
            color: App_Primary_color,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
        },
        callbackButton: {
            backgroundColor: App_Primary_color,
            borderRadius: 12,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: App_Primary_color,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
        },
        callbackButtonDisabled: {
            backgroundColor: isDarkMode ? '#444' : '#DDD',
            shadowOpacity: 0,
            elevation: 0,
        },
        callbackButtonText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: white,
            marginLeft: 8,
        },
        phoneIcon: {
            fontSize: 20,
            color: white,
        },
    });

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={onClose}
                pointerEvents="box-none"
            >
                <View 
                    onStartShouldSetResponder={() => true}
                    style={{ width: '100%' }}
                >
                    <View style={styles.modalContainer}>
                        {/* Handle */}
                        <View style={styles.modalHandle} />

                        <View style={styles.modalContent}>
                            {/* Header */}
                            <Text style={styles.headerTitle}>I am having issue with</Text>

                            {/* Issue Options */}
                            <View style={styles.issuesContainer}>
                                {issues.map((issue) => (
                                    <TouchableOpacity
                                        key={issue.id}
                                        style={[
                                            styles.issueButton,
                                            selectedIssue === issue.id && styles.issueButtonSelected
                                        ]}
                                        onPress={() => setSelectedIssue(issue.id)}
                                        activeOpacity={0.7}
                                    >
                                        <Text
                                            style={[
                                                styles.issueButtonText,
                                                selectedIssue === issue.id && styles.issueButtonTextSelected
                                            ]}
                                        >
                                            {issue.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Request Callback Button */}
                            <TouchableOpacity
                                style={[
                                    styles.callbackButton,
                                    !selectedIssue && styles.callbackButtonDisabled
                                ]}
                                onPress={handleRequestCallback}
                                activeOpacity={0.8}
                                disabled={!selectedIssue}
                            >
                                <Text style={styles.phoneIcon}>📞</Text>
                                <Text style={styles.callbackButtonText}>
                                    Request call back
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default HelpModal;