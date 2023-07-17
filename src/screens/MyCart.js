import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'
import Button from '../components/commons/Button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'




const MyCart = ({ route }) => {
    const navigation = useNavigation()
    const { product } = route.params;

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };


    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="My Cart" onBackPress={() => navigation.goBack()} />

                <View style={styles.cartContainer}>
                    <Image source={product.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{product.name}</Text>
                            <Text style={styles.price}>${product.price}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



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
    },
    cartContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginHorizontal: wp(3),
        marginVertical: 8,
        padding: wp(3),
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 16,
        borderRadius: 8,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        color: 'gray',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'lightgray',
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
    },
})

export default MyCart