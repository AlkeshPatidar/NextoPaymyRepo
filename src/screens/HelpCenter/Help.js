import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import { App_Primary_color, white } from '../../common/Colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IMG from '../../assets/Images';

const HelpScreen = ({ navigation }) => {
    const chatMessages = [
        {
            id: '1',
            type: 'user',
            message: 'Issue with the recharge plan benefits',
            time: '10:30 AM',
        },
        {
            id: '2',
            type: 'support',
            message: 'I understand how frustrating that must be. I\'m here to help you with your concern.',
            time: '10:31 AM',
        },
        {
            id: '3',
            type: 'support',
            message: 'Could you please tell me more?',
            time: '10:31 AM',
        },
        {
            id: '4',
            type: 'user',
            message: 'I have received a different plan',
            time: '10:32 AM',
        },
        {
            id: '5',
            type: 'support',
            message: 'I\'m sorry, that should not have happened.',
            time: '10:33 AM',
        },
        {
            id: '6',
            type: 'support',
            message: 'Please check the SMS confirmation sent to your registered mobile number.',
            time: '10:33 AM',
        },
        {
            id: '7',
            type: 'support',
            message: 'If the plan is different from the one you selected, we\'ll immediately recharge with the right plan at no additional cost. We\'ll also refund any extra charges if applicable. Your trust in us is important, and we hope this information was helpful!',
            time: '10:34 AM',
        },
        {
            id: '8',
            type: 'user',
            message: 'Thanks for the quick response. As per the SMS confirmation, I see the ticket 19245232 was created for refund. Can you please check?',
            time: '10:35 AM',
        },
    ];

    const ChatBubble = ({ message, type, time }) => {
        const isUser = type === 'user';
        
        return (
            <View style={[
                styles.chatBubbleContainer,
                isUser ? styles.userBubbleContainer : styles.supportBubbleContainer
            ]}>
                {!isUser && (
                    <View style={styles.supportAvatar}>
                        <Image 
                            source={IMG.NextoPayLogo} 
                            style={styles.avatarImage}
                            resizeMode="contain"
                        />
                    </View>
                )}
                
                <View style={[
                    styles.chatBubble,
                    isUser ? styles.userBubble : styles.supportBubble
                ]}>
                    <Text style={[
                        styles.chatText,
                        isUser ? styles.userChatText : styles.supportChatText
                    ]}>
                        {message}
                    </Text>
                    <Text style={[
                        styles.chatTime,
                        isUser ? styles.userChatTime : styles.supportChatTime
                    ]}>
                        {time}
                    </Text>
                </View>

                {isUser && (
                    <View style={styles.userAvatar}>
                        <Image 
                            source={IMG.BharatPay} 
                            style={styles.userAvatarImage}
                            resizeMode="cover"
                        />
                    </View>
                )}
            </View>
        );
    };

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
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Help</Text>
                    </View>
                    
                    <View style={styles.headerRight}>
                        <View style={styles.ticketContainer}>
                            <Text style={styles.ticketLabel}>View Tickets</Text>
                            <Text style={styles.ticketNumber}>OPEN TICKET - 0</Text>
                        </View>
                        <TouchableOpacity style={styles.headerIcon}>
                            <Ionicons name="ellipsis-vertical" size={20} color={App_Primary_color} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Chat Messages */}
            <ScrollView
                style={styles.chatContainer}
                contentContainerStyle={styles.chatContent}
                showsVerticalScrollIndicator={false}
            >
                {chatMessages.map((msg) => (
                    <ChatBubble
                        key={msg.id}
                        message={msg.message}
                        type={msg.type}
                        time={msg.time}
                    />
                ))}
            </ScrollView>

            {/* Input Area */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TouchableOpacity style={styles.attachButton}>
                        <Ionicons name="attach" size={22} color="#666" />
                    </TouchableOpacity>
                    
                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputPlaceholder}>Type a message...</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.sendButton}>
                        <Ionicons name="send" size={20} color={white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3FF',
    },
    
    // Header Styles
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
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    ticketContainer: {
        alignItems: 'flex-end',
    },
    ticketLabel: {
        fontSize: 10,
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        color: '#666',
    },
    ticketNumber: {
        fontSize: 9,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: '#999',
    },
    headerIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLine: {
        height: 3,
        width: '100%',
        backgroundColor: App_Primary_color,
        bottom: 10,
    },

    // Chat Container
    chatContainer: {
        flex: 1,
        backgroundColor: '#F5F3FF',
    },
    chatContent: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

    // Chat Bubble Styles
    chatBubbleContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'flex-end',
    },
    userBubbleContainer: {
        justifyContent: 'flex-end',
    },
    supportBubbleContainer: {
        justifyContent: 'flex-start',
    },

    // Avatar Styles
    supportAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: white,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    avatarImage: {
        width: 24,
        height: 24,
    },
    userAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: white,
        marginLeft: 8,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    userAvatarImage: {
        width: 32,
        height: 32,
    },

    // Bubble Styles
    chatBubble: {
        maxWidth: '75%',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    userBubble: {
        backgroundColor: App_Primary_color,
        borderBottomRightRadius: 4,
    },
    supportBubble: {
        backgroundColor: white,
        borderBottomLeftRadius: 4,
    },
    chatText: {
        fontSize: 12,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        lineHeight: 18,
        marginBottom: 4,
    },
    userChatText: {
        color: white,
    },
    supportChatText: {
        color: '#333',
    },
    chatTime: {
        fontSize: 9,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    userChatTime: {
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'right',
    },
    supportChatTime: {
        color: '#999',
        textAlign: 'left',
    },

    // Input Container
    inputContainer: {
        backgroundColor: white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    attachButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        minHeight: 40,
        justifyContent: 'center',
    },
    inputPlaceholder: {
        fontSize: 13,
        fontFamily: FONTS_FAMILY.Poppins_Regular,
        color: '#999',
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: App_Primary_color,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});

export default HelpScreen;