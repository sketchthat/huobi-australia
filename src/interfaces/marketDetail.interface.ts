export interface MarketDetail {
  ch: string;
  status: string;
  tick: MarketDetailTick;
  ts: number;
}

interface MarketDetailTick {
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
  count: number;
  vol: string;
  symbol: string;
}
