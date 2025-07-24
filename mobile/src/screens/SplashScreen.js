import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  // Simulate splash delay
  setTimeout(() => {
    navigation.replace('Welcome');
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🔍 TrustFluence</Text>
      <Text style={styles.tagline}>The FICO Score for Influencers™</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0E21'
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  tagline: {
    fontSize: 16,
    color: '#AAAAAA',
    marginTop: 10
  }
});
