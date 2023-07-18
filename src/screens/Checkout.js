import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'
import Button from '../components/commons/Button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'
import Card from './card'


const Checkout = () => {
    const navigation = useNavigation()



    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="Checkout" onBackPress={() => navigation.goBack()} />
                <View style={{ marginLeft: wp(6), fontSize: wp(6), fontWeight: 'bold', }}>
                    <Text style={{ fontSize: wp(5), fontWeight: 'bold', }}>Delivery address</Text>
                </View>
                <View style={styles.card}>
                    <Card />
                    <Card />

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button title="Swipe for Payment" onClick={() => navigation.navigate("Checkout")} />
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
})

export default Checkout