'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Public } from './public';

describe('Public', () => {
  let publicClass: Public;
  let commonStub: SinonStub;

  before(() => {
    publicClass = new Public();

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
    commonStub.callsFake(
      async () => {
      return { response: true };
    });
  });

  after(() => {
    commonStub.restore();
  });

  it('should call symbols', async () => {
    commonStub.returns({
      public: 'symbols',
    });

    const resp: any = await publicClass.symbols();

    const expectedMockReturn = {
      public: 'symbols',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/v1/common/symbols',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call currencys', async () => {
    commonStub.returns({
      public: 'currencys',
    });

    const resp: any = await publicClass.currencys();

    const expectedMockReturn = {
      public: 'currencys',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/v1/common/currencys',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });

  it('should call timestamp', async () => {
    commonStub.returns({
      public: 'timestamp',
    });

    const resp: any = await publicClass.timestamp();

    const expectedMockReturn = {
      public: 'timestamp',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        'GET',
        '/v1/common/timestamp',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
  });
});
