import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { api } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      console.log(res.data);
      // Handle login success (e.g., navigate to home)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
    width: '80%'
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  linkContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  linkText: {
    color: '#0A84FF',
    textAlign: 'center',
    fontSize: 16
  }
});
