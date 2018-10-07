'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import * as createHmac from './services/authentication';
import { Trade } from './trade';

describe('Trade', () => {
  let trade: Trade;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    trade = new Trade('MyAccessTokenId', 'MyPrivateKey');

    commonStub = stub(Common.prototype, 'request');
    hmacStub = stub(createHmac, 'createHmac');
  });

  beforeEach(() => {
    commonStub.reset();
    hmacStub.reset();
  });

  after(() => {
    commonStub.restore();
    hmacStub.restore();
  });

  it('should call order', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'order',
    });

    const resp: any = await trade.order('112233');

    const expectedMockReturn = {
      trade: 'order',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/order/orders/112233',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call orderMatchResults', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'order',
    });

    const resp: any = await trade.orderMatchResults('112233');

    const expectedMockReturn = {
      trade: 'order',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/order/orders/112233/matchresults',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call orders', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'orders',
    });

    const resp: any = await trade.orders(
      'btcaud',
      ['filled', 'partial-filled'],
      '115588',
      ['sell-limit', 'buy-limit'],
      '2018-01-26',
      '2018-01-30',
      '99999999',
      'prev',
      '2',
    );

    const expectedMockReturn = {
      trade: 'orders',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/order/orders',
        'MyAccessTokenId',
        'MyPrivateKey',
        {
          accountId: '115588',
          direct: 'prev',
          endDate: '2018-01-30',
          from: '99999999',
          size: '2',
          startDate: '2018-01-26',
          states: 'filled,partial-filled',
          symbol: 'btcaud',
          types: 'sell-limit,buy-limit',
        },
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call partial orders', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'orders',
    });

    const resp: any = await trade.orders(
      'btcaud',
      ['partial-filled'],
    );

    const expectedMockReturn = {
      trade: 'orders',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/order/orders',
        'MyAccessTokenId',
        'MyPrivateKey',
        {
          states: 'partial-filled',
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call ordersPlace', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'ordersPlace',
    });

    const resp: any = await trade.ordersPlace(
      'btcaud',
      'buy-limit',
      '115599',
      '0.001',
      '1',
    );

    const expectedMockReturn = {
      trade: 'ordersPlace',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'POST',
        '/v1/order/orders/place',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
        {
          'account-id': '115599',
          amount: '0.001',
          price: '1',
          symbol: 'btcaud',
          type: 'buy-limit',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call partial ordersPlace', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'ordersPlace',
    });

    const resp: any = await trade.ordersPlace(
      'btcaud',
      'buy-market',
      '115599',
      '0.5',
    );

    const expectedMockReturn = {
      trade: 'ordersPlace',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'POST',
        '/v1/order/orders/place',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
        {
          'account-id': '115599',
          amount: '0.5',
          symbol: 'btcaud',
          type: 'buy-market',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call ordersSubmitCancel', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'ordersSubmitCancel',
    });

    const resp: any = await trade.ordersSubmitCancel('112233');

    const expectedMockReturn = {
      trade: 'ordersSubmitCancel',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'POST',
        '/v1/order/orders/112233/submitcancel',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call ordersBatchCancel', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      trade: 'ordersBatchCancel',
    });

    const resp: any = await trade.ordersBatchCancel(['112233', '223344', '556677']);

    const expectedMockReturn = {
      trade: 'ordersBatchCancel',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'POST',
        '/v1/order/orders/batchcancel',
        'MyAccessTokenId',
        'MyPrivateKey',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);

    const expectedCommonArgs = [
      [
        'mockMethod',
        '/mockPath',
        { mock: 'method' },
        {
          'order-ids': [
            '112233',
            '223344',
            '556677',
          ],
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });
});
