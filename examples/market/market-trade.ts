import { Huobi } from '../../src/index';

const h = new Huobi();

h.market().trade('btcaud')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error('ERR: ', err);
  });
