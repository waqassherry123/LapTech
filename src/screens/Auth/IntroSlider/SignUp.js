import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import auth from '@react-native-firebase/auth'

//utilities
import { color } from '../../../theme/colors'
import { fontSize, fontWeight } from '../../../theme/fonts'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics'
import * as spacer from '../../../utils/spacer'
import Icon from '../../../assets/icons/Icon'

//packages
import { useNavigation } from '@react-navigation/native'

//screens
import Button from '../../../components/commons/Button'
import { style } from '../../../utils/globalStyles'




const SignUp = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleCheckBoxChange = () => {
        setAcceptedTerms(!acceptedTerms);
    };

    const handleSignIn = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                ToastAndroid.show("Account Created", ToastAndroid.SHORT)
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <View style={styles.container}>
            <Icon name="Logo" width={wp(25)} height={hp(10)} />
            <Text style={styles.signUp}>Sign Up</Text>
            <spacer.s5 />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setConfirmPassword(text)}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={acceptedTerms}
                    onClick={() => handleCheckBoxChange()}
                    isChecked={acceptedTerms}
                    checkedImage={
                        <Icon
                            name="Check"
                            width={wp(5.7)}
                            height={wp(5.7)}
                        />
                    }
                />
                <Text style={styles.label}>I accept all  the
                    <Text style={[style.fourBold]}> Terms & Conditions</Text>
                </Text>
            </View>

            <spacer.s2 />
            <Button title="Sign Up" onClick={() => handleSignIn()} />
            <spacer.s2 />

            {/* login text */}
            <TouchableOpacity>
                <Text style={styles.signupText}
                    onPress={() =>
                        navigation.navigate('LoginScreen')
                    }>
                    Already have an account? <Text style={[style.fourBold]}>Log In</Text>
                </Text>
            </TouchableOpacity>

            {/* SignUp with facebook and google */}
            <View>
                <Icon
                    name="Facebook"
                    width={wp(10)}
                    height={hp(10)}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(8),
        alignItems: 'center',
    },
    signUp: {
        marginTop: hp(3),
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.White,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: "90%"
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 10,
    },
})

export default SignUp