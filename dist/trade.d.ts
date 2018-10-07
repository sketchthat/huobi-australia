import { TradeOrder, TradeOrderDirectType, TradeOrders, TradeOrderStatesType, TradeOrderTypesType } from './interfaces/tradeOrders.interface';
import { TradeOrdersBatchCancel } from './interfaces/tradeOrdersBatchCancel.interface';
import { TradeOrderMatchResults } from './interfaces/tradeOrdersMatchResults.interface';
import { TradeOrdersPlace, TradeOrdersPlaceSourceType, TradeOrdersPlaceTypeType } from './interfaces/tradeOrdersPlace.interface';
export declare class Trade {
    private common;
    private accessTokenId;
    private privateKey;
    private apiPrefix;
    constructor(accessTokenId?: string, privateKey?: string);
    order(orderId: string): Promise<TradeOrder>;
    orderMatchResults(orderId: string): Promise<TradeOrderMatchResults>;
    orders(symbol: string, states: TradeOrderStatesType[], accountId?: string, types?: TradeOrderTypesType[], startDate?: string, endDate?: string, from?: string, direct?: TradeOrderDirectType, size?: string): Promise<TradeOrders>;
    ordersPlace(symbol: string, type: TradeOrdersPlaceTypeType, accountId: string, amount: string, price?: string, source?: TradeOrdersPlaceSourceType): Promise<TradeOrdersPlace>;
    ordersSubmitCancel(orderId: string): Promise<TradeOrdersPlace>;
    ordersBatchCancel(orderIds: string[]): Promise<TradeOrdersBatchCancel>;
}
