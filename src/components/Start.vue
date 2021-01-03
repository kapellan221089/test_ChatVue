<template >
<div class="text-center">
    <form class="form-signin form">
      <h1 class="h3 mb-3 font-weight-normal">Пожалуйста введите имя</h1>
      <input v-model="name" type="text"  class="form-control" placeholder="Имя" required="true" autofocus="">
      <br>
      <button @click="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2020-2021</p>
    </form>
</div>
</template>

<script>
  import io from 'socket.io-client';
  import{mapMutations}from 'vuex'
  export default {
    sockets: {
      connect: function() {
        console.log("socket connected");
      }
    },
    data: () => ({
      name: '',
      socket : io('localhost:3001')
    }),

    methods: {
      ...mapMutations(["setUser"]),
      submit (e) {
        e.preventDefault();
          const user = {
            name: this.name
          }
          if(user.name===''){
              this.$router.push('/').catch(()=>{});
          }else{
          this.socket.emit('userJoined', user, data =>{
            
            if(typeof data==='String'){
              console.error(data)
            }else{
              user.id = data.userID
              this.setUser(user);
              this.$router.push('/chat');
              console.log(user)
            }
          })
          }
        }
      }
  }
</script>
<style scoped>
  .form{
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

