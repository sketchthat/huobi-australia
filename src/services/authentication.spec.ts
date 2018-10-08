'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';
import * as sinon from 'sinon';

import { buildParams, createHmac } from './authentication';

import * as crypto from 'crypto';

describe('Authentication', () => {
  let cryptoStub: SinonStub;

  before(() => {
    cryptoStub = stub(crypto, 'createHmac');
  });

  beforeEach(() => {
    cryptoStub.reset();
    this.clock = sinon.useFakeTimers(new Date('2018-11-07 09:05:02'));
  });

  after(() => {
    cryptoStub.restore();
  });

  afterEach(() => {
    this.clock.restore();
  });

  it('should call createHmac', () => {
    const cryptoReturns = {
      update(update) {
        // tslint:disable-next-line: max-line-length
        const expectedUpdate = 'GET\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T09%3A05%3A02';

        assert.strictEqual(update, expectedUpdate);

        return cryptoReturns;
      },
      digest(digest) {
        assert.strictEqual(digest, 'base64');

        return Buffer.from('abc123').toString('base64');
      },
    };

    cryptoStub.returns(cryptoReturns);

    const response = createHmac('GET', '/v1/some/path', 'MyAccountTokenId', 'MyPrivateKey');

    const expectedResponse = {
      method: 'GET',
      path: '/v1/some/path',
      qs: {
        AccessKeyId: 'MyAccountTokenId',
        SignatureMethod: 'HmacSHA256',
        SignatureVersion: 2,
        Timestamp: '2018-11-07T09:05:02',
        Signature: 'YWJjMTIz',
      },
    };

    assert.deepEqual(response, expectedResponse);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call createHmac with query-string', () => {
    const cryptoReturns = {
      update(update) {
        // tslint:disable-next-line: max-line-length
        const expectedUpdate = 'GET\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T09%3A05%3A02&alpha=sort&some=query&string=word';

        assert.strictEqual(update, expectedUpdate);

        return cryptoReturns;
      },
      digest(digest) {
        assert.strictEqual(digest, 'base64');

        return Buffer.from('abc123').toString('base64');
      },
    };

    cryptoStub.returns(cryptoReturns);

    const response = createHmac(
      'GET',
      '/v1/some/path',
      'MyAccountTokenId',
      'MyPrivateKey', {
        some: 'query',
        string: 'word',
        alpha: 'sort',
      },
    );

    const expectedResponse = {
      method: 'GET',
      path: '/v1/some/path',
      qs: {
        AccessKeyId: 'MyAccountTokenId',
        alpha: 'sort',
        SignatureMethod: 'HmacSHA256',
        SignatureVersion: 2,
        Timestamp: '2018-11-07T09:05:02',
        Signature: 'YWJjMTIz',
        some: 'query',
        string: 'word',
      },
    };

    assert.deepEqual(response, expectedResponse);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call createHmac with post-data', () => {
    const cryptoReturns = {
      update(update) {
        // tslint:disable-next-line: max-line-length
        const expectedUpdate = 'POST\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T09%3A05%3A02&alpha=post&data=true';

        assert.strictEqual(update, expectedUpdate);

        return cryptoReturns;
      },
      digest(digest) {
        assert.strictEqual(digest, 'base64');

        return Buffer.from('abc123').toString('base64');
      },
    };

    cryptoStub.returns(cryptoReturns);

    const response = createHmac(
      'POST',
      '/v1/some/path',
      'MyAccountTokenId',
      'MyPrivateKey',
      null,
      { alpha: 'post', data: 'true' },
    );

    const expectedResponse = {
      method: 'POST',
      path: '/v1/some/path',
      qs: {
        AccessKeyId: 'MyAccountTokenId',
        SignatureMethod: 'HmacSHA256',
        SignatureVersion: 2,
        Timestamp: '2018-11-07T09:05:02',
        Signature: 'YWJjMTIz',
        alpha: 'post',
        data: 'true',
      },
    };

    assert.deepEqual(response, expectedResponse);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call buildParams', () => {
    const response = buildParams({
      a: 'b',
      c: 'd',
      e: ['f', 'g', 'h', 'i'],
      z: 'y',
      w: 'x',
      u: null,
    });

    const expectedResponse = {
      a: 'b',
      c: 'd',
      e: 'f,g,h,i',
      w: 'x',
      z: 'y',
    };

    assert.deepEqual(response, expectedResponse);
  });
});
