import { View, Text } from 'react-native'
import React from 'react'

import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native'

import Slides from './IntroSlider/Slides';

import Icon from '../../assets/icons/Icon'
import { color } from '../../theme/colors'
import { CardTitle } from '../../components/commons/Text'
import * as spacer from '../../components/commons/Spacers'
import { fontSize } from '../../theme/fonts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'

const Slider = () => {
    const slidesContent = [
        {
            key: 'one',
            title: 'Choose Product',
            text: 'A product is the item offered for a sale. A product can be a service or an item. It can be physical or in virtual or cyber form',
            logo: <Icon
                name="ChooseProduct"
                fill={color.Black}
                width={wp(80)}
                height={hp(38)}
                style={{ marginRight: wp(14), marginTop: hp(4) }}
            />
        },
        {
            key: 'two',
            title: 'Make Payment',
            text: 'Payment is the transfer of money services in exchange product or Payments typically made terms agreed',
            logo: <Icon
                name="MakePayment"
                fill={color.Black}
                width={wp(65)}
                height={hp(38)}
                style={{ marginRight: wp(14), marginTop: hp(4) }}
            />
        },
        {
            key: 'three',
            title: 'Get Your Order',
            text: 'Business or ecommerce an order is stated intention either spoken to engage in a commercial transaction specific products.  ',
            logo: <Icon
                name="GetOrder"
                fill={color.Black}
                width={wp(60)}
                height={hp(38)}
                style={{ marginRight: wp(14), marginTop: hp(4) }}
            />
        },
    ]

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppIntroSlider


            />
        </View>
    )
}

export default Slider