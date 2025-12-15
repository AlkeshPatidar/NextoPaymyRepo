import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
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

const WebViewScreen = ({ navigation, route }) => {
  const { isDarkMode } = useSelector(state => state.theme);
  const webViewRef = useRef(null);
  
  // Get URL and title from route params
  const { url = 'https://services.gst.gov.in/services/searchtp', title = 'Search GST' } = route?.params || {};
  
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(url);

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
    setCurrentUrl(navState.url);
  };

  const handleGoBack = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const handleGoForward = () => {
    if (webViewRef.current && canGoForward) {
      webViewRef.current.goForward();
    }
  };

  const handleRefresh = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

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
        
        <View style={styles.headerCenter}>
          <Text 
            style={[
              styles.headerTitle,
              { color: isDarkMode ? white : '#000' }
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={handleRefresh}
          >
            <Ionicons
              name="reload"
              size={22}
              color={isDarkMode ? white : '#000'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* WebView Navigation Controls */}
      {/* <View style={[
        styles.navigationBar,
        { 
          backgroundColor: isDarkMode ? dark33 : white,
          borderBottomColor: isDarkMode ? dark55 : '#E0E0E0'
        }
      ]}>
        <TouchableOpacity
          style={[
            styles.navButton,
            !canGoBack && styles.navButtonDisabled
          ]}
          activeOpacity={0.7}
          onPress={handleGoBack}
          disabled={!canGoBack}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={canGoBack ? (isDarkMode ? white : '#000') : '#999'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            !canGoForward && styles.navButtonDisabled
          ]}
          activeOpacity={0.7}
          onPress={handleGoForward}
          disabled={!canGoForward}
        >
          <Ionicons
            name="chevron-forward"
            size={24}
            color={canGoForward ? (isDarkMode ? white : '#000') : '#999'}
          />
        </TouchableOpacity>

        <View style={styles.urlContainer}>
          <MaterialCommunityIcons
            name="web"
            size={16}
            color={isDarkMode ? '#999' : '#666'}
          />
          <Text 
            style={[
              styles.urlText,
              { color: isDarkMode ? '#999' : '#666' }
            ]}
            numberOfLines={1}
          >
            {currentUrl}
          </Text>
        </View>
      </View> */}

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={App_Primary_color} />
          <Text style={[
            styles.loadingText,
            { color: isDarkMode ? white : '#666' }
          ]}>
            Loading...
          </Text>
        </View>
      )}

      {/* WebView */}
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        style={styles.webview}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsBackForwardNavigationGestures={true}
        mixedContentMode="compatibility"
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
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
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
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
  headerCenter: {
    flex: 1,
    marginHorizontal: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS_FAMILY.Poppins_SemiBold,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  navButtonDisabled: {
    opacity: 0.4,
  },
  urlContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 8,
  },
  urlText: {
    flex: 1,
    fontSize: 12,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
    transform: [{ translateY: -50 }],
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: FONTS_FAMILY.Poppins_Medium,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default WebViewScreen;