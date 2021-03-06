export interface TradeOrders {
    status: string;
    data: TradeOrdersData[];
}
export interface TradeOrder {
    status: string;
    data: TradeOrdersData;
}
interface TradeOrdersData {
    id: number;
    symbol: string;
    'account-id': number;
    amount: string;
    price: string;
    'created-at': number;
    type: TradeOrderTypesType;
    'filled-amount': string;
    'filled-cash-amount': string;
    'filled-fees': string;
    'finished-at': number;
    source: string;
    state: string;
    'canceled-at': number;
}
export declare type TradeOrderStatesType = 'pre-submitted' | 'submitted' | 'partial-filled' | 'partial-canceled' | 'filled' | 'canceled';
export declare type TradeOrderTypesType = 'buy-market' | 'sell-market' | 'buy-limit' | 'sell-limit';
export declare type TradeOrderDirectType = 'prev' | 'next';
export {};
