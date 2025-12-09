import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
  Animated,
} from 'react-native'
import IMG from '../../assets/Images'
import { App_Primary_color, darkMode25, white } from '../../common/Colors/colors'
import { useSelector } from 'react-redux'
import { CartOnboarding } from '../../assets/SVGs'
import CustomText from '../../components/TextComponent'
import { FONTS_FAMILY } from '../../assets/Fonts'
import SpaceBetweenRow from '../../components/wrapper/spacebetween'
import CustomButton from '../../components/Button'

const { width, height } = Dimensions.get('window')

// Onboarding data
// Onboarding data
const onboardingData = [
  {
    id: '1',
    title: 'Find Loads',
    highlight: 'Instantly',
    description: 'Connect with verified shippers and find the best loads for your truck across India in real-time.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/027/843/401/small/a-cargo-truck-with-a-container-is-seen-driving-across-a-bridge-while-a-semi-truck-with-a-cargo-trailer-follows-closely-behind-photo.jpg', // Truck on highway
    backgroundColor: 'white',
  },
  {
    id: '2',
    title: 'Best Rates',
    highlight: 'Guaranteed',
    description: 'Get competitive freight rates with transparent pricing. No hidden charges, maximize your earnings on every trip.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtVkXSEyPOxRbCyd8w_hdn5ZTjmlnFHIIeA&s', // Logistics/warehouse
    backgroundColor: 'white',
  },
  {
    id: '3',
    title: 'Fast Payments',
    highlight: 'Assured',
    description: 'Complete your trips and get paid quickly. Track your earnings and manage payments seamlessly in one place.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80', // Truck loading
    backgroundColor: 'white',
  },
]

const OnboardingScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const flatListRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      })
    } else {
      navigation.navigate('Login')
    }
  }

  const handleSkip = () => {
    navigation.navigate('Login')
  }

  const OnboardingItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ]

    const imageScale = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7],
      extrapolate: 'clamp',
    })

    const imageOpacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp',
    })

    return (
      <View style={styles.slideContainer}>
        <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
          <Animated.Image
            source={{ uri: item.image }}
            style={[
              styles.illustration,
              {
                transform: [{ scale: imageScale }],
                opacity: imageOpacity,
              },
            ]}
            resizeMode="cover"
          />
        </View>

        <View style={styles.contentContainer}>
          <CustomText style={styles.title}>
            {item.title}{' '}
            <CustomText style={styles.highlighted}>{item.highlight}</CustomText>
          </CustomText>
          <CustomText style={styles.description}>
            {item.description}
          </CustomText>
        </View>
      </View>
    )
  }

  const Pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ]

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 40, 10],
            extrapolate: 'clamp',
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor: App_Primary_color,
                },
              ]}
            />
          )
        })}
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? darkMode25 : '#fff',
    },
    slideContainer: {
      width: width,
      flex: 1,
    },
    imageContainer: {
      height: height * 0.44,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      overflow: 'hidden',
    },
    illustration: {
      width: width ,
      height: width ,
      borderRadius: 20,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 30,
      paddingTop: 40,
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: isDarkMode ? white : '#000',
      fontFamily: FONTS_FAMILY.Poppins_Bold,
      lineHeight: 36,
    },
    highlighted: {
      color: App_Primary_color,
      fontFamily: FONTS_FAMILY.Poppins_Bold,
    },
    description: {
      fontSize: 15,
      color: isDarkMode ? white : '#666',
      marginTop: 15,
      lineHeight: 24,
      fontFamily: FONTS_FAMILY.Poppins_Regular,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      marginTop: 20,
    },
    dot: {
      height: 10,
      borderRadius: 5,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 40,
      left: 0,
      right: 0,
      paddingHorizontal: 30,
    },
    skipButton: {
      width: 140,
      borderRadius: 40,
      backgroundColor: '#F2F2F3',
    },
    nextButton: {
      width: 140,
      borderRadius: 40,
      backgroundColor: App_Primary_color,
    },
    skipText: {
      color: 'black',
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    nextText: {
      color: white,
      fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
  })

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor={isDarkMode ? darkMode25 : onboardingData[currentIndex].backgroundColor} 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
      />

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={({ item, index }) => <OnboardingItem item={item} index={index} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      <View style={{ paddingHorizontal: 30, paddingBottom: 20, position: 'absolute', bottom: 120, width: '100%'  }}>
        <Pagination />
      </View>

      <SpaceBetweenRow style={styles.buttonContainer}>
        <CustomButton
          style={styles.skipButton}
          title="Skip"
          txtColor={styles.skipText}
          onPress={handleSkip}
        />
        <CustomButton
          style={styles.nextButton}
          title={currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          txtColor={styles.nextText}
          onPress={handleNext}
        />
      </SpaceBetweenRow>
    </View>
  )
}

export default OnboardingScreen