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
import IMG, { AppLogo } from '../../assets/Images';
import Row from '../../components/wrapper/row';
import { NextoPayLogo } from '../../assets/SVGs/index'
import CustomButton from '../../components/Button';
import CustomText from '../../components/TextComponent';

const IntroducingHome = ({ navigation }) => {
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
        headerLine: {
            height: 3,
            width: '100%',
            backgroundColor: App_Primary_color,
            bottom: 10,
        },
        scrollContent: {
            paddingBottom: 20,
            paddingHorizontal: 20,
            alignItems: 'center',
            flex:1
        },
        logoContainer: {
            marginTop: 30,
            marginBottom: 20,
            alignItems: 'center',
        },
        logoCircle: {
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: App_Primary_color,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
        },
        logoText: {
            fontSize: 40,
            color: white,
        },
        introducingText: {
            fontSize: 14,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            marginBottom: 5,
        },
        nextopayText: {
            fontSize: 24,
            fontFamily: FONTS_FAMILY.Poppins_Bold,
            color: App_Primary_color,
        },
        subtitleText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#666',
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 30,
        },
        illustrationContainer: {
            width: '100%',
            height: 200,
            backgroundColor: '#E8E4FF',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
           
        },
        illustrationPlaceholder: {
            fontSize: 100,
        },
        advantageSection: {
            width: '100%',
            marginTop: 20,
            paddingHorizontal:16
        },
        advantageTitle: {
            fontSize: 16,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            marginBottom: 15,
        },
        advantageCards: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
        },
        advantageCard: {
            flex: 1,
            backgroundColor: white,
            borderRadius: 8,
            padding: 8,
            // alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        advantageIcon: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#F5F3FF',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
        },
        advantageIconText: {
            fontSize: 24,
        },
        advantageCardTitle: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: '#1A1A1A',
            // textAlign: 'center',
            // marginBottom: 5,
        },
        advantageCardSubtitle: {
            fontSize: 10,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: '#999',
            textAlign: 'center',
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
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color={App_Primary_color} />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Introducing</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.headerLine} />

            {/* Main Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={{ backgroundColor: 'white', width: '100%', elevation: 1, borderRadius: 8, paddingVertical:15 }}>
                    <View style={{ alignSelf: 'center',  alignItems:'center' }}>
                        <Text style={{ ...styles.advantageTitle, color: App_Primary_color, }}>Introducing</Text>
                        <Row style={{
                            alignSelf:'center'
                        }}>
                            <Image source={IMG.NextoPayLogo}
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                                resizeMode='contain'
                            />
                            <CustomButton
                                style={{
                                    height: 30,
                                    width: 110,
                                    borderRadius: 8
                                }}
                                title={'Nextopay'}
                                onPress={()=>navigation.navigate('IntroducingMultiSteps')}
                            />
                        </Row>
                        <CustomText style={{
                            fontSize:14,
                            color:'#85949F',
                            marginTop:14
                        }}>Now earn more then your commision</CustomText>


                    </View>
                    <Image
                    source={IMG.introducingBanner}
                    style={{width:'100%',
                        height:300
                    }}
                    />
                      {/* Advantage Section */}
                <View style={styles.advantageSection}>
                    <Text style={styles.advantageTitle}>Advantage to become Merchant</Text>

                    <View style={styles.advantageCards}>
                        <View style={styles.advantageCard}>
                            <View style={styles.advantageIcon}>
                                <Text style={styles.advantageIconText}>💰</Text>
                            </View>
                            <Text style={styles.advantageCardTitle}>Instant {'\n'} Cashback</Text>
                        </View>

                        <View style={styles.advantageCard}>
                            <View style={styles.advantageIcon}>
                                <Text style={styles.advantageIconText}>💵</Text>
                            </View>
                            <Text style={styles.advantageCardTitle}>Maximum{'\n'} Cashback</Text>
                        </View>
                    </View>
                </View>
                </View>

               

              
            </ScrollView>
        </View>
    );
};

export default IntroducingHome;