import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../assets/icons/Icon';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'


const Card = () => {
  return (
    <View style={styles.card}>
        <Icon name="Heart" size={24} color="black" />
      <View style={styles.leftColumn}>
        <Text style={styles.heading}>Home</Text>
        <Text style={styles.phoneNumber}>123-456-7890</Text>
        <Text style={styles.address}>123 Main St, City, State</Text>
      </View>
      <Icon name="Cross" size={24} color="black" style={styles.rightIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(4),
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  heading: {
    fontSize: wp(5),
    fontWeight: "400",
    marginVertical: hp(1),
  },
  phoneNumber: {
    marginBottom: hp(0.5),
  },
  leftColumn:{
    paddingRight:wp(14)
  }
});

export default Card;
