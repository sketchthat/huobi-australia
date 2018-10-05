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

export function createHmac(method: string, path: string, accessKeyId: string, privateKey: string): HmacResponse {
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

  // TODO - Sort by Alphabetical when additional queries exist
  const signatureParams = {
    AccessKeyId: accessKeyId,
    SignatureMethod: 'HmacSHA256',
    SignatureVersion: 2,
    Timestamp: timestamp,
  };

  const qs = querystring.stringify(signatureParams);
  const param = `${message.join('\n')}\n${qs}`;

  const signature = crypto.createHmac('sha256', new Buffer(privateKey, 'utf8'))
    .update(param)
    .digest('base64');

  const qsResult = Object.assign(signatureParams, { Signature: signature });

  return {
    method,
    path,
    qs: qsResult,
  };
}

function leftPadDateTime(d: number): string {
  return (d > 9 ? '' : '0') + d;
}
