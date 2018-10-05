import { Common } from './common';
import { Accounts } from './interfaces/accounts.interface';
import { AccountsBalances } from './interfaces/accountsBalances.interface';
import { createHmac } from './services/authentication';

export class Account {
  private common: Common;

  private accessTokenId: string;
  private privateKey: string;

  private apiVersion: string;
  private pathPrefix: string;
  private requestMethod: string;

  constructor(
    accessTokenId?: string,
    privateKey?: string,
  ) {
    this.common = new Common();

    this.accessTokenId = accessTokenId;
    this.privateKey = privateKey;

    this.requestMethod = 'GET';
    this.apiVersion = '/v1';
    this.pathPrefix = '/account';
  }

  public async accounts(): Promise<Accounts> {
    const r = createHmac(
      this.requestMethod,
      `${this.apiVersion}${this.pathPrefix}/accounts`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }

  public async accountsBalance(accountId: number): Promise<AccountsBalances> {
    const r = createHmac(
      this.requestMethod,
      `${this.apiVersion}${this.pathPrefix}/accounts/${accountId}/balance`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }
}
