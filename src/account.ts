import { Common } from './common';
import { Accounts } from './interfaces/accounts.interface';
import { AccountsBalances } from './interfaces/accountsBalances.interface';
import { createHmac } from './services/authentication';

export class Account {
  private common: Common;

  private accessTokenId: string;
  private privateKey: string;

  constructor(
    accessTokenId?: string,
    privateKey?: string,
  ) {
    this.common = new Common();

    this.accessTokenId = accessTokenId;
    this.privateKey = privateKey;
  }

  public async accounts(): Promise<Accounts> {
    const r = createHmac('GET', '/v1/account/accounts', this.accessTokenId, this.privateKey);

    return this.common.request(r.method, r.path, r.qs);
  }

  public async accountsBalance(accountId: number): Promise<AccountsBalances> {
    const r = createHmac('GET', `/v1/account/accounts/${accountId}/balance`, this.accessTokenId, this.privateKey);

    return this.common.request(r.method, r.path, r.qs);
  }
}
