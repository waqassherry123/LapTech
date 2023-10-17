import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

// PACKAGES
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

// UTILITIES
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../theme/metrics';
import {color} from '../../theme/colors';
import {fontWeight} from '../../theme/fonts';
import {navigate} from '../../utils/navigate';

// CONSTANTS AND ASSETS
import * as images from '../../assets/images';
import ROUTES from '../../constants/routes.json';

// COMPONENTS
import Icon from '../../assets/icons/Icon';
import ProfileInfo from '../Profile Cards/ProfileInfo';
import * as space from '../../components/commons/Spacers';
import Button from '../../components/commons/Button';

const Profile = () => {
  const navigation = useNavigation();

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        {/* background Blob */}
        <View>
          <Icon
            style={styles.blob}
            name="Blob2"
            width={wp(110)}
            height={hp(110)}
            fill={color.Pink2}
          />
        </View>

        {/* header container */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate(ROUTES.PROFILE_SETTINGS)}>
            <Icon name="KebabMenu" width={wp(10)} height={hp(5)} />
          </TouchableOpacity>
        </View>

        <space.s3 />

        {/* Profile Pic */}
        <View style={styles.picContainer}>
          <View style={styles.background}>
            <Image source={images.profile} style={styles.profilePicture} />
          </View>
        </View>

        <space.s3 />

        <View style={styles.picContainer}>
          <Text style={styles.username}>Alexa Nikiforov</Text>
          <Text>alexa@msn.com</Text>
        </View>

        {/* Profile Cards */}
        <space.s1 />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <ProfileInfo
            icon="ShoppingBag"
            heading="Progress Order"
            number="10+"
          />
          <ProfileInfo icon="Promo" heading="Promocodes" number="5" />
          <ProfileInfo icon="Star" heading="Reviews" number="4.5K" />
        </View>
        <space.s1 />
        {/* Personal Info */}
        <Text style={styles.info}>Personal Information</Text>
        <space.s2 />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.label}>Name :</Text>
            <Text style={styles.label}>Email :</Text>
            <Text style={styles.label}>Location :</Text>
            <Text style={styles.label}>Zip Code :</Text>
            <Text style={styles.label}>Phone Number :</Text>
          </View>
          <View>
            <Text style={styles.value}>Sheikh Yasir</Text>
            <Text style={styles.value}>yasir@gmail.com</Text>
            <Text style={styles.value}>San Diego</Text>
            <Text style={styles.value}>5200</Text>
            <Text style={styles.value}>(+1) 5484 4757 32</Text>
          </View>
        </View>
        <space.s1 />
        <View style={{alignItems: 'center'}}>
          <Button title="Log Out" onClick={() => signOut()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(1),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    position: 'relative',
  },
  menuButton: {
    position: 'absolute',
    right: wp(1),
    zIndex: 1,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: color.Black,
    textAlign: 'center',
  },
  picContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: hp(2)
  },
  blob: {
    position: 'absolute',
    left: 0,
    top: -200,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 22,
    color: color.Black,
    fontWeight: fontWeight.bold,
    marginVertical: hp(1),
  },
  info: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: wp(3),
    color: color.Black,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(3),
    padding: wp(2),
    backgroundColor: color.White,
    elevation: 4,
    borderRadius: wp(2),
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: color.Gray,
  },
  value: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    color: color.Black,
  },
});
