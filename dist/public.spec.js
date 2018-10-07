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
const public_1 = require("./public");
describe('Public', () => {
    let publicClass;
    let commonStub;
    before(() => {
        publicClass = new public_1.Public();
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
    });
    after(() => {
        commonStub.restore();
    });
    it('should call symbols', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            public: 'symbols',
        });
        const resp = yield publicClass.symbols();
        const expectedMockReturn = {
            public: 'symbols',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/v1/common/symbols',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call currencys', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            public: 'currencys',
        });
        const resp = yield publicClass.currencys();
        const expectedMockReturn = {
            public: 'currencys',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/v1/common/currencys',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
    it('should call timestamp', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            public: 'timestamp',
        });
        const resp = yield publicClass.timestamp();
        const expectedMockReturn = {
            public: 'timestamp',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                'GET',
                '/v1/common/timestamp',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHVibGljLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFDbEMscUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFdBQVcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRTNCLFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQVMsRUFBRTtRQUNuQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTlDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLFNBQVM7U0FDbEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLG9CQUFvQjthQUNyQjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtRQUNyQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxXQUFXO1NBQ3BCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtRQUNyQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxXQUFXO1NBQ3BCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==