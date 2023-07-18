import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../theme/colors';

const BillingInfoCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery fee:</Text>
        <Text style={styles.price}>$5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>SubTotal:</Text>
        <Text style={styles.price}>$5</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.price}>$5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color:color.Gray
  },
  price: {
    fontSize: 16,
  },
  line: {
    borderBottomColor: color.Gray,
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default BillingInfoCard;
