import { Huobi } from '../../src/index';

const h = new Huobi();

h.market().historyTrade('btcaud', 5)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error('ERR: ', err);
  });
