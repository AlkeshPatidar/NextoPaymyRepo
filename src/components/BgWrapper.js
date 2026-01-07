import React from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  StatusBar, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';

const BgWrapper = ({ 
  children, 
  source, // Image source (local ya remote)
  scrollable = false, // Scrollable chahiye?
  statusBarStyle = 'light-content',
  statusBarBg = 'transparent',
  imageStyle = {},
  containerStyle = {},
  resizeMode = 'cover'
}) => {
  const ContentWrapper = scrollable ? ScrollView : SafeAreaView;
  
  return (
    <>
      <StatusBar 
        barStyle={statusBarStyle} 
        backgroundColor={statusBarBg}
        translucent 
      />
      <ImageBackground
        source={source}
        style={[styles.background, containerStyle]}
        imageStyle={[styles.image, imageStyle]}
        resizeMode={resizeMode}
      >
        <ContentWrapper 
          style={styles.contentContainer}
          contentContainerStyle={scrollable ? styles.scrollContent : undefined}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ContentWrapper>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    opacity: 0.9, // Background image opacity adjust kar sakte ho
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default BgWrapper;