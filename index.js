const app = require('./app')

app.listen(app.get('port'),()=>{
  console.log('The server is listening on the port:'+app.get('port') );
})
