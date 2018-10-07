import { MarketDepth, MarketDepthType } from './interfaces/marketDepth';
import { MarketDetail } from './interfaces/marketDetail.interface';
import { MarketDetailMerged } from './interfaces/marketDetailMerged.interface';
import { MarketHistoryKline, MarketHistoryKlineType } from './interfaces/marketHistoryKline.interface';
import { MarketHistoryTrades } from './interfaces/marketHistoryTrade.interface';
import { MarketTrade } from './interfaces/marketTrade.interface';
export declare class Market {
    private common;
    private apiPrefix;
    private requestMethod;
    constructor();
    historyKline(symbol: string, period: MarketHistoryKlineType, size?: number): Promise<MarketHistoryKline>;
    detailMerged(symbol: string): Promise<MarketDetailMerged>;
    depth(symbol: string, type: MarketDepthType): Promise<MarketDepth>;
    trade(symbol: string): Promise<MarketTrade>;
    historyTrade(symbol: string, size?: number): Promise<MarketHistoryTrades>;
    detail(symbol: string): Promise<MarketDetail>;
}
