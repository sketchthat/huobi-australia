[![Build Status](https://travis-ci.org/sketchthat/huobi-australia.svg?branch=master)](https://travis-ci.org/sketchthat/huobi-australia) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/huobi-australia/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/huobi-australia?branch=master)
![Dependencies](https://david-dm.org/sketchthat/huobi-australia.svg)

# Huobi Australia Wrapper

Typescript / Node wrapper for the Market, Public, Account and Trade APIs offered by [Huobi Australia](https://huobi.com.au)

## Setup

Install the dependancies with npm / yarn.

```
npm install huobi-australia --save
```

### API Key

In order to utilise `Account` and `Trade` features you'll need to generate an [API Key](https://www.huobi.com.au/user/api) with Huobi.

## Usage

The API wrapper exposes several classes, `Public`, `Market`, `Trade` and `Account`. Each class has methods for each API Endpoint as specified in the [Huobi API Documentation](https://huobiaustralia.readme.io/docs/rest-api-reference).

### Exposed Functions

- [`Public`](https://github.com/sketchthat/huobi-australia/wiki/Public-Functions) methods are within [`public.ts`](https://github.com/sketchthat/huobi-australia/blob/master/src/public.ts) - No authentication required.
- [`Market`](https://github.com/sketchthat/huobi-australia/wiki/Market-Functions) methods are within [`market.ts`](https://github.com/sketchthat/huobi-australia/blob/master/src/market.ts) - No authentication required.
- [`Trade`](https://github.com/sketchthat/huobi-australia/wiki/Trade-Functions) methods are within [`trade.ts`](https://github.com/sketchthat/huobi-australia/blob/master/src/trade.ts) - Authentication required.
- [`Account`](https://github.com/sketchthat/huobi-australia/wiki/Account-Functions) methods are within [`account.ts`](https://github.com/sketchthat/huobi-australia/blob/master/src/account.ts) - Authentication required.

### Example

Examples for usage of each function can be found within the [examples folder]
(https://github.com/sketchthat/huobi-australia/tree/master/examples).

```typescript
import { Huobi } from 'huobi-australia';

// Authenticated Requests
const h = new Huobi('MyAccessTokenId', 'MyPrivateKey');

h.account().accounts()
  .then(resp => {
    console.log(resp);
  });

// Unauthenticated Requests
const unauthH = new Huobi();

unauthH.market().trade('btcaud')
  .then(resp => {
    console.log(resp);
  });
```


