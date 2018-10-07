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
class Market {
    constructor() {
        this.common = new common_1.Common();
        this.apiPrefix = '/market';
        this.requestMethod = 'GET';
    }
    historyKline(symbol, period, size) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
                period,
                size: size ? (size && size > 2000 ? 2000 : size) : 150,
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/history/kline`, qs);
        });
    }
    detailMerged(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/detail/merged`, qs);
        });
    }
    depth(symbol, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
                type,
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/depth`, qs);
        });
    }
    trade(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/trade`, qs);
        });
    }
    historyTrade(symbol, size) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
                size: size ? (size && size > 2000 ? 2000 : size) : 1,
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/history/trade`, qs);
        });
    }
    detail(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                symbol: symbol.toLowerCase(),
            };
            return this.common.request(this.requestMethod, `${this.apiPrefix}/detail`, qs);
        });
    }
}
exports.Market = Market;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hcmtldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBU2xDO0lBTUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVZLFlBQVksQ0FBQyxNQUFjLEVBQUUsTUFBOEIsRUFBRSxJQUFhOztZQUNyRixNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsTUFBTTtnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO2FBQ3ZELENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsTUFBYzs7WUFDdEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDN0IsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxNQUFjLEVBQUUsSUFBcUI7O1lBQ3RELE1BQU0sRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJO2FBQ0wsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDN0IsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsTUFBYyxFQUFFLElBQWE7O1lBQ3JELE1BQU0sRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JELENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsTUFBYzs7WUFDaEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDN0IsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRixDQUFDO0tBQUE7Q0FDRjtBQWhFRCx3QkFnRUMifQ==