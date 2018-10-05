import { Common } from './common';
import { createHmac } from './services/authentication';

export class Trade {
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
    const apiGroup = '/order';
    this.apiPrefix = `${apiVersion}${apiGroup}`;
    this.requestMethod = 'GET';
  }

  public async orders(): Promise<any> {
    const r = createHmac(
      this.requestMethod,
      `${this.apiPrefix}/orders`,
      this.accessTokenId,
      this.privateKey,
    );

    return this.common.request(r.method, r.path, r.qs);
  }
}
