import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import AvatarScreen from './screens/AvatarScreen';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>🐮 CashCowVerse</Text>
      <AvatarScreen />
    </SafeAreaView>
  );
}
