<template>
    <div>
        <div v-if="name==='admin'" class="system">
            <p class="text-xs-center">{{text}}</p>
            <hr>
        </div>
        <div v-else class="wrap">
            <div class='message' :class="{owner}">
                <small><strong>{{name}}</strong></small>
                <p>{{text}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        text: String,
        owner:{
            type: Boolean,
            default: false
        }
    }
    
}
</script>
    
<style>
</style>