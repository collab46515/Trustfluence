import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CompareInfluencersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compare Influencers</Text>
      <Text style={styles.info}>Side-by-side AI analysis coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  info: { fontSize: 16, color: '#555' }
});
