'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Huobi } from './index';
import * as createHmac from './services/authentication';

import * as rp from 'request-promise';

describe('Index', () => {
  let rpStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    rpStub = stub(rp, 'Request');
    hmacStub = stub(createHmac, 'createHmac');
  });

  beforeEach(() => {
    rpStub.reset();
    hmacStub.reset();
  });

  after(() => {
    rpStub.restore();
    hmacStub.restore();
  });

  it('should call account/accounts', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/accountPath',
      qs: {
        mock: 'method',
      },
    });

    rpStub.resolves({ response: true });

    const huobi = new Huobi('MyAccessTokenId', 'MyPrivateKey');

    const resp: any = await huobi.account().accounts();

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/accountPath',
          json: true,
          method: 'mockMethod',
          qs: {
            mock: 'method',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call trade/order', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/tradePath',
      qs: {
        mock: 'method',
      },
    });

    rpStub.resolves({ response: true });

    const huobi = new Huobi('MyAccessTokenId', 'MyPrivateKey');

    const resp: any = await huobi.trade().order('112233');

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/tradePath',
          json: true,
          method: 'mockMethod',
          qs: {
            mock: 'method',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call market/trade', async () => {
    rpStub.resolves({ response: true });

    const huobi = new Huobi();

    const resp: any = await huobi.market().trade('btcaud');

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/market/trade',
          json: true,
          method: 'GET',
          qs: {
            symbol: 'btcaud',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call public/currencys', async () => {
    rpStub.resolves({ response: true });

    const huobi = new Huobi();

    const resp: any = await huobi.public().currencys();

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/common/currencys',
          json: true,
          method: 'GET',
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
