import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, ActivityIndicator, Text } from '@/AppComponents';
import { screenHeight, screenWidth } from '@/Lib/utils';

export default function Loader({
  indicatorColor,
  backgroundOpacity,
  label = '',
  opacity = 1,
}) {
    const isLoading = useSelector(state => state.loader.isLoading);

  if (!isLoading) return null;
  return (
    <View style={{ ...styles.loaderContainer, opacity }}>
      <View
        style={[
          styles.loaderContainer,
          {
            opacity: backgroundOpacity,
            backgroundColor: '#fff',
          },
        ]}
      />
      <ActivityIndicator size="large" color={indicatorColor} />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 25,
          fontSize: 18,
          paddingHorizontal: 12,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
Loader.defaultProps = {
  backgroundOpacity: 0.3,
  loader: false,
  indicatorColor: 'white',
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    // opacity,
    marginBottom: 50,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: screenWidth,
    height: screenHeight + 100,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1001,
    height: 100,
    width: 100,
  },
});
