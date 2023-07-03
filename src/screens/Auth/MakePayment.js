import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from '../../assets/icons/Icon'
import { color } from '../../theme/colors'
import { CardTitle } from '../../components/commons/Text'
import * as spacer from '../../components/commons/Spacers'
import { fontSize } from '../../theme/fonts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import Button from '../../components/commons/Button'

const MakePayment = ({ navigation }) => {
    return (
        <>
            <View style={styles.skip}>
                <Text style={styles.skipText}>2/3</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChooseProduct')}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Icon
                    name="MakePayment"
                    fill={color.Black}
                    width={wp(50)}
                    height={hp(35)}
                    style={{ marginRight: wp(14), marginTop: hp(4) }}
                />
                <spacer.s2 />
                <CardTitle style={{ fontSize: wp(7), fontWeight: '600' }}>
                    Make Payment
                </CardTitle>
                <spacer.s3 />
                <Text style={styles.text}>A product is the item offered for a sale. A product can be a service or an item. It can be physical or in virtual or cyber form</Text>
                <spacer.s7 />
                <Button title="Next" onClick={() => navigation.navigate('ChooseProduct')} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(3)
    },
    text: {
        lineHeight: hp(3.2),
        fontSize: wp(4.3),
        marginHorizontal: wp(4),
        textAlign: 'center',
        marginBottom: hp(6)
    },
    skip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: wp(2)
    },
    skipText: {
        fontSize: wp(5)
    },
})

export default MakePayment