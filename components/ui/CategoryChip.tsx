import type { Category } from '@/types/home';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  item: Category;
  active?: boolean;
  onPress?: () => void;
}

const CategoryChip: React.FC<Props> = ({ item, active, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="items-center mx-3"
      onPress={onPress || (() => Alert.alert(item.title, 'Danh mục đang được phát triển'))}
    >
      <View
        className={`w-16 h-16 rounded-full items-center justify-center ${item.tint} ${
          active ? 'ring-2 ring-green-500' : ''
        }`}
      >
        {item.icon}
      </View>
      <Text className="text-xs text-gray-700 mt-2">{item.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryChip;
