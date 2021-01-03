<template>
    <input
        class="form-control"
        placeholder="Placeholder"
        outlined
        v-model="text"
        @keydown.enter="send"
    >
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
        text: "",
        socket : io('localhost:3001')
        }
    },
    methods: {
        send(){
            this.socket.emit('createMessage',{
                text: this.text,
                id: this.$store.state.user.id
            })
            this.text = ""
        }
    }
}
</script>