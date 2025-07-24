function detectAnomalies(data) {
  const anomalies = [];

  // Sudden follower spike
  if (data.growthRate > 1000) anomalies.push('Sudden follower spike');

  // Content reuse
  if (data.similarityScore > 0.8) anomalies.push('Content duplication across platforms');

  // Bot-like activity
  if (data.engagementPattern === 'uniform') anomalies.push('Non-human engagement pattern');

  return anomalies;
}

module.exports = { detectAnomalies };
