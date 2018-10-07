"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const authentication_1 = require("./services/authentication");
class Trade {
    constructor(accessTokenId, privateKey) {
        this.common = new common_1.Common();
        this.accessTokenId = accessTokenId;
        this.privateKey = privateKey;
        const apiVersion = '/v1';
        const apiGroup = '/order';
        this.apiPrefix = `${apiVersion}${apiGroup}`;
    }
    order(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac('GET', `${this.apiPrefix}/orders/${orderId}`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
    orderMatchResults(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac('GET', `${this.apiPrefix}/orders/${orderId}/matchresults`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
    orders(symbol, states, accountId, types, startDate, endDate, from, direct, size) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = authentication_1.buildParams({
                symbol: symbol.toLowerCase(),
                states,
                accountId,
                types,
                startDate,
                endDate,
                from,
                direct,
                size,
            });
            const r = authentication_1.createHmac('GET', `${this.apiPrefix}/orders`, this.accessTokenId, this.privateKey, qs);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
    ordersPlace(symbol, type, accountId, amount, price, source) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = authentication_1.buildParams({
                symbol: symbol.toLowerCase(),
                type,
                'account-id': accountId,
                amount,
                price,
                source,
            });
            const r = authentication_1.createHmac('POST', `${this.apiPrefix}/orders/place`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs, post);
        });
    }
    ordersSubmitCancel(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac('POST', `${this.apiPrefix}/orders/${orderId}/submitcancel`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
    ordersBatchCancel(orderIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac('POST', `${this.apiPrefix}/orders/batchcancel`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs, { 'order-ids': orderIds });
        });
    }
}
exports.Trade = Trade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyw4REFBb0U7QUFhcEU7SUFRRSxZQUNFLGFBQXNCLEVBQ3RCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDekIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxVQUFVLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVZLEtBQUssQ0FBQyxPQUFlOztZQUNoQyxNQUFNLENBQUMsR0FBRywyQkFBVSxDQUNsQixLQUFLLEVBQ0wsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLE9BQU8sRUFBRSxFQUNyQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVZLGlCQUFpQixDQUFDLE9BQWU7O1lBQzVDLE1BQU0sQ0FBQyxHQUFHLDJCQUFVLENBQ2xCLEtBQUssRUFDTCxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsT0FBTyxlQUFlLEVBQ2xELElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVB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