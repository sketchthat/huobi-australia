import { Huobi } from '../src/index';

const h = new Huobi();

// EN [currencies]
h.public().currencys()
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error('ERR: ', err);
  });
