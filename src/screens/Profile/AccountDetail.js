import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Share,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
  App_Primary_color,
  dark33,
  dark55,
  darkMode25,
  white
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AccountDetailsScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  
  // Get account details from route params or use default
  const accountDetails = route?.params?.accountDetails || {
    bankName: 'NEW OLOG LOGISTICS PVT LTD',
    accountNumber: 'FR8RT009274',
    bank: 'ICICI',
    branch: 'MOGAPPAIR WEST',
    ifsc: 'ICIC0000103',
  };

  const handleShare = async () => {
    try {
      const message = `
Bank Details:
${accountDetails.bankName}

Account No: ${accountDetails.accountNumber}
Bank: ${accountDetails.bank}
Branch: ${accountDetails.branch}
IFSC: ${accountDetails.ifsc}
      `.trim();

      await Share.share({
        message: message,
        title: 'Bank Account Details',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={[
        styles.detailLabel,
        { color: isDarkMode ? '#999' : '#666' }
      ]}>
        {label}
      </Text>
      <Text style={[
        styles.detailValue,
        { color: isDarkMode ? white : '#000' }
      ]}>
        {value}
      </Text>
    </View>
  );

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? dark33 : white}
      />

      {/* Header */}
      <View style={[
        styles.header,
        { backgroundColor: isDarkMode ? dark33 : white }
      ]}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDarkMode ? white : '#000'}
          />
        </TouchableOpacity>
        <Text style={[
          styles.headerTitle,
          { color: isDarkMode ? white : '#000' }
        ]}>
          Account ₹0
        </Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Bank Details Card */}
        <View style={[
          styles.bankCard,
          { backgroundColor: isDarkMode ? dark33 : white }
        ]}>
          {/* Left Border Accent */}
          <View style={[styles.leftBorder, { backgroundColor: App_Primary_color }]} />

          {/* Bank Icon & Title */}
          <View style={styles.bankHeader}>
            <View style={[
              styles.bankIconContainer,
              { backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8' }
            ]}>
              <MaterialCommunityIcons
                name="bank"
                size={24}
                color={App_Primary_color}
              />
            </View>
            <View style={styles.bankTitleContainer}>
              <Text style={[
                styles.bankLabel,
                { color: isDarkMode ? '#999' : '#666' }
              ]}>
                BANK DETAILS
              </Text>
              <Text style={[
                styles.bankName,
                { color: isDarkMode ? white : '#000' }
              ]}>
                {accountDetails.bankName}
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View style={[
            styles.divider,
            { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }
          ]} />

          {/* Account Details */}
          <View style={styles.detailsContainer}>
            <DetailRow label="ACC NO :" value={accountDetails.accountNumber} />
            <DetailRow label="BANK :" value={accountDetails.bank} />
            <DetailRow label="BRANCH :" value={accountDetails.branch} />
            <DetailRow label="IFSC :" value={accountDetails.ifsc} />
          </View>

          {/* Share Button */}
          <TouchableOpacity
            style={styles.shareButton}
            activeOpacity={0.7}
            onPress={handleShare}
          >
            <Ionicons name="share-social" size={18} color={App_Primary_color} />
            <Text style={[
              styles.shareButtonText,
              { color: App_Primary_color }
            ]}>
              Share
            </Text>
          </TouchableOpacity>
        </View>

        {/* Instructions Section */}
        <View style={styles.instructionsSection}>
          <Text style={[
            styles.instructionTitle,
            { color: isDarkMode ? white : '#000' }
          ]}>
            To Top-up account
          </Text>

          {/* Step 1 */}
          <View style={[
            styles.instructionCard,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}>
            <View style={[
              styles.instructionIconContainer,
              { backgroundColor: App_Primary_color + '15' }
            ]}>
              <MaterialCommunityIcons
                name="bank-transfer"
                size={32}
                color={App_Primary_color}
              />
            </View>
            <Text style={[
              styles.instructionText,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Use bank details provided above to transfer
            </Text>
          </View>

          {/* Arrow Divider */}
          <View style={styles.arrowContainer}>
            <View style={[
              styles.arrowLine,
              { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }
            ]} />
            <Ionicons
              name="arrow-down"
              size={24}
              color={isDarkMode ? '#999' : '#666'}
            />
            <View style={[
              styles.arrowLine,
              { backgroundColor: isDarkMode ? dark55 : '#E0E0E0' }
            ]} />
          </View>

          {/* Step 2 */}
          <View style={[
            styles.instructionCard,
            { backgroundColor: isDarkMode ? dark33 : white }
          ]}>
            <View style={[
              styles.instructionIconContainer,
              { backgroundColor: '#4CAF50' + '15' }
            ]}>
              <MaterialCommunityIcons
                name="currency-inr"
                size={32}
                color="#4CAF50"
              />
            </View>
            <Text style={[
              styles.instructionText,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Your account balance will be updated once the payment is processed
            </Text>
          </View>
        </View>

        {/* Help Section */}
        <View style={[
          styles.helpCard,
          { backgroundColor: isDarkMode ? dark33 : white }
        ]}>
          <View style={styles.helpHeader}>
            <Ionicons
              name="information-circle"
              size={20}
              color={App_Primary_color}
            />
            <Text style={[
              styles.helpTitle,
              { color: isDarkMode ? white : '#000' }
            ]}>
              Need Help?
            </Text>
          </View>
          <Text style={[
            styles.helpText,
            { color: isDarkMode ? '#999' : '#666' }
          ]}>
            For any issues with payment processing, please contact our support team or check the transaction status in your banking app.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginLeft: 12,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    padding: 10,
  },
  bankCard: {
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  leftBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
  bankHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bankIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bankTitleContainer: {
    flex: 1,
  },
  bankLabel: {
    fontSize: 11,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  bankName: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    marginBottom: 16,
  },
  detailsContainer: {
    gap: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
    width: 90,
  },
  detailValue: {
    flex: 1,
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 16,
    gap: 6,
  },
  shareButtonText: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  instructionsSection: {
    marginTop: 20,
  },
  instructionTitle: {
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
    marginBottom: 10,
  },
  instructionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    gap: 16,
  },
  instructionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    flex: 1,
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
    lineHeight: 18,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  arrowLine: {
    flex: 1,
    height: 2,
  },
  helpCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  helpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  helpTitle: {
    fontSize: 15,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  helpText: {
    fontSize: 13,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
    lineHeight: 20,
  },
});

export default AccountDetailsScreen;