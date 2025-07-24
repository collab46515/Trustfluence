import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { api } from '../services/api';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      return Alert.alert('Error', 'All fields are required');
    }

    try {
      await api.post('/auth/register', { email, password, role: 'influencer' });
      Alert.alert('Success', 'Account created! Please verify your email.');
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('Error', err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F8F9FA'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#0A0E21'
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#FFF',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  link: {
    color: '#0A84FF',
    textAlign: 'center',
    fontSize: 16
  }
});
