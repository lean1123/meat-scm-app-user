import type { Article } from '@/types/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

const ArticleBanner: React.FC<{ item: Article }> = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="mt-4"
      onPress={item.onPress || (() => Alert.alert(item.title, 'Mở bài viết'))}
    >
      <View className={`w-full rounded-3xl overflow-hidden ${item.accent} relative`}>
        {/* Content left */}
        <View className="p-5 pr-28">
          <Text className="text-2xl font-extrabold text-gray-900">{item.title}</Text>
          <View className="mt-4 self-start bg-white/90 px-4 py-2 rounded-full flex-row items-center">
            <Text className="font-semibold text-gray-900 mr-2">See recipe</Text>
            <Ionicons name="arrow-forward" size={16} color="#111827" />
          </View>
        </View>
        {/* Image right */}
        <Image
          source={{ uri: item.image }}
          className="w-40 h-40 absolute right-2 bottom-0 rounded-2xl"
        />
        {/* Like button */}
        <View className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full items-center justify-center">
          <Ionicons name="heart-outline" size={18} color="#111827" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleBanner;
