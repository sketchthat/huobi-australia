import { Account } from './account';
import { Market } from './market';
import { Public } from './public';
import { Trade } from './trade';

export class Huobi {
  private accountClass: Account;
  private marketClass: Market;
  private publicClass: Public;
  private tradeClass: Trade;

  constructor(
    accessTokenId?: string,
    privateKey?: string,
  ) {
    this.accountClass = new Account(accessTokenId, privateKey);
    this.marketClass = new Market();
    this.publicClass = new Public();
    // this.tradeClass = new Trade(accessTokenId, privateKey);
  }

  public market() {
    return this.marketClass;
  }

  public public() {
    return this.publicClass;
  }

  public account() {
    return this.accountClass;
  }

  public trade() {
    return this.tradeClass;
  }
}
