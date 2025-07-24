import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { api } from '../services/api';

export default function ReportInfluencerScreen({ route }) {
  const { username } = route.params || { username: '' };
  const [reason, setReason] = useState('');

  const submitReport = async () => {
    try {
      await api.post('/report', { handle: username, reason });
      Alert.alert('Report Submitted', 'Thank you for your feedback');
    } catch (err) {
      Alert.alert('Error', 'Could not submit report');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report @{username}</Text>
      <TextInput
        style={styles.input}
        placeholder="Reason for report (e.g., fake followers)"
        value={reason}
        onChangeText={setReason}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit Report" onPress={submitReport} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, height: 100, textAlignVertical: 'top', marginBottom: 15 }
});
