import type { Service } from '@/types/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  item: Service;
  onPress?: () => void;
}

const ServiceCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-1 m-2"
      onPress={onPress || (() => Alert.alert(item.title, 'Tính năng đang được phát triển'))}
    >
      <View className="bg-white rounded-2xl p-4 shadow-sm">
        <View className={`w-12 h-12 rounded-xl items-center justify-center ${item.color}`}>
          {item.icon}
        </View>
        <Text className="mt-3 font-semibold text-gray-800">{item.title}</Text>

        <View className="absolute bottom-3 right-3 w-10 h-10 bg-green-500 rounded-full items-center justify-center">
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
