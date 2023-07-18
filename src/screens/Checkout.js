import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'
import Button from '../components/commons/Button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'
import Card from './Checkout Cards/card'
import BillingInfoCard from './Checkout Cards/BillingInfoCard'


const Checkout = () => {
    const navigation = useNavigation()

    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="Checkout" onBackPress={() => navigation.goBack()} />
                <View style={{ marginLeft: wp(6) ,marginVertical:hp(2)}}>
                    <Text style={{ fontSize: wp(5), fontWeight: '600', }}>Delivery address</Text>
                </View>
                <View style={styles.card}>
                    <Card />
                    <Card />
                </View>
                <View style={{ marginLeft: wp(6) ,marginVertical:hp(2)}}>
                    <Text style={{ fontSize: wp(5), fontWeight: '600', }}>Billing information</Text>
                </View>
                <View>
                <BillingInfoCard />
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Button title="Proccess Payment" onClick={() => navigation.navigate("PaymentDoneScreen")} />
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