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
const market_1 = require("./market");
describe('Market', () => {
    let market;
    let commonStub;
    before(() => {
        market = new market_1.Market();
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
    });
    after(() => {
        commonStub.restore();
    });
    it('should call historyKline', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'kline',
        });
        const resp = yield market.historyKline('btcaud', '1day', 10);
        const expectedMockReturn = {
            market: 'kline',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call historyKline with large number out of range', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'kline',
        });
        const resp = yield market.historyKline('btcaud', '1day', 5000);
        const expectedMockReturn = {
            market: 'kline',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call partial historyKline', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'kline',
        });
        const resp = yield market.historyKline('btcaud', '1day');
        const expectedMockReturn = {
            market: 'kline',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call detailMerged', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'merged',
        });
        const resp = yield market.detailMerged('btcaud');
        const expectedMockReturn = {
            market: 'merged',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/market/detail/merged',
                {
                    symbol: 'btcaud',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call depth', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'depth',
        });
        const resp = yield market.depth('btcaud', 'step3');
        const expectedMockReturn = {
            market: 'depth',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call trade', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'trade',
        });
        const resp = yield market.trade('btcaud');
        const expectedMockReturn = {
            market: 'trade',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/market/trade',
                {
                    symbol: 'btcaud',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call historyTrade', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'history',
        });
        const resp = yield market.historyTrade('btcaud', 1500);
        const expectedMockReturn = {
            market: 'history',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call historyTrade with large number out of range', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'history',
        });
        const resp = yield market.historyTrade('btcaud', 5000);
        const expectedMockReturn = {
            market: 'history',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call partial historyTrade', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'history',
        });
        const resp = yield market.historyTrade('btcaud');
        const expectedMockReturn = {
            market: 'history',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call partial detail', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            market: 'detail',
        });
        const resp = yield market.detail('btcaud');
        const expectedMockReturn = {
            market: 'detail',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/market/detail',
                {
                    symbol: 'btcaud',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFya2V0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFDbEMscUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksVUFBcUIsQ0FBQztJQUUxQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFdEIsVUFBVSxHQUFHLFlBQUksQ0FBQyxlQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO1FBQ3hDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEUsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsdUJBQXVCO2dCQUN2QjtvQkFDRSxNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUUsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlEQUF5RCxFQUFFLEdBQVMsRUFBRTtRQUN2RSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBFLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLHVCQUF1QjtnQkFDdkI7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFDaEQsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLHVCQUF1QjtnQkFDdkI7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7UUFDeEMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsdUJBQXVCO2dCQUN2QjtvQkFDRSxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVMsRUFBRTtRQUNqQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsZUFBZTtnQkFDZjtvQkFDRSxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsSUFBSSxFQUFFLE9BQU87aUJBQ2Q7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVMsRUFBRTtRQUNqQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxlQUFlO2dCQUNmO29CQUNFLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO1FBQ3hDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCx1QkFBdUI7Z0JBQ3ZCO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUUsR0FBUyxFQUFFO1FBQ3ZFLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCx1QkFBdUI7Z0JBQ3ZCO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWDthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1FBQ2hELFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLHVCQUF1QjtnQkFDdkI7b0JBQ0UsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLElBQUksRUFBRSxDQUFDO2lCQUNSO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFDMUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsZ0JBQWdCO2dCQUNoQjtvQkFDRSxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==