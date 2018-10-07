import { Huobi } from '../../src/index';

const h = new Huobi();

h.public().symbols()
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error('ERR: ', err);
  });
