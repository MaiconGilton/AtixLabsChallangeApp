import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { ArrowForwardIcon, CsvIcon, PngIcon, UploadIcon } from '../../assets/icons';
import useTheme from '../../hooks/useTheme';
import { createStyles } from './styles';
import useHomeScreen from './useHomeScreen';

const AnimTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const HomeScreen = (props: any) => {
  const styles = createStyles();
  const theme = useTheme()
  const {
    toggleButtons,
    animationRef,
    importFile,
    csvFiles,
    pngFiles
  } = useHomeScreen()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PNG and CSV Import</Text>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate('PngListScreen')}
      >
        <Text style={styles.btnLabel}>My gallery ({pngFiles.length})</Text>
        <ArrowForwardIcon style={styles.arrowForwardIcon} />
      </TouchableOpacity>

      <>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('CsvListScreen')}
        >
          <Text style={styles.btnLabel}>My sheets ({csvFiles.length})</Text>
          <ArrowForwardIcon style={styles.arrowForwardIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.7}
          onPress={() => toggleButtons()}
        >
          <UploadIcon style={styles.uploadIcon} width={40} height={40} />
        </TouchableOpacity>

        <AnimTouchableOpacity
          onPress={() => importFile('png')}
          style={{
            ...styles.btn,
            ...styles.btnPng,
            opacity: animationRef.interpolate({
              inputRange: [0, 0.9, 1],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp'
            }),
            transform: [{
              translateY: animationRef.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -230],
                extrapolate: 'clamp'
              }),
            }],
          }}
          activeOpacity={0.7}
        >
          <PngIcon width={30} height={30} fill={theme.secondaryTextColor} />
        </AnimTouchableOpacity>

        <AnimTouchableOpacity
          onPress={() => importFile('csv')}
          style={{
            ...styles.btn,
            ...styles.btnCsv,
            opacity: animationRef.interpolate({
              inputRange: [0, 0.9, 1],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp'
            }),
            transform: [{
              translateY: animationRef.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -160],
                extrapolate: 'clamp'
              }),
            }],
          }}
          activeOpacity={0.7}
        >
          <CsvIcon width={30} height={30} fill={theme.secondaryTextColor} />
        </AnimTouchableOpacity>
      </>
    </View>
  );
};

export default HomeScreen;
