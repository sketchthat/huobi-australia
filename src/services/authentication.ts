import * as crypto from 'crypto';
import * as querystring from 'querystring';

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

export function createHmac(method: string, path: string, accessKeyId: string, privateKey: string, qs?: any, post?: any): HmacResponse {
  const d = new Date();

  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  const seconds = d.getUTCSeconds();

  const date = [
    d.getFullYear(),
    leftPadDateTime(month),
    leftPadDateTime(day),
  ];

  const time = [
    leftPadDateTime(hours),
    leftPadDateTime(minutes),
    leftPadDateTime(seconds),
  ];

  const timestamp = `${date.join('-')}T${time.join(':')}`;

  const message = [
    method,
    'api.huobi.com.au',
    path,
  ];

  const params = Object.assign(qs ? qs : {}, post ? post : {});

  const signatureParams = Object.assign({
    AccessKeyId: accessKeyId,
    SignatureMethod: 'HmacSHA256',
    SignatureVersion: 2,
    Timestamp: timestamp,
  }, params);

  const orderedSignatureParams = {};

  Object.keys(signatureParams).sort()
    .forEach(key => {
      orderedSignatureParams[key] = signatureParams[key];
    });

  const stringQs = querystring.stringify(orderedSignatureParams);
  const param = `${message.join('\n')}\n${stringQs}`;

  const signature = crypto.createHmac('sha256', new Buffer(privateKey, 'utf8'))
    .update(param)
    .digest('base64');

  const qsResult = Object.assign(orderedSignatureParams, { Signature: signature });

  return {
    method,
    path,
    qs: qsResult as any,
  };
}

export function buildParams(params: any): any {
  const returnParams = {};

  Object.keys(params)
    .forEach(key => {
      if (params[key]) {
        returnParams[key] = params[key] instanceof Array ? params[key].join(',') : params[key];
      }
    });

  return returnParams;
}

function leftPadDateTime(d: number): string {
  return (d > 9 ? '' : '0') + d;
}
