import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Image, StyleSheet, Text, FlatList } from 'react-native';

const cardOptions = [
  { label: 'Starbucks', value: 'starbucks', image: require('@assets/cards/starbucks.png') },
  { label: 'Apple', value: 'apple', image: require('@assets/cards/apple.png') },
  { label: 'Amazon', value: 'amazon', image: require('@assets/cards/amazon.png') },
  // Add more options as needed
];

export function ImagePicker() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(cardOptions[0]);

  const selectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} >
        <Image source={selectedOption.image} style={styles.image} />
        <Text>{selectedOption.label}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <FlatList
            data={cardOptions}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectOption(item)} style={styles.option}>
                <Image source={item.image} style={styles.image} />
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    // Modal view styles
    marginTop: 50,
    backgroundColor: "white",
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
