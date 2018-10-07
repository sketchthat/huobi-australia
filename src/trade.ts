import { Common } from './common';
import { TradeOrderDirectType, TradeOrders, TradeOrderStatesType, TradeOrderTypesType, TradeOrder } from './interfaces/tradeOrders.interface';
import { buildQs, createHmac } from './services/authentication';
import { TradeOrderMatchResults } from './interfaces/tradeOrdersMatchResults.interface';

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

  // POST /v1/order/orders/place
  // POST /v1/order/orders/{order-id}/submitcancel
  // POST /v1/order/orders/batchcancel

  public async order(orderId: number): Promise<TradeOrder> {
    const r = createHmac(
      'GET',
      `${this.apiPrefix}/orders/${orderId}`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }

  public async orderMatchResults(orderId: number): Promise<TradeOrderMatchResults> {
    const r = createHmac(
      'GET',
      `${this.apiPrefix}/orders/${orderId}/matchresults`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
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
      symbol: symbol.toLowerCase(),
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
