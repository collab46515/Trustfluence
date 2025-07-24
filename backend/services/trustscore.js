function calculateRealityScore(metrics) {
  let score = 800;
  const { followers, following, posts, engagementRate, avgLikes } = metrics;
  const ratio = following && followers ? followers / following : 0;

  if (ratio < 0.1) score -= 150;
  if (engagementRate < 0.5) score -= 150;
  if (engagementRate > 5.0) score -= 100;
  if (posts < 10 && followers > 10000) score -= 100;
  if (avgLikes / followers < 0.01) score -= 100;

  return Math.max(0, Math.min(1000, Math.round(score)));
}

module.exports = { calculateRealityScore };
