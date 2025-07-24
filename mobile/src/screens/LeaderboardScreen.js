import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { api } from '../services/api';

export default function LeaderboardScreen() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await api.get('/influencer/leaderboard');
        setInfluencers(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.handle}>@{item.handle}</Text>
      <Text style={styles.score}>Score: {item.trustScore}</Text>
      <Text style={styles.tier}>Tier: {item.trustTier}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Influencers</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={influencers}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  handle: { fontSize: 18, fontWeight: '600' },
  score: { fontSize: 16, color: '#27AE60' },
  tier: { fontSize: 14, color: '#F39C12' }
});
