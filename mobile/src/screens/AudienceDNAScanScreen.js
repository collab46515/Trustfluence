import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AudienceDNAScanScreen({ route }) {
  const { username } = route.params || { username: 'Unknown' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audience DNA – {username}</Text>
      <Text style={styles.detail}>Age: 18–34 (68%)</Text>
      <Text style={styles.detail}>Location: US, UK, Canada</Text>
      <Text style={styles.detail}>Interests: Fashion, Travel, Fitness</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  detail: { fontSize: 16, marginVertical: 5 }
});
