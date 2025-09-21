import CardItem from '@/components/CardItem';
import CustomCarousel from '@/components/CustomCarousel';
import { coffeeData } from '@/data/Home';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import '../../global.css';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All Coffee');
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <View className="w-full h-52 bg-green-500 top-0 rounded-b-2xl shadow-md"></View>
      <TouchableOpacity className="flex-row items-center absolute top-10 left-5 bg-white p-2 rounded-full shadow-md">
        <Image src="https://picsum.photos/200" className="w-10 h-10 rounded-full mr-2" />
        <Text className="font-semibold">Xin chào! Thanh An</Text>
      </TouchableOpacity>
      <View className="absolute top-10 left-5 right-5 p-4 rounded-lg">
        <TextInput
          className="w-90 h-12 bg-white rounded-full px-4 mt-16 shadow-md"
          placeholder="Tìm kiếm..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          className="absolute right-5 top-[72px] bg-green-500 p-3 rounded-full shadow-md"
          onPress={() =>
            Alert.alert('Tìm kiếm thất bại', 'Chức năng tìm kiếm chưa được triển khai')
          }
        >
          <Ionicons name="search" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="w-full px-4">
        <View className="w-full h-56 mt-4">
          <CustomCarousel />
        </View>

        <FlatList
          className="mt-5"
          data={coffeeData}
          renderItem={({ item }) => <CardItem item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
