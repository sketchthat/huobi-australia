import { Common } from './common';

import { MarketDepth, MarketDepthType } from './interfaces/marketDepth';
import { MarketDetail } from './interfaces/marketDetail.interface';
import { MarketDetailMerged } from './interfaces/marketDetailMerged.interface';
import { MarketHistoryKline, MarketHistoryKlineType } from './interfaces/marketHistoryKline.interface';
import { MarketHistoryTrades } from './interfaces/marketHistoryTrade.interface';
import { MarketTrade } from './interfaces/marketTrade.interface';

export class Market {
  private common: Common;
  private method: string;
  private pathPrefix: string;

  constructor() {
    this.common = new Common();

    this.method = 'GET';
    this.pathPrefix = '/market';
  }

  public async historyKline(symbol: string, period: MarketHistoryKlineType, size: number): Promise<MarketHistoryKline> {
    const qs = {
      symbol: symbol.toLowerCase(),
      period,
      size: (size ? size : (size > 2000 ? 2000 : size)),
    };

    return this.common.request(this.method, `${this.pathPrefix}/history/kline`, qs);
  }

  public async detailMerged(symbol: string): Promise<MarketDetailMerged> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.method, `${this.pathPrefix}/detail/merged`, qs);
  }

  public async depth(symbol: string, type: MarketDepthType): Promise<MarketDepth> {
    const qs = {
      symbol: symbol.toLowerCase(),
      type,
    };

    return this.common.request(this.method, `${this.pathPrefix}/depth`, qs);
  }

  public async trade(symbol: string): Promise<MarketTrade> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.method, `${this.pathPrefix}/trade`, qs);
  }

  public async historyTrade(symbol: string, size?: number): Promise<MarketHistoryTrades> {
    const qs = {
      symbol: symbol.toLowerCase(),
      size: (size ? size : (size > 2000 ? 2000 : size)),
    };

    return this.common.request(this.method, `${this.pathPrefix}/history/trade`, qs);
  }

  public async detail(symbol: string): Promise<MarketDetail> {
    const qs = {
      symbol: symbol.toLowerCase(),
    };

    return this.common.request(this.method, `${this.pathPrefix}/detail`, qs);
  }
}
