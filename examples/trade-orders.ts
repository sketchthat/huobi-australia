// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { Huobi } from '../src/index';

const h = new Huobi(keys.accessTokenId, keys.privateKey);

async function runExample() {
  const accounts = await h.account().accounts();

  const accountId = accounts.data[0].id;

  h
    .trade()
    .orders(
      'btcaud',
      ['filled'],
      accountId.toString(),
      ['sell-limit'],
      null,
      null,
      null,
      'prev',
      '2',
    )
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.error(err);
    });
}

runExample();
