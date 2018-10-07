import { Common } from './common';
import { buildParams, createHmac } from './services/authentication';

import {
  TradeOrder,
  TradeOrderDirectType,
  TradeOrders,
  TradeOrderStatesType,
  TradeOrderTypesType,
} from './interfaces/tradeOrders.interface';
import { TradeOrdersBatchCancel } from './interfaces/tradeOrdersBatchCancel.interface';
import { TradeOrderMatchResults } from './interfaces/tradeOrdersMatchResults.interface';
import { TradeOrdersPlace, TradeOrdersPlaceSourceType, TradeOrdersPlaceTypeType  } from './interfaces/tradeOrdersPlace.interface';

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

  public async order(orderId: string): Promise<TradeOrder> {
    const r = createHmac(
      'GET',
      `${this.apiPrefix}/orders/${orderId}`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }

  public async orderMatchResults(orderId: string): Promise<TradeOrderMatchResults> {
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
    const qs = buildParams({
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

  public async ordersPlace(
    symbol: string,
    type: TradeOrdersPlaceTypeType,
    accountId: string,
    amount: string,
    price?: string,
    source?: TradeOrdersPlaceSourceType,
  ): Promise<TradeOrdersPlace> {
    const post = buildParams({
      symbol: symbol.toLowerCase(),
      type,
      'account-id': accountId,
      amount,
      price,
      source,
    });

    const r = createHmac(
      'POST',
      `${this.apiPrefix}/orders/place`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs, post);
  }

  public async ordersSubmitCancel(orderId: string): Promise<TradeOrdersPlace> {
    const r = createHmac(
      'POST',
      `${this.apiPrefix}/orders/${orderId}/submitcancel`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }

  public async ordersBatchCancel(orderIds: string[]): Promise<TradeOrdersBatchCancel> {
    const r = createHmac(
      'POST',
      `${this.apiPrefix}/orders/batchcancel`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs, { 'order-ids': orderIds });
  }
}
