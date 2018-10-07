import { Common } from './common';
import { createHmac } from './services/authentication';

import { Accounts } from './interfaces/accounts.interface';
import { AccountsBalances } from './interfaces/accountsBalances.interface';

export class Account {
  private common: Common;

  private accessTokenId: string;
  private privateKey: string;

  private apiPrefix: string;
  private requestMethod: string;

  constructor(
    accessTokenId?: string,
    privateKey?: string,
  ) {
    this.common = new Common();

    this.accessTokenId = accessTokenId;
    this.privateKey = privateKey;

    const apiVersion = '/v1';
    const apiGroup = '/account';
    this.apiPrefix = `${apiVersion}${apiGroup}`;
    this.requestMethod = 'GET';
  }

  public async accounts(): Promise<Accounts> {
    const r = createHmac(
      this.requestMethod,
      `${this.apiPrefix}/accounts`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }

  public async accountsBalance(accountId: number): Promise<AccountsBalances> {
    const r = createHmac(
      this.requestMethod,
      `${this.apiPrefix}/accounts/${accountId}/balance`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }
}
