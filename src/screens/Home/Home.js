import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../../assets/icons/Icon'

//components
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'


const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Icon
                    name="Menu"
                    width={wp(12)}
                    height={hp(6)}
                />
            </View>
            <View style={styles.centerContainer}>
                <Icon
                    name="Location"
                    width={wp(12)}
                    height={hp(6)}
                />
                <Text style={styles.title}>15/2 New Texas</Text>
            </View>
            <View style={styles.rightContainer}>
                <Icon
                    name="Notification"
                    width={wp(10)}
                    height={hp(5)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    leftContainer: {
        flex: 1,
    },
    centerContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home