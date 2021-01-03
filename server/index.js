const {app, server} = require('./app');
const morgan = require('morgan');

app.use('/', (req,res,next)=>{
  console.log('Connect')
  next()
});

app.use(morgan('dev'));



    // Запустить сервер
    server.listen(3001, ()=>{
       console.log('Server run in 3001 port');
    });