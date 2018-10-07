import { PublicCurrencies } from './interfaces/publicCurrencies';
import { PublicSymbols } from './interfaces/publicSymbols.interface';
import { PublicTimestamp } from './interfaces/publicTimestamp';
export declare class Public {
    private common;
    private apiPrefix;
    private requestMethod;
    constructor();
    symbols(): Promise<PublicSymbols>;
    currencys(): Promise<PublicCurrencies>;
    timestamp(): Promise<PublicTimestamp>;
}
