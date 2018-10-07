"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const market_1 = require("./market");
const public_1 = require("./public");
const trade_1 = require("./trade");
class Huobi {
    constructor(accessTokenId, privateKey) {
        this.accountClass = new account_1.Account(accessTokenId, privateKey);
        this.marketClass = new market_1.Market();
        this.publicClass = new public_1.Public();
        this.tradeClass = new trade_1.Trade(accessTokenId, privateKey);
    }
    market() {
        return this.marketClass;
    }
    public() {
        return this.publicClass;
    }
    account() {
        return this.accountClass;
    }
    trade() {
        return this.tradeClass;
    }
}
exports.Huobi = Huobi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFDcEMscUNBQWtDO0FBQ2xDLHFDQUFrQztBQUNsQyxtQ0FBZ0M7QUFFaEM7SUFNRSxZQUNFLGFBQXNCLEVBQ3RCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQS9CRCxzQkErQkMifQ==