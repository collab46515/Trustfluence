import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Influencer Trust Bureau™</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0A0E21'
  },
  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
    width: '80%',
    marginVertical: 10
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  }
});
