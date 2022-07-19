import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import useCsvListScreen from './useCsvListScreen';

const CsvListScreen = () => {
  const styles = createStyles();
  const { csvFiles } = useCsvListScreen()

  return (
    <FlatList
      data={csvFiles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) =>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {}}
        >
          <Text style={styles.itemName}>FileName: {item.name}</Text>
          <Text style={styles.itemAmount}>Total: {item.totalAmount}</Text>
        </TouchableOpacity>
      }
      style={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  )
};

export default CsvListScreen;
