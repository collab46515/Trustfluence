import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function OTPVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Simulate OTP success
    navigation.navigate('Lookup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="6-digit code"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12, marginBottom: 15 }
});
