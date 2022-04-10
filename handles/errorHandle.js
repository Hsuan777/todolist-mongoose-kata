const headers = require('../headers');
function errorHanlde(res, data){
  res.writeHead(200, headers);
  res.write(JSON.stringify({
    status: 'false',
    data: data
  }));
  res.end();
};
module.exports = errorHanlde;