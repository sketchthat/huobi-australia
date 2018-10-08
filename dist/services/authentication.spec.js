'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const sinon = require("sinon");
const authentication_1 = require("./authentication");
const crypto = require("crypto");
describe('Authentication', () => {
    let cryptoStub;
    before(() => {
        cryptoStub = sinon_1.stub(crypto, 'createHmac');
    });
    beforeEach(() => {
        cryptoStub.reset();
        const utcDate = new Date(Date.UTC(2018, 10, 7, 9, 5, 2));
        this.clock = sinon.useFakeTimers(utcDate);
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
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return 'YWJjMTIz';
            },
        };
        cryptoStub.returns(cryptoReturns);
        const response = authentication_1.createHmac('GET', '/v1/some/path', 'MyAccountTokenId', 'MyPrivateKey');
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
        chai_1.assert.deepEqual(response, expectedResponse);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    });
    it('should call createHmac with query-string', () => {
        const cryptoReturns = {
            update(update) {
                // tslint:disable-next-line: max-line-length
                const expectedUpdate = 'GET\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T09%3A05%3A02&alpha=sort&some=query&string=word';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return 'YWJjMTIz';
            },
        };
        cryptoStub.returns(cryptoReturns);
        const response = authentication_1.createHmac('GET', '/v1/some/path', 'MyAccountTokenId', 'MyPrivateKey', {
            some: 'query',
            string: 'word',
            alpha: 'sort',
        });
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
        chai_1.assert.deepEqual(response, expectedResponse);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    });
    it('should call createHmac with post-data', () => {
        const cryptoReturns = {
            update(update) {
                // tslint:disable-next-line: max-line-length
                const expectedUpdate = 'POST\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T09%3A05%3A02&alpha=post&data=true';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return 'YWJjMTIz';
            },
        };
        cryptoStub.returns(cryptoReturns);
        const response = authentication_1.createHmac('POST', '/v1/some/path', 'MyAccountTokenId', 'MyPrivateKey', null, { alpha: 'post', data: 'true' });
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
        chai_1.assert.deepEqual(response, expectedResponse);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    });
    it('should call buildParams', () => {
        const response = authentication_1.buildParams({
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
        chai_1.assert.deepEqual(response, expectedResponse);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQixxREFBMkQ7QUFFM0QsaUNBQWlDO0FBRWpDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsSUFBSSxVQUFxQixDQUFDO0lBRTFCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixVQUFVLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtRQUNoQyxNQUFNLGFBQWEsR0FBRztZQUNwQixNQUFNLENBQUMsTUFBTTtnQkFDWCw0Q0FBNEM7Z0JBQzVD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