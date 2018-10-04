import { Common } from './common';
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

  public async accounts(): Promise<any> {
    const method = 'GET';
    const path = '/v1/account/accounts';

    const qs = createHmac(method, path, this.accessTokenId, this.privateKey);

    return this.common.request(method, path, qs);
  }

  public async accountsBalance(accountId: number): Promise<any> {
    const method = 'GET';
    const path = `/v1/account/accounts/${accountId}/balance`;

    const qs = createHmac(method, path, this.accessTokenId, this.privateKey);

    return this.common.request(method, path, qs);
  }
}
