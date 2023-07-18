import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import Icon from '../assets/icons/Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics'
import { color } from '../theme/colors';


const PaymentDoneScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
        <Icon name="Check" width={wp(14)} height={hp(12)}/>
        </View>
      </View>
      <Text style={styles.congratsHeading}>Congratulations!!!</Text>
      <Text style={styles.description}>Your payment has been successfully processed.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  progressCircle: {
    width: wp(45),
    height: hp(20),
    borderRadius: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:10,
    borderColor:color.Default
  },
  congratsHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    color:color.Gray
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems:"center",
    width: '100%',
    marginVertical:hp(4)
  },
  button: {
    backgroundColor: color.Default,
    paddingVertical: 15,
    width:wp(60),
    borderRadius: wp(10),
    marginBottom: 16,
    marginVertical:hp(3)
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentDoneScreen;
