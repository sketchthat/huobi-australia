import { Huobi } from '../../src/index';

const h = new Huobi();

h.market().detail('btcaud')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err);
  });
