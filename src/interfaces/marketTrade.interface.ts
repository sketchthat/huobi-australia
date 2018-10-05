export interface MarketTrade {
  ch: string;
  status: string;
  tick: {
    data: MarketTradeTickData[];
    id: number;
    ts: number;
  };
}

interface MarketTradeTickData {
  amount: string;
  direction: string;
  id: number;
  price: string;
  ts: number;
}
