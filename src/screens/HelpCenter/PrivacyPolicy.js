import React, { useState } from 'react';
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
  dark55, 
  darkMode25, 
  white 
} from '../../common/Colors/colors';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

// ============= PRIVACY POLICY SCREEN =============
export const PrivacyPolicyScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const [expandedId, setExpandedId] = useState(null);

  const privacyData = [
    {
      id: '1',
      title: 'Information We Collect',
      icon: 'file-text',
      content: 'We collect various types of information to provide and improve our services:\n\n• Personal Information: Name, email, phone number, address, business details, GSTIN, PAN, and other identification documents.\n\n• Booking Information: Pickup and delivery addresses, goods details, vehicle preferences, and special instructions.\n\n• Payment Information: Credit/debit card details, bank account information, UPI IDs, and transaction history.\n\n• Location Data: Real-time GPS location for tracking shipments and optimizing routes.\n\n• Device Information: Device model, operating system, unique device identifiers, IP address, and mobile network information.\n\n• Usage Data: App interactions, features used, time spent, search queries, and preferences.',
    },
    {
      id: '2',
      title: 'How We Collect Information',
      icon: 'download',
      content: 'We collect information through various methods:\n\n• Direct Collection: Information you provide during registration, booking, profile updates, or customer support interactions.\n\n• Automatic Collection: Data collected automatically when you use our app, including location, device information, and usage patterns.\n\n• Third-Party Sources: Information from payment processors, identity verification services, and business verification agencies.\n\n• Cookies and Tracking: We use cookies, pixels, and similar technologies to enhance user experience and analyze app performance.\n\n• Camera and Storage: With your permission, we access camera for document uploads and storage for file attachments.',
    },
    {
      id: '3',
      title: 'How We Use Your Information',
      icon: 'settings',
      content: 'Your information is used for the following purposes:\n\n• Service Delivery: Processing bookings, tracking shipments, facilitating payments, and coordinating with transport providers.\n\n• Communication: Sending booking confirmations, status updates, promotional offers, and important notifications.\n\n• Verification: Verifying identity, business credentials, and preventing fraudulent activities.\n\n• Personalization: Customizing your experience based on preferences and usage patterns.\n\n• Analytics: Analyzing app usage, improving features, and developing new services.\n\n• Legal Compliance: Complying with legal obligations, resolving disputes, and enforcing agreements.\n\n• Customer Support: Responding to queries, resolving issues, and improving service quality.',
    },
    {
      id: '4',
      title: 'Information Sharing & Disclosure',
      icon: 'share-2',
      content: 'We share your information in the following circumstances:\n\n• Transport Providers: Sharing necessary booking and contact details with truck operators to facilitate service delivery.\n\n• Payment Processors: Sharing payment information with secure payment gateways for transaction processing.\n\n• Service Providers: Sharing data with third-party vendors who assist in app operations, analytics, and customer support.\n\n• Legal Requirements: Disclosing information when required by law, court orders, or government authorities.\n\n• Business Transfers: In case of merger, acquisition, or sale, your information may be transferred to the new entity.\n\n• With Your Consent: Sharing information with third parties when you explicitly provide consent.\n\nWe do NOT sell your personal information to advertisers or third parties for marketing purposes.',
    },
    {
      id: '5',
      title: 'Data Security Measures',
      icon: 'shield',
      content: 'We implement robust security measures to protect your data:\n\n• Encryption: All sensitive data is encrypted using industry-standard SSL/TLS protocols during transmission and AES-256 encryption at rest.\n\n• Access Controls: Strict access controls ensure only authorized personnel can access personal information on a need-to-know basis.\n\n• Secure Infrastructure: Our servers are hosted in secure data centers with 24/7 monitoring, firewalls, and intrusion detection systems.\n\n• Regular Audits: We conduct regular security audits and vulnerability assessments to identify and address potential risks.\n\n• Payment Security: We are PCI-DSS compliant and use tokenization to protect payment card information.\n\n• Employee Training: Our staff undergoes regular training on data privacy and security best practices.\n\nHowever, no system is completely secure. We cannot guarantee absolute security of your data.',
    },
    {
      id: '6',
      title: 'Your Privacy Rights',
      icon: 'user-check',
      content: 'You have the following rights regarding your personal data:\n\n• Access: Request a copy of the personal information we hold about you.\n\n• Correction: Request correction of inaccurate or incomplete information.\n\n• Deletion: Request deletion of your personal data, subject to legal and contractual obligations.\n\n• Portability: Request transfer of your data to another service provider in a structured format.\n\n• Opt-Out: Unsubscribe from marketing communications at any time.\n\n• Withdraw Consent: Withdraw previously given consent for data processing.\n\n• Lodge Complaint: File a complaint with relevant data protection authorities.\n\nTo exercise these rights, contact us at privacy@cloudtrucking.com. We will respond within 30 days of receiving your request.',
    },
    {
      id: '7',
      title: 'Data Retention Policy',
      icon: 'database',
      content: 'We retain your information for different periods based on the purpose:\n\n• Active Account Data: Retained as long as your account remains active and for legitimate business purposes.\n\n• Booking Records: Retained for 7 years for accounting, tax, and legal compliance purposes.\n\n• Transaction History: Retained for 10 years as required by financial regulations.\n\n• Communication Records: Retained for 3 years for quality assurance and dispute resolution.\n\n• Marketing Data: Retained until you opt-out or for 2 years from last interaction.\n\n• Deleted Account Data: After account deletion, personal data is anonymized or deleted within 90 days, except where retention is required by law.\n\nBackup copies may take additional time to be removed from our systems.',
    },
    {
      id: '8',
      title: 'Cookies & Tracking Technologies',
      icon: 'target',
      content: 'We use cookies and similar technologies for:\n\n• Essential Cookies: Necessary for app functionality, authentication, and security.\n\n• Performance Cookies: Analyzing app usage, identifying errors, and measuring performance.\n\n• Functional Cookies: Remembering preferences, settings, and personalization choices.\n\n• Analytics Cookies: Understanding user behavior through tools like Google Analytics and Firebase.\n\n• Advertising Cookies: Delivering relevant advertisements based on interests (with your consent).\n\nYou can manage cookie preferences through your device settings. However, disabling cookies may limit some app features. We do not respond to "Do Not Track" signals as there is no standard implementation.',
    },
    {
      id: '9',
      title: 'Third-Party Services & Links',
      icon: 'link',
      content: 'Our app integrates with third-party services:\n\n• Payment Gateways: Razorpay, PayU, and other payment processors for secure transactions.\n\n• Mapping Services: Google Maps for location services and route optimization.\n\n• Analytics Platforms: Google Analytics, Firebase Analytics for app performance monitoring.\n\n• Cloud Storage: AWS, Google Cloud for secure data storage and backup.\n\n• Communication Services: SMS gateways, email providers, and push notification services.\n\nThese third parties have their own privacy policies. We are not responsible for their practices. Our app may contain links to external websites. We recommend reviewing their privacy policies before providing any information.\n\nWe carefully vet all third-party providers to ensure they meet our security and privacy standards.',
    },
    {
      id: '10',
      title: 'Children\'s Privacy',
      icon: 'alert-triangle',
      content: 'Cloud Trucking is not intended for use by individuals under 18 years of age:\n\n• Age Restriction: Our services are designed for adults engaged in business activities. We do not knowingly collect information from children under 18.\n\n• Parental Responsibility: If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.\n\n• Deletion: Upon verification, we will promptly delete any information collected from children under 18.\n\n• Verification: We may request age verification during registration to comply with child protection laws.\n\nIf we discover that we have inadvertently collected information from a child under 18, we will delete it as quickly as possible.',
    },
    {
      id: '11',
      title: 'Location Data & Permissions',
      icon: 'map-pin',
      content: 'We collect and use location data for specific purposes:\n\n• Real-Time Tracking: GPS location during active bookings to track shipments and provide accurate ETAs.\n\n• Route Optimization: Historical location data to optimize routes and improve delivery efficiency.\n\n• Service Availability: Determining service availability in your area.\n\n• Fraud Prevention: Verifying location for security purposes.\n\nYou can control location permissions through device settings:\n\n• Always Allow: For continuous tracking during active bookings.\n• While Using: For one-time location access.\n• Never: Location features will be limited.\n\nDisabling location services may prevent you from using certain features like real-time tracking and booking.',
    },
    {
      id: '12',
      title: 'International Data Transfers',
      icon: 'globe',
      content: 'Your data may be transferred and processed in different locations:\n\n• Primary Storage: Data is primarily stored in secure servers located in India.\n\n• Cloud Services: We use international cloud service providers (AWS, Google Cloud) with data centers in multiple countries.\n\n• Cross-Border Transfers: Some third-party service providers may be located outside India. We ensure they comply with applicable data protection laws.\n\n• Safeguards: We use standard contractual clauses, data processing agreements, and other legal mechanisms to protect your data during international transfers.\n\n• EU/EEA Users: If you are in the EU/EEA, your data may be transferred to countries with different data protection standards. We ensure appropriate safeguards are in place.',
    },
    {
      id: '13',
      title: 'Data Breach Notification',
      icon: 'alert-circle',
      content: 'In the event of a data breach:\n\n• Detection: We have systems in place to detect potential security incidents promptly.\n\n• Assessment: Our security team will assess the nature and scope of the breach.\n\n• Containment: Immediate action will be taken to contain and mitigate the breach.\n\n• Notification: If the breach poses a risk to your rights and privacy, we will notify you within 72 hours via email, SMS, or in-app notification.\n\n• Authority Reporting: We will report significant breaches to relevant data protection authorities as required by law.\n\n• Remediation: We will take necessary steps to prevent future incidents and may offer identity protection services if warranted.\n\nYou will be informed about the nature of the breach, affected data, and recommended actions to protect yourself.',
    },
    {
      id: '14',
      title: 'Changes to Privacy Policy',
      icon: 'refresh-cw',
      content: 'We may update this Privacy Policy periodically:\n\n• Notification: Significant changes will be notified through email, in-app notifications, or prominent notice on our website.\n\n• Review Period: You will have 30 days to review changes before they take effect.\n\n• Continued Use: Continued use of our services after changes take effect constitutes acceptance of the updated policy.\n\n• Version History: Previous versions of the policy are available upon request.\n\n• Material Changes: For substantial changes affecting your rights, we may seek explicit consent.\n\nWe recommend reviewing this policy periodically to stay informed about how we protect your information. The "Last Updated" date at the top indicates when the policy was last modified.',
    },
    {
      id: '15',
      title: 'Contact Us',
      icon: 'mail',
      content: 'For privacy-related questions, concerns, or requests:\n\n📧 Email: privacy@cloudtrucking.com\n📞 Phone: +91 1800-123-4567\n📍 Address:\nData Protection Officer\nCloud Trucking Pvt. Ltd.\nBhopal, Madhya Pradesh, India\n\n• Response Time: We aim to respond to all privacy inquiries within 72 hours.\n\n• Data Protection Officer: You can contact our DPO directly for privacy concerns.\n\n• Grievance Officer: For complaints, contact grievance@cloudtrucking.com\n\n• Regulatory Authority: You may also file complaints with:\nMinistry of Electronics and Information Technology (MeitY)\nData Protection Authority of India\n\nWe take your privacy seriously and are committed to addressing your concerns promptly and transparently.',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
    },
    header: {
      backgroundColor: isDarkMode ? dark33 : white,
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      color: isDarkMode ? white : '#000',
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 100,
    },
    introCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    introHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    introIconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '15',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    introTitle: {
      flex: 1,
      fontSize: 15,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
    },
    introText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 20,
      marginBottom: 8,
    },
    lastUpdated: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
      marginTop: 4,
    },
    privacyCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      marginBottom: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    privacyHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    privacyIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDarkMode ? App_Primary_color + '20' : App_Primary_color + '15',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    privacyTitleContainer: {
      flex: 1,
    },
    privacyNumber: {
      fontSize: 11,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
      color: App_Primary_color,
      marginBottom: 2,
    },
    privacyTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      lineHeight: 20,
    },
    expandIconContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: isDarkMode ? darkMode25 : '#F5F6F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    },
    privacyContentContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? dark55 : '#F0F0F0',
    },
    privacyContent: {
      fontSize: 13,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 22,
      marginTop: 12,
    },
    commitmentCard: {
      backgroundColor: isDarkMode ? dark33 : white,
      borderRadius: 16,
      padding: 16,
      marginTop: 8,
      borderLeftWidth: 4,
      borderLeftColor: App_Primary_color,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    commitmentTitle: {
      fontSize: 14,
      fontFamily: FONTS_FAMILY.Poppins_SemiBold,
      color: isDarkMode ? white : '#000',
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    commitmentText: {
      fontSize: 12,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
      color: isDarkMode ? '#999' : '#666',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkMode ? dark33 : white} 
      />

      <View style={styles.header}>
        <View style={styles.headerContent}>
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
          <Text style={styles.headerTitle}>Privacy Policy</Text>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.introCard}>
          <View style={styles.introHeader}>
            <View style={styles.introIconContainer}>
              <MaterialIcons 
                name="privacy-tip" 
                size={24} 
                color={App_Primary_color} 
              />
            </View>
            <Text style={styles.introTitle}>Your Privacy Matters</Text>
          </View>
          <Text style={styles.introText}>
            At Cloud Trucking, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our services.
          </Text>
          <Text style={styles.lastUpdated}>
            📅 Last Updated: November 28, 2025
          </Text>
        </View>

        {privacyData.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.privacyCard}
            activeOpacity={0.7}
            onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            <View style={styles.privacyHeader}>
              <View style={styles.privacyIconContainer}>
                <Feather 
                  name={item.icon} 
                  size={20} 
                  color={App_Primary_color} 
                />
              </View>
              
              <View style={styles.privacyTitleContainer}>
                <Text style={styles.privacyNumber}>{index + 1}. Privacy Section</Text>
                <Text style={styles.privacyTitle}>{item.title}</Text>
              </View>

              <View style={styles.expandIconContainer}>
                <Ionicons 
                  name={expandedId === item.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={isDarkMode ? white : '#000'} 
                />
              </View>
            </View>
            
            {expandedId === item.id && (
              <View style={styles.privacyContentContainer}>
                <Text style={styles.privacyContent}>{item.content}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <View style={styles.commitmentCard}>
          <Text style={styles.commitmentTitle}>
            <Ionicons name="shield-checkmark" size={18} color={App_Primary_color} />
            {' '}Our Commitment to You
          </Text>
          <Text style={styles.commitmentText}>
            We are dedicated to maintaining the highest standards of data privacy and security. Your trust is our priority, and we continuously work to enhance our privacy practices. If you have any questions or concerns about how we handle your data, please don't hesitate to contact us.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen