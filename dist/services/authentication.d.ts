interface HmacResponse {
    method: string;
    path: string;
    qs: {
        AccessKeyId: string;
        SignatureMethod: string;
        SignatureVersion: number;
        Timestamp: string;
        Signature: string;
    };
}
export declare function createHmac(method: string, path: string, accessKeyId: string, privateKey: string, qs?: any, post?: any): HmacResponse;
export declare function buildParams(params: any): any;
export {};
