import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';

const AvatarScreen = () => {
  const [tokenId, setTokenId] = useState(1); // Placeholder NFT ID

  const feedCow = async () => {
    try {
      const res = await axios.post('http://localhost:8000/avatar/feed', {
        token_id: tokenId,
        wallet: "0xYourWalletHere"
      });
      Alert.alert("✅ Fed!", res.data.message || "Success");
    } catch (err) {
      Alert.alert("❌ Error", err.response?.data?.error || "Failed");
    }
  };

  return (
    <View>
      <Text>CashCow #{tokenId}</Text>
      <Button title="🍽️ Feed Cow" onPress={feedCow} />
    </View>
  );
};

export default AvatarScreen;
