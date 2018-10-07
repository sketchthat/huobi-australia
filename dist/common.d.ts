export declare class Common {
    private uri;
    constructor();
    request(method: string, path: string, qs?: object, body?: object): Promise<any>;
}
