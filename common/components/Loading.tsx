import React from 'react'
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

interface Props {
  size?: number;
  color?: string;
  type?: 'circle' | 'spinner';
}

const Loading: React.FC<Props> = ({ size = 30, color = '#000', type = 'spinner' }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
