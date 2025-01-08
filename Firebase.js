import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore';

const handleLogin = (email, password) => {
    auth().signInWithEmailAndPassword(email, password)
}

const googleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return userInfo
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("cancelled")
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("inn progress")
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("google service not avaiable")
        } else {
            console.log("Error", error)
        }
    }
}

const facebookSignIn = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then(result => {
            if (result.isCancelled) {
                console.log('Login cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(data => {
                    if (data.accessToken) {
                        return data
                    }
                });
            }
        })
        .catch(error => {
            console.log('Login fail with error: ' + error);
        });
};

// const saveUser = async () => {
//     try {
//         await firestore()
//             .collection('users') // Name of the collection
//             .add({
//                 name: name,
//                 email: email,
//                 age: parseInt(age), // Ensure age is stored as a number
//                 createdAt: firestore.FieldValue.serverTimestamp(),
//             });
//         Alert.alert('Success', 'User added successfully!');
//     } catch (error) {
//         console.error(error);
//         Alert.alert('Error', 'Failed to add user.');
//     }
// };

export {
    googleSignIn,
    facebookSignIn,
    handleLogin,
}