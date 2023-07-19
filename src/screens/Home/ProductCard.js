import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { color } from '../../theme/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'

const ProductCard = ({ image, name, price }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,

        // Shadow
        elevation: 2,
        shadowColor: "#090909",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    image: {
        width: wp(40),
        height: hp(20),
        resizeMode: "center",
        marginBottom: 4,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    name: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 2
    },
    price: {
        fontSize: 12,
        color: color.Black,
        marginBottom: 6,
        fontWeight: '300'
    },
});

export default ProductCard;