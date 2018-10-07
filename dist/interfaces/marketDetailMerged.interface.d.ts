export interface MarketDetailMerged {
    ch: string;
    status: string;
    tick: MarketDetailMergedTick;
    ts: number;
}
interface MarketDetailMergedTick {
    amount: string;
    ask: number[];
    bid: number[];
    close: string;
    count: number;
    high: string;
    id: number;
    low: string;
    open: string;
    ts: number;
    vol: string;
}
export {};
