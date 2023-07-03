import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native'

import Slides from './Slides';
import { color } from '../../../theme/colors';
import Button from '../../../components/commons/Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics';
import { fontSize, fontWeight } from '../../../theme/fonts';
import Icon from '../../../assets/icons/Icon';



const IntroSlides = () => {
    const navigation = useNavigation()

    const slidesContent = [
        {
            key: 'one',
            title: 'Choose Product',
            text: 'A product is the item offered for a sale. A product can be a service or an item. It can be physical or in virtual or cyber form',
            // logo: <Icon
            //     name="ChooseProduct"
            //     fill={color.Black}
            //     width={wp(80)}
            //     height={hp(38)}
            //     style={{ marginRight: wp(14), marginTop: hp(4) }}
            // />
        },
        {
            key: 'two',
            title: 'Make Payment',
            text: 'Payment is the transfer of money services in exchange product or Payments typically made terms agreed',
            // logo: <Icon
            //     name="MakePayment"
            //     fill={color.Black}
            //     width={wp(65)}
            //     height={hp(38)}
            //     style={{ marginRight: wp(14), marginTop: hp(4) }}
            // />
        },
        {
            key: 'three',
            title: 'Get Your Order',
            text: 'Business or ecommerce an order is stated intention either spoken to engage in a commercial transaction specific products.  ',
            // logo: <Icon
            //     name="GetOrder"
            //     fill={color.Black}
            //     width={wp(60)}
            //     height={hp(38)}
            //     style={{ marginRight: wp(14), marginTop: hp(4) }}
            // />
        },
    ]

    const renderSlides = ({ item }) => {
        return <Slides item={item} />;
    };

    // const renderSkipButton = () => {
    //     return (
    //         <TouchableOpacity style={styles.skipButton}>
    //             <Text style={styles.skipButtonText}>Skip</Text>
    //         </TouchableOpacity>
    //     );
    // };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.Gold }}>
            {/* <StatusBar /> */}
            <AppIntroSlider
                data={slidesContent}
                renderItem={renderSlides}
                // dotStyle={{ backgroundColor: color.Blue2 }}
                // activeDotStyle={{ backgroundColor: color.Blue }}
                // renderSkipButton={renderSkipButton}
                showDoneButton={false}
                showPrevButton={false}
                showNextButton={false}
            />
        </View>
    )
}

// const styles = StyleSheet.create({
//     skipButton: {
//         marginRight: 20,
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     skipButtonText: {
//         fontSize: 18,
//         color: 'red',
//     }
// })

export default IntroSlides;