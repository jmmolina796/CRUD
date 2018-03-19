const Connection = require('../connection');

module.exports.response = (res, tran = false, prom, ...values) => {
  const cn = new Connection(tran);
  // console.log('CREATE_CONNECTION CREATE_CONNECTION CREATE_CONNECTION CREATE_CONNECTION');
  prom(cn, ...values)
    .then(result => success(res, cn, result))
    .catch(error => fail(res, cn, error))

};

const success = (res, cn, result = []) => {
  // console.log('SUCESS SUCESS SUCESS SUCESS SUCESS SUCESS SUCESS SUCESS');
  cn.close();
  res.json({ isError: false, data: result });
};

const fail = (res, cn, error) => {
  // console.log('ERROR ERROR ERROR ERROR ERROR ERROR');
  cn.close();
  res.json({ isError: true, data: [] });
};
