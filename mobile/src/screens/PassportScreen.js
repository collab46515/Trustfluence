import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PassportScreen({ route }) {
  const { username } = route.params || { username: 'Unknown' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trust Passport – {username}</Text>
      <Text style={styles.badge}>✅ VERIFIED</Text>
      <Text style={styles.info}>Trust Tier: Gold</Text>
      <Text style={styles.info}>Collaborations: 12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  badge: { fontSize: 24, color: '#27AE60', fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 16, marginVertical: 5 }
});
