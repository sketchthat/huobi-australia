'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Market } from './market';

describe('Market', () => {
  let market: Market;
  let commonStub: SinonStub;

  before(() => {
    market = new Market();

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
  });

  after(() => {
    commonStub.restore();
  });

  it('should call historyKline', async () => {
    commonStub.returns({
      market: 'kline',
    });

    const resp: any = await market.historyKline('btcaud', '1day', 10);

    const expectedMockReturn = {
      market: 'kline',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/kline',
        {
          period: '1day',
          size: 10,
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call historyKline with large number out of range', async () => {
    commonStub.returns({
      market: 'kline',
    });

    const resp: any = await market.historyKline('btcaud', '1day', 5000);

    const expectedMockReturn = {
      market: 'kline',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/kline',
        {
          period: '1day',
          size: 2000,
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call partial historyKline', async () => {
    commonStub.returns({
      market: 'kline',
    });

    const resp: any = await market.historyKline('btcaud', '1day');

    const expectedMockReturn = {
      market: 'kline',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/kline',
        {
          period: '1day',
          size: 150,
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call detailMerged', async () => {
    commonStub.returns({
      market: 'merged',
    });

    const resp: any = await market.detailMerged('btcaud');

    const expectedMockReturn = {
      market: 'merged',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/detail/merged',
        {
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call depth', async () => {
    commonStub.returns({
      market: 'depth',
    });

    const resp: any = await market.depth('btcaud', 'step3');

    const expectedMockReturn = {
      market: 'depth',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/depth',
        {
          symbol: 'btcaud',
          type: 'step3',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call trade', async () => {
    commonStub.returns({
      market: 'trade',
    });

    const resp: any = await market.trade('btcaud');

    const expectedMockReturn = {
      market: 'trade',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/trade',
        {
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call historyTrade', async () => {
    commonStub.returns({
      market: 'history',
    });

    const resp: any = await market.historyTrade('btcaud', 1500);

    const expectedMockReturn = {
      market: 'history',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/trade',
        {
          symbol: 'btcaud',
          size: 1500,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call historyTrade with large number out of range', async () => {
    commonStub.returns({
      market: 'history',
    });

    const resp: any = await market.historyTrade('btcaud', 5000);

    const expectedMockReturn = {
      market: 'history',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/trade',
        {
          symbol: 'btcaud',
          size: 2000,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call partial historyTrade', async () => {
    commonStub.returns({
      market: 'history',
    });

    const resp: any = await market.historyTrade('btcaud');

    const expectedMockReturn = {
      market: 'history',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/history/trade',
        {
          symbol: 'btcaud',
          size: 1,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call partial detail', async () => {
    commonStub.returns({
      market: 'detail',
    });

    const resp: any = await market.detail('btcaud');

    const expectedMockReturn = {
      market: 'detail',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/market/detail',
        {
          symbol: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });
});
