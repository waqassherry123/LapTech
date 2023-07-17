import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'
import Button from '../components/commons/Button'

const MyCart = () => {
    const navigation = useNavigation()



    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="My Cart" onBackPress={() => navigation.goBack()} />
                <View style={{ alignItems: 'center' }}>
                    <Button title="Checkout" onClick={() => navigation.navigate("Checkout")} />
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})

export default MyCart