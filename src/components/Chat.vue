<template>
    <div class='c-wrap'>   
        <div class = 'c-chat' ref = 'block'>
            <Message v-for="m in messages" :key="m.text"
                :name = "m.name"
                :text = "m.text"
                :owner = "m.id === user.id"
            />
        </div>
        <div class = 'c-form'>
            <MessForm/>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client';
import Message from './Message'
import MessForm from './MessForm'
import{mapState} from 'vuex'
export default {
    computed: mapState(["user","messages"]),
    watch:{
        messages(){
            setTimeout(()=> {
                this.$refs.block.scrollTop = this.$refs.block.scrollHeight
            }) 
        }
    },
    components: {Message,MessForm},
}
</script>
<style>
    .c-wrap{
        width:700px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
