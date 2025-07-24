import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RiskMeterScreen({ route }) {
  const { username } = route.params || { username: 'Unknown' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk Meter – {username}</Text>
      <Text style={styles.risk}>Risk Level: LOW</Text>
      <Text style={styles.details}>
        ✅ No fake followers detected
        {'\n'}✅ Engagement is organic
        {'\n'}✅ Content is original
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  risk: { fontSize: 18, color: '#27AE60', marginBottom: 10 },
  details: { fontSize: 14, color: '#555' }
});
