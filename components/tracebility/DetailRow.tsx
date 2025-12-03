// src/components/traceability/DetailRow.tsx
import { Address, DetailValue, ProcessingStep, QuantityValue } from '@/types/traceability';
import React from 'react';
import { Text, View } from 'react-native';

interface DetailRowProps {
  label: string;
  value: DetailValue;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  if (value === null || value === undefined) return null;

  let displayValue: string = '';

  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    // Handle ProcessingStep array
    if (value[0] && typeof value[0] === 'object' && 'name' in value[0]) {
      displayValue = (value as ProcessingStep[]).map((step) => step.name).join(', ');
    } else {
      displayValue = value.join(', ');
    }
  } else if (typeof value === 'object' && value !== null) {
    // Handle QuantityValue
    if ('unit' in value && 'value' in value) {
      const qty = value as QuantityValue;
      displayValue = `${qty.value} ${qty.unit}`;
    }
    // Handle Address
    else if ('fullText' in value) {
      const addr = value as Address;
      displayValue = addr.fullText;
    } else {
      displayValue = JSON.stringify(value);
    }
  } else {
    displayValue = String(value);
  }

  if (!displayValue.trim()) return null;

  return (
    <View className="flex-row mb-2">
      <Text className="w-2/5 text-gray-500 text-sm">{label}</Text>
      <Text className="w-3/5 font-medium text-gray-800 text-sm">{displayValue}</Text>
    </View>
  );
};

export default DetailRow;
