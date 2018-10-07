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
class Public {
    constructor() {
        this.common = new common_1.Common();
        const apiVersion = '/v1';
        const apiGroup = '/common';
        this.apiPrefix = `${apiVersion}${apiGroup}`;
        this.requestMethod = 'GET';
    }
    symbols() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(this.requestMethod, `${this.apiPrefix}/symbols`);
        });
    }
    currencys() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(this.requestMethod, `${this.apiPrefix}/currencys`);
        });
    }
    timestamp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(this.requestMethod, `${this.apiPrefix}/timestamp`);
        });
    }
}
exports.Public = Public;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3B1YmxpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBTWxDO0lBTUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsVUFBVSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFWSxPQUFPOztZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDO0tBQUE7SUFFWSxTQUFTOztZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxZQUFZLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFWSxTQUFTOztZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxZQUFZLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7Q0FDRjtBQTFCRCx3QkEwQkMifQ==