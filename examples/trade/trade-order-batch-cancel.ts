// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { Huobi } from '../../src/index';

const h = new Huobi(keys.accessTokenId, keys.privateKey);

async function runExample() {
  h
    .trade()
    .orders('btcaud', ['submitted'])
    .then(resp => {
      if (resp.data.length > 0) {
        const orderIds = resp.data.map(order => order.id.toString());

        return h.trade().ordersBatchCancel(orderIds);
      }
    })
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.error(err);
    });
}

runExample();
