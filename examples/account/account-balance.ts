// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { Huobi } from '../../src/index';

const h = new Huobi(keys.accessTokenId, keys.privateKey);

h.account().accounts()
  .then(resp => {
    const accounts = resp.data;

    accounts.forEach(async account => {
      const balanceResp = await h.account().accountsBalance(account.id);

      const balances = balanceResp.data.list;

      balances.forEach(balance => {
        console.log(balance);
      });
    });
  })
  .catch(err => {
    console.error(err);
  });
