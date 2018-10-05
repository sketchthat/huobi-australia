import { Common } from './common';
import { TradeOrderDirectType, TradeOrders, TradeOrderStatesType, TradeOrderTypesType } from './interfaces/tradeOrders.interface';
import { buildQs, createHmac } from './services/authentication';

export class Trade {
  private common: Common;

  private accessTokenId: string;
  private privateKey: string;

  private apiPrefix: string;

  constructor(
    accessTokenId?: string,
    privateKey?: string,
  ) {
    this.common = new Common();

    this.accessTokenId = accessTokenId;
    this.privateKey = privateKey;

    const apiVersion = '/v1';
    const apiGroup = '/order';
    this.apiPrefix = `${apiVersion}${apiGroup}`;
  }

  public async orders(
    symbol: string,
    states: TradeOrderStatesType[],
    accountId?: string,
    types?: TradeOrderTypesType[],
    startDate?: string,
    endDate?: string,
    from?: string,
    direct?: TradeOrderDirectType,
    size?: string,
  ): Promise<TradeOrders> {
    const qs = buildQs({
      symbol,
      states,
      accountId,
      types,
      startDate,
      endDate,
      from,
      direct,
      size,
    });

    const r = createHmac(
      'GET',
      `${this.apiPrefix}/orders`,
      this.accessTokenId,
      this.privateKey,
      qs,
    );

    return this.common.request(r.method, r.path, r.qs);
  }
}
