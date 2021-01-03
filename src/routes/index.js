import Chat from '@/components/Chat'
import Start from '@/components/Start'
import store from '../store'
import router from '../router'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: (to, from, next) => {
      console.log(store.state.user.name)
      if(!store.state.user.name){
        router.push('/?message=noUser').catch(()=>{})
      }else next()
    }
  }
]
export default routes