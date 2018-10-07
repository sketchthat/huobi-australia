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
const trade_1 = require("./trade");
describe('Trade', () => {
    let trade;
    let commonStub;
    let hmacStub;
    before(() => {
        trade = new trade_1.Trade('MyAccessTokenId', 'MyPrivateKey');
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
    it('should call order', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.order('112233');
        const expectedMockReturn = {
            trade: 'order',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'GET',
                '/v1/order/orders/112233',
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
    it('should call orderMatchResults', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.orderMatchResults('112233');
        const expectedMockReturn = {
            trade: 'order',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'GET',
                '/v1/order/orders/112233/matchresults',
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
    it('should call orders', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.orders('btcaud', ['filled', 'partial-filled'], '115588', ['sell-limit', 'buy-limit'], '2018-01-26', '2018-01-30', '99999999', 'prev', '2');
        const expectedMockReturn = {
            trade: 'orders',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
    it('should call partial orders', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.orders('btcaud', ['partial-filled']);
        const expectedMockReturn = {
            trade: 'orders',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
    it('should call ordersPlace', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.ordersPlace('btcaud', 'buy-limit', '115599', '0.001', '1');
        const expectedMockReturn = {
            trade: 'ordersPlace',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'POST',
                '/v1/order/orders/place',
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
                {
                    'account-id': '115599',
                    amount: '0.001',
                    price: '1',
                    symbol: 'btcaud',
                    type: 'buy-limit',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call partial ordersPlace', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.ordersPlace('btcaud', 'buy-market', '115599', '0.5');
        const expectedMockReturn = {
            trade: 'ordersPlace',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'POST',
                '/v1/order/orders/place',
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
                {
                    'account-id': '115599',
                    amount: '0.5',
                    symbol: 'btcaud',
                    type: 'buy-market',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call ordersSubmitCancel', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.ordersSubmitCancel('112233');
        const expectedMockReturn = {
            trade: 'ordersSubmitCancel',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'POST',
                '/v1/order/orders/112233/submitcancel',
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
    it('should call ordersBatchCancel', () => __awaiter(this, void 0, void 0, function* () {
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
        const resp = yield trade.ordersBatchCancel(['112233', '223344', '556677']);
        const expectedMockReturn = {
            trade: 'ordersBatchCancel',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'POST',
                '/v1/order/orders/batchcancel',
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
                {
                    'order-ids': [
                        '112233',
                        '223344',
                        '556677',
                    ],
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFkZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMscUNBQWtDO0FBQ2xDLHdEQUF3RDtBQUN4RCxtQ0FBZ0M7QUFFaEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDckIsSUFBSSxLQUFZLENBQUM7SUFDakIsSUFBSSxVQUFxQixDQUFDO0lBQzFCLElBQUksUUFBbUIsQ0FBQztJQUV4QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXJELFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxRQUFRLEdBQUcsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsV0FBVztZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUMsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sZ0JBQWdCLEdBQUc7WUFDdkI7Z0JBQ0UsS0FBSztnQkFDTCx5QkFBeUI7Z0JBQ3pCLGlCQUFpQjtnQkFDakIsY0FBYzthQUNmO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsWUFBWTtnQkFDWixXQUFXO2dCQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFLEdBQVMsRUFBRTtRQUM3QyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sZ0JBQWdCLEdBQUc7WUFDdkI7Z0JBQ0UsS0FBSztnQkFDTCxzQ0FBc0M7Z0JBQ3RDLGlCQUFpQjtnQkFDakIsY0FBYzthQUNmO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsWUFBWTtnQkFDWixXQUFXO2dCQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQVMsRUFBRTtRQUNsQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FDbEMsUUFBUSxFQUNSLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEVBQzVCLFFBQVEsRUFDUixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsRUFDM0IsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsQ0FDSixDQUFDO1FBRUYsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixLQUFLLEVBQUUsUUFBUTtTQUNoQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLEtBQUs7Z0JBQ0wsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2Q7b0JBQ0UsU0FBUyxFQUFFLFFBQVE7b0JBQ25CLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLE1BQU0sRUFBRSx1QkFBdUI7b0JBQy9CLE1BQU0sRUFBRSxRQUFRO29CQUNoQixLQUFLLEVBQUUsc0JBQXNCO2lCQUM5QjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsWUFBWTtnQkFDWixXQUFXO2dCQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUMxQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FDbEMsUUFBUSxFQUNSLENBQUMsZ0JBQWdCLENBQUMsQ0FDbkIsQ0FBQztRQUVGLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxnQkFBZ0IsR0FBRztZQUN2QjtnQkFDRSxLQUFLO2dCQUNMLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkO29CQUNFLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsWUFBWTtnQkFDWixXQUFXO2dCQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtRQUN2QyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLFdBQVc7WUFDakIsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxhQUFhO1NBQ3JCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FDdkMsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEVBQ1IsT0FBTyxFQUNQLEdBQUcsQ0FDSixDQUFDO1FBRUYsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixLQUFLLEVBQUUsYUFBYTtTQUNyQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLE1BQU07Z0JBQ04sd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2xCO29CQUNFLFlBQVksRUFBRSxRQUFRO29CQUN0QixNQUFNLEVBQUUsT0FBTztvQkFDZixLQUFLLEVBQUUsR0FBRztvQkFDVixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsSUFBSSxFQUFFLFdBQVc7aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsYUFBYTtTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQ3ZDLFFBQVEsRUFDUixZQUFZLEVBQ1osUUFBUSxFQUNSLEtBQUssQ0FDTixDQUFDO1FBRUYsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixLQUFLLEVBQUUsYUFBYTtTQUNyQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLE1BQU07Z0JBQ04sd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2xCO29CQUNFLFlBQVksRUFBRSxRQUFRO29CQUN0QixNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsSUFBSSxFQUFFLFlBQVk7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFTLEVBQUU7UUFDOUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsb0JBQW9CO1NBQzVCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLE1BQU07Z0JBQ04sc0NBQXNDO2dCQUN0QyxpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7YUFDbkI7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxHQUFTLEVBQUU7UUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsbUJBQW1CO1NBQzNCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRWhGLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsS0FBSyxFQUFFLG1CQUFtQjtTQUMzQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLE1BQU07Z0JBQ04sOEJBQThCO2dCQUM5QixpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFDZjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVsRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2xCO29CQUNFLFdBQVcsRUFBRTt3QkFDWCxRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsUUFBUTtxQkFDVDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9