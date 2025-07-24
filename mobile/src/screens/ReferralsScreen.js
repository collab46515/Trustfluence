import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReferralsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Referral Link</Text>
      <Text style={styles.link}>trustfluence.ai/r/DOM123</Text>
      <Text style={styles.info}>Share to earn rewards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  link: { fontSize: 18, color: '#0A84FF', marginVertical: 10 },
  info: { fontSize: 16, color: '#555' }
});
