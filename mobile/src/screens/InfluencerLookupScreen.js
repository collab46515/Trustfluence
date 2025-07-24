import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { api } from '../services/api';

export default function InfluencerLookupScreen({ navigation }) {
  const [handle, setHandle] = useState('');

  const lookup = async () => {
    if (!handle.trim()) {
      Alert.alert('Error', 'Please enter a handle');
      return;
    }

    try {
      const res = await api.get(`/lookup?handle=${handle.trim()}`);
      navigation.navigate('RealityScore', { influencer: res.data.influencer });
    } catch (err) {
      Alert.alert('Error', 'Could not find influencer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Influencer</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter handle (e.g., @sunny)"
        value={handle}
        onChangeText={setHandle}
      />
      <Button title="Scan" onPress={lookup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 }
});
