export interface MarketDepth {
  ch: string;
  status: string;
  tick: MarketDepthTick;
  ts: number;
}

interface MarketDepthTick {
  asks: number[][];
  bids: number[][];
  ch: string;
  id: number;
  mrid: number;
  ts: number;
  version: number;
}

export type MarketDepthType = 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5';
