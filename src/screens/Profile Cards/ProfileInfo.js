import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../../assets/icons/Icon'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors';

const ProfileInfo = ({ icon, heading, number }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={icon}
                width={wp(8)}
                height={hp(5)} />
            <View style={styles.contentContainer}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2),
        paddingVertical: hp(1),
        paddingHorizontal: wp(1),
        marginVertical: hp(2),
        width: wp(29),
        height: hp(15),
        backgroundColor: color.White,
        elevation: 2
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(1)
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    number: {
        fontSize: 16,
        marginTop: hp(0.5),
        color: color.Black
    },
});

export default ProfileInfo;
