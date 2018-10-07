import { Huobi } from '../../src/index';

const h = new Huobi();

h.market().depth('btcaud', 'step3')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error('ERR: ', err);
  });
