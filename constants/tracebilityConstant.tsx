import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export const EVENT_TITLES: Record<string, string> = {
  FARMING: 'Chăn nuôi',
  PROCESSING: 'Chế biến',
  PICKED_UP_FOR_SHIPMENT: 'Thu gom vận chuyển',
  SHIPPING_STARTED: 'Bắt đầu vận chuyển',
  RECEIVING: 'Tiếp nhận',
  STORAGE_UPDATE: 'Cập nhật bảo quản',
  SOLD: 'Đã bán',
  CREATED_FROM_PROCESSING: 'Tạo từ chế biến',
  SPLIT_INTO_UNITS: 'Chia thành đơn vị',
  CREATED_AS_UNIT: 'Tạo đơn vị',
};

export const EVENT_ICONS: Record<string, () => React.ReactNode> = {
  FARMING: () => <MaterialCommunityIcons name="barn" size={24} color="white" />,
  PROCESSING: () => <MaterialCommunityIcons name="factory" size={24} color="white" />,
  PICKED_UP_FOR_SHIPMENT: () => (
    <MaterialCommunityIcons name="package-up" size={24} color="white" />
  ),
  SHIPPING_STARTED: () => <MaterialCommunityIcons name="truck-delivery" size={24} color="white" />,
  RECEIVING: () => <MaterialCommunityIcons name="package-down" size={24} color="white" />,
  STORAGE_UPDATE: () => <MaterialCommunityIcons name="fridge" size={24} color="white" />,
  SOLD: () => <Ionicons name="cart" size={24} color="white" />,
  CREATED_FROM_PROCESSING: () => <MaterialCommunityIcons name="creation" size={24} color="white" />,
  SPLIT_INTO_UNITS: () => <MaterialCommunityIcons name="call-split" size={24} color="white" />,
  CREATED_AS_UNIT: () => <MaterialCommunityIcons name="cube-outline" size={24} color="white" />,
  DEFAULT: () => <Feather name="box" size={24} color="white" />,
};

export const DETAIL_LABELS: Record<string, string> = {
  // Common
  facilityName: 'Cơ sở',
  facilityID: 'Mã cơ sở',
  'address.fullText': 'Địa chỉ',

  // Farming
  farmOrgName: 'Đơn vị chăn nuôi',
  harvestDate: 'Ngày thu hoạch',
  expectedHarvestDate: 'Ngày dự kiến thu hoạch',
  sowingDate: 'Ngày gieo trồng',
  startDate: 'Ngày bắt đầu',
  pesticides: 'Thuốc trừ sâu',
  medications: 'Thuốc điều trị',
  feed: 'Thức ăn',
  certificates: 'Chứng chỉ',

  // Processing
  processorOrgName: 'Đơn vị chế biến',
  steps: 'Các bước chế biến',

  // Shipping
  shipmentID: 'Mã vận chuyển',
  description: 'Mô tả',
  quantity: 'Số lượng',
  proof: 'Bằng chứng',

  // Receiving
  receivedFacility: 'Nơi nhận',
  quantityReceived: 'Số lượng nhận',

  // Storage
  ownerOrgName: 'Đơn vị sở hữu',
  locationInStore: 'Vị trí trong cửa hàng',
  temperature: 'Nhiệt độ',
  note: 'Ghi chú',

  // Sales
  retailerOrgName: 'Đơn vị bán lẻ',
  saleTimestamp: 'Thời điểm bán',

  // Unit creation
  unitCount: 'Số lượng đơn vị',
  unitIDPrefix: 'Tiền tố mã đơn vị',
};
