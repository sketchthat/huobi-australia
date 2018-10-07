import { Account } from './account';
import { Market } from './market';
import { Public } from './public';
import { Trade } from './trade';
export declare class Huobi {
    private accountClass;
    private marketClass;
    private publicClass;
    private tradeClass;
    constructor(accessTokenId?: string, privateKey?: string);
    market(): Market;
    public(): Public;
    account(): Account;
    trade(): Trade;
}
