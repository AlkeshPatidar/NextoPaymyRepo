import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    App_Primary_color,
    dark33,
    white
} from '../../common/Colors/colors';

const DocumentsModal = ({ visible, onClose, isDarkMode, documentsData }) => {
    // Default documents data
    const defaultData = {
        loadingMemo: {
            title: 'Loading Memo',
            hasDownload: true,
            hasUpload: true,
        },
        lr: {
            title: 'LR',
            fileCount: '1 Files',
            files: [
                {
                    id: 1,
                    name: '6912255_LR_2025_12_08_15_09_56.jpg',
                    type: 'image'
                }
            ]
        },
        autoELR: {
            title: 'Auto E-LR',
            // status: 'Failed to fetch E-way bill',
            loading: true
        },
        manualELR: {
            title: 'Manual E-LR',
            hasAdd: true
        },
        pod: {
            title: 'POD',
            fileCount: '1 Files',
            files: [
                {
                    id: 1,
                    name: '6912255_POD_2025_12_08_15_12_51.jpg',
                    type: 'image'
                }
            ]
        },
        invoice: {
            title: 'Invoice',
            billingAddress: 'AIRWAT LOGISTICS',
            location: 'Ahmedabad',
            fullAddress: 'Shop no 209 Bol gam road Near Cocacola Sanand GIDC SANAND Gujarat -382110',
            hasUpload: true
        }
    };

    const data = documentsData || defaultData;

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
            paddingBottom: 30,
            // maxHeight: '85%',
        },
        modalHandle: {
            width: 40,
            height: 4,
            backgroundColor: isDarkMode ? '#444' : '#DDD',
            borderRadius: 2,
            alignSelf: 'center',
            marginTop: 5,
            marginBottom: 20,
        },
        scrollContent: {
            paddingHorizontal: 20,
        },
        headerTitle: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
            marginBottom: 20,
        },
        documentCard: {
            backgroundColor: isDarkMode ? '#2A2A2A' : '#F8F8F8',
            borderRadius: 12,
            padding: 10,
            marginBottom: 10,
        },
        documentHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: 12,
        },
        documentTitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: isDarkMode ? white : '#000',
        },
        fileCountBadge: {
            backgroundColor: '#E3F2FD',
            paddingHorizontal: 12,
            paddingVertical: 3,
            borderRadius: 12,
        },
        fileCountText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: App_Primary_color,
        },
        actionButtons: {
            flexDirection: 'row',
            gap: 12,
        },
        iconButton: {
            width: 22,
            height: 22,
            borderRadius: 22,
            backgroundColor: App_Primary_color,
            justifyContent: 'center',
            alignItems: 'center',
        },
        fileItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: isDarkMode ? dark33 : white,
            borderRadius: 8,
            padding: 5,
            marginBottom: 8,
        },
        fileName: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
            flex: 1,
            marginRight: 12,
        },
        viewButton: {
            width: 22,
            height: 22,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: isDarkMode ? '#555' : '#000',
            justifyContent: 'center',
            alignItems: 'center',
        },
        addButton: {
            width: 22,
            height: 22,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: isDarkMode ? '#555' : '#000',
            justifyContent: 'center',
            alignItems: 'center',
        },
        statusContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
        },
        statusText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
        },
        loadingIndicator: {
            width: 22,
            height: 22,
            borderWidth: 2,
            borderColor: '#0D9BD9',
            borderTopColor: 'transparent',
            borderRadius: 10,
        },
        invoiceAddress: {
            marginTop: 8,
        },
        invoiceHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 4,
        },
        billingText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            color: isDarkMode ? white : '#000',
        },
        locationText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
        },
        addressText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? '#999' : '#666',
            // lineHeight: 18,
        },
        uploadIconButton: {
            width: 22,
            height: 22,
            borderRadius: 22,
            backgroundColor: App_Primary_color,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 16,
            // bottom: 16,
        },
    });

    const renderDownloadIcon = () => (
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="download" size={14} color={white} />
        </TouchableOpacity>
    );

    const renderUploadIcon = () => (
        <TouchableOpacity style={styles.iconButton}>
            <Icon name="attach-file" size={14} color={white} />
        </TouchableOpacity>
    );

    const renderEyeIcon = () => (
        <TouchableOpacity style={styles.viewButton}>
            <Icon name="visibility" size={14} color={isDarkMode ? white : '#000'} />
        </TouchableOpacity>
    );

    const renderAddIcon = () => (
        <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={16} color={isDarkMode ? white : '#000'} />
        </TouchableOpacity>
    );

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

                        <ScrollView 
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.scrollContent}
                        >
                            {/* Header */}
                            <Text style={styles.headerTitle}>Documents</Text>

                            {/* Loading Memo */}
                            <View style={styles.documentCard}>
                                <View style={styles.documentHeader}>
                                    <Text style={styles.documentTitle}>
                                        {data.loadingMemo.title}
                                    </Text>
                                    <View style={styles.actionButtons}>
                                        {data.loadingMemo.hasDownload && renderDownloadIcon()}
                                        {data.loadingMemo.hasUpload && renderUploadIcon()}
                                    </View>
                                </View>
                            </View>

                            {/* LR Section */}
                            <View style={styles.documentCard}>
                                <View style={styles.documentHeader}>
                                    <Text style={styles.documentTitle}>{data.lr.title}</Text>
                                    <View style={styles.fileCountBadge}>
                                        <Text style={styles.fileCountText}>
                                            {data.lr.fileCount}
                                        </Text>
                                    </View>
                                </View>
                                {data.lr.files.map((file) => (
                                    <View key={file.id} style={styles.fileItem}>
                                        <Text style={styles.fileName}>{file.name}</Text>
                                        {renderEyeIcon()}
                                    </View>
                                ))}
                            </View>

                            {/* Auto E-LR */}
                            <View style={styles.documentCard}>
                                <View style={styles.documentHeader}>
                                    <Text style={styles.documentTitle}>
                                        {data.autoELR.title}
                                    </Text>
                                    <View style={styles.statusContainer}>
                                        <Text style={styles.statusText}>
                                            {data.autoELR.status}
                                        </Text>
                                        {/* {data.autoELR.loading && (
                                            <View style={styles.loadingIndicator} />
                                        )} */}
                                    </View>
                                </View>
                            </View>

                            {/* Manual E-LR */}
                            <View style={styles.documentCard}>
                                <View style={styles.documentHeader}>
                                    <Text style={styles.documentTitle}>
                                        {data.manualELR.title}
                                    </Text>
                                    {data.manualELR.hasAdd && renderAddIcon()}
                                </View>
                            </View>

                            {/* POD Section */}
                            <View style={styles.documentCard}>
                                <View style={styles.documentHeader}>
                                    <Text style={styles.documentTitle}>{data.pod.title}</Text>
                                    <View style={styles.fileCountBadge}>
                                        <Text style={styles.fileCountText}>
                                            {data.pod.fileCount}
                                        </Text>
                                    </View>
                                </View>
                                {data.pod.files.map((file) => (
                                    <View key={file.id} style={styles.fileItem}>
                                        <Text style={styles.fileName}>{file.name}</Text>
                                        {renderEyeIcon()}
                                    </View>
                                ))}
                            </View>

                            {/* Invoice Section */}
                            <View style={styles.documentCard}>
                                <Text style={styles.documentTitle}>
                                    {data.invoice.title}
                                </Text>
                                <View style={styles.invoiceAddress}>
                                    <View style={styles.invoiceHeader}>
                                        <Text style={styles.billingText}>
                                            Billing Address - {data.invoice.billingAddress}
                                        </Text>
                                        <Text style={styles.locationText}>
                                            {data.invoice.location}
                                        </Text>
                                    </View>
                                    <Text style={styles.addressText}>
                                        {data.invoice.fullAddress}
                                    </Text>
                                </View>
                                {data.invoice.hasUpload && (
                                    <View style={styles.uploadIconButton}>
                                        <Icon name="attach-file" size={14} color={white} />
                                    </View>
                                )}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default DocumentsModal;