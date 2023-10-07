import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


//components
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import * as images from '../../assets/images'
import ProductCard from './ProductCard'
//utilities
import { color } from '../../theme/colors'
import Icon from '../../assets/icons/Icon'

//packages
import Sample from './Modal/Sample'
import ProductDetailsScreen from './ProductDetailsScreen';
import { useDispatch } from 'react-redux';
import Slice from './Redux/slice'


const products = [
    {
        id: 1,
        name: 'Lenovo X11',
        price: 19.99,
        image: images.product1,
        details: "Professionals who expect the very best from their technology turn to the ThinkPad X1 line—not just for innovation and style, but for uncompromised performance.From ultralight laptops and 2-in -1s, to extreme power devices.",
        colorOptions: [color.Blue3, color.Gray, color.Black]
    },
    {
        id: 2,
        name: 'Dell Vostro',
        price: 29.99,
        image: images.product2,
        details: "Dell Vostro is a Windows 10 laptop with a 15.50-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM",
        colorOptions: [color.Blue3, color.Gray, color.Black]
    },
    {
        id: 3,
        name: 'HP Pavilion',
        price: 39.99,
        image: images.product3,
        details: "Dell Vostro is a Windows 10 laptop with a 15.50-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM",
        colorOptions: [color.Blue3, color.Gray, color.Black]
    },
    {
        id: 4,
        name: 'Macbook Pro 2021',
        price: 49.99,
        image: images.product4,
        details: "Dell Vostro is a Windows 10 laptop with a 15.50-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM",
        colorOptions: [color.Blue3, color.Gray, color.Black]
    },
    {
        id: 5,
        name: 'TreavelMate',
        price: 59.99,
        image: images.product5,
        details: "Dell Vostro is a Windows 10 laptop with a 15.50-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM",
        colorOptions: [color.Blue3, color.Gray, color.Black]
    },
]

const Home = () => {
    const navigation = useNavigation();
    const [rbSheetOpen, setRbSheetOpen] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Slice.actions.getProducts(products))
    }, [])
    const handleProductPress = (product) => {
        navigation.navigate('ProductDetailsScreen', { product });
    };

    const renderProductItem = ({ item }) => (
        <View styles={styles.gridItem}>
            <TouchableOpacity onPress={() => handleProductPress(item)}>
                <ProductCard
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <Sample isOpen={rbSheetOpen} close={() => setRbSheetOpen(false)} />

            {/* Header */}
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

            {/* SearchBar */}
            <View style={styles.searchContainer}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="Search"
                        width={wp(10)}
                        height={hp(5)}
                    />
                    <TextInput placeholder="Search" />
                </TouchableOpacity>

                <View>
                    {/* Button */}
                    <TouchableOpacity style={styles.button} onPress={() => setRbSheetOpen(true)}>
                        <Icon
                            name="Filter"
                            width={wp(8)}
                            height={hp(4)}
                            fill={color.White}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Recent Searches */}
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

            {/* ProductCard */}
            <View style={styles.productContainer}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    animated={true}
                    renderItem={renderProductItem}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        height: hp(8),
        // hight: 60
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.White,
        width: '92%',
        borderRadius: wp(2)
    },
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
    productContainer: {
        flex: 1,
    },
    gridItem: {
        flex: 1,
    },
    button: {
        width: wp(10),
        height: hp(5),
        backgroundColor: color.Default,
        marginRight: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(2),
    },
});

export default Home