import type { Review } from '@/types/home';
import React from 'react';
import { Image, Text, View } from 'react-native';
import RatingStars from './RatingStars';

const ReviewCard: React.FC<{ item: Review }> = ({ item }) => {
  return (
    <View className="bg-white px-4 py-5 rounded-2xl shadow-sm mb-4">
      <View className="flex-row items-center">
        <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-3" />
        <View className="flex-1">
          <Text className="text-base font-bold text-gray-900">{item.userName}</Text>
          <Text className="text-xs text-gray-500">{item.timeAgo}</Text>
        </View>
      </View>

      <View className="mt-4 flex-row items-center">
        <Text className="font-semibold text-gray-900 mr-2">{item.rating}</Text>
        <RatingStars rating={item.rating} />
      </View>

      <Text className="text-gray-600 mt-3 leading-5">{item.comment}</Text>

      <View className="mt-5 h-px bg-gray-200" />
    </View>
  );
};

export default ReviewCard;
