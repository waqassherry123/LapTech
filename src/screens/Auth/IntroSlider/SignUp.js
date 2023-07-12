import { View, Text, Image, StyleSheet, TextInput ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


//Assets
import Logo from '../../../assets/images/Logo.png'
import { color } from '../../../theme/colors'
import { fontSize, fontWeight } from '../../../theme/fonts'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics'
import * as spacer from '../../../utils/spacer'
import Icon from '../../../assets/icons/Icon'
import { useNavigation } from '@react-navigation/native'
import LoginScreen from './login'




const SignUp = () => {
    const navigation = useNavigation()

    const [text, setText] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={{ height: hp(12), width: wp(20) }} />
            <Text style={styles.signUp}>Sign Up</Text>
            <spacer.s7 />
            <TextInput
                value={text}
                onChangeText={handleInputChange}
                placeholder="Name"
                style={styles.textInput}
            />
            <spacer.s3 />
            <TextInput
                value={text}
                onChangeText={handleInputChange}
                placeholder="Email"
                style={styles.textInput}
                leftIcon={<Icon name="Profile" width={wp(12)} height={hp(5)} />}
            />
            <spacer.s3 />
            <TextInput
                value={text}
                onChangeText={handleInputChange}
                placeholder="Password"
                style={styles.textInput}
            />

            {/* <OutlinedTextField
                label="Password"
                maxLength={30}
                baseColor={color.Blue}
                textColor={color.Blue}
                value={text}
                tintColor={color.Blue}
                onChangeText={handleInputChange}
                prefix={<Icon name="Profile" width={wp(12)} height={hp(5)} />}
            /> */}
             
             {/* login text */}
          <TouchableOpacity>
           <Text style={styles.signupText}  
             onPress={() =>
             navigation.navigate('LoginScreen')
            }>
            Have an account,Login
            </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(10),
        alignItems: 'center',
        backgroundColor: color.White,
    },
    signUp: {
        marginTop: hp(5),
        fontSize: fontSize.font9,
        fontWeight: "600"
    },
    textInput: {
        borderRadius: wp(2),
        width: '80%',
        height: hp(15),
        paddingHorizontal: wp(2),
        shadowColor: '#eff3f2',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 1

    },
    signupText: {
        color: color.Black,
        textDecorationLine: 'underline',
      },
})

export default SignUp