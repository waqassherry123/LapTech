import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

//components
import { color } from '../../theme/colors';
import Button from '../../components/commons/Button';
import Icon from '../../assets/icons/Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics';
import * as spacer from '../../utils/spacer'
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProductDetailsScreen = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation()

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Icon
                            name="Left"
                            width={wp(12)}
                            height={hp(6)}
                        />
                    </TouchableOpacity>

                    <View style={styles.favorite}>
                        <TouchableOpacity onPress={() => handleFavoritePress()}>
                            {
                                isFavorite ?
                                    <Icon
                                        name="Heart"
                                        width={wp(8)}
                                        height={hp(5)}
                                        fill={color.Default}
                                    />
                                    :
                                    <Icon
                                        name="Heart"
                                        width={wp(8)}
                                        height={hp(5)}
                                        fill="transparent"
                                    />

                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={product.image} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.namePriceContainer}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text style={styles.price}>${product.price}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>{product.details}</Text>
                    </View>

                    <View style={styles.colorOptionsContainer}>
                        <Text style={styles.colorOptionsLabel}>Colors</Text>
                        <View style={styles.colorOptions}>
                            {product.colorOptions.map((color, index) => (
                                <View key={index} style={[styles.colorOption, { backgroundColor: color }]} />
                            ))}
                        </View>
                    </View>
                    <spacer.s3 />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button title="Add to Cart" onClick={() => navigation.navigate("MyCart", { product })} />
                    </View>
                    <spacer.s3 />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: wp(6),
        marginLeft: wp(2),
        marginVertical: hp(2)
    },
    favorite: {
        width: wp(12),
        height: hp(6),
        borderRadius: wp(14),
        backgroundColor: color.White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // favoriteActive: {
    //     backgroundColor: 'red',
    //     borderColor: 'red',
    // },
    imageContainer: {
        width: '90%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 18,
        marginBottom: -15
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    infoContainer: {
        backgroundColor: color.White,
        width: '90%',
        padding: 7,
        marginLeft: 18,
        borderRadius: 20
    },
    namePriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: color.Black
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    detailsContainer: {
        alignSelf: 'stretch',
        marginTop: 8,
        padding: 2
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
        // justifyContent: 'center',
        marginBottom: 20
    },
    colorOptionsContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    colorOptionsLabel: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 8,
    },
    colorOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    colorOption: {
        width: 20,
        height: 20,
        borderRadius: 16,
        marginHorizontal: 8,
    },
});

export default ProductDetailsScreen;