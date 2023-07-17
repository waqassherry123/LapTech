import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../../assets/icons/Icon'

//components
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics';


const Header = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <Icon
                    name="Left"
                    width={wp(12)}
                    height={hp(6)}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(3),
        height: 56,
        backgroundColor: '#ffffff',
        elevation: 4,
        position: "relative"
    },
    backButton: {
        position: "absolute",
        left: wp(2),
        paddingHorizontal: wp(1),
        zIndex: 1,
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Header;