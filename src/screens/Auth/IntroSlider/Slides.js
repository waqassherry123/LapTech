import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../../../assets/icons/Icon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics'
import * as spacer from '../../../utils/spacer'
import { CardTitle } from '../../../components/commons/Text'

const Slides = ({ item }) => {
    return (
        <View style={styles.container}>
            {item.logo}
            <CardTitle style={{ fontSize: wp(7), fontWeight: '600', marginTop: hp(3) }}>
                {item.title}
            </CardTitle>
            <spacer.s2 />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        marginVertical: hp(4),
    },
    text: {
        lineHeight: hp(3.2),
        fontSize: wp(4.3),
        marginHorizontal: wp(2),
        textAlign: 'center',
        marginBottom: hp(2)
    },

})

export default Slides