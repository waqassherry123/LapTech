import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Modal } from 'react-native'
import React, { useEffect, useRef } from 'react'

// packages
import Slider from '@react-native-community/slider';
import RBSheet from 'react-native-raw-bottom-sheet'
import { useNavigation } from '@react-navigation/native'



// utilities
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics'
import { color } from '../../../theme/colors'
import Icon from '../../../assets/icons/Icon'
import Button from '../../../components/commons/Button';


export default function Sample(props) {

    const navigation = useNavigation()

    const refRBSheet = useRef();

    useEffect(() => {
        if (props.isOpen) {
            refRBSheet.current.open()
        } else {
            refRBSheet.current.close()
        }
    }, [props.isOpen])

    return (
        <RBSheet
            ref={refRBSheet}
            height={hp(80)}
            closeOnDragDown={true}
            closeOnPressMask={false}
            onClose={props.close}
            customStyles={{
                height: "50%",
                draggableIcon: {
                    backgroundColor: color.Default
                },
                container: {
                    borderTopLeftRadius: wp(10),
                    borderTopRightRadius: wp(10),
                },
            }}
        >
            <SafeAreaView>
                <View style={styles.bottomSheet}>

                    <View style={styles.header}>
                        <Text style={styles.clearText}>clear</Text>
                        <Text style={styles.headerText}>Filters</Text>
                        <TouchableOpacity onPress={props.close}>
                            <Icon name="Cross" width={wp(10)} height={hp(10)} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Category</Text>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.CategoryBtn}>
                                <Text style={styles.CategoryBtnText}>New Arrival</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CategoryBtn}>
                                <Text style={styles.CategoryBtnText}>Top Trending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CategoryBtn}>
                                <Text style={styles.CategoryBtnText}>Featured Products</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Pricing</Text>
                        <View style={styles.row}>
                            <Text style={styles.sliderText}>$20 - $30</Text>

                            <Slider
                                style={styles.slider}
                                minimumValue={20}
                                maximumValue={30}
                                step={1}
                                minimumTrackTintColor={color.Default}
                                maximumTrackTintColor={color.Gray}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionHeading}>Distance</Text>
                        <View style={styles.row}>
                            <Text style={styles.sliderText}>$20 - $30</Text>

                            <Slider
                                style={styles.slider}
                                minimumValue={20}
                                maximumValue={30}
                                step={1}
                                minimumTrackTintColor={color.Default}
                                maximumTrackTintColor={color.Gray}

                            />
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: hp(10) }}>
                        <Button title="Apply Filter" onClick={() => navigation.navigate("Home")} />
                    </View>

                </View>
            </SafeAreaView>
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    bottomSheet: {
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: wp(6),
        fontWeight: 'bold',
    },
    clearText: {
        fontSize: wp(6),
    },
    divider: {
        height: 1,
        backgroundColor: 'gray',
    },
    section: {
        marginBottom: 16,
    },
    sectionHeading: {
        fontSize: wp(5),
        fontWeight: 'bold',
        marginVertical: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CategoryBtn: {
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: color.Default,
        width: wp(30),
        borderRadius: 20
    },
    CategoryBtnText: {
        fontSize: 16,
        color: color.White,
    },
    sliderText: {
        marginRight: 8,
    },
    slider: {
        flex: 1,
    },

})