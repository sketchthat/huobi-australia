import { Common } from './common';
import { PublicSymbols } from './interfaces/publicSymbols.interface';
import { PublicCurrencies } from './interfaces/publicCurrencies';
import { PublicTimestamp } from './interfaces/publicTimestamp';

export class Public {
  private common: Common;

  private pathPrefix: string;
  private requestMethod: string;

  constructor() {
    this.common = new Common();

    this.pathPrefix = '/v1/common';
    this.requestMethod = 'GET';
  }

  public async symbols(): Promise<PublicSymbols> {
    return this.common.request(this.requestMethod, `${this.pathPrefix}/symbols`);
  }

  public async currencys(): Promise<PublicCurrencies> {
    return this.common.request(this.requestMethod, `${this.pathPrefix}/currencys`);
  }

  public async timestamp(): Promise<PublicTimestamp> {
    return this.common.request(this.requestMethod, `${this.pathPrefix}/timestamp`);
  }
}


