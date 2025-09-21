export const traceabilityData = {
  assetID: 'UNIT-TB-008-1',
  parentAssetIDs: ['PROD-BATCH-TB-008-AT-RETAILER'],
  productName: 'Thịt ba rọi sạch 500g',
  status: 'SOLD',
  fullHistory: [
    {
      type: 'FARMING',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T08:59:39Z',
      txID: '13d765f70ceea83c7b7f73d29173c4ab989e0c3387cb91ca709d42c3329e27e0',
      details: {
        facilityName: 'Trang trại Xanh 01',
        farmOrgName: 'Nông trại Xanh',
        harvestDate: '2025-08-25',
        pesticides: ['Không sử dụng'],
      },
    },
    {
      type: 'PROCESSING',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T09:00:03Z',
      txID: 'bd550d614e8a519582be64093aca30d512d07a7278bee07aa9e509ee2a5f072f',
      details: {
        facilityName: 'Nhà máy Sạch 01',
        processorOrgName: 'Nhà máy Sạch',
        steps: [
          {
            name: 'Pha lóc',
            timestamp: '2025-08-26T09:00:00Z',
          },
        ],
      },
    },
    {
      type: 'SHIPPING_STARTED',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T09:00:25Z',
      txID: '2deffa862123b58ef8e6f4f5302446ebb04c798633c686a7c1f135c152af9471',
      details: {
        shipmentID: 'SHIP-202',
        description: 'Vận chuyển đến nhà bán lẻ',
      },
    },
    {
      type: 'RECEIVING',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T09:00:37Z',
      txID: 'de4d0949648bc49db02dd3c6b63d74d6ab29392840a03afd63702a17c1b0c851',
      details: {
        receivedFacility: 'Cửa hàng An Toàn 01',
        quantityReceived: {
          unit: 'khay',
          value: 40,
        },
      },
    },
    {
      type: 'STORAGE_UPDATE',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T09:01:02Z',
      txID: '3e212375418df82dc68ddd46b65d157d3752f0ad14f54376839668b70a4f2c47',
      details: {
        facilityName: 'Cửa hàng An Toàn 01',
        ownerOrgName: 'Siêu thị An Toàn',
        locationInStore: 'Tủ mát A, kệ số 3',
        temperature: '3°C',
      },
    },
    {
      type: 'SOLD',
      actorMSP: 'MeatSupplyOrgMSP',
      timestamp: '2025-08-16T09:01:12Z',
      txID: 'c0f4df48124d462c73b097e8d2a9e24cf31c7d364ef0fded1f5c5ce8dec8fc5f',
      details: {
        retailerOrgName: 'Siêu thị An Toàn',
        facilityName: 'Cửa hàng An Toàn 01',
        saleTimestamp: '2025-08-28T19:00:00Z',
      },
    },
  ],
};
