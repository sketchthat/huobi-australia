import * as rp from 'request-promise';

export class Common {
  private uri: string;

  constructor() {
    const domain = 'api.huobi.com.au';
    this.uri = `https://${domain}`;
  }

  public async request(method: string, path: string, qs?: object, body?: object): Promise<any> {
    const opts = {
      uri: `${this.uri}${path}`,
      json: true,
      method: method,
      qs: qs,
      body: body,
    };

    return rp(opts);
  }
}
