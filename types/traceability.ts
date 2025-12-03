// src/types/traceability.ts

export interface QuantityValue {
  unit: string;
  value: number;
}

export interface ProcessingStep {
  name: string;
  technique?: string;
  timestamp: string;
}

export interface Address {
  fullText: string;
  latitude: number;
  longitude: number;
}

export interface EventDetails {
  // Common fields
  facilityName?: string;
  facilityID?: string;
  address?: Address;

  // Farming specific
  farmOrgName?: string;
  harvestDate?: string;
  expectedHarvestDate?: string;
  sowingDate?: string;
  startDate?: string;
  pesticides?: string[];
  medications?: string[];
  feed?: string[];
  certificates?: string[];

  // Processing specific
  processorOrgName?: string;
  steps?: ProcessingStep[];

  // Shipping specific
  shipmentID?: string;
  description?: string;
  proof?: any;
  quantity?: QuantityValue;

  // Receiving specific
  receivedFacility?: string;
  quantityReceived?: QuantityValue;

  // Storage specific
  ownerOrgName?: string;
  locationInStore?: string;
  temperature?: string;
  note?: string;

  // Sales specific
  retailerOrgName?: string;
  saleTimestamp?: string;

  // Unit creation specific
  unitCount?: number;
  unitIDPrefix?: string;
}

export interface TraceabilityEvent {
  type: string;
  actorMSP: string;
  actorID: string;
  timestamp: string;
  txID: string;
  details: EventDetails | string; // Can be object or string for some events
}

export interface TraceabilityData {
  assetID: string;
  parentAssetIDs: string[];
  productName: string;
  status: string;
  originalQuantity: QuantityValue;
  currentQuantity: QuantityValue;
  fullHistory: TraceabilityEvent[];
}

export type DetailValue =
  | string
  | number
  | string[]
  | QuantityValue
  | ProcessingStep[]
  | Address
  | null
  | undefined;
