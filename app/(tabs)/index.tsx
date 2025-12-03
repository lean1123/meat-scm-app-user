import CustomCarousel from '@/components/CustomCarousel';
import ArticleBanner from '@/components/ui/ArticleBanner';
import CategoryChip from '@/components/ui/CategoryChip';
import ReviewCard from '@/components/ui/ReviewCard';
import ServiceCard from '@/components/ui/ServiceCard';
import { Article, Category, Review, Service } from '@/types/home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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

// types moved to '@/types/home'

const services: Service[] = [
  {
    id: 'transport',
    title: 'Vận chuyển',
    color: 'bg-blue-50', // Blue tint
    icon: <MaterialCommunityIcons name="truck-fast" size={36} color="#2563EB" />, // blue-600
  },
  {
    id: 'retail',
    title: 'Cung cấp bán lẻ',
    color: 'bg-amber-50', // Amber tint
    icon: <MaterialCommunityIcons name="storefront-outline" size={36} color="#F59E0B" />, // amber-500
  },
  {
    id: 'processing',
    title: 'Chế biến',
    color: 'bg-violet-50', // Violet tint
    icon: <MaterialCommunityIcons name="factory" size={36} color="#7C3AED" />, // violet-600
  },
  {
    id: 'farming',
    title: 'Nuôi trồng',
    color: 'bg-emerald-50', // Emerald tint
    icon: <MaterialCommunityIcons name="barn" size={36} color="#059669" />, // emerald-600
  },
];

// New: mock categories (healthy eating)
const categories: Category[] = [
  {
    id: 'sandwich',
    title: 'Sandwich',
    tint: 'bg-purple-100',
    icon: <MaterialCommunityIcons name="bread-slice" size={26} color="#8B5CF6" />,
  },
  {
    id: 'salad',
    title: 'Salad',
    tint: 'bg-green-100',
    icon: <MaterialCommunityIcons name="leaf" size={26} color="#10B981" />,
  },
  {
    id: 'pizza',
    title: 'Pizza',
    tint: 'bg-yellow-100',
    icon: <MaterialCommunityIcons name="pizza" size={26} color="#F59E0B" />,
  },
  {
    id: 'spaghetti',
    title: 'Spaghetti',
    tint: 'bg-rose-100',
    icon: <MaterialCommunityIcons name="noodles" size={26} color="#F43F5E" />,
  },
  {
    id: 'smoothie',
    title: 'Smoothie',
    tint: 'bg-sky-100',
    icon: <MaterialCommunityIcons name="cup" size={26} color="#0EA5E9" />,
  },
];

// New: mock reviews (positive)
const reviews: Review[] = [
  {
    id: 'r1',
    userName: 'Haylie Aminoff',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop',
    timeAgo: '32 minutes ago',
    rating: 4.5,
    comment:
      'Ứng dụng rất dễ dùng, thông tin truy xuất rõ ràng giúp mình yên tâm hơn khi mua thực phẩm.',
  },
  {
    id: 'r2',
    userName: 'Carla Septimus',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    timeAgo: '32 minutes ago',
    rating: 4.5,
    comment: 'Tốc độ quét QR nhanh, hiển thị lịch sử đầy đủ. Thiết kế đẹp và rất trực quan.',
  },
  {
    id: 'r3',
    userName: 'Minh Anh',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop',
    timeAgo: '1 hour ago',
    rating: 5,
    comment:
      'Dịch vụ vận chuyển và quản lý chuỗi cung ứng tuyệt vời. Rất đáng để sử dụng mỗi ngày!',
  },
];

// New: mock article banners
const articles: Article[] = [
  {
    id: 'mix-salad',
    title: 'Mix Salad\nAvocado',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-green-100',
  },
  {
    id: 'high-protein',
    title: 'High Protein\nMeal Prep',
    image:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-amber-100',
  },
  {
    id: 'low-carb',
    title: 'Low Carb\nDinner',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-sky-100',
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<string>('salad');
  return (
    <SafeAreaView className="flex-1 items-center bg-slate-50">
      <View className="w-full h-52 bg-white top-0 rounded-b-2xl shadow-lg"></View>
      <TouchableOpacity className="flex-row items-center absolute top-10 left-5 bg-green-500 p-2 rounded-full shadow-md">
        <Image src="https://picsum.photos/200" className="w-10 h-10 rounded-full mr-2" />
        <Text className="font-semibold text-white">Xin chào! Cảm ơn bạn đã ghé thăm</Text>
      </TouchableOpacity>
      <View className="absolute top-10 left-5 right-5 p-4 rounded-lg">
        <TextInput
          className="w-90 h-12 bg-slate-50 rounded-full px-4 mt-16 shadow-lg border border-green-500"
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
        <View className="w-full h-56 mt-4 mb-4">
          <CustomCarousel />
        </View>

        <Text className="text-xl font-bold text-gray-900 mt-6">Dịch vụ nổi bật</Text>
        <FlatList
          className="mt-3"
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ServiceCard item={item} />}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        {/* Healthy Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-6"
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          {categories.map((c) => (
            <CategoryChip
              key={c.id}
              item={c}
              active={activeCategory === c.id}
              onPress={() => setActiveCategory(c.id)}
            />
          ))}
        </ScrollView>

        {/* Article Banners */}
        <View className="mt-4">
          {articles.map((a) => (
            <ArticleBanner key={a.id} item={a} />
          ))}
        </View>

        {/* Reviews */}
        <Text className="text-xl font-bold text-gray-900 mt-6 mb-2">Đánh giá nổi bật</Text>
        <View>
          {reviews.map((r) => (
            <ReviewCard key={r.id} item={r} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
