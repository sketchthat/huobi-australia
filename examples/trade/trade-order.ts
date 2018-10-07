// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { Huobi } from '../../src/index';

const h = new Huobi(keys.accessTokenId, keys.privateKey);

async function runExample() {
  const orders = await h.trade().orders('BTCAUD', ['filled']);

  if (orders.data.length > 0) {
    const order = await h.trade().order(orders.data[0].id);

    console.log(order);
  }
}

runExample();
