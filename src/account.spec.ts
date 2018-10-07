'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Account } from './account';
import { Common } from './common';
import * as createHmac from './services/authentication';

describe('Account', () => {
  let account: Account;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    account = new Account('MyAccessTokenId', 'MyPrivateKey');

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

  it('should call accounts', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      account: 'accounts',
    });

    const resp: any = await account.accounts();

    const expectedMockReturn = {
      account: 'accounts',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/account/accounts',
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

  it('should call accountsBalance', async () => {
    hmacStub.returns({
      method: 'mockMethod',
      path: '/mockPath',
      qs: {
        mock: 'method',
      },
    });

    commonStub.returns({
      account: 'accounts',
    });

    const resp: any = await account.accountsBalance('112233');

    const expectedMockReturn = {
      account: 'accounts',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'GET',
        '/v1/account/accounts/112233/balance',
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
});
