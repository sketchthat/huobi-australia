'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const common_1 = require("./common");
const createHmac = require("./services/authentication");
const account_1 = require("./account");
describe('Account', () => {
    let account;
    let commonStub;
    let hmacStub;
    before(() => {
        account = new account_1.Account('MyAccessTokenId', 'MyPrivateKey');
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
        hmacStub = sinon_1.stub(createHmac, 'createHmac');
    });
    beforeEach(() => {
        commonStub.reset();
        hmacStub.reset();
    });
    after(() => {
        commonStub.restore();
        hmacStub.restore();
    });
    it('should call accounts', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield account.accounts();
        const expectedMockReturn = {
            account: 'accounts',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'GET',
                '/v1/account/accounts',
                'MyAccessTokenId',
                'MyPrivateKey',
            ],
        ];
        chai_1.assert.deepEqual(hmacStub.args, expectedHmacArgs);
        const expectedCommonArgs = [
            [
                'mockMethod',
                '/mockPath',
                { mock: 'method' },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call accountsBalance', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield account.accountsBalance('112233');
        const expectedMockReturn = {
            account: 'accounts',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'GET',
                '/v1/account/accounts/112233/balance',
                'MyAccessTokenId',
                'MyPrivateKey',
            ],
        ];
        chai_1.assert.deepEqual(hmacStub.args, expectedHmacArgs);
        const expectedCommonArgs = [
            [
                'mockMethod',
                '/mockPath',
                { mock: 'method' },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FjY291bnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUFrQztBQUNsQyx3REFBd0Q7QUFDeEQsdUNBQW9DO0FBRXBDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLElBQUksT0FBZ0IsQ0FBQztJQUNyQixJQUFJLFVBQXFCLENBQUM7SUFDMUIsSUFBSSxRQUFtQixDQUFDO0lBRXhCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXpELFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxRQUFRLEdBQUcsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsV0FBVztZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLEtBQUs7Z0JBQ0wsc0JBQXNCO2dCQUN0QixpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7YUFDbkI7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLEtBQUs7Z0JBQ0wscUNBQXFDO2dCQUNyQyxpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7YUFDbkI7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=