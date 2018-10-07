import { TradeOrderTypesType } from './tradeOrders.interface';

export interface TradeOrderMatchResults {
  status: string;
  data: TradeOrderMatchResultsData[];
}

interface TradeOrderMatchResultsData {
  id: number;
  'order-id': number;
  'match-id': number;
  symbol: string;
  type: TradeOrderTypesType;
  source: string;
  price: string;
  'filled-amount': string;
  'filled-fees': string;
  'created-at': number;
  'trade-fees': string;
  'gst-fees': string;
}
