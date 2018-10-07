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
class Account {
    constructor(accessTokenId, privateKey) {
        this.common = new common_1.Common();
        this.accessTokenId = accessTokenId;
        this.privateKey = privateKey;
        const apiVersion = '/v1';
        const apiGroup = '/account';
        this.apiPrefix = `${apiVersion}${apiGroup}`;
        this.requestMethod = 'GET';
    }
    accounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac(this.requestMethod, `${this.apiPrefix}/accounts`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
    accountsBalance(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = authentication_1.createHmac(this.requestMethod, `${this.apiPrefix}/accounts/${accountId}/balance`, this.accessTokenId, this.privateKey);
            return this.common.request(r.method, r.path, r.qs);
        });
    }
}
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsOERBQXVEO0FBS3ZEO0lBU0UsWUFDRSxhQUFzQixFQUN0QixVQUFtQjtRQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsVUFBVSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFWSxRQUFROztZQUNuQixNQUFNLENBQUMsR0FBRywyQkFBVSxDQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsRUFDNUIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsU0FBaUI7O1lBQzVDLE1BQU0sQ0FBQyxHQUFHLDJCQUFVLENBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxTQUFTLFVBQVUsRUFDakQsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7Q0FDRjtBQTdDRCwwQkE2Q0MifQ==