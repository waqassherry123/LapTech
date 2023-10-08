import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// component
import Header from '../components/commons/Header'
import Button from '../components/commons/Button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'
import { color } from '../theme/colors'
import { useSelector } from 'react-redux'
import Slice from './Home/Redux/slice'

const MyCart = () => {
    const navigation = useNavigation()
    const { cart } = useSelector(state => state.home)
    const [cartItems, setCartItems] = useState(cart);

    const handleIncrement = (item) => {
        const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(updatedCart);
    };

    const handleDecrement = (item) => {
        const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 0) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCart);
    };

    const calculateSubTotal = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    const subTotal = calculateSubTotal();

    const renderItem = (product) => {
        return (
            <View style={styles.cartContainer}>
                <Image source={product.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text style={styles.price}>${product.price * product.quantity}</Text>
                    </View>
                    <View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => handleDecrement(product)}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{product.quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => handleIncrement(product)}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <Header title="My Cart" onBackPress={() => navigation.goBack()} />
                <FlatList
                    data={cartItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItem(item)}
                />
                <View style={styles.subTotal}>
                    <Text style={styles.subtotalText}>Subtotal  :</Text>
                    <Text style={styles.subtotalPrice}>${subTotal}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button title="Checkout" onClick={() => navigation.navigate("Checkout", { subTotal })} />
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
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 8,
        color: color.Gray
    },
    price: {
        fontSize: 15,
        color: color.Black,
        fontWeight: '600',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: color.Pink3,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Default,
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
        marginVertical: hp(3)
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: '400',
    },
    subtotalPrice: {
        fontSize: 18,
        color: color.Black,
        fontWeight: '600',
    },
})

export default MyCart