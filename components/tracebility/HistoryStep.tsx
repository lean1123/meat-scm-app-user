// src/components/traceability/HistoryStep.tsx

import { DETAIL_LABELS, EVENT_ICONS, EVENT_TITLES } from '@/constants/tracebilityConstant';
import { TraceabilityEvent } from '@/types/traceability';
import { formatTimestamp } from '@/utils/dateUtils';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import DetailRow from './DetailRow';

interface HistoryStepProps {
  event: TraceabilityEvent;
  isLast: boolean;
}

const HistoryStep: React.FC<HistoryStepProps> = ({ event, isLast }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const title = EVENT_TITLES[event.type] || event.type;
  const IconComponent = EVENT_ICONS[event.type] || EVENT_ICONS.DEFAULT;

  // Skip certain event types from display
  const skipEvents = ['CREATED_FROM_PROCESSING', 'CREATED_AS_UNIT', 'ALLOCATED_FOR_SHIPMENT'];
  if (skipEvents.includes(event.type)) {
    return null;
  }

  // Handle string details (for some events like CREATED_FROM_PROCESSING)
  const isStringDetails = typeof event.details === 'string';

  return (
    <View className="flex-row">
      {/* Timeline Graphic */}
      <View className="items-center mr-4">
        <View className="w-12 h-12 bg-green-600 rounded-full items-center justify-center z-10">
          <IconComponent />
        </View>
        {!isLast && <View className="w-0.5 flex-1 bg-gray-300" />}
      </View>

      {/* Content Card */}
      <View className="flex-1 pb-8">
        <View className="bg-white p-4 rounded-lg shadow-sm -mt-2">
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            activeOpacity={0.7}
            className="flex-row justify-between items-center"
          >
            <View className="flex-1">
              <Text className="text-lg font-bold text-gray-800">{title}</Text>
              <Text className="text-sm text-gray-500">{formatTimestamp(event.timestamp)}</Text>
              <Text className="text-xs text-gray-400 mt-1">ID: {event.actorID}</Text>
            </View>
            <View className="ml-4 p-2">
              <Feather
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#6B7280"
              />
            </View>
          </TouchableOpacity>

          {/* Expanded Details */}
          {isExpanded && (
            <View className="mt-4 pt-4 border-t border-gray-200">
              {isStringDetails ? (
                <Text className="text-gray-700 mb-4">{event.details as string}</Text>
              ) : (
                <>
                  {Object.entries(event.details as object).map(([key, value]) => {
                    // Handle nested address object
                    if (key === 'address' && value && typeof value === 'object') {
                      return (
                        <DetailRow
                          key={key}
                          label={DETAIL_LABELS['address.fullText'] || 'Địa chỉ'}
                          value={value}
                        />
                      );
                    }
                    return <DetailRow key={key} label={DETAIL_LABELS[key] || key} value={value} />;
                  })}
                </>
              )}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  Linking.openURL(`https://your-blockchain-explorer.com/tx/${event.txID}`)
                }
              >
                <Text className="text-blue-600 text-xs mt-2 underline">
                  Xem giao dịch blockchain
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default HistoryStep;
