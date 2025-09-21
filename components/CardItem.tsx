import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface cardInterface {
  id: string;
  name: string;
  type: string;
  image: string;
  rating: string;
  price: string;
}

export default function CardItem({ item }: { item: cardInterface }) {
  return (
    <View className="w-1/2 p-2">
      <View className="bg-white rounded-2xl p-2 shadow-sm">
        <View>
          <Image src={item.image} className="w-full h-32 rounded-xl" />
          <View className="absolute top-2 right-2 flex-row items-center bg-black/30 p-1 rounded-full px-2">
            <Ionicons name="star" size={12} color="#FBBE21" />
            <Text className="text-white text-xs font-semibold ml-1">{item.rating}</Text>
          </View>
        </View>
        <Text className="text-base font-semibold text-dark mt-3">{item.name}</Text>
        <Text className="text-xs text-gray-500">{item.type}</Text>
        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-lg font-bold text-dark">$ {item.price}</Text>
          <TouchableOpacity className="bg-primary w-8 h-8 rounded-lg items-center justify-center">
            <Feather name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
