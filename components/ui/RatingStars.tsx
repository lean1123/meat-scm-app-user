import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

interface Props {
  rating: number; // 0..5 can include halves
  size?: number;
}

const RatingStars: React.FC<Props> = ({ rating, size = 16 }) => {
  const stars: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    const diff = rating - i + 1;
    if (diff >= 1) {
      stars.push(<Ionicons key={i} name="star" size={size} color="#F59E0B" />);
    } else if (diff > 0 && diff < 1) {
      stars.push(<Ionicons key={i} name="star-half" size={size} color="#F59E0B" />);
    } else {
      stars.push(<Ionicons key={i} name="star-outline" size={size} color="#F59E0B" />);
    }
  }
  return <View className="flex-row items-center">{stars}</View>;
};

export default RatingStars;
