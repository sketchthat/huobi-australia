import { Accounts } from './interfaces/accounts.interface';
import { AccountsBalances } from './interfaces/accountsBalances.interface';
export declare class Account {
    private common;
    private accessTokenId;
    private privateKey;
    private apiPrefix;
    private requestMethod;
    constructor(accessTokenId?: string, privateKey?: string);
    accounts(): Promise<Accounts>;
    accountsBalance(accountId: string): Promise<AccountsBalances>;
}
