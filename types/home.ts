import type { ReactNode } from 'react';

export type Service = {
  id: string;
  title: string;
  color: string; // tailwind bg color class
  icon: ReactNode;
};

export type Category = {
  id: string;
  title: string;
  tint: string; // e.g. 'bg-purple-100'
  icon: ReactNode;
};

export type Article = {
  id: string;
  title: string;
  image: string; // remote image url
  accent: string; // e.g. 'bg-green-100'
  onPress?: () => void;
};

export type Review = {
  id: string;
  userName: string;
  avatar: string;
  timeAgo: string;
  rating: number; // 0..5
  comment: string;
};
