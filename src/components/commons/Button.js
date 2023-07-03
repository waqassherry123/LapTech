import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

// theme
import { color } from '../../theme/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics'


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.Default,
        width: wp(55),
        height: hp(7),
        borderRadius: wp(7),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(1)
    },
    titleStyle: {
        color: color.White,
        fontSize: wp(4.5),
        fontWeight: '400'

    }
})

export default Button