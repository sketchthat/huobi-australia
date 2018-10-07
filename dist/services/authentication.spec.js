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
                const expectedUpdate = 'GET\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T08%3A05%3A02';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return Buffer.from('abc123').toString('base64');
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
                Timestamp: '2018-11-07T08:05:02',
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
                const expectedUpdate = 'GET\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T08%3A05%3A02&alpha=sort&some=query&string=word';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return Buffer.from('abc123').toString('base64');
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
                Timestamp: '2018-11-07T08:05:02',
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
                const expectedUpdate = 'POST\napi.huobi.com.au\n/v1/some/path\nAccessKeyId=MyAccountTokenId&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2018-11-07T08%3A05%3A02&alpha=post&data=true';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return Buffer.from('abc123').toString('base64');
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
                Timestamp: '2018-11-07T08:05:02',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQixxREFBMkQ7QUFFM0QsaUNBQWlDO0FBRWpDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsSUFBSSxVQUFxQixDQUFDO0lBRTFCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixVQUFVLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7UUFDaEMsTUFBTSxhQUFhLEdBQUc7WUFDcEIsTUFBTSxDQUFDLE1BQU07Z0JBQ1gsNENBQTRDO2dCQUM1QyxNQUFNLGNBQWMsR0FBRyxvSkFBb0osQ0FBQztnQkFFNUssYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRTNDLE9BQU8sYUFBYSxDQUFDO1lB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