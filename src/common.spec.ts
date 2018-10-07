'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';

import * as rp from 'request-promise';

describe('Common', () => {
  let rpStub: SinonStub;
  let common: Common;

  before(() => {
    common = new Common();
    rpStub = stub(rp, 'Request');
  });

  beforeEach(() => {
    rpStub.reset();
  });

  after(() => {
    rpStub.restore();
  });

  it('should call GET request', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('GET', '/v1/mock/request');

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
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

  it('should call GET request with query-string', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('GET', '/v1/mock/request', { sample: 'qs' });

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
          json: true,
          method: 'GET',
          qs: {
            sample: 'qs',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call POST request', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('POST', '/v1/mock/request');

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
          json: true,
          method: 'POST',
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call POST request with query-string', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('POST', '/v1/mock/request', { sample: 'qs' });

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
          json: true,
          method: 'POST',
          qs: {
            sample: 'qs',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call POST request with query-string & post-body', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('POST', '/v1/mock/request', { sample: 'qs' }, { sample: 'body' });

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
          json: true,
          method: 'POST',
          qs: {
            sample: 'qs',
          },
          body: {
            sample: 'body',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call POST request with post-body', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request('POST', '/v1/mock/request', null, { sample: 'body' });

    const expectedArgs = [
      [
        {
          uri: 'https://api.huobi.com.au/v1/mock/request',
          json: true,
          method: 'POST',
          qs: null,
          body: {
            sample: 'body',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
