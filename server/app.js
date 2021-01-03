const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();

const m = (name,text,id)=>({name,text,id});

io.on('connection', socket => {
  socket.emit('success', {message: 'Server Accecpting Connections'});
  socket.on('userJoined', (data, cb) =>{
    if(!data.name===null){
      return cb('Not data')
    }
    users.remove(socket.id)
    users.add({
      id: socket.id,
      name:data.name,
    }
    );
    console.log(socket.id)
    cb({userID:socket.id});

    socket.broadcast
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`));
  });

  socket.on('userLeft', (id,cb)=>{
    const user = users.remove(id);
    if(user){
      io.emit('newMessage', m('admin', `Пользователь ${user.name} вышел.`))
    };
    cb()
  });

  socket.on('disconnect', ()=>{
    const user = users.remove(socket.id)
    if(user){
      io.emit('updateUsers')
      io.emit('newMessage', m('admin', `Пользователь ${user.name} вышел.`))
    };
  });
  
  socket.on('createMessage', data => {
    if(!data.text){
      return cb('Текст не может быть пустым')
    };

    const user = users.get(data.id)
    if(user){
      io.emit('newMessage', m(user.name, data.text, data.id))
    };
  });
});

module.exports = {
  app,
  server
};
