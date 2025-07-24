import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FairPriceScreen({ route }) {
  const { username } = route.params || { username: 'Unknown' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fair Price – {username}</Text>
      <Text style={styles.price}>$1,200 – $2,500</Text>
      <Text style={styles.info}>Based on engagement, audience quality, and platform</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 28, color: '#27AE60', fontWeight: 'bold' },
  info: { fontSize: 14, color: '#555', textAlign: 'center', marginTop: 10 }
});
