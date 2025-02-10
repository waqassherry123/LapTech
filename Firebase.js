import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const handleLogin = (email, password) => {
    auth().signInWithEmailAndPassword(email, password)
}

const googleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const { user } = await GoogleSignin.signIn();

        const uid = user.id;
        const name = user.name;
        const email = user.email;
        await saveUser(name, email, 'N/A', uid); 
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
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

const saveUser = async (name,email,age,uid) => {
    try {
        await firestore()
            .collection('users')
            .doc(uid)
            .add({
                name: name,
                email: email,
                age: parseInt(age),
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
    } catch (error) {
        console.error(error);
    }
};

const fetchUserData = async (uid) => {
    try {
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        console.log('User Data:', userDoc.data());
        return userDoc.data();
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

export {
    googleSignIn,
    facebookSignIn,
    handleLogin,
    saveUser,
    fetchUserData,
}