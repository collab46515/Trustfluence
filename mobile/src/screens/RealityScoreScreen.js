import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RealityScoreScreen({ route, navigation }) {
  const { username } = route.params || { username: 'sunny' };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Influencer Info */}
      <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      <Text style={styles.name}>@{username}</Text>
      <Text style={styles.verified}>✅ Verified Influencer</Text>

      {/* TrustScore */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Reality Score</Text>
        <Text style={styles.scoreValue}>820</Text>
        <Text style={styles.tier}>Gold Tier</Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>500K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>17.2%</Text>
          <Text style={styles.statLabel}>Engagement</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>Low</Text>
          <Text style={styles.statLabel}>Risk</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RiskMeter')}>
        <Text style={styles.buttonText}>View Risk Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={() => navigation.navigate('FairPrice')}>
        <Text style={styles.outlineButtonText}>Suggested Price: $2,200</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    fontSize: 24,
    color: '#0A84FF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0A0E21',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0A0E21',
  },
  verified: {
    textAlign: 'center',
    color: '#27AE60',
    fontSize: 16,
    marginBottom: 30,
  },
  scoreCard: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#555',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#27AE60',
    marginVertical: 5,
  },
  tier: {
    fontSize: 18,
    color: '#F39C12',
    fontWeight: '600',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A0E21',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  outlineButtonText: {
    color: '#0A84FF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
