import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Simple 3-slide onboarding based on the provided samples
const SLIDES = [
  {
    id: 's1',
    title: 'Welcome to\nMeat SCM',
    subtitle:
      'Giải pháp truy xuất nguồn gốc và vận hành chuỗi cung ứng thực phẩm dễ dàng và minh bạch.',
    accent: 'bg-green-100',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 's2',
    title: 'Premium Food\nAt Your Doorstep',
    subtitle: 'Theo dõi từ trang trại đến cửa hàng. Tối ưu chất lượng và thời gian giao.',
    accent: 'bg-emerald-100',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 's3',
    title: 'Buy Premium\nQuality Products',
    subtitle: 'Dữ liệu minh bạch, tiêu chuẩn cao. Mua sắm an tâm cho gia đình bạn.',
    accent: 'bg-lime-100',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  // Pre-calculate item layouts to enable precise scrollToIndex
  const getItemLayout = (_: unknown, i: number) => ({ length: 1, offset: i, index: i });

  const goNext = () => {
    if (index < SLIDES.length - 1) {
      const next = index + 1;
      setIndex(next);
      ref.current?.scrollToIndex({ index: next, animated: true });
    } else {
      router.replace('/(tabs)');
    }
  };

  const skip = () => router.replace('/(tabs)');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top controls */}
      <View className="flex-row justify-between items-center px-5 pt-3">
        <View />
        <TouchableOpacity onPress={skip}>
          <Text className="text-green-600 font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slides */}
      <FlatList
        ref={ref}
        data={SLIDES}
        keyExtractor={(i) => i.id}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        renderItem={({ item }) => (
          <View className="w-screen flex-1 px-5">
            <View className={`mt-4 rounded-3xl overflow-hidden ${item.accent}`}>
              <Image source={{ uri: item.image }} className="w-full h-80" />
            </View>

            <View className="mt-6 bg-white rounded-3xl px-5 py-6 shadow-sm">
              <Text className="text-2xl font-extrabold text-gray-900">{item.title}</Text>
              <Text className="text-gray-600 mt-3 leading-5">{item.subtitle}</Text>

              <TouchableOpacity
                onPress={goNext}
                className="mt-6 h-12 bg-green-500 rounded-full flex-row items-center justify-center"
                activeOpacity={0.8}
              >
                <Text className="text-white font-semibold mr-2">
                  {index === SLIDES.length - 1 ? 'Get started' : 'Next'}
                </Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Dots */}
      <View className="flex-row items-center justify-center mt-4 mb-6">
        {SLIDES.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full mx-1 ${i === index ? 'w-6 bg-green-500' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
