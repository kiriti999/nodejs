var app = require('./server/server');

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}!`);
});
