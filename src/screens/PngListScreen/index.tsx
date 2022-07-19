import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { createStyles } from './styles';
import usePngListScreen from './usePngListScreen';

const PngListScreen = () => {
  const styles = createStyles();
  const { pngFiles } = usePngListScreen()

  return (
    <FlatList
      data={pngFiles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.img}
            onPress={() => {}}
          >
            <Image
              source={{ uri: item }}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
            />
          </TouchableOpacity>
        );
      }}
      style={{}}
      numColumns={2}
    />
  )
};

export default PngListScreen;
