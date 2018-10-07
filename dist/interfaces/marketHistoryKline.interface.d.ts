export interface MarketHistoryKline {
    ch: string;
    data: MarketHistoryKlineData[];
    status: string;
    ts: number;
}
interface MarketHistoryKlineData {
    amount: number;
    close: number;
    count: number;
    high: number;
    id: number;
    low: number;
    open: number;
    vol: number;
}
export declare type MarketHistoryKlineType = '1min' | '5min' | '15min' | '30min' | '60min' | '1day' | '1mon';
export {};
