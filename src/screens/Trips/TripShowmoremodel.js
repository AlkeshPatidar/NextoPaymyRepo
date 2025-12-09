// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     Modal,
//     TouchableOpacity,
//     ScrollView,
//     Dimensions,
// } from 'react-native';
// import { FONTS_FAMILY } from '../../assets/Fonts';
// import {
//     dark33,
//     darkMode25,
//     white
// } from '../../common/Colors/colors';

// const { height } = Dimensions.get('window');

// const TripShowMoreModel = ({ visible, onClose, isDarkMode, trackingData }) => {
//     // Default tracking data
//     const defaultData = {
//         status: 'Intransit',
//         tat: 'TAT 2d',
//         distance: '1480km',
//         steps: [
//             {
//                 id: 1,
//                 title: 'Loading',
//                 time: '- 23:00',
//                 status: 'completed'
//             },
//             {
//                 id: 2,
//                 title: 'Intransit',
//                 time: '07-Dec 00:00',
//                 status: 'active'
//             },
//             {
//                 id: 3,
//                 title: 'Unloading',
//                 time: '',
//                 status: 'pending'
//             },
//             {
//                 id: 4,
//                 title: 'Delivereding',
//                 time: '',
//                 status: 'pending'
//             },
//             // {
//             //     id: 5,
//             //     title: 'PODVer',
//             //     time: '',
//             //     status: 'pending'
//             // }
//         ]
//     };

//     const data = trackingData || defaultData;

//     const renderStep = (step, index, steps) => {
//         const isCompleted = step.status === 'completed';
//         const isActive = step.status === 'active';
//         const isPending = step.status === 'pending';
//         const isLast = index === steps.length - 1;

//         return (
//             <View key={step.id} style={styles.stepWrapper}>
//                 {/* Circle and Line Container */}
//                 <View style={styles.circleLineContainer}>
//                     {/* Circle */}
//                     <View style={[
//                         styles.stepCircle,
//                         isCompleted && styles.stepCircleCompleted,
//                         isActive && styles.stepCircleActive,
//                         isPending && styles.stepCirclePending
//                     ]}>
//                         {(isCompleted || isActive) && (
//                             <View style={styles.innerCircle} />
//                         )}
//                     </View>

//                     {/* Connecting Line */}
//                     {!isLast && (
//                         <View style={[
//                             styles.connectingLine,
//                             (isCompleted) && styles.connectingLineCompleted,
//                             (isActive && index === 0) && styles.connectingLineCompleted,
//                             (isPending || (isActive && index > 0)) && styles.connectingLinePending
//                         ]} />
//                     )}
//                 </View>

//                 {/* Step Title and Time */}
//                 <View style={styles.stepTextContainer}>
//                     <Text style={[
//                         styles.stepTitle,
//                         { color: isDarkMode ? white : '#000' },
//                         (isCompleted || isActive) && styles.stepTitleActive
//                     ]}>
//                         {step.title}
//                     </Text>
//                     {step.time !== '' && (
//                         <Text style={[styles.stepTime, { color: isDarkMode ? '#999' : '#666' }]}>
//                             {step.time}
//                         </Text>
//                     )}
//                 </View>
//             </View>
//         );
//     };

//     const styles = StyleSheet.create({
//         modalOverlay: {
//             flex: 1,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             justifyContent: 'flex-end',
//         },
//         modalContainer: {
//             backgroundColor: isDarkMode ? dark33 : white,
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             paddingBottom: 30,
//         },
//         modalHandle: {
//             width: 40,
//             height: 4,
//             backgroundColor: isDarkMode ? '#444' : '#DDD',
//             borderRadius: 2,
//             alignSelf: 'center',
//             marginTop: 12,
//             marginBottom: 20,
//         },
//         modalContent: {
//             paddingHorizontal: 16,
//         },
//         headerRow: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: 16,
//         },
//         headerLeft: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             gap: 6,
//         },
//         statusText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_SemiBold,
//             color: isDarkMode ? white : '#000',
//         },
//         tatText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//             color: isDarkMode ? white : '#000',
//         },
//         distanceText: {
//             fontSize: 13,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//             color: isDarkMode ? white : '#000',
//         },
//         stepsScrollContainer: {
//             paddingVertical: 10,
//             // borderWidth:0.5,
//             // flexGrow:1
//         },
//         stepsContainer: {
//             flexDirection: 'row',
//             // alignItems: 'flex-start',
//         },
//         stepWrapper: {
//             // alignItems: 'flex-start',
//             width: 85,
//         },
//         circleLineContainer: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             height: 20,
//             marginBottom: 8,
//         },
//         stepCircle: {
//             width: 20,
//             height: 20,
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderWidth: 2,
//             backgroundColor: white,
//         },
//         stepCircleCompleted: {
//             borderColor: '#0D47A1',
//             backgroundColor: '#0D47A1',
//         },
//         stepCircleActive: {
//             borderColor: '#0D47A1',
//             backgroundColor: '#0D47A1',
//         },
//         stepCirclePending: {
//             borderColor: '#BDBDBD',
//             backgroundColor: white,
//         },
//         innerCircle: {
//             width: 8,
//             height: 8,
//             borderRadius: 4,
//             backgroundColor: white,
//         },
//         connectingLine: {
//             height: 2,
//             flex: 1,
//             marginLeft: 2,
//         },
//         connectingLineCompleted: {
//             backgroundColor: '#0D47A1',
//         },
//         connectingLinePending: {
//             backgroundColor: '#E0E0E0',
//         },
//         stepTextContainer: {
//             alignItems: 'flex-start',
//             paddingRight: 8,
//         },
//         stepTitle: {
//             fontSize: 11,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//             marginBottom: 2,
//         },
//         stepTitleActive: {
//             color: '#000',
//         },
//         stepTime: {
//             fontSize: 10,
//             fontFamily: FONTS_FAMILY.Poppins_Regular,
//         },
//         locationRow: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginBottom: 5,
//         },
//         locationDot: {
//             width: 8,
//             height: 8,
//             borderRadius: 4,
//             marginRight: 8,
//         },
//         locationText: {
//             fontSize: 12,
//             fontFamily: FONTS_FAMILY.Poppins_Medium,
//         },
//     });

//     return (
//         <Modal
//             visible={visible}
//             transparent
//             animationType="slide"
//             onRequestClose={onClose}
//         >
//             <TouchableOpacity
//                 style={styles.modalOverlay}
//                 activeOpacity={1}
//                 onPress={onClose}
//                 pointerEvents="box-none"
//             >
//                 {/* <TouchableOpacity
//                     activeOpacity={1}
//                     onPress={(e) => e.stopPropagation()}
//                 > */}
//                 <View onStartShouldSetResponder={() => true}
//                     style={{ width: '100%' }}
//                 >
//                     <View style={styles.modalContainer}>
//                         {/* Handle */}
//                         <View style={styles.modalHandle} />

//                         <View style={styles.modalContent}>
//                             {/* Header Row */}
//                             <Text style={{ ...styles.distanceText, fontFamily: FONTS_FAMILY.Poppins_SemiBold }}>{'#68789876'} {'|'} {'HR55AU8876'}{'(SLX)'}</Text>
//                             <View style={styles.headerRow}>
//                                 <View style={styles.headerLeft}>
//                                     <Text style={styles.statusText}>{data.status}</Text>
//                                     <Text style={styles.tatText}>| {data.tat}</Text>
//                                     <Text style={styles.distanceText}>{data.distance}</Text>
//                                 </View>
//                                 <View style={{ bottom: 18 }}>
//                                     <Text style={{ ...styles.distanceText, fontFamily: FONTS_FAMILY.Poppins_SemiBold }}>{'Intransit'}</Text>
//                                     <Text style={{ ...styles.distanceText, }}>{'Rs. 62600'}</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.locationRow}>
//                                 <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
//                                 <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//                                     {'Indore'}
//                                 </Text>
//                             </View>

//                             {/* To Location */}
//                             <View style={styles.locationRow}>
//                                 <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
//                                 <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
//                                     {'Ahmdabad'}
//                                 </Text>
//                             </View>
//                             <View style={{ height: 200 }} />
//                             {/* Horizontal Scrollable Steps */}
//                             <ScrollView
//                                 horizontal
//                                 showsHorizontalScrollIndicator={false}
//                                 // contentContainerStyle={styles.stepsScrollContainer}
//                                 style={{ maxHeight: 120, }}
//                                 contentContainerStyle={{ flexDirection: "row" }}
//                             >
//                                 <View style={styles.stepsContainer}>
//                                     {data.steps.map((step, index) =>
//                                         renderStep(step, index, data.steps)
//                                     )}
//                                 </View>
//                             </ScrollView>
//                         </View>
//                     </View>
//                     {/* </TouchableOpacity> */}
//                 </View>
//             </TouchableOpacity>
//         </Modal>
//     );
// };

// export default TripShowMoreModel;


import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { FONTS_FAMILY } from '../../assets/Fonts';
import {
    dark33,
    darkMode25,
    white
} from '../../common/Colors/colors';

const { height } = Dimensions.get('window');

const TripShowMoreModel = ({ visible, onClose, isDarkMode, trackingData }) => {
    // Default tracking data
    const defaultData = {
        status: 'Intransit',
        tat: 'TAT 2d',
        distance: '1480km',
        steps: [
            {
                id: 1,
                title: 'Loading',
                time: '- 23:00',
                status: 'completed'
            },
            {
                id: 2,
                title: 'Intransit',
                time: '07-Dec 00:00',
                status: 'active'
            },
            {
                id: 3,
                title: 'Unloading',
                time: '',
                status: 'pending'
            },
            {
                id: 4,
                title: 'Delivereding',
                time: '',
                status: 'pending'
            },
            // {
            //     id: 5,
            //     title: 'PODVer',
            //     time: '',
            //     status: 'pending'
            // }
        ]
    };

    const data = trackingData || defaultData;

    const renderStep = (step, index, steps) => {
        const isCompleted = step.status === 'completed';
        const isActive = step.status === 'active';
        const isPending = step.status === 'pending';
        const isLast = index === steps.length - 1;

        return (
            <View key={step.id} style={styles.stepWrapper}>
                {/* Circle and Line Container */}
                <View style={styles.circleLineContainer}>
                    {/* Circle */}
                    <View style={[
                        styles.stepCircle,
                        isCompleted && styles.stepCircleCompleted,
                        isActive && styles.stepCircleActive,
                        isPending && styles.stepCirclePending
                    ]}>
                        {(isCompleted || isActive) && (
                            <View style={styles.innerCircle} />
                        )}
                    </View>

                    {/* Connecting Line */}
                    {!isLast && (
                        <View style={[
                            styles.connectingLine,
                            (isCompleted) && styles.connectingLineCompleted,
                            (isActive && index === 0) && styles.connectingLineCompleted,
                            (isPending || (isActive && index > 0)) && styles.connectingLinePending
                        ]} />
                    )}
                </View>

                {/* Step Title and Time */}
                <View style={styles.stepTextContainer}>
                    <Text style={[
                        styles.stepTitle,
                        { color: isDarkMode ? white : '#000' },
                        (isCompleted || isActive) && styles.stepTitleActive
                    ]}>
                        {step.title}
                    </Text>
                    {step.time !== '' && (
                        <Text style={[styles.stepTime, { color: isDarkMode ? '#999' : '#666' }]}>
                            {step.time}
                        </Text>
                    )}
                </View>
            </View>
        );
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
            paddingBottom: 30,
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
            paddingHorizontal: 16,
        },
        headerRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
        },
        headerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        statusText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_SemiBold,
            color: isDarkMode ? white : '#000',
        },
        tatText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
        },
        distanceText: {
            fontSize: 13,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
            color: isDarkMode ? white : '#000',
        },
        stepsScrollContainer: {
            paddingVertical: 10,
            // borderWidth:0.5,
            // flexGrow:1
        },
        stepsContainer: {
            flexDirection: 'row',
            // alignItems: 'flex-start',
        },
        stepWrapper: {
            // alignItems: 'flex-start',
            width: 85,
        },
        circleLineContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 20,
            marginBottom: 8,
        },
        stepCircle: {
            width: 20,
            height: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            backgroundColor: white,
        },
        stepCircleCompleted: {
            borderColor: '#0D47A1',
            backgroundColor: '#0D47A1',
        },
        stepCircleActive: {
            borderColor: '#0D47A1',
            backgroundColor: '#0D47A1',
        },
        stepCirclePending: {
            borderColor: '#BDBDBD',
            backgroundColor: white,
        },
        innerCircle: {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: white,
        },
        connectingLine: {
            height: 2,
            flex: 1,
            marginLeft: 2,
        },
        connectingLineCompleted: {
            backgroundColor: '#0D47A1',
        },
        connectingLinePending: {
            backgroundColor: '#E0E0E0',
        },
        stepTextContainer: {
            alignItems: 'flex-start',
            paddingRight: 8,
        },
        stepTitle: {
            fontSize: 11,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
            marginBottom: 2,
        },
        stepTitleActive: {
            color: '#000',
        },
        stepTime: {
            fontSize: 10,
            fontFamily: FONTS_FAMILY.Poppins_Regular,
        },
        locationRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
        },
        locationDot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            marginRight: 8,
        },
        locationText: {
            fontSize: 12,
            fontFamily: FONTS_FAMILY.Poppins_Medium,
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
                {/* <TouchableOpacity
                    activeOpacity={1}
                    onPress={(e) => e.stopPropagation()}
                > */}
                <View onStartShouldSetResponder={() => true}
                    style={{ width: '100%' }}
                >
                    <View style={styles.modalContainer}>
                        {/* Handle */}
                        <View style={styles.modalHandle} />

                        <View style={styles.modalContent}>
                            {/* Header Row */}
                            <Text style={{ ...styles.distanceText, fontFamily: FONTS_FAMILY.Poppins_SemiBold }}>{'#68789876'} {'|'} {'HR55AU8876'}{'(SLX)'}</Text>
                            <View style={styles.headerRow}>
                                <View style={styles.headerLeft}>
                                    <Text style={styles.statusText}>{data.status}</Text>
                                    <Text style={styles.tatText}>| {data.tat}</Text>
                                    <Text style={styles.distanceText}>{data.distance}</Text>
                                </View>
                                <View style={{ bottom: 18 }}>
                                    <Text style={{ ...styles.distanceText, fontFamily: FONTS_FAMILY.Poppins_SemiBold }}>{'Intransit'}</Text>
                                    <Text style={{ ...styles.distanceText, }}>{'Rs. 62600'}</Text>
                                </View>
                            </View>
                            <View style={styles.locationRow}>
                                <View style={[styles.locationDot, { backgroundColor: '#4CAF50' }]} />
                                <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
                                    {'Indore'}
                                </Text>
                            </View>

                            {/* To Location */}
                            <View style={styles.locationRow}>
                                <View style={[styles.locationDot, { backgroundColor: '#FF9800' }]} />
                                <Text style={[styles.locationText, { color: isDarkMode ? white : '#000' }]}>
                                    {'Ahmdabad'}
                                </Text>
                            </View>
                            <View style={{ height: 200 }} />
                            {/* Horizontal Scrollable Steps */}
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                // contentContainerStyle={styles.stepsScrollContainer}
                                style={{ maxHeight: 120, }}
                                // contentContainerStyle={{ flexDirection: "row" }}
                            >
                                <View style={styles.stepsContainer}>
                                    {data.steps.map((step, index) =>
                                        renderStep(step, index, data.steps)
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    {/* </TouchableOpacity> */}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default TripShowMoreModel;