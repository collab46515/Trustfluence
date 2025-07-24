import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import InfluencerLookupScreen from '../screens/InfluencerLookupScreen';
import RealityScoreScreen from '../screens/RealityScoreScreen';
import RiskMeterScreen from '../screens/RiskMeterScreen';
import AudienceDNAScanScreen from '../screens/AudienceDNAScanScreen';
import FairPriceScreen from '../screens/FairPriceScreen';
import PassportScreen from '../screens/PassportScreen';
import ReportInfluencerScreen from '../screens/ReportInfluencerScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import CompareInfluencersScreen from '../screens/CompareInfluencersScreen';
import ReferralsScreen from '../screens/ReferralsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={OTPVerificationScreen} />
      <Stack.Screen name="Lookup" component={InfluencerLookupScreen} />
      <Stack.Screen name="RealityScore" component={RealityScoreScreen} />
      <Stack.Screen name="RiskMeter" component={RiskMeterScreen} />
      <Stack.Screen name="AudienceDNA" component={AudienceDNAScanScreen} />
      <Stack.Screen name="FairPrice" component={FairPriceScreen} />
      <Stack.Screen name="Passport" component={PassportScreen} />
      <Stack.Screen name="Report" component={ReportInfluencerScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="Compare" component={CompareInfluencersScreen} />
      <Stack.Screen name="Referrals" component={ReferralsScreen} />
    </Stack.Navigator>
  );
}
