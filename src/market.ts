import { Common } from './common';

import { MarketDepth, MarketDepthType } from './interfaces/marketDepth';
import { MarketDetail } from './interfaces/marketDetail.interface';
import { MarketDetailMerged } from './interfaces/marketDetailMerged.interface';
import { MarketHistoryKline, MarketHistoryKlineType } from './interfaces/marketHistoryKline.interface';
import { MarketHistoryTrades } from './interfaces/marketHistoryTrade.interface';
import { MarketTrade } from './interfaces/marketTrade.interface';

export class Market {
  private common: Common;

  private apiPrefix: string;
  private requestMethod: string;

  constructor() {
    this.common = new Common();

    this.apiPrefix = '/market';
    this.requestMethod = 'GET';
  }

  public async historyKline(symbol: string, period: MarketHistoryKlineType, size?: number): Promise<MarketHistoryKline> {
    const qs = {
      symbol: symbol.toLowerCase(),
      period,
      size: size ? (size && size > 2000 ? 2000 : size) : 150,
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/history/kline`, qs);
  }

  public async detailMerged(symbol: string): Promise<MarketDetailMerged> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/detail/merged`, qs);
  }

  public async depth(symbol: string, type: MarketDepthType): Promise<MarketDepth> {
    const qs = {
      symbol: symbol.toLowerCase(),
      type,
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/depth`, qs);
  }

  public async trade(symbol: string): Promise<MarketTrade> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/trade`, qs);
  }

  public async historyTrade(symbol: string, size?: number): Promise<MarketHistoryTrades> {
    const qs = {
      symbol: symbol.toLowerCase(),
      size: size ? (size && size > 2000 ? 2000 : size) : 1,
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/history/trade`, qs);
  }

  public async detail(symbol: string): Promise<MarketDetail> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.requestMethod, `${this.apiPrefix}/detail`, qs);
  }
}
