import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'

const MyCart = () => {
    const navigation = useNavigation()



    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="My Cart" onBackPress={() => navigation.goBack()} />
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