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
const rp = require("request-promise");
class Common {
    constructor() {
        const domain = 'api.huobi.com.au';
        this.uri = `https://${domain}`;
    }
    request(method, path, qs, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
                uri: `${this.uri}${path}`,
                json: true,
                method: method,
                qs: qs,
                body: body,
            };
            return rp(opts);
        });
    }
}
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRXRDO0lBR0U7UUFDRSxNQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVcsRUFBRSxJQUFhOztZQUMzRSxNQUFNLElBQUksR0FBRztnQkFDWCxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtnQkFDekIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO1lBRUYsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztLQUFBO0NBQ0Y7QUFuQkQsd0JBbUJDIn0=