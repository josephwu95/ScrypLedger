import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

// Sample data array
const rates = [
  {
    id: '1',
    icon: require('@assets/cards/starbucks.png'), // Replace with actual image source
    name: 'Starbucks',
    rate: '0.2',
    percentage: '+37%',
    price: '72.34',
  },
  {
    id: '2',
    icon: require('@assets/cards/apple.png'), // Replace with actual image source
    name: 'Apple',
    rate: '0.3',
    percentage: '+25%',
    price: '150.50',
  },
  // Add more objects as needed
];

export function MarketRates () {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Image source={item.icon} style={styles.companyIcon} />
      <View style={styles.infoContainer}>
        <Text style={styles.companyName}>{item.name}</Text>
        <Text style={styles.rateText}>{item.rate}</Text>
      </View>
      <Text style={styles.percentage}>{item.percentage}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Market Rates</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={rates}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  viewAllButtonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
  },
  companyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rateText: {
    color: 'green',
  },
  percentage: {
    color: 'green',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
