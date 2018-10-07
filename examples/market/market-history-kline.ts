import { Huobi } from '../../src/index';

const h = new Huobi();

h.market().historyKline('btcaud', '1day', 2)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err);
  });
