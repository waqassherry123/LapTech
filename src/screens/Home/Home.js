import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from '../../assets/icons/Icon'

//components
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'


const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Icon
                        name="Menu"
                        width={wp(10)}
                        height={hp(5)}
                    />
                </View>
                <View style={styles.centerContainer}>
                    <Icon
                        name="Location"
                        width={wp(8)}
                        height={hp(4)}
                    />
                    <Text style={styles.title}>15/2 New Texas</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Icon
                        name="Notification"
                        width={wp(8)}
                        height={hp(4)}
                    />
                </View>
            </View>
            <View style={styles.searchContainer}>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="Search"
                        width={wp(10)}
                        height={hp(5)}
                    />
                    <TextInput placeholder="Search" />
                </TouchableOpacity>

                <View style={{ width: wp(10), height: hp(5), backgroundColor: color.Default, marginRight: wp(2), justifyContent: 'center', alignItems: 'center', borderRadius: wp(2) }}>
                    <TouchableOpacity>
                        <Icon
                            name="Filter"
                            width={wp(8)}
                            height={hp(4)}
                            fill={color.White}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: wp(4), justifyContent: 'space-between', width: '90%' }}>
                <Text style={styles.title}>Recent Searches</Text>
                <TouchableOpacity>
                    <Icon
                        name="Right"
                        width={wp(7)}
                        height={hp(3)}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        height: 60,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.White,
        width: '92%',
        borderRadius: wp(2)
    }
    ,
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
        marginRight: wp(2)
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home