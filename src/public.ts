import { Common } from './common';

import { PublicCurrencies } from './interfaces/publicCurrencies';
import { PublicSymbols } from './interfaces/publicSymbols.interface';
import { PublicTimestamp } from './interfaces/publicTimestamp';

export class Public {
  private common: Common;

  private apiPrefix: string;
  private requestMethod: string;

  constructor() {
    this.common = new Common();

    const apiVersion = '/v1';
    const apiGroup = '/common';
    this.apiPrefix = `${apiVersion}${apiGroup}`;
    this.requestMethod = 'GET';
  }

  public async symbols(): Promise<PublicSymbols> {
    return this.common.request(this.requestMethod, `${this.apiPrefix}/symbols`);
  }

  public async currencys(): Promise<PublicCurrencies> {
    return this.common.request(this.requestMethod, `${this.apiPrefix}/currencys`);
  }

  public async timestamp(): Promise<PublicTimestamp> {
    return this.common.request(this.requestMethod, `${this.apiPrefix}/timestamp`);
  }
}
