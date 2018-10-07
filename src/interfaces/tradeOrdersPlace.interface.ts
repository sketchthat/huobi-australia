export interface TradeOrdersPlace {
  status: string;
  data: string;
}

export type TradeOrdersPlaceTypeType = 'buy-market' | 'sell-market' | 'buy-limit' | 'sell-limit' |
  'sell-ioc' | 'buy-ioc' | 'sell-fok' | 'buy-fok' |
  'sell-limit-maker' | 'buy-limit-maker';

export type TradeOrdersPlaceSourceType = 'api' | 'margin-api';
