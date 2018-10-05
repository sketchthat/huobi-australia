export interface MarketHistoryTrades {
  ch: string;
  data: MarketHistoryTradeData[];
  status: string;
  ts: number;
}

interface MarketHistoryTradeData {
  data: MarketHistoryTradeDataData[];
  id: number;
  ts: number;
}

interface MarketHistoryTradeDataData {
  amount: number;
  direction: string;
  id: number;
  price: number;
  ts: number;
}
